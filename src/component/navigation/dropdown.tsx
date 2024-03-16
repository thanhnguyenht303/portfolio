"use client"
import { FunctionComponent, useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Dropdown: FunctionComponent<{ 
  onDropdownItemClick: (itemName: string) => void,
  onToggle: (isOpen:boolean) => void }> 
  = ({ onDropdownItemClick, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleOpen} >Projects</button>
      {isOpen && (
        <ul className="dropdown-container" >
          <li className='dropdown-item'>
            <Link href="../climate-change-project">
              <p onClick={() => onItemSelect("dropdown")}>Climate Change Project</p>
            </Link>
          </li>
          <li className='dropdown-item'>
            <p onClick={() => onItemSelect("dropdown")}>Project 2</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
