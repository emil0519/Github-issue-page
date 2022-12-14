import { useEffect } from "@storybook/addons";
import { response } from "express";
import React, { useState } from "react";
import api from "./utils/api";
import Header from "./component/Header";
function App() {

  const [label, setLabel] = useState(null);


  async function startResult(){
    const result= await api.getLabels("emil0519", "testing-issues")
    setLabel(result)
    console.log(result)
  }

  const startCreate= async()=>{
    const result= await api.createLabels("emil0519", "testing-issues")
    console.log(result)
  }

  const startUpdate= async()=>{
    const result= await api.updateLabels("emil0519", "testing-issues","abcd","New name","Hello world","f29513")
    console.log(result)
  }

   const startDelete= async()=>{
    const result= await api.deleteLabel("emil0519", "testing-issues","New name")
    console.log(result)
  }
      {/* <div>Hello world</div> */}
      {/* <button onClick={()=>startResult()}>Show Label List</button> */}
      {/* <button onClick={()=>startCreate()}>Show Label List</button> */}
      {/* <button onClick={()=>startDelete()}>Show Label List</button> */}
  


  return (
    <>
      <Header />
    

    </>
  );
}

export default App;
