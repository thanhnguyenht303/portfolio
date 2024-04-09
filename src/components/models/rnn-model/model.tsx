import dynamic from "next/dynamic";
import Image from "next/image";

const MermaidChart = dynamic(() => import('./chart'), {
  ssr: false
});

const Model = () => {

  const chart1 = `
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'primaryColor': '#38105e',
          'primaryTextColor':  '#ffffff',
          'lineColor': '#000000',
          'secondaryColor': '#29248a',
          'secondaryTextColor': '#080807',
          'tertiaryColor': '#ffffff'
        }
      }
    }%%
    flowchart LR
      subgraph Fold
        direction LR 
        subgraph All Layer
            direction BT
            A1((Xt)) == U ==> A2[____\n\n h \n\n ____]
            A2 == V ==> A3((Yt))
            A2 == W ==> A2
        end
      end
      subgraph Unfold
        direction LR
        subgraph L1
            direction BT
            B1((Xt-1)) == U ==> B2[____\n\n h \n\n ____]
            B2 == V ==> B3((Yt-1))
        end
        subgraph L2
            direction BT
            C1((Xt)) == U ==> C2[____\n\n h \n\n ____]
            C2 == V ==> C3((Yt))
        end
        subgraph L3
            direction BT
            D1((Xt+1)) == U ==> D2[____\n\n h \n\n ____]
            D2 == V ==> D3((Yt+1))
        end
        subgraph Ln
            direction BT
            E1[____\n\n h \n\n ____]
        end
      end
      L1 == W ==> L2
      L2 == W ==> L3
      L3 -. W .- Ln
      Fold == unfold ==> Unfold
    `





  return (
    <>
      <div className="intro-rnn-model" >
        <h2> Recurrent Neural Network - RNN </h2>
        <div className="rnn-model">
          <div className="model">
            <h2> RNN Model </h2>
            <MermaidChart chart={chart1} />
          </div>
          <div className="LSTM">
            <h2> LSTM - Long Short Term Memory</h2>
            <Image src='/climate-change-project-image/models/LSTM.png' alt='lstm model' width={500} height={400} />
          </div>
        </div>
      </div>

    </>
  )
};

export default Model; 