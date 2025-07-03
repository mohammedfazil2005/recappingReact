import { getRedirectResult } from "firebase/auth"
import { auth, createUserDocument, database, signInWithGooglePopup, signInWithGoogleRedirect } from "../services/firebase/FirebaseUtile"
import { useEffect } from "react"
import { SignupForm } from "../components/SignupForm/SignupForm"
import SignInComp from "../components/signIn/SignInComp"


const SignIn=()=>{


    return(
        <div>
            
            <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                   <SignInComp/>
            <SignupForm/>
         
            </div>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google And redirect</button> */}
        </div>
    )
}

export default SignIn