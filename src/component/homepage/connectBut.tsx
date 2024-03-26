import React from 'react';

const ConnectButton: React.FC = () => {
  return (
    <a
      href="https://www.linkedin.com/in/thanh-huu-tien-nguyen-1724b6220/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width:"85px",
        height:"85px",
        display: 'inline-flex',
        backgroundColor: '#CCCCCC',
        color: '#000000',
        textDecoration: 'none',
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: '17px',
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: '4px 6px 8px #999999',
      }}
    >
      Let&apos;s Connect
    </a>
  );
};

export default ConnectButton;
