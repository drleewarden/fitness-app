// /* /pages/signin.js */ 
// import React from "react";
// import Stopwatch from "../components/StopWatch"
// import WorkoutList from "../components/workouts"
// import Router from "next/router";
// import GetWorkout from "../components/workouts/workout_list"
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText
// } from "reactstrap";
// import Cookies from "js-cookie";

// class Workouts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: "",
//       data: {
//         email: "",
//         password: ""
//       },
//       loading: false,
//       error: ""
//     };
    
//   }
  
//   render() {
    
//     return (
//       <Container>
//         <GetWorkout />
//         {/* <WorkoutList search={this.state.query} /> */}
//         <style jsx>
//           {`
//             .paper {
//               border: 1px solid lightgray;
//               box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//                 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//                 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
//               height: 440px;
//               border-radius: 6px;
//               margin-top: 90px;
//             }
//             .notification {
//               color: #ab003c;
//             }
//             .header {
//               width: 100%;
//               height: 120px;
//               background-color: #2196f3;
//               margin-bottom: 30px;
//               border-radius-top: 6px;
//             }
//             .wrapper {
//               padding: 10px 30px 20px 30px !important;
//             }
//             a {
//               color: blue !important;
//             }
//             img {
//               margin: 15px 30px 10px 50px;
//             }
//           `}
//         </style>
//       </Container>
//     );
//   }
// }
// export default Workouts;

/* /pages/restaurants.js */

import gql from "graphql-tag";
import { withRouter } from "next/router";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { withContext } from "../components/Context/AppProvider";
import {GetWorkout} from "../components/workouts/workout_list"

import {
  Container
} from "reactstrap";
import Cart from "../components/Cart/Cart";
import defaultPage from "../hocs/defaultPage";

class Workouts extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    this.props.context.addItem(item);
  }
  render() {
    const {
      data: { loading, error, exercises },
      router,
      context,
      isAuthenticated
    } = this.props;
    if (error) return "Error Loading Dishes";
console.log('ss',this.props)
console.log('exc',exercises)

    if (exercises) {
      return (
       <>
       <Container>
         <GetWorkout exerciseList={exercises} />
      </Container>
        </>
      );
    }
    return <h1>Loading</h1>;
  }
}

const GET_EXERCISES_DISHES =  gql`
{
  exercises {
    uid
    title
    description
    image {
      url
    }
  }
}
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

export default compose(
  withRouter,
  defaultPage,
  withContext,
  graphql(GET_EXERCISES_DISHES, {
    props: ({ data }) => ({ data })
  })
)(Workouts);