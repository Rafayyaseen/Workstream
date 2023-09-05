import React from "react";
const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <>{value}</>;
    }
  };
  export default renderValue;