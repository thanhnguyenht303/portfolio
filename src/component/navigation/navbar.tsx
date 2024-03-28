"use client";
import Link from "next/link";
import Dropdown from "./dropdown";
import EmailCopy from './emailCopy';
import { SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';

import linkedin from "../../../public/homepage/linkedin.svg";
import colorLinkedin from "../../../public/homepage/colorLinkedin.svg";
import github from "../../../public/homepage/github.svg";
import instagram from "../../../public/homepage/instagram.svg";
import colorInstagram from "../../../public/homepage/colorInstagram.svg";



const Navbar = () => {

    const [activeItem, setActiveItem] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const pathname = usePathname();

    const handleClick = (itemName: SetStateAction<string>) => {
        setActiveItem(itemName);
    }

    const handleDropdownToggle = (isOpen: boolean) => {
        setDropdownOpen(isOpen);
    }

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('home');
        }
        else if (pathname === "/project-1" || pathname == "/project-2") {
            setActiveItem('dropdown');
        }
        else {
            setActiveItem('');
        }
    }, [pathname]);

    return (
        <div>
            <nav className="navbar">
                <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ position: "absolute", left: 0, width: "20%" }}>
                        <div className="icon">
                            <Image src="/homepage/myself.png"
                                alt="Myself"
                                width={65}
                                height={65} />
                            <h1>Thanh Nguyen</h1>
                        </div>
                    </div>
                    <div className="navbar-container">
                        <div className="menu-icon" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 72 72" fill="#ffffff">
                                <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
                            </svg>
                        </div>
                        <ul className={`menu ${isOpen ? 'open' : ''}`}>
                            <li
                                className={activeItem === "home" ? "onsite" : ""}>
                                <Link href="/" > Home </Link>
                            </li>
                            <li
                                className={dropdownOpen === true ? "active" : (activeItem === "dropdown" ? "onsite" : "")}
                            >
                                <Dropdown onDropdownItemClick={(itemName) => handleClick(itemName)} onToggle={handleDropdownToggle} />
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1gRnfXqz0BgboJE4POh8SMRli2ZQVl443/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div style={{ position: "absolute", right: 0, height: "100%" }}>
                        <div className="social-media">
                            <ul>
                                <li
                                    onMouseEnter={() => setIsHovered1(true)}
                                    onMouseLeave={() => setIsHovered1(false)}
                                >
                                    <a href="https://www.linkedin.com/in/thanh-huu-tien-nguyen-1724b6220/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image
                                            src={isHovered1 ? colorLinkedin : linkedin}
                                            width={24}
                                            height={25}
                                            alt="LinkedIn" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/thanhnguyenht303"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image
                                            src={github}
                                            width={24}
                                            height={24}
                                            alt="Github" />
                                    </a>
                                </li>
                                <li style={{ width: 24, height: 25 }}>
                                    <EmailCopy />
                                </li>
                                <li
                                    onMouseEnter={() => setIsHovered2(true)}
                                    onMouseLeave={() => setIsHovered2(false)}
                                >
                                    <a href="https://www.instagram.com/_nht_thanh/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image
                                            src={isHovered2 ? colorInstagram : instagram}
                                            width={24}
                                            height={24}
                                            alt="Instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;