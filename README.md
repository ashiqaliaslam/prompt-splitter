# prompt-splitter

## Overview

The Text Splitter is a web application designed to split long text data into smaller parts based on a specified character limit. This is particularly useful when working with tools like Bing Chat, ChatGPT, or Google Bard, which have limitations on the length of data they can process at once.

## How to Use

1. Paste or type your text into the textarea.
2. Specify the maximum number of characters for each part.
3. (Optional) Enter a custom sentence to append to each part.
4. (Optional) Enter a real prompt to append to the last part.
5. Check the "Show Parts" switch to display the splitted text or not.
6. Click the 'Split Text' button to split the text.
7. The split parts will be displayed below, each with a 'Copy' button and the total character count. Click the 'Copy' button to copy the text of the part to the clipboard.

## Features

- Splits large text into smaller parts
- Customizable character length per part
- Option to append custom sentences or real prompts
- Displays split text in an organized manner

## Code Structure

The HTML file sets up the structure of the web page, including the textarea for input, the options for splitting, and the container for the output.

The CSS file defines the styles for the web page.

The JavaScript file contains the logic for splitting the text and updating the output. It adds event listeners to the textarea and the 'Split Text' button, and uses a closure to capture the value of the index variable in the loop that creates the split parts.

## Example Usage

Scenario: You have a lengthy research paper that you want to feed into Bing Chat, ChatGPT, or Google Bard to generate insights and summaries. However, these tools have limitations on the amount of text they can process at once. To address this, you can utilize this text splitter to divide your paper into manageable chunks and feed each part sequentially to the conversational AI tool.

You can also add a custom sentence to the end of each part, such as "Continued on next prompt..." or "See next prompt for more details...".

## Contributing

If you have any suggestions for improvements or would like to contribute to the development of this tool, please feel free to create a pull request or submit an issue on GitHub.

## Note

This application uses the Clipboard API to copy text to the clipboard. Some browsers may require the user's permission to access the clipboard. If the 'Copy' button is not working, please check your browser's permissions settings.
