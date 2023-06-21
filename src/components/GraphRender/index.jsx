import CytoscapeComponent from 'react-cytoscapejs';
import { useTheme } from 'styled-components';
import cytoscape from 'cytoscape';
import cise from 'cytoscape-cise';

const GraphRender = ({ graphData, upperLimit, lowerLimit, colors, isLoading }) => {
  const theme = useTheme();
  cytoscape.use(cise);
  const layout = {
    name: 'cise', //"random"
    fit: true,
    directed: false,
    padding: 10,
    animate: false,
    animationDuration: 1000,
    refresh: 50,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: true,
  };

  const styleSheet = [
    {
      selector: 'node',
      style: {
        width: 30,
        height: 30,
        label: 'data(label)',
        'z-index': '10',
        color: 'white',
        fontSize: 20,
        'background-color': theme.colors.highContrastText,
      },
    },
    {
      selector: 'node.hover',
      style: {
        'border-width': '3px',
        'border-color': '#AAD8FF',
        'border-opacity': '0.3',
        'background-color': '#77828C',
        'text-valign': 'bottom',
        width: 30,
        height: 30,
      },
    },
    {
      selector: "node[type='institute']",
      style: {
        shape: 'rectangle',
      },
    },
    {
      selector: `edge`,
      style: {
        width: 3,
        'target-arrow-shape': 'none',
        'line-color'(n) {
          if (n.data('count') >= upperLimit) {
            return colors.thirdColor;
          } else if (n.data('count') >= lowerLimit) return colors.secondColor;
          else return colors.firstColor;
        },
      },
    },
    {
      selector: `edge.hover`,
      style: {
        width: 3,
        label: 'data(count)',
        fontSize: '20',
        color: 'white',
        'target-arrow-shape': 'none',
        'line-color'(n) {
          if (n.data('count') >= upperLimit) {
            return colors.thirdColor;
          } else if (n.data('count') >= lowerLimit) return colors.secondColor;
          else return colors.firstColor;
        },
      },
    },
  ];

  return (
    <>
      {!isLoading && graphData && (
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(graphData)}
          wheelSensitivity={0.7}
          style={{ width: '100%', height: '100%' }}
          zoomingEnabled={true}
          maxZoom={1.5}
          minZoom={0.3}
          autounselectify={false}
          boxSelectionEnabled={true}
          layout={layout}
          stylesheet={styleSheet}
          cy={(cy) => {
            cy.on('mouseover', 'edge', function (e) {
              e.target.addClass('hover');
              cy.on('mouseout', 'edge', function (e) {
                e.target.removeClass('hover');
              });
            });
          }}
        />
      )}
    </>
  );
};

export default GraphRender;
