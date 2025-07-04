import { Fragment, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Crown from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../contexts/Context"
import { SignOutUser } from "../services/firebase/FirebaseUtile"
import CartIcon from "../components/carticonComp/CartIcon"
import CartDropdown from "../components/cart-dropdown/CartDropdown"
import { ProductContext } from "../contexts/ProductContext"
import {NavigationComp,LogoContainer,NavLinks,NavLinksContainer} from '../styleComp'


const Navigation = () => {
    const {currentUser,setCurrentUser}=useContext(UserContext)
    const {showDropDown,cartQuantity}=useContext(ProductContext)

    const LogoutUser=async()=>{
        await SignOutUser()
        alert("Logged out")
        setCurrentUser(null)
        
    }




    return (
        <Fragment>

            <NavigationComp>
                <LogoContainer to={'/'}>
                   <img src={Crown} alt="" />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLinks to={'/shop'}>SHOP</NavLinks>
                    {currentUser?<span className="nav-link" onClick={LogoutUser}>Sign out</span>:<Link className="nav-link" to={'/signin'}>SIGN IN</Link>}
                    <CartIcon count={cartQuantity}/>
                    
                </NavLinksContainer>
                {showDropDown&&<CartDropdown/>}
                
            </NavigationComp>
            <Outlet />

        </Fragment>
    )
}

export default Navigation