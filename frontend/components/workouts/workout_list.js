/* components/RestaurantList/index.js */
import React, {useContext, Fragment, useState, createContext} from "react";
import gql from "graphql-tag";

import { graphql } from "react-apollo";

const GetWorkout =( { data: { exercises, error } })=>{
console.log('fuck',exercises)
return exercises
}
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

export default graphql(query, {
    props: ({ data }) => ({
      data
    })
  })(GetWorkout);