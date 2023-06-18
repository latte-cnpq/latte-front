import React, { useState } from 'react';
import { Container } from './styles';
import CytoscapeComponent from 'react-cytoscapejs';


const GraphRender = () => {
  const graphData = {
    nodes: [
      { data: { id: "1", label: "ID 1", type: "researcher" } },
      { data: { id: "2", label: "INST 1", type: "institute" } },
      { data: { id: "3", label: "ID 2", type: "researcher" } },
      { data: { id: "4", label: "INST 2", type: "institute" } },
    ],
    edges: [
      {
        data: { source: "1", target: "2", label: "Node2", type: "first" }
      },
      {
        data: { source: "3", target: "4", label: "Node4", type: "edge2" }
      }
    ]
  };
  const graphDataTest ={
    "edges": [
      {
        "data": {
          "count": 1,
          "source": "8f566c72-9109-4ebe-b890-453366482022",
          "target": "0163b402-ea23-4d2e-b36d-b6a8aac2d128"
        }
      }
    ],
    "nodes": [
      {
        "data": {
          "count": 1,
          "id": "0163b402-ea23-4d2e-b36d-b6a8aac2d128",
          "label": "Leonardo Lima dos Santos"
        }
      },
      {
        "data": {
          "count": 2,
          "id": "8f566c72-9109-4ebe-b890-453366482022",
          "label": "Michael Maia Mincarone"
        }
      }
      ,
      {
        "data": {
          "count": 4,
          "id": "8f566c72-9109-4ebe-b890-4533664820222",
          "label": "Teste"
        }
      }
    ],
  }

  const [upperLimit, setUpperLimit] = useState(3);
  const [lowerLimit, setLowerLimit] = useState(2);
  const [thirdColor, setThirdColor] = useState("pink");
  const [secondColor, setSecondColor] = useState("green");
  const [firstColor, setFirstColor] = useState("orange");

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
        backgroundColor: "#4a56a6",
        width: 30,
        height: 30,
        label: "data(label)",
        "overlay-padding": "6px",
        "z-index": "10",
        "text-outline-color": "#4a56a6",
        "text-outline-width": "2px",
        color: "white",
        fontSize: 20
      }
    },
    {
      selector: "node:selected",
      style: {
        "border-width": "6px",
        "border-color": "#AAD8FF",
        "border-opacity": "0.5",
        "background-color": "#77828C",
        width: 50,
        height: 50,
        "text-outline-color": "#77828C",
        "text-outline-width": 3
      }
    },
    {
      selector: "node[type='institute']",
      style: {
        shape: "rectangle"
      }
    },
    {
      selector: "node",
      style: {
        'background-color'(n){
          if (n.data("count") >= upperLimit){
            return thirdColor}
          else if(n.data("count") >= lowerLimit )
            return secondColor
          else return firstColor
        }

      }
    },
    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "red",
        "target-arrow-shape": "none",
      }
    }/* , 
    {
      selector: "edge[count>= 3]",
      style: {
        width: 3,
        "line-color": "blue",
        "target-arrow-shape": "none",
      }
    },
    {
      selector: "edge[count>= 6]",
      style: {
        
        width: 3,
        "line-color": "yellow",
        "target-arrow-shape": "none",
      }
    }, */
    

  ];

  return (

    <CytoscapeComponent
      elements={CytoscapeComponent.normalizeElements(graphDataTest)}
      // pan={{ x: 200, y: 200 }}
      wheelSensitivity= {0.7}
      style={{ width: '100%', height: '100%', border: "1px solid black" }}
      zoomingEnabled={true}
      maxZoom={1.5}
      minZoom={0.3}
      autounselectify={false}
      boxSelectionEnabled={true}
      layout={layout}
      stylesheet={styleSheet}
    />


  );
};

export default GraphRender;
