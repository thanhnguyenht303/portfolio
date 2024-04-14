"use client";
import { useEffect, useState } from "react"

export default function CNNRes() {

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <div className="cnn-result">
                <h2>Convolutional Neural Network</h2>
                <div className="content">
                    <div className="confusion-matrix">
                        <h2>Confusion Matrix</h2>
                        <div className="matrix">
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>85</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>4</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>66</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>3</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>4</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>16</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>2</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>140</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>6</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>15</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>0</span>
                        </div>
                    </div>
                    <div className="result">
                        <h2> Result </h2>
                        <table>
                            {isClient ? (<>
                                <tr>
                                    <th>Evaluation Metric</th>
                                    <th>Value (%)</th>
                                </tr>
                                <tr>
                                    <td>Accuracy</td>
                                    <td>84.6</td>
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
                            ) : ""}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}