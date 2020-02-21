import { useState } from 'react'

const throttle = (callback, time, limit) =>{
    const step = (limit>1 ? time/limit : time);
    let timer = null;
    const throttled = (...args) =>{
        if(!timer){
            callback(...args);
            timer = setTimeout(()=>{
                timer = null;
            },step);  
        }
    }
    return throttled;
}

export function useThrottledFunction(callback,time, limit){
    const limited = limit || 1;
    const [callbackFunc,setCallbackFunc] = useState(()=>throttle(callback,time,limited));
    return [callbackFunc,setCallbackFunc]
}
