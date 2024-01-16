import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  updateData,
  updateSubArrayItem,
} from "../features/getData/getData.js";
import { setTotal } from "../features/totalItems/totalItems.js";
import { Grid, TextField, Button, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import SelectProducts from "./Select";

function AddProducts() {
  const mobile = useMediaQuery("(max-width:820px)");
  const data = useSelector((state) => state.data.items);
  let totalItems = useSelector((state) => state.items.totalItems);
  const [product, setProduct] = useState("");
  const textRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/categories");
        if (response.status === 200) {
          const data = await response.json();
          let count = 0;
          data.forEach((item) => {
            count += item.Products.length;
          });
          dispatch(setData(data));
          dispatch(setTotal(count));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelectProduct = (event) => {
    const { value } = event.target;
    setProduct(value);
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const textValue = textRef.current.value;
    if (textValue && product) {
      const findIndex = data.findIndex(
        (item) => item.category_name === product
      );
      if (findIndex !== -1) {
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryName: data[findIndex].category_name,
            productName: textValue,
          }),
        };
        const response = await fetch("/api/v1/createProduct", options);
        if (response.status === 200) {
          dispatch(
            updateData({ updatedItem: data[findIndex], val: textValue })
          );
          const count = totalItems + 1;
          dispatch(setTotal(count));
        }
      }
    }
  };
  return (
    <AddProductsStyle>
      <Grid item>
        <div className="total-items">סה"כ: {totalItems} מוצרים</div>
      </Grid>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"center"}
        style={{ marginTop: "30px" }}
      >
        <Grid item xs={mobile ? 12 : 4} alignSelf={"center"}>
          <TextField
            style={{ width: mobile && "100%" }}
            id="filled-search"
            type="search"
            variant="outlined"
            size="small"
            label="מוצר"
            inputRef={textRef}
          />
        </Grid>
        <Grid item xs={mobile ? 12 : 4}>
          <SelectProducts
            mobile={mobile}
            data={data}
            handleSelectProduct={handleSelectProduct}
            product={product}
          />
        </Grid>
        <Grid item xs={mobile ? 12 : 4}>
          <Button
            variant="outlined"
            size="large"
            className="btn"
            onClick={handleAddProduct}
            style={{
              width: "100%",
              marginTop: mobile ? "80px" : "0px",
              backgroundColor: "#92c4f1",
              marginBottom: mobile ? "80px" : "0px",
            }}
          >
            הוסף
          </Button>
        </Grid>
      </Grid>
    </AddProductsStyle>
  );
}

const AddProductsStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  .total-items {
    text-align: end;
    margin-top: 20px;
    color: #5d68d2;
  }
  .muirtl-zcvqkj-MuiGrid-root {
    display: flex;
    justify-content: center;
  }
  .muirtl-1pysi21-MuiFormLabel-root-MuiInputLabel-root {
    top: 8px;
  }
  .muirtl-1o6kl88-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 16.5px 14px;
  }
  .muirtl-gj1fbr-MuiGrid-root {
    display: flex;
    align-items: center;
  }
  .muirtl-9y1egq-MuiButtonBase-root-MuiButton-root {
    padding: 14.5px 14px;
    width: 100px;
  }
  .btn {
    background-color: #92c4f1;
    color: black;
  }
`;
export default AddProducts;
