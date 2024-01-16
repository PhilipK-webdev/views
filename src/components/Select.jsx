import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
} from "@mui/material";
function SelectProducts({ mobile }) {
  return (
    <FormControl sx={{ mt: mobile ? 4 : 0, width: mobile ? 1 : 300 }}>
      <InputLabel id="demo-multiple-name-label">קטגוריה</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={""}
        onChange={() => {}}
        input={<OutlinedInput label="קטגוריה" />}
      >
        <MenuItem value={"ירקות ופירות"}>ירקות ופירות</MenuItem>
        <MenuItem value={"מוצרי ניקיון"}>מוצרי ניקיון</MenuItem>
        <MenuItem value={"מאפים"}>מאפים</MenuItem>
        <MenuItem value={"בשר ודגים"}>בשר ודגים</MenuItem>
        {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
      </Select>
    </FormControl>
  );
}

export default SelectProducts;
