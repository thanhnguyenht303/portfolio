import React from 'react';
import { toast } from 'react-toastify';

const EmailCopy: React.FC = () => {
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
    <button onClick={copyEmailToClipboard} style={{ cursor: 'pointer' }}>
      Email
    </button>
  );
};

export default EmailCopy;
