"use client";
import Link from "next/link";
import Dropdown from "./dropdown";
import { SetStateAction, useEffect, useState } from "react";
import { usePathname} from "next/navigation";

const Navbar  = () => {

    const [activeItem, setActiveItem] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const pathname = usePathname();
    
    const handleClick = (itemName: SetStateAction<string>) => {
        setActiveItem(itemName);
    }

    const handleDropdownToggle = (isOpen:boolean) => {
        setDropdownOpen(isOpen);
    }

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('home');
        } 
        else if (pathname === "/climate-change-project" || pathname == "/project-2") {
            setActiveItem('dropdown');
        }
        else {
            setActiveItem('');
        }
    }, [pathname]);
 
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul>
                        <li 
                        className={activeItem === "home" ? "onsite" : ""}>
                            <Link href="/" > Home </Link>
                        </li>
                        <li 
                        className={dropdownOpen === true ? "active": (activeItem === "dropdown" ? "onsite" : "") }
                        > 
                            <Dropdown onDropdownItemClick={(itemName) => handleClick(itemName)} onToggle={handleDropdownToggle}/>
                        </li>
                        <li>
                           <a href="https://drive.google.com/file/d/1gRnfXqz0BgboJE4POh8SMRli2ZQVl443/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            Resume
                           </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export  default Navbar;