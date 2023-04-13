import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider"


function Header() {

    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='header'>

            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header_logo" />
            </Link>

            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>


            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineone">
                        Hello Guest
                    </span>
                    <span className="header_Optionlinetwo">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineone">
                        Returns
                    </span>
                    <span className="header_Optionlinetwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineone">
                        Your
                    </span>
                    <span className="header_Optionlinetwo">
                        Prime
                    </span>
                </div>
                <Link to="/Checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_Optionlinetwo header_basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header