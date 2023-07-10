import React from "react";
import "./inputfield.css";

export default function InputField(props) {
  return (
    // <div className="textAreas d-flex flex-column mt-5">
    //   <label htmlFor="descInput">
    //     {(props.isHeadingFocused || props.value) && props.placeholder}
    //   </label>
    <div className="inputdecor">
      <input
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        value={props.value}
        type="text"
        name={props.name}
        id="descInput"
      />
    </div>
  );
}
