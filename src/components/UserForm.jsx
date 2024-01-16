import React, { useState } from "react";
import styled from "styled-components";
import { Button, FormControl, TextField, Grid } from "@mui/material";
import { validEmail, validTextField } from "../utils/validation.js";
import DisplayCart from "./DisplayCart.jsx";
function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        setErrorFirstName("");
        break;
      case "lastName":
        setLastName(value);
        setErrorLastName("");
        break;
      case "email":
        setEmail(value);
        setErrorEmail("");
        break;

      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    if (
      validTextField(firstName) &&
      validTextField(lastName) &&
      validEmail(email)
    ) {
      console.log("send");
    }
    !validTextField(firstName)
      ? setErrorFirstName("שגיאה בשם פרטי")
      : setErrorFirstName("");
    !validTextField(lastName)
      ? setErrorLastName("שגיאה בשם משפחה")
      : setErrorLastName("");
    !validEmail(email) ? setErrorEmail("שגיאה באימייל") : setErrorEmail("");
  };
  return (
    <div>
      <FormStyle>
        <FormControl required>
          <TextField
            margin="dense"
            label="שם פרטי"
            id="outlined-size-small"
            value={firstName}
            size="small"
            name="firstName"
            onChange={handleChange}
            helperText={errorFirstName}
            error={errorFirstName ? true : false}
          />
          <TextField
            margin="dense"
            label="שם משפחה"
            id="outlined-size-small"
            value={lastName}
            size="small"
            name="lastName"
            onChange={handleChange}
            helperText={errorLastName}
            error={errorLastName ? true : false}
          />
          <TextField
            margin="dense"
            label="אימייל"
            id="outlined-size-small"
            value={email}
            size="small"
            name="email"
            onChange={handleChange}
            helperText={errorEmail}
            error={errorEmail ? true : false}
          />
        </FormControl>
        <DisplayCart title={"פרטי ההזמנה"} />
        <Grid item xs={12} display={"flex"}>
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
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
      </FormStyle>
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
  margin-top: 100px;
  @media (max-width: 820px) {
    margin-top: 20px;
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
export default UserForm;
