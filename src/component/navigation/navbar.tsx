"use client";
import Link from "next/link";
import Dropdown from "./dropdown";
import { SetStateAction, useState } from "react";
import EmailCopy from "./emailCopy";


const Navbar  = () => {

    const [activeItem, setActiveItem] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const handleClick = (itemName: SetStateAction<string>) => {
        setActiveItem(itemName);
    }

    const handleDropdownToggle = (isOpen:boolean) => {
        setDropdownOpen(isOpen);
    }
 
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul>
                        <li 
                        className={activeItem === "home" ? "onsite" : ""}
                        onClick={()=>handleClick("home")}>
                            <Link href="/" > Home </Link>
                        </li>
                        <li 
                        className={dropdownOpen === true ? "active": (activeItem === "dropdown" ? "onsite" : "") }
                        > 
                            <Dropdown onDropdownItemClick={(itemName) => handleClick(itemName)} onToggle={handleDropdownToggle}/>
                        </li>
                        <li>
                           <EmailCopy /> 
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export  default Navbar;