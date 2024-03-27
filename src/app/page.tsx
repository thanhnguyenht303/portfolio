import Image from "next/image";
import ConnectButton from "@/component/homepage/connectBut";

export default function Home() {

  const naturalWidth = 500; // Example width
  const naturalHeight = 500;

  return (
    <div className="homepage-container">
      <div className="content">
        <div className="left-side">
          <div className="chatbox">
            <svg preserveAspectRatio="xMidYMid meet" width="6rem" height="6rem" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 3L2.49999 3.00002C1.67157 3.00002 0.999999 3.67159 0.999999 4.50002V9.50002C0.999999 10.3284 1.67157 11 2.5 11H7.50002C7.63263 11 7.75981 11.0527 7.85358 11.1465L9.99999 13.2929V11.5C9.99999 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3284 14 9.50002V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11928 15 4.5V9.50002C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8535L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50002V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z"
                fill="#ffffff"
              />
              <text x="50%" y="50%" fill="#ffffff" dominantBaseline="middle" textAnchor="middle" fontSize="0.25rem">It&apos;s me</text>
            </svg>
          </div>
          <h1>Thanh Nguyen</h1>
          <p> I am a software engineer specializing in crafting cutting-edge solutions, with expertise in programming languages, web development, and applying machine learning techniques </p>
          <div style={{display:'flex', alignSelf:'center', marginTop:'1rem'}}><ConnectButton /></div>
        </div>
        <div className="right-side">
          <div style={{position: 'relative', width: '100%', height: 'auto'}}></div>
            <Image
              src="/homepage/myself.png"
              alt="Myself"
              width={naturalWidth}
              height={naturalHeight}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
        </div>
      </div>
    </div>  
  );
}
