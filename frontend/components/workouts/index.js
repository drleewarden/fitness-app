/* components/RestaurantList/index.js */
import gql from "graphql-tag";
import Link from "next/link";
import {Exercise} from "./card";
import { graphql } from "react-apollo";


const WorkoutList = (
  { data: { exercises, error } }
) => {
  console.log('workouts',exercises)
 
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (exercises && exercises.length) {
    //searchQuery
    const searchQuery = exercises.filter(query =>
      query.title
    );
    if (searchQuery.length != 0) {
      
      return (
        
        <div>
          
          <div className="h-100">
            {searchQuery.map(exercise => (
         
              <Exercise exercise={exercise} key={exercise.uid} />
            ))}
          </div>

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </div>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h1>Loading</h1>;
};

const query = gql`
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

// RestaurantList.getInitialProps = async ({ req }) => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(WorkoutList);