# Evanston Climate Fund Web App Prototype

## Summary

### What the code is doing
- Editable text box that render Markdown as HTML
- Save and Cancel buttons for editing text

### Structure and function
- src/App.jsx: Main application component
- src/components/EditableTextBox.jsx: Editable text box component. Uses `showdown`, an npm package, to convert from markup to HTML.
- src/index.css: Tailwind CSS configuration

## My ChatGPT Prompt:

```
My project for the Evanston Climate Fund is designed to allow administrators from various cities to create and customize their own climate fund pages. The tech stack is diverse, incorporating a variety of tools and technologies to achieve a dynamic, user-friendly platform. I use React x Vite x Tailwind to create this webpage. Let's make a frontend mockup of the web app.

The goal: to make each text box a component that's editable similar to a basic CMS. So, when in admin mode, you should be able to hover over the text block and click to edit it, replace some text, then press save or cancel. However, we don’t expect site admins to know HTML, so we should have the text boxes be edited with markup, but rendered (on save) to HTML with the showdown package from npm.

Let’s start by creating our web app with site. Give me the commands to get this React x Vite app up and running with tailwind.
```

## Assignment Questions

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
