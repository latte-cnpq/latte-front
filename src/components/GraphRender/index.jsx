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
  const graphDataTest = {
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
          "instituteLabel": "FEMASS",
          "id": "0163b402-ea23-4d2e-b36d-b6a8aac2d128",
          "label": "Leonardo Lima dos Santos"
        }
      },
      {
        "data": {
          "instituteLabel": "TESTE",
          "id": "8f566c72-9109-4ebe-b890-453366482022",
          "label": "Michael Maia Mincarone"
        }
      }
    ]
  }
  const layout = {
    name: "random",
    fit: true,
    directed: false,
    padding: 50,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false
  };

  const styleSheet = [
    {
      selector: "node",
      style: {
        backgroundColor: "#4a56a6",
        width: 30,
        height: 30,
        label: "data(researcherLabel)",
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
        "text-outline-width": 8
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
        "line-color": "red",
        "target-arrow-shape": "none",
      }
    },
    {
      selector: "edge[type='first']",
      style: {
        width: 3,
        "line-color": "yellow",
        "target-arrow-shape": "none",
      }
    },
    {
      selector: "edge[type='edge2']",
      style: {
        width: 3,
        "line-color": "blue",
        "target-arrow-shape": "none",
      }
    },
  ];

  return (

    <CytoscapeComponent
      elements={CytoscapeComponent.normalizeElements(graphDataTest)}
      // pan={{ x: 200, y: 200 }}
      style={{ width: '100%', height: '100%', border: "1px solid black" }}
      zoomingEnabled={true}
      maxZoom={1.5}
      minZoom={0.8}
      autounselectify={false}
      boxSelectionEnabled={true}
      layout={layout}
      stylesheet={styleSheet}
    />


  );
};

export default GraphRender;
