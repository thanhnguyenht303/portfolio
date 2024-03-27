import Image from "next/image";

export default function climateChangeProject() {
    return (
        <>
            <div className="project1-content">
                <h1>Analyzing Climate Change with Advanced Machine  Learning Techniques</h1>
                <p>Climate change is intensifying extreme weather events and disrupting atmospheric circulation patterns, leading to increasingly unpredictable climate behaviors.</p> 
                <div className="intro">
                    <div className="text-intro">
                        <p>Our project leverages cutting-edge machine learning and data mining algorithms to enhance the understanding and forecasting of these changes:</p>
                        <ul >
                            <li>
                                <a style={{fontWeight: 800}}>Automated Atmospheric Phenomena Detection: </a> 
                                <a style={{marginLeft: 16}}>Utilize sophisticated algorithms to automate the detection of critical weather features such as cut-off lows - COLs, closed lows - CLs, and cut-off highs - COHs. </a>
                            </li>
                            <li>
                                <a style={{fontWeight: 800}}>Deep Learning for Advanced Analysis: </a> 
                                <a style={{marginLeft: 16}}>Implement deep learning frameworks including Recurrent Neural Networks - RNN, Deep Neural Networks - DNN, Convolutional Neural Networks - CNN, and Self-Organizing Maps - SOM to analyze complex atmospheric data. </a>
                            </li>
                            <li>
                                <a style={{fontWeight: 800}}>Predictive Modeling for Future Events: </a>
                                <a style={{marginLeft: 16}}>Employ predictive models to forecast future occurrences of COLs, utilizing current and historical data to inform our understanding of weather and climate patterns. </a>
                            </li>
                        </ul>
                    </div>
                    <div className="image-explaination">
                        <div className="single-img">
                            <Image src="/climate-change-project-image/ROI-introduction/COL_sample.png" width={250} height={250} alt=""></Image>
                            <div>
                                <p style={{fontWeight: 800, fontSize: 24}}> Cut-off Low (COL) </p> 
                                <p> A low-pressure system that becomes isolated from the main atmospheric flow, often resulting in extended periods of precipitation or stormy weather. It is characterized by its separation from the main jet stream, which slows its movement.</p>
                            </div>
                        </div>
                        <div className="single-img">
                            <Image src="/climate-change-project-image/ROI-introduction/CL_sample.png" width={250} height={250} alt=""></Image>
                            <div>
                                <p style={{fontWeight: 800, fontSize: 24}}> Closed Low (CL) </p> 
                                <p> A low-pressure area with winds circulating completely around the center, leading to a variety of weather conditions including storms and rainfall. It is defined by its enclosed circulation, distinguishing it from open wave systems.</p>
                            </div>
                        </div>
                        <div className="single-img">
                            <Image src="/climate-change-project-image/ROI-introduction/COH_sample.png" width={250} height={250} alt=""></Image>
                            <div>
                                <p style={{fontWeight: 800, fontSize: 24}}> Cut-off High (COH) </p> 
                                <p> An isolated high pressure system cut off from the main jet stream, leading to prolonged dry or warm weather conditions. It typically causes clear skies and suppresses cloud formation and precipitation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}