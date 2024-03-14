import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({ ...data, loanTerm: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">贷款时间</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="贷款时间"
        defaultValue={5}
        onChange={handleChange}
      >
        <MenuItem value={5}>5 年</MenuItem>
        <MenuItem value={10}>10 年</MenuItem>
        <MenuItem value={15}>15 年</MenuItem>
        <MenuItem value={20}>20 年</MenuItem>
        <MenuItem value={25}>25 年</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
