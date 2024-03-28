"use client"
import { FunctionComponent, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Dropdown: FunctionComponent<{ 
  onDropdownItemClick: (itemName: string) => void,
  onToggle: (isOpen:boolean) => void }> 
  = ({ onDropdownItemClick, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();


  const toggleOpen = () => {
    const newIsOpen = !isOpen;
    onToggle(newIsOpen);
    setIsOpen(newIsOpen);
  };

  const closeDropdown = () => {
    if(isOpen) {
      setIsOpen(false);
      onToggle(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const onItemSelect = (itemName: string) => {
    onDropdownItemClick(itemName);
    closeDropdown(); 
  };

  useEffect(() => {
    if(pathname === "/project-1"){
      setActiveItem("project-1");
    }
    else if(pathname === "/project-2"){
      setActiveItem("project-2");
    }
    else{
      setActiveItem("");
    }
  },[pathname])

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}} ref={dropdownRef}>
      <button onClick={toggleOpen} >Projects</button>
      {isOpen && (
        <ul className="dropdown-container" >
          <li className={activeItem === "project-1" ? "dropdown-item-active" : "dropdown-item"}>
            <Link href="../project-1">
              <p onClick={() => onItemSelect("dropdown")}>Project 1</p>
            </Link>
          </li>
          <li className={activeItem === "project-2" ? "dropdown-item-active" : "dropdown-item"}>
            <Link href="../project-2">
              <p onClick={() => onItemSelect("dropdown")}>Project 2</p>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
