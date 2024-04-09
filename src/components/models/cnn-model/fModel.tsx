import Image from "next/image";

export default function FModelCNN() {


    return (
        <div className="fmodel-cnn">
            <div className="intro-cnn-model" >
                <h2> Convolutional Neural Network </h2>
                <div className="cnn-model">
                    <div className="model">
                        <h2> CNN Model </h2>
                        <Image src='/climate-change-project-image/models/CNN-model(2).png' alt="CNN Model" width={650} height={500} />
                    </div>
                    <div className="cnn-layer-exp">
                        <h2> How CNN works</h2>
                        <Image src='/climate-change-project-image/models/cnn-layer-explain.png' alt="Convolution Layer Explaination" width={650} height={500} />
                    </div>
                </div>
                <div className="cnn-model-explaination">
                    <p>The model extracts hierarchical features from the input images using convolutional layers, where early layers capture basic features like edges and later layers capture more complex patterns.</p>
                    <p>Max-pooling layers reduce the dimensionality of the feature maps, focusing on the most prominent features while reducing computational load and overfitting risk.</p>
                    <p>The flattened feature vector is processed through fully connected layers (dense layers) to learn non-linear combinations of the high-level features extracted by the convolutional layers.</p>
                    <p>Dropout layers randomly ignore a subset of neurons during training to prevent overfitting, ensuring the model generalizes better to unseen data.</p>
                </div>
            </div>
        </div>
    )
}