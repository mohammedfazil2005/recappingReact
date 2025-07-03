import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithRedirect,signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ2J50znWbkPAduFMW01DEuzS8QZqkn2w",
  authDomain: "crown-clothing-d0e5e.firebaseapp.com",
  projectId: "crown-clothing-d0e5e",
  storageBucket: "crown-clothing-d0e5e.firebasestorage.app",
  messagingSenderId: "214245731070",
  appId: "1:214245731070:web:ba4acd0f3676e4eed053af"
};


const app = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider(); //for firebase google authentication
provider.setCustomParameters({
    prompt:"select_account"
})

const auth=getAuth() //for get the authentication details

const signInWithGooglePopup=()=>{
    return signInWithPopup(auth,provider)
}

const signInWithGoogleRedirect=()=>{
    return signInWithRedirect(auth,provider)
}

const database=getFirestore() //for accessing firestore instances

const createUserDocument=async(userAuth,additionalDetails={})=>{

    let {displayName,email}=userAuth
   
    const userDocRef=doc(database,"users",userAuth.uid) //creating a reference

    const userSnapshot=await getDoc(userDocRef) //checking in the database

    if(!userSnapshot.exists()){
        let newDate=new Date()
      try {
          await setDoc(userDocRef,{
            displayName,email,created_At:newDate,...additionalDetails
        })
        console.log("Login success")
      } catch (error) {
      
        console.log('Something went wrong!!',error)
      }
    }

    return userDocRef;


}


const createAuthUserWithEmailAndPassword=async(email,password)=>{
    return await  createUserWithEmailAndPassword(auth,email,password)
}

const signUserWithEmailAndPassoword=async(email,password)=>{
    return await  signInWithEmailAndPassword(auth,email,password)
}

const SignOutUser=async()=>{
  return await signOut(auth)
}

const onChangeAuth=(callback)=>{
  return onAuthStateChanged(auth,callback)
}


export {auth,signInWithGooglePopup,signUserWithEmailAndPassoword,database,createUserDocument,signInWithGoogleRedirect,createAuthUserWithEmailAndPassword,SignOutUser,onChangeAuth}


// AV1ZR0dVcaPDJ6Hli3625ru3e693