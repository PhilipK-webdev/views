import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
} from "@mui/material";
function SelectProducts({ mobile, data, handleSelectProduct, product }) {
  return (
    <FormControl sx={{ mt: mobile ? 4 : 0, width: mobile ? 1 : 300 }}>
      <InputLabel id="demo-multiple-name-label">קטגוריה</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={product}
        onChange={handleSelectProduct}
        input={<OutlinedInput label="קטגוריה" />}
      >
        {data.length > 0 &&
          data.map((item) => (
            <MenuItem key={item.category_id} value={item.category_name}>
              {item.category_name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectProducts;
