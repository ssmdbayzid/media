import { useEffect } from "react";

const LoginSuccess = () =>{
    useEffect(()=>{
        setTimeout(()=>{
            window.close()
        },1000)
    },[])

    return (
        <div className="">
            This is from login success
        </div>
    )
}

export default LoginSuccess;