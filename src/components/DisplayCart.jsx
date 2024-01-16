import styled from "styled-components";
import { Grid, useMediaQuery } from "@mui/material";
import List from "./List";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function DisplayCart({ title }) {
  const data = useSelector((state) => state.data.items);
  const mobile = useMediaQuery("(max-width:820px)");
  const [modifyArray, setModifyArray] = useState([]);

  console.log(data);
  return (
    <CartStyle mobile={mobile}>
      <h1>{title || "יש לאסוף מוצרים אלו במחלקות המתאימות"} </h1>
      <CardBody>
        {data.map((item, index) => {
          return (
            <Grid item xs={4} key={index} style={{ marginBottom: "10px" }}>
              <List item={item} />
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
  @media (max-width: 820px) {
    h1 {
      font-size: 20px;
    }
  }
`;
const CardBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  ul {
    list-style-type: none;
    padding: 0;
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
  @media (max-width: 820px) {
    .title {
      &::after {
        content: "";
        border-bottom: 1px solid #ededed;
        width: 70%;
        margin-top: 10px;
        margin-right: 20px;
        display: block;
      }
    }
  }
`;
export default DisplayCart;
