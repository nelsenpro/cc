
# cc.js Documentation

cc.js, also known as CodeCanvas.js, is a lightweight JavaScript library that enables the execution of JavaScript and application of CSS dynamically within HTML documents using the `<cc>` tag. This document provides an overview of the library's features, usage instructions, and API reference.

## Table of Contents

1. [Features](#Features)
2. [Installation](#Installation)
3. [Usage](#Usage)
   - [Example 1: Execute JavaScript Code](#example-1-execute-javascript-code)
   - [Example 2: Apply CSS Styles](#example-2-apply-css-styles)
   - [Example 3: Execute JSON Object](#example-3-execute-json-object)
   - [Example 4: Dynamically Change Background Color](#example-4-dynamically-change-background-color)
   - [Example 5: Copy Text to Clipboard](#example-5-copy-text-to-clipboard)
   - [Example 6: Typing Animation](#example-6-typing-animation)
4. [API Reference](#api-reference)
5. [Author](#Author)
6. [License](#license)

## Features

- Execute JavaScript code dynamically within HTML documents.
- Apply CSS styles dynamically using the `<cc>` tag.
- Support for executing JSON objects containing CSS and JavaScript code.
- Utility functions for common tasks such as copying to clipboard and typing text.

## Installation

To use cc.js in your project, you can include it directly in your HTML file using a `<script>` tag or integrate it with your build process using a module bundler like Webpack or Rollup.

```html
<script src="cc.js"></script>
```
###### CDN
```html
 <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js" defer></script>
```

## Usage

### Example 1: Execute JavaScript Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cc.js Example - Execute JavaScript</title>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js"></script>
</head>
<body>
    <cc>
        console.log('Hello, world!');
    </cc>
</body>
</html>
```

### Example 2: Apply CSS Styles

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cc.js Example - Apply CSS Styles</title>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js"></script>
</head>
<body>
    <cc>
            body {
                background-color: lightblue;
            }
    </cc>
</body>
</html>
```

### Example 3: Execute JSON Object

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cc.js Example - Execute JSON Object</title>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js"></script>
</head>
<body>
    <cc>
        {
            "css": [
                {
                    "selector": "h1",
                    "styles": {
                        "color": "red",
                        "font-size": "24px"
                    }
                }
            ],
            "js": [
                "console.log('JSON execution')"
            ]
        }
    </cc>
    <h1>This heading will be styled in red with a font size of 24px</h1>
</body>
</html>
```

### Example 4: Dynamically Change Background Color

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cc.js Example - Dynamically Change Background Color</title>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js"></script>
</head>
<body>
    <cc>
            // Dynamically change background color
            document.body.style.backgroundColor = 'lightblue';
    </cc>
    <h1>Welcome to our website!</h1>
</body>
</html>
```

### Example 5: Copy Text to Clipboard

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cc.js Example - Copy Text to Clipboard</title>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js"></script>
</head>
<body>
    <button onclick="copyText()">Copy Text</button>
    <cc id="copyTextScript">
            // Function to copy text to clipboard
            function copyText() {
                ccRun.copyToClipboard('Text copied successfully!');
            }
    </cc>
</body>
</html>
```

### Example 6: Typing Animation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cc.js Example - Typing Animation</title>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/cc/cc.js"></script>
</head>
<body>
    <p id="typingText"></p>
    <cc id="typingScript">
            // Function to type text with animation
            ccRun.typeText(document.getElementById('typingText'), 'Hello, world!', 100);
    </cc>
</body>
</html>
```

## API Reference

### ccRun.execute()
- Description: Executes JavaScript and applies CSS dynamically within HTML documents.
- Syntax: `ccRun.execute()`

### ccRun.copyToClipboard(text)
- Description: Copies the specified text to the clipboard.
- Parameters:
  - `text` (string): The text to be copied.
- Returns: `true` if copying was successful, `false` otherwise.

### ccRun.typeText(element, text, delay)
- Description: Types out text within a specified HTML element with a specified delay between characters.
- Parameters:
  - `element` (HTMLElement): The HTML element where the text will be typed.
  - `text` (string): The text to be typed.
  - `delay` (number): The delay (in milliseconds) between typing each character.

## Author
cc.js was created by Nelsen Niko.

## License

cc.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
