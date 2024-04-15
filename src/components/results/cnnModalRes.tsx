import Image from "next/image";
import { useEffect, useState } from "react";

export default function CNNModalRes () {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="modal-res">
                <h2>Convolutional Neural Network</h2>
                <div className="content">
                    <div className="result">
                        <Image src="/climate-change-project-image/resultImage/cnn-tensor-res.png" 
                            width={700} height={500} alt="cnn tensor" />
                        <div className="matrix-metric">
                        <div className="matrix">
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "black" }}>85</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>4</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "black" }}>66</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>3</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>4</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>16</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>2</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "black" }}>140</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>6</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "gray" }}>15</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2rem", fontWeight: 500, backgroundColor: "black" }}>0</span>
                        </div>
                            <table>
                                {isClient ? (
                                    <>
                                    <tr>
                                        <th>Evaluation Metric</th>
                                        <th>Value (%)</th>
                                    </tr>
                                    <tr>
                                        <td>Accuracy</td>
                                        <td>84.59</td>
                                    </tr>
                                    <tr>
                                        <td>Precision</td>
                                        <td>67.2</td>
                                    </tr>
                                    <tr>
                                        <td>Recall</td>
                                        <td>66.16</td>
                                    </tr>
                                    <tr>
                                        <td>F1 Score</td>
                                        <td>66.41</td>
                                    </tr>
                                    </>
                                ): ""}
                            </table>
                        </div>   
                    </div>
                    <div className="explaination">
                        <p>
                            <span style={{fontWeight: 600}}> Tensor Board: </span>
                            Both training and validation (testing) accuracy trends are converging and increasing overtime. However, the training is more stable but the validation is having higher accuracy. 
                        </p>
                        <p>
                            <span style={{fontWeight:600}}>Accuracy: </span>
                            The model correctly predicts 84.59% of the data, indicating a fairly high level of overall correctness.
                        </p>
                        <p>
                            <span style={{fontWeight:600}}>Precision: </span>
                            The model has a precision rate of 67.2%, which means that when it predicts a positive result, it is correct 67.2% of the time.
                        </p>
                        <p>
                            <span style={{fontWeight: 600}}>Recall: </span>
                            The model has recall rate of 66.16%, representing the fraction of actual positives correctly identified by the model. 
                        </p>
                        <p>
                            <span style={{fontWeight: 600}}>F1 Score: </span>
                            An F1 Score of 66.41% suggests a balanced compromise between precision and recall, emphasizing their equal importance.
                        </p>
                    </div>
                </div>
                <div className="conclusion">
                <span style={{fontWeight: 800}}>Conclusion: 
                    <span style={{fontWeight: 400}}> Overall, the CNN model demonstrates a solid general accuracy, however, the moderate precision, recall, and F1 score reveal challenges in its detailed predictive capabilities, particularly in distinguishing between classes with precision.  </span>
                </span>
                </div>
            </div>
        </>
    )
}