import Image from "next/image";
import PreprocessImage from "@/components/preprocessImage";

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
                            <Image src="/climate-change-project-image/ROI-introduction/cut-off-low.png" width={200} height={200} alt=""></Image>
                            <div>
                                <p style={{fontWeight: 800, fontSize: 24}}> Cut-off Low (COL) </p> 
                                <p> A low-pressure system that becomes isolated from the main atmospheric flow, often resulting in extended periods of precipitation or stormy weather. It is characterized by its separation from the main jet stream, which slows its movement.</p>
                            </div>
                        </div>
                        <div className="single-img">
                            <Image src="/climate-change-project-image/ROI-introduction/closed-low.png" width={200} height={200} alt=""></Image>
                            <div>
                                <p style={{fontWeight: 800, fontSize: 24}}> Closed Low (CL) </p> 
                                <p> A low-pressure area with winds circulating completely around the center, leading to a variety of weather conditions including storms and rainfall. It is defined by its enclosed circulation, distinguishing it from open wave systems.</p>
                            </div>
                        </div>
                        <div className="single-img">
                            <Image src="/climate-change-project-image/ROI-introduction/cut-off-high.png" width={200} height={200} alt=""></Image>
                            <div>
                                <p style={{fontWeight: 800, fontSize: 24}}> Cut-off High (COH) </p> 
                                <p> An isolated high pressure system cut off from the main jet stream, leading to prolonged dry or warm weather conditions. It typically causes clear skies and suppresses cloud formation and precipitation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-preprocessing">
                    <h1>Image Pre-processing</h1>
                    <div className="technique-explain">
                    Applying binary thresholding in `OpenCV` to simplify grayscale images into binary form facilitating the distinction between distinct components by setting pixel values to either black or white based on a defined threshold. Following this, the `cv2.connectedComponents` function labels each connected region in the binary image with a unique identifier, effectively grouping and differentiating connected pixels. The process involves iterating through each identified component to create masks for individual regions while excluding the background, and saving these as separate component images. Each component image is then processed to highlight contours using the `cv.drawContours` method. Utilizing predefined criteria, contours are classified into regions of interest and non-regions of interest. For every region of interest, calculations are performed to determine the coordinates of each region&apos;s center, facilitating precise analysis and manipulation of the image&apos;s components. This methodical approach streamlines the task of isolating and analyzing specific parts of complex images, making it particularly useful for applications that require detailed, component-level image analysis.
                    </div>
                    <PreprocessImage />
                    <div>

                    </div>
                </div>
                <div className="model-present">
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

