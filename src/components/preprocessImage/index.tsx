import PreprocessImage from './showImage';
import Chart from './techniqueExplain';

const preprocessImage = () => {
    return (
        <>
            <Chart />
            <div style={{marginTop: "1.5rem", marginBottom: "1.5rem"}}></div>
            <PreprocessImage />
        </>
    )
}

export  default preprocessImage;