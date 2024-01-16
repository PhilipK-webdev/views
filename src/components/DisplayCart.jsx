import styled from "styled-components";
import { Grid, useMediaQuery } from "@mui/material";
import List from "./List";
import { useSelector } from "react-redux";
function DisplayCart() {
  const data = useSelector((state) => state.data.items);
  return (
    <CartStyle>
      <h1>יש לאסוף מוצרים אלו במחלקות המתאימות</h1>
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
`;
export default DisplayCart;
