import { useEffect ,useState} from 'react';

const useOnlinestatus = () => {
    const[onlinestatus,setonlinestatus]=useState(true);
    //check if online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        });
        //window define by browser to check internet
        window.addEventListener("online",()=>{
            setonlinestatus(true);
        });
    },[]);
    //boolean value
    console.log(onlinestatus);
    return onlinestatus;
  
};

export default useOnlinestatus;