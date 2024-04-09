import Image from "next/image";
import ConnectButton from "@/components/homepage/connectBut";

export default function Home() {

  return (
    <>
      <div className="homepage-container">
        <div className="content">
          <div className="left-side">
            <Image
              src="/homepage/myself.png"
              alt="Myself"
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className="right-side">
            <h1>Thanh Nguyen</h1>
            <p> I am a software engineer specializing in crafting cutting-edge solutions, with expertise in programming languages, web development, and applying machine learning techniques.
            My experience spans across academic research and industry internships, where I&apos;ve developed and executed advanced machine learning models for climate analysis, designed RESTful APIs using the Spring Boot framework, and built dynamic web interfaces with ReactJS.
            </p>
            <div style={{ display: 'flex', marginTop: '2rem', marginBottom:"2rem"}}><ConnectButton /></div>
          </div>
        </div>
      </div>
    </>
  );
}
