import Image from "next/image";
import { useEffect, useState } from "react";

export default function CNNModalRes () {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="rnn-modal-res">
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
                                        <td>86.63</td>
                                    </tr>
                                    <tr>
                                        <td>Precision</td>
                                        <td>65.3</td>
                                    </tr>
                                    <tr>
                                        <td>Recall</td>
                                        <td>67.71</td>
                                    </tr>
                                    <tr>
                                        <td>F1 Score</td>
                                        <td>66.11</td>
                                    </tr>
                                    </>
                                ): ""}
                            </table>
                        </div>   
                    </div>
                    <div className="explaination">
                        <p>
                            <span style={{fontWeight: 600}}> Tensor Board: </span>
                            The model perfroms stable in training while the validation (or testing) &apos;s performance is worse and less stable but at some point it performs better which remains a good accuracy for the testing data.
                        </p>
                        <p>
                            <span style={{fontWeight:600}}>Accuracy: </span>
                            The model has an accuracy of 86.63%, indicating a relatively high rate of correct predictions over the total number of predictions.
                        </p>
                        <p>
                            <span style={{fontWeight:600}}>Precision: </span>
                            The model shows the precision of 65.3%, which is a moderate rate of true positive predictions out of all positive predictions it makes.
                        </p>
                        <p>
                            <span style={{fontWeight: 600}}>Recall: </span>
                            The recall is 67.71%, showing that it correctly identifies a fair proportion of actual positives. 
                        </p>
                        <p>
                            <span style={{fontWeight: 600}}>F1 Score: </span>
                            The F1 score, at 66.11%, suggests a balance between precision and recall, but there&apos;s room for improvement, especially in precision.
                        </p>
                    </div>
                </div>
                <div className="conclusion">
                <span style={{fontWeight: 800}}>Conclusion: 
                    <span style={{fontWeight: 400}}> Overall, the RNN model seems to perform decently on the validation set with reasonable accuracy. However, there seems to be some discrepancy between the precision and recall, which could be addressed by further tuning the model or perhaps by gathering more representative training data.  </span>
                </span>
                </div>
            </div>
        </>
    )
}