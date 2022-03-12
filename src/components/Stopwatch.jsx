import { useEffect, useState } from "react";
export const  Stopwatch = ({start,end})=> {
    const [timer,setTimer] = useState(start);
    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("Interval",timer);
            setTimer((prev)=>{
                if(prev >= end-1){
                    console.log(prev);
                    clearInterval(id);
                    
                }
                return prev+1;
            });
        },500);
        return () => {
            clearInterval(id);
            console.log("Unmounting Timer");
        }
    },[])
    
    return <div>Timer:{timer} </div>;
}

///
// const id = setInterval(()=>{},1000);
// clearInterval(id)