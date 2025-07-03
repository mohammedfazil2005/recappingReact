import { createContext, useEffect, useState } from "react";
import { createUserDocument, onChangeAuth } from "../services/firebase/FirebaseUtile";


export const UserContext = createContext()

export const UserProvider = ({children}) => {

    

    let [currentUser, setCurrentUser] = useState(null)
   

    useEffect(()=>{
        const subscribe=onChangeAuth((user)=>{
            if(user){
                createUserDocument(user)
            }
            setCurrentUser(user)
        })
     
    },[])

  



    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )

}