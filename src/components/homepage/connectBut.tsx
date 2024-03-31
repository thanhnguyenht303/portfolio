import React from 'react';

const ConnectButton: React.FC = () => {
  return (
    <a
      href="https://www.linkedin.com/in/thanh-huu-tien-nguyen-1724b6220/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width:"199px",
        height:"59px",
        display: 'flex',
        backgroundColor: '#ffffff',
        color: '#000000',
        textDecoration: 'none',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '17px',
        justifyContent: "center",
        alignItems: 'center',
        boxShadow: '0px -4px 0px 0px #E8E6E9 inset',
      }}
    >
      Let&apos;s Connect
    </a>
  );
};

export default ConnectButton;
