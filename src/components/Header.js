import React,{useContext} from 'react'
import {foodContext} from '../App'
import {Link} from 'react-router-dom'
import '../index.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {

    let context = useContext(foodContext);

    return (
        <div className='head-wrapper'>
            <Link to='/' className="head-title">
            <div >
                Food Ordering Portal
            </div>
            </Link>
            <div className='head-cart'>
                <Link to='/cart'>
                    <ShoppingCartIcon/>
                    <span className='count'>{context.cartValue}</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
