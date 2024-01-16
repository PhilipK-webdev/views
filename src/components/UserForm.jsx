import React from "react";
import styled from "styled-components";
import { Button, FormControl, TextField, Grid } from "@mui/material";
function UserForm() {
  return (
    <div>
      <FormStyle required>
        <FormControl defaultValue="" required>
          <TextField
            label="שם פרטי"
            id="outlined-size-small"
            value=""
            size="small"
          />
          <TextField
            label="שם משפחה"
            id="outlined-size-small"
            value=""
            size="small"
          />
          <TextField
            label="אימייל"
            id="outlined-size-small"
            value=""
            size="small"
          />
        </FormControl>
      </FormStyle>
      <Grid item sx={12} display={"flex"}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {}}
          color="primary"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            marginTop: "80px",
            padding: "10px",
          }}
        >
          אשר הזמנה
        </Button>
      </Grid>
    </div>
  );
}

const FormStyle = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
`;
export default UserForm;
