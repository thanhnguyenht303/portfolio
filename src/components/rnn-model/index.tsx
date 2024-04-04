import dynamic from "next/dynamic";
const MermaidChart = dynamic(() => import('./chart'), {
    ssr: false
});

const RNNChart = () => {

    const chart = `
        
    `


    return(
        <>
        </>
    )
};

export default RNNChart;