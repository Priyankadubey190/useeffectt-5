import React, { useEffect, useState } from "react";

export const Todo = () => {
   console.log("Bofore effect");
   const [counter1, setCounter1] = useState(0);
   const [counter2, setCounter2] = useState(0);
   const [data,setData] = useState([]);

   console.log("Before effect");
   useEffect(() => {
    //    console.log("Inside effect 1");
    fetch("").then(res => {
        setData(res)
    })
   },[]);
   
   useEffect(() => {
    console.log("Inside effect 2");
},[counter2]);
   console.log("After Effect");
   return <div>Todos:
       <button onClick={()=>{
        setCounter1(counter1+1);
      }}>Add to 1</button>
       <button onClick={()=>{
        setCounter2(counter2+2);
      }}>Add to 2</button>
   </div>;
};