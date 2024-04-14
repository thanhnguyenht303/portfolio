"use client";

import { useEffect, useState } from "react";


export default function RNNRes() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);


    return (
        <>
            <div className="rnn-result">
                <h2>Recurrent Neural Network</h2>
                <div className="content">
                    <div className="confusion-matrix">
                        <h2>Confusion Matrix</h2>
                        <div className="matrix">
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>88</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>17</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>67</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>2</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>15</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>143</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>0</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>1</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>3</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "gray" }}>7</span>
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: 500, backgroundColor: "black" }}>0</span>
                        </div>
                    </div>
                    <div className="result">
                        <h2> Result </h2>
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
                            ) : ""}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

