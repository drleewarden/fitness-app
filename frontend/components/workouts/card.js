/* components/RestaurantList/index.js */
import React, {Fragment} from "react";

import gql from "graphql-tag";
import Link from "next/link";

import { graphql } from "react-apollo";
// import Title from "./restaurants"
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";

export const Exercise =(props)=> {
  const {exercise} = props
  return (
    <Fragment>
      <Card
                style={{ margin: "0 0px 20px", border: 0}}
                className="h-100 col-sm-12 col-md-6 col-lg-4"
                key={exercise.uid}
              >
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`http://localhost:1337${exercise.image[0].url}`}
                />

                <CardBody style={{border: '1px solid grey'}}>
                  {/* <Title>dsfadfd</Title> */}
                  <CardTitle>{exercise.title}</CardTitle>
                  <CardText>{exercise.description}</CardText>
                  <Link
                  style={{margin:'auto'}}
                    as={`/restaurants/${exercise.uid}`}
                    href={`/restaurants?id=${exercise.uid}`}
                  >
                    <a className="btn btn-primary mx-auto w-100">View More</a>
                  </Link>
                </CardBody>
                {/* <div className="card-footer">
                 
                </div> */}
              </Card>
    </Fragment>
  )
}
 