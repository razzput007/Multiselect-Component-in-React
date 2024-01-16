import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "../css/index.css";
export default function ChipInput() {
  const data = [
    { Name: "Marina Augustine", id: 1 },
    { Name: "megan Smith", Email: "magan123@gmail.com", id: 2 },
    {Name:"Gaurav Thakur", id:3},
    {Name:"Raja Thakur",id:4},
    {Name:"raja Kumar",id:5},
    {Name:"Adam",id:6},
    {Name:"adam steve",id:7},
    {Name:"Nick Jones",id:8},
    {Name:"nikita singh",id:9},
    {Name:"Anita Gros",id:10}
  ];
  const [options] = useState(data);
  return (
    <>
    <div className="heading"><h2>Pick Users</h2></div>
    <div className="container" >
      
      <Multiselect 
      className="select"
        options={options}
        avoidHighlightFirstOption={true}
        displayValue="Name"
        placeholder="Add New User"
        caseSensitiveSearch={true}
        style={{searchBox:{
          "border": 'none',
          'border-bottom': '1px solid blue',
          'border-radius': '0px',
          "width":"500px",
          "display":"flex",
          "flex-wrap":"wrap"
        },
        chips:{
          "background":"grey"
        },
     
      }}
      />
    </div>
    </>
    
  );
}
