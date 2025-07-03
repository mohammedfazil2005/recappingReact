import React, { useContext } from 'react'
import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocument, signInWithGooglePopup, signUserWithEmailAndPassoword } from "../../services/firebase/FirebaseUtile"
// import './SignupForm.style.scss'
import ButtonComp from "../buttoncomp/ButtonComp"
import { UserContext } from '../../contexts/Context'

const SignInComp = () => {
     const [data,setData]=useState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const {setCurrentUser}=useContext(UserContext)

    const resetForm=()=>{
        setData({...data,displayName:'',email:"",password:"",confirmPassword:""})
    }

     const onHandleSubmit=async(e)=>{
        e.preventDefault()

        try {
            const responce=await signUserWithEmailAndPassoword(data.email,data.password)
           setCurrentUser(responce.user)
            resetForm()
            alert("Login success")
        } catch (error) {
              alert(error)
            console.log(error)
        }
    }
    
    const loginGoogleUser=async()=>{
        await signInWithGooglePopup()
        
    }

   
  return (
    <div className="signup-container">
            <h2>Sign up with your email and password</h2>
            <span>Don't have an account?</span>
            <form onSubmit={(e)=>onHandleSubmit(e)}>
                <div className="group">
                    <label >Email</label>
                <input className="form-input" onChange={(e)=>setData({...data,email:e.target.value})} type="email" required value={data.email}/>
                </div>
               <div className="group">
                  <label >Password</label>
                <input className="form-input" onChange={(e)=>setData({...data,password:e.target.value})} type="password" required value={data.password}/>
               </div>
              <ButtonComp buttonType={'submit'}>Sign up</ButtonComp>
              <ButtonComp buttonType={'google'} type="button" onClick={loginGoogleUser}>Sign in with Google</ButtonComp>
            </form>
        </div>
  )
}

export default SignInComp
