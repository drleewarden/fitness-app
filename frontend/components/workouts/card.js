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
                style={{ width: "30%", margin: "0 10px" }}
                className="h-100"
                key={exercise.uid}
              >
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`http://localhost:1337${exercise.image[0].url}`}
                />

                <CardBody>
                  {/* <Title>dsfadfd</Title> */}
                  <CardTitle>{exercise.title}</CardTitle>
                  <CardText>{exercise.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${exercise.uid}`}
                    href={`/restaurants?id=${exercise.uid}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
    </Fragment>
  )
}
 