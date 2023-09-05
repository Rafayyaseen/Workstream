import React from "react";
import renderValue from "./renderaValue";
const CustomDataTable = ({ customData }) => {
    const keys = Object.keys(customData);
  
    return (
      <table className="spaced-table" border="1">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {keys.map((key, index) => (
              <td key={index}>{renderValue(customData[key])}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };
  export default CustomDataTable;