import Image from "next/image";

export default function Model() {


    return (
        <>
            <div className="intro-cnn-model" >
                <h2> Convolutional Neural Network </h2>
                <div className="cnn-model">
                    <div className="model">
                        <h2> CNN Model </h2>
                        <Image src='/climate-change-project-image/models/CNN-model.png' alt="CNN Model" width={600} height={500} />
                    </div>
                    <div className="cnn-layer-exp">
                        <h2> How CNN works</h2>
                        <Image src='/climate-change-project-image/models/cnn-layer-explain.png' alt="Convolution Layer Explaination" width={600} height={500} />
                    </div>
                </div>
            </div>
        </>
    )
}