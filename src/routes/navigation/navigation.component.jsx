
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CrwnLogo from '../../assets/crown.svg?react';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";


import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    

    return (
        <>
            <div className="navigation">

                <Link className="logo" to="/" >
                    <CrwnLogo />
                    {/* <div className="">LOGO</div> */}
                </Link>

                
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser} >Sign Out</span>
                        ) : (
                            <Link className="nav-link" to='/auth' >
                                Sign In
                            </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}

                
            </div>
            <Outlet />
        </>
    )
}
  
export default Navigation;