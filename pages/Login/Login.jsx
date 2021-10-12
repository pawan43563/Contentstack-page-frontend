import React from "react"
import styles from "./Login.module.scss"
import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from 'next/link'
import { apicall } from "../../utils/apiCall";
import { useRouter } from 'next/router'

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Required'),
    password: yup.string().required("Please enter your password"),
});

export default function Login(){
    const router = useRouter();

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(loginSchema)
    })

    const onsubmit=async (e)=>{
        let url="https://tranquil-tor-00350.herokuapp.com/users/login";
        
        let obj={
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(e)
        }
        try{
            let response=await apicall({url:url,obj:obj})
            if(response.error){
                alert(response.error)
                return;
            }
            else{
                let token=await response.token
                localStorage.setItem('token',token)
                router.push('/')
                
            }
        }catch(error){
            console.log(error);
        }   
    }


    return(
        <div className={styles.loginContainer}>
            <h1>Login</h1>
            <form className={styles.login} onSubmit={handleSubmit(onsubmit)}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" {...register("password")}/>
                {errors.password && <p>{errors.password.message}</p>}
                <button className={styles.btn}>Login</button>
            </form>
        </div>
    )
}