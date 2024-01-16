import React from "react";
import styled from "styled-components";
import { Grid, TextField, Button, useMediaQuery } from "@mui/material";
import List from "./List";
function DisplayCart() {
  const mock = [
    { title: "ירקות ופירות - 2 מוצרים", product: ["תפוח", "אגס"] },
    { title: "ירקות ופירות - 2 מוצרים", product: ["תפוח", "אגס"] },
    { title: "ירקות ופירות - 2 מוצרים", product: ["תפוח", "אגס"] },
    { title: "ירקות ופירות - 2 מוצרים", product: ["תפוח", "אגס"] },
  ];
  return (
    <CartStyle>
      <h1>יש לאסוף מוצרים אלו במחלקות המתאימות</h1>
      <CardBody>
        {mock.map((item, index) => {
          return (
            <Grid item xs={4} key={index} style={{ marginBottom: "10px" }}>
              <List />
            </Grid>
          );
        })}
      </CardBody>
    </CartStyle>
  );
}

const CartStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  display: flex;
  border: 1px solid;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  h1 {
    text-align: center;
    color: #00a1e8;
    margin-bottom: 35px;
  }
`;
const CardBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  ul {
    list-style-type: none;
  }
  .title {
    &::after {
      content: "";
      border-bottom: 1px solid #ededed;
      width: 70%;
      margin-top: 10px;
      margin-right: 50px;
      display: block;
    }
  }
`;
export default DisplayCart;
