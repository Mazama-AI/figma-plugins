// This file holds the main code for the plugin. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

// Runs this code if the plugin is run in Figma
// This plugin creates 5 rectangles on the screen.
const fs = require("fs")
const testFolder = './ebt-card-lib'
const numberOfFrames = 10;

const cardLib = () => {
  fs.readdirSync(testFolder).forEach((file: any) => {
    console.log(file)
  })
}

const nodes: SceneNode[] = [];
const generateFrames = () => {
  cardLib();
  if (nodes.length > 0) {
    console.log(nodes)
    return;
  } else {
    for (let i = 0; i < numberOfFrames; i++) {
      for (let j = 0; j < numberOfFrames; j++) {
        let R = Math.random()
        let G = Math.random()
        let B = Math.random()
        const frame = figma.createFrame();
        frame.x = i * 150;
        frame.y = j * 150;
        frame.fills = [{ type: "SOLID", color: { r: 10, g: G, b: B } }];
        frame.fills
        figma.currentPage.appendChild(frame);
        nodes.push(frame);
      }
    }
  }
}
generateFrames();

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();

