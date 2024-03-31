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
import { useOutsideClick } from './clickOutside';



const Navbar = () => {

    const [activeItem, setActiveItem] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleSocial = () => {
        setIsSocialOpen(!isSocialOpen);
    }

    const pathname = usePathname();

    const handleClick = (itemName: SetStateAction<string>) => {
        setActiveItem(itemName);
    }

    const handleDropdownToggle = (isOpen: boolean) => {
        setDropdownOpen(isOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const closeSocial = () => {
        setIsSocialOpen(false);
    }

    const menuRef = useOutsideClick(() => { closeMenu() });
    const socialRef = useOutsideClick(() => { closeSocial() });

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
                    <div
                        className="navbar-container"
                        ref={menuRef}
                    >
                        <div className="menu-icon" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 72 72" fill="#ffffff">
                                <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
                            </svg>
                        </div>
                        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
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
                        <div
                            className="social-media"
                            ref={socialRef}
                        >
                            <div className="social-icon" onClick={toggleSocial}>
                                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2036_9197)">
                                        <path d="M0 50C0 36.7392 5.26784 24.0215 14.6447 14.6447C24.0215 5.26784 36.7392 0 50 0C63.2608 0 75.9785 5.26784 85.3553 14.6447C94.7322 24.0215 100 36.7392 100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553C5.26784 75.9785 0 63.2608 0 50ZM46.875 6.73125C42.6875 8.00625 38.5312 11.8562 35.0812 18.325C34.1854 20.0042 33.3625 21.8208 32.6125 23.775C37.0187 24.7562 41.8125 25.3813 46.875 25.5688V6.73125ZM26.5562 22.1187C27.4479 19.7146 28.45 17.4688 29.5625 15.3812C30.6503 13.342 31.8979 11.3921 33.2938 9.55C27.9721 11.7535 23.138 14.9862 19.0688 19.0625C21.3354 20.2167 23.8313 21.2313 26.5562 22.1187ZM21.9312 46.875C22.1562 40.1875 23.1062 33.8312 24.6562 28.075C21.2715 26.9974 17.9965 25.6016 14.875 23.9062C9.89591 30.589 6.94125 38.5614 6.3625 46.875H21.9312ZM30.6812 29.7437C29.2055 35.3418 28.3669 41.0887 28.1812 46.875H46.875V31.8188C41.1875 31.6313 35.7313 30.9125 30.6812 29.7437ZM53.125 31.8125V46.875H71.8125C71.6289 41.0889 70.7924 35.3421 69.3187 29.7437C64.2687 30.9125 58.8125 31.6188 53.125 31.8125ZM28.1875 53.125C28.4063 59.2938 29.2875 65.0875 30.6812 70.2562C36.0003 69.0487 41.4232 68.3559 46.875 68.1875V53.125H28.1875ZM53.125 53.125V68.1813C58.8125 68.3688 64.2687 69.0875 69.3187 70.2562C70.7125 65.0875 71.5938 59.2938 71.8187 53.125H53.125ZM32.6125 76.225C33.3625 78.1792 34.1854 79.9958 35.0812 81.675C38.5312 88.1437 42.6937 91.9875 46.875 93.2688V74.4375C41.8125 74.625 37.0187 75.2438 32.6125 76.225ZM33.3 90.45C31.902 88.6081 30.6523 86.6582 29.5625 84.6187C28.4138 82.4391 27.4096 80.1863 26.5562 77.875C23.9854 78.7017 21.4821 79.7256 19.0688 80.9375C23.138 85.0138 27.9784 88.2465 33.3 90.45ZM24.6562 71.925C23.0357 65.7822 22.1194 59.475 21.925 53.125H6.3625C6.94125 61.4386 9.89591 69.411 14.875 76.0938C17.8125 74.4813 21.0938 73.0813 24.6562 71.925ZM66.7063 90.45C72.0251 88.2476 76.857 85.0171 80.925 80.9437C78.5137 79.7322 76.0125 78.7083 73.4438 77.8813C72.5902 80.1905 71.5859 82.4411 70.4375 84.6187C69.3497 86.658 68.1021 88.6079 66.7063 90.45ZM53.125 74.4313V93.2688C57.3125 91.9938 61.4688 88.1437 64.9187 81.675C65.8187 79.9958 66.6417 78.1792 67.3875 76.225C62.6978 75.1956 57.9237 74.591 53.125 74.4313ZM75.3438 71.925C78.9062 73.0813 82.1875 74.4813 85.125 76.0938C90.1041 69.411 93.0588 61.4386 93.6375 53.125H78.075C77.8806 59.475 76.9643 65.7822 75.3438 71.925ZM93.6375 46.875C93.0588 38.5614 90.1041 30.589 85.125 23.9062C82.1875 25.5188 78.9062 26.9188 75.3438 28.075C76.8938 33.825 77.8438 40.1875 78.075 46.875H93.6375ZM70.4375 15.3812C71.5458 17.4729 72.55 19.7188 73.45 22.1187C76.0166 21.2914 78.5157 20.2675 80.925 19.0562C76.8565 14.9851 72.0246 11.7568 66.7063 9.55625C68.0687 11.325 69.3188 13.2875 70.4375 15.3812ZM67.3875 23.775C66.6741 21.9107 65.8497 20.0908 64.9187 18.325C61.4688 11.8562 57.3125 8.0125 53.125 6.73125V25.5625C58.1875 25.375 62.9812 24.7562 67.3875 23.775Z" fill="white" style={{ fill: "white", fillOpacity: 1 }} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2036_9197">
                                            <rect width="100" height="100" fill="white" style={{ fill: "white", fillOpacity: 1 }} />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <ul className={`social-contact ${isSocialOpen ? "open": ""}`}>
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
                                            style={{width:"auto", height:"auto"}}
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