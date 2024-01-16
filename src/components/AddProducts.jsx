import { Grid, TextField, Button, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import SelectProducts from "./Select";

function AddProducts() {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <AddProductsStyle>
      <Grid item>
        <div className="total-items">סה"כ: 6 מוצרים</div>
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
          />
        </Grid>
        <Grid item xs={mobile ? 12 : 4}>
          <SelectProducts mobile={mobile} />
        </Grid>
        <Grid item xs={mobile ? 12 : 4}>
          <Button
            variant="outlined"
            size="large"
            className="btn"
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
