/* components/RestaurantList/index.js */
import React, {useContext, Fragment, useEffect, useState, createContext} from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Stopwatch from "../StopWatch";

export const GetWorkout =(exerciseList)=>{
//  const [loadList, setLoadList] = useState();
  // useEffect(() => {
  //   console.log('poop',exercises )
  //   // setLoadList(exercises)

  // })
 const stopwatch =()=>{
  // setLoadList(exerciseList)
  return <Stopwatch exercises={exerciseList} />
  }
  return (
    <Fragment>
      {
        <>
        {stopwatch()}
      <div>sdfdsfdsfds sdff ds</div>
      </>
      }
          

    </Fragment>
  )
}
// const query = gql`
// {
//   exercises {
//     uid
//     title
//     description
//     image {
//       url
//     }
//   }
// }
// `;

// export default graphql(query, {
//     props: ({ data }) => ({
//       data
//     })
//   })(GetWorkout);