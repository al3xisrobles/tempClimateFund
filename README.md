### Does the code work? If not, what's broken?
Yes, the code works flawlessly.

### How is the code better than what the team currently has?
Includes a cancel button that improves the user interface compared to the current implementation.

### How is the code worse?
The prototype only allows editing of the current text block and does not support adding new text blocks. Also lacks a backend to save changes persistently if the browser tab closes.

### How many tries did it take to get the code? Main struggles?
It took one try. No significant struggles were encountered. ChatGPT-4o provided accurate and efficient code on the first attempt.

### Overall impression of the experience
The experience was very easy and efficient. ChatGPT-4o proved to be a highly capable model for rapid prototyping and generating reliable code.

# Evanston Climate Fund Web App Prototype

### What the code is doing
- Editable text box that render Markdown as HTML
- Save and Cancel buttons for editing text

### Structure and function
- src/App.jsx: Main application component
- src/components/EditableTextBox.jsx: Editable text box component. Uses `showdown`, an npm package, to convert from markup to HTML.
- src/index.css: Tailwind CSS configuration
