import React from 'react'
import { MdChevronLeft, MdChevronRight  } from "react-icons/md";
import { BottomHeaderStyled } from './style';
import { HiChevronDown } from "react-icons/hi";
function BottomHeader() {
  return (
    <BottomHeaderStyled>
        <button>
            <span>Categories</span> 
            <HiChevronDown/>
        </button>
        <nav>
            <MdChevronLeft/>
            <ul>
                <li>Home Appliances</li>
                <li>Baby Care & Mommy Products</li>
                <li>Perfumes & Fragrances</li>
                <li>Stationery - Office Supplies</li>
            </ul>
            <MdChevronRight />
        </nav>
    </BottomHeaderStyled>
  )
}

export default BottomHeader