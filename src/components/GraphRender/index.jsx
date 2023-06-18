import CytoscapeComponent from 'react-cytoscapejs';
import { useTheme } from 'styled-components';


const GraphRender = ({graphData, upperLimit, lowerLimit, colors, isLoading}) => {

  const theme = useTheme();

  const layout = {
    name: "random",
    fit: true,
    directed: false,
    padding: 500,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: true
  };

  const styleSheet = [
    {
      selector: "node",
      style: {
        width: 30,
        height: 30,
        label: "data(label)",
        "z-index": "10",
        color: "white",
        fontSize: 20,
        'background-color'(n){
          if (n.data("count") >= upperLimit){
            return colors.thirdColor}
          else if(n.data("count") >= lowerLimit )
            return colors.secondColor
          else return colors.firstColor
        }, 
       
      }
    },
    {
      selector: "node:selected",
      style: {
        "border-width": "3px",
        "border-color": "#AAD8FF",
        "border-opacity": "0.3",
        "background-color": "#77828C",
        width: 30,
        height: 30,
      }
    },
    {
      selector: "node[type='institute']",
      style: {
        shape: "rectangle"
      }
    },
    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": theme.colors.bordersAndFocusRing,
        "target-arrow-shape": "none",
      }
    }
  ];

  
  return (
    <>
      {
      !isLoading && graphData && 
      <CytoscapeComponent
        elements={CytoscapeComponent.normalizeElements(graphData)}
        wheelSensitivity= {0.7}
        style={{ width: '100%', height: '100%' }}
        zoomingEnabled={true}
        maxZoom={1.5}
        minZoom={0.3}
        autounselectify={false}
        boxSelectionEnabled={true}
        layout={layout}
        stylesheet={styleSheet}
      />
      }
    </>

  );
};

export default GraphRender;
