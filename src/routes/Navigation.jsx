import { Fragment, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Crown from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../contexts/Context"
import { SignOutUser } from "../services/firebase/FirebaseUtile"
import CartIcon from "../components/carticonComp/CartIcon"
import CartDropdown from "../components/cart-dropdown/CartDropdown"
import { ProductContext } from "../contexts/ProductContext"


const Navigation = () => {
    const {currentUser,setCurrentUser}=useContext(UserContext)
    const {showDropDown}=useContext(ProductContext)

    const LogoutUser=async()=>{
        await SignOutUser()
        alert("Logged out")
        setCurrentUser(null)
        
    }




    return (
        <Fragment>

            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                   <img src={Crown} alt="" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to={'/shop'}>SHOP</Link>
                    {currentUser?<span className="nav-link" onClick={LogoutUser}>Sign out</span>:<Link className="nav-link" to={'/signin'}>SIGN IN</Link>}
                    <CartIcon />
                    
                </div>
                {showDropDown&&<CartDropdown/>}
                
            </div>
            <Outlet />

        </Fragment>
    )
}

export default Navigation