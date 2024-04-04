import dynamic from 'next/dynamic';
const MermaidChart = dynamic(() => import('./mermaidChart'), {
    ssr: false
})



const Chart = () => {

    const chart1 = `
    %%{
        init: {
          'theme': 'base',
          'themeVariables': {
            'primaryColor': '#38105e',
            'primaryTextColor':  '#ffffff',
            'lineColor': '#ffffff',
            'secondaryColor': '#29248a',
            'secondaryTextColor': '#080807'
          }
        }
      }%%
    flowchart TB
        A([Grayscale Images]) == Binary threshold and cv2.connectedComponents ==>  B([Connected Component Images])
        B == cv.findContours and predefined criteria ==> E([Region of non Interest]) & D([ROI - Region of Interest])
    `
    const chart2 = `
    %%{
        init: {
          'theme': 'base',
          'themeVariables': {
            'primaryColor': '#38105e',
            'primaryTextColor':  '#ffffff',
            'lineColor': '#ffffff',
            'secondaryColor': '#29248a',
            'secondaryTextColor': '#080807'
          }
        }
      }%%
    flowchart TB;
        A([ROI - Region of Interest]) == Coordination's calculation ==> B([Coordination for ROI]);
        B == Take the 15x15 area square each ROI coordination ==> C([Data set with 225 features of pressure data]);
    `

    const chart3 = `
    mindmap
    root(Techniques)
        Binary threshold
        :::urgent large
            Converts grayscale to black and white
            Separates image into foreground, background
            Threshold sets black/white cutoff
        cv2.connectedComponent
        :::urgent large
            Identifies distinct objects in binary images
            Returns the count of objects and labeled images
        cv.findContours
        :::urgent large
            Detects contours in binary images
            Returns countours and their hierarchy
            Outputs vector of contour points
        
    `
    return (
        <div style={{display: "flex", justifyContent:"center"}}>
        <div className="chart-explain1">
            <MermaidChart chart={chart1}/>
            <MermaidChart chart={chart2}/>
            <MermaidChart chart={chart3} />
        </div>
        </div>
  )
}

export default Chart;
