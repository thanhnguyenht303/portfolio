"use client"

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import gmail from "../../../public/homepage/gmail.svg";
import colorGmail from "../../../public/homepage/colorGmail.svg";
import Image from 'next/image';

const EmailCopy: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("nguyenhuutienthanh2002@gmail.com");
      setTimeout(() => {
        toast.success("Email copied to clipboard!", {position:  "bottom-left"});
      }, 100); 
    } catch (err) {
      setTimeout(() => {
        toast.error("Failed to copy email.", {position:  "top-left"});
      }, 100); 
    }
  };

  return (
    <button 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={copyEmailToClipboard} 
      style={{ cursor: 'pointer' }}>
      <Image
        src={isHovered ? colorGmail : gmail}
        width={24}
        height={25}
        alt="email icon"
      />
    </button>
  );
};

export default EmailCopy;
