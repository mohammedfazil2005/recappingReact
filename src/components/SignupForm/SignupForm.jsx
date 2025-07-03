import { useContext, useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocument } from "../../services/firebase/FirebaseUtile"
import './SignupForm.style.scss'
import ButtonComp from "../buttoncomp/ButtonComp"
import { UserContext } from "../../contexts/Context"


export const SignupForm=()=>{

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
        if(data.password!=data.confirmPassword){
            return alert("Password doesn't match")
        }
        if(data.password.length<=5){
            return alert("Password must contain atleast 6 character")
        }
        try {
            const responce=await createAuthUserWithEmailAndPassword(data.email,data.password)
            await createUserDocument(responce.user,{displayName:data.displayName})
            
            resetForm()
            alert("Registration success")
        } catch (error) {
              alert(error)
            console.log(error)
        }
    }


    return(
        <div className="signup-container">
            <h2>Sign up with your email and password</h2>
            <span>Don't have an account?</span>
            <form onSubmit={(e)=>onHandleSubmit(e)}>
               <div className="group">
                 <label >Display Name</label>
                <input className="form-input" onChange={(e)=>setData({...data,displayName:e.target.value})} type="text" required value={data.displayName} />
               </div>
                <div className="group">
                    <label >Email</label>
                <input className="form-input" onChange={(e)=>setData({...data,email:e.target.value})} type="email" required value={data.email}/>
                </div>
                
                    <div className="group"> <label >Password</label>
                <input className="form-input" onChange={(e)=>setData({...data,password:e.target.value})} type="password" required value={data.password}/>
                </div>
               <div className="group">
                  <label >Confirm Password</label>
                <input className="form-input" onChange={(e)=>setData({...data,confirmPassword:e.target.value})} type="password" required value={data.confirmPassword}/>
               </div>
              <ButtonComp buttonType={'submit'}>Sign up</ButtonComp>
              
            </form>
        </div>
    )
}