import React from 'react'
import { IoMdCart, IoMdHeart } from "react-icons/io";
import logo from '../../../../assets/images/logo.png'
import { IoPersonSharp } from "react-icons/io5";
import { CartControlStyled } from './style';

function CartControl() {
  return (
    <CartControlStyled>
        <img src={logo} alt='logo'/>
        <IoMdCart/>
        <IoMdHeart/>
        <IoPersonSharp/>
    </CartControlStyled>
  )
}

export default CartControl