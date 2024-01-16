import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const rtlTheme = createTheme({
  direction: "rtl",
});

const RtlTextField = () => {
  return (
    <ThemeProvider theme={rtlTheme}>
      <FormControl fullWidth>
        <TextField
          id="filled-search"
          type="search"
          variant="outlined"
          placeholder="מוצר"
          size="small"
          label="שם"
        />
      </FormControl>
    </ThemeProvider>
  );
};

export default RtlTextField;
