// prettier.config.js
module.exports = {
    useTabs: false, // Use spaces instead of tabs for indentation
    tabWidth: 4, // Each indentation = 4 spaces

    // ---------- JS / General ----------
    semi: true, // Always add semicolons at the end of statements
    singleQuote: false, // Use double quotes instead of single quotes
    trailingComma: "es5", // Add trailing commas in ES5-valid places (objects, arrays, etc.)
    bracketSpacing: true, // Add spaces inside object literals: { foo: bar }
    endOfLine: "lf", // Use LF (Unix/Mac style) line endings for consistency

    // ---------- HTML ----------
    bracketSameLine: false, // Put closing > of multiline HTML/JSX elements on a new line
    htmlWhitespaceSensitivity: "ignore", // Preserve whitespace/line breaks in HTML instead of collapsing them

    // ---------- CSS ----------
    singleAttributePerLine: true, // Force attributes in HTML/CSS-in-JS to break into multiple lines when multiline
};
