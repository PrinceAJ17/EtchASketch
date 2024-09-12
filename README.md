# Etch-A-Sketch

A modern, interactive web-based version of the classic Etch-A-Sketch toy, built with HTML, CSS, and JavaScript.

## Features

- Customizable grid size (up to 100x100)
- Color picker for drawing
- Eraser tool
- Random color mode
- Gridlines toggle
- Reset button to clear the sketch

## How to Use

1. Open `index.html` in your web browser to start the application.
2. Use your mouse to draw on the sketch pad.
3. Adjust the grid size using the slider at the bottom.
4. Select a color using the color picker.
5. Toggle the following options:
   - Eraser: Switch to eraser mode
   - Random: Enable random color mode
   - Gridlines: Show or hide gridlines
6. Click the "RESET" button to clear the sketch pad.

## File Structure

- `index.html`: The main HTML file containing the structure of the application.
- `styles.css`: CSS file for styling the application.
- `javascript.js`: JavaScript file containing the application logic.

## Technical Details

### HTML (`index.html`)

The HTML file defines the structure of the Etch-A-Sketch application, including:
- Header with the title
- Sketch screen container
- User input section with color picker, toggles, and reset button
- Grid size slider

### CSS (`styles.css`)

The CSS file provides styling for the application, including:
- Responsive layout
- Custom styling for buttons and toggles
- Gradient backgrounds
- Hover effects

### JavaScript (`javascript.js`)

The JavaScript file handles the interactive functionality of the application:
- Creating and resizing the grid
- Implementing drawing functionality
- Handling color selection and random color mode
- Toggle functionality for eraser, random color, and gridlines
- Reset functionality
