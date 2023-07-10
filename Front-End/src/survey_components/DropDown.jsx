import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./dropdown.css";

export default function SelectLabels(props) {
  return (
    <React.Fragment>
      <FormControl
        sx={{
          m: 1,
          minWidth: 200,
        }}
      >
        <Select value={props.type} onChange={props.handleChange} displayEmpty>
          <MenuItem value="">
            <em>Single Choice</em>
          </MenuItem>
          <MenuItem value="Multiple">Multiple Choice</MenuItem>
          <MenuItem value="Short">Short Answer</MenuItem>
          <MenuItem value="Long">Long Answer</MenuItem>
          <MenuItem value="Emoji">Emoji Rating</MenuItem>
          <MenuItem value="Star">Star Rating</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
