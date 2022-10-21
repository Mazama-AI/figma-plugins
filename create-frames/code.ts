// This file holds the main code for the plugin. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

// Runs this code if the plugin is run in Figma
// This plugin creates 5 rectangles on the screen.
const numberOfFrames = 10;

const nodes: SceneNode[] = [];
for (let i = 0; i < numberOfFrames; i++) {
  for (let j = 0; j < 5; j++) {
    const frame = figma.createFrame();
    frame.x = j * 150;
    frame.y = i * 150;
    frame.fills = [{ type: "SOLID", color: { r:.6, g: 0.5, b: 0 } }];
    figma.currentPage.appendChild(frame);
    nodes.push(frame);
  }
}
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();

