import { PrismTheme } from "prism-react-renderer";

const expressotsLightTheme: PrismTheme = {
    plain: {
        color: "#111111", // Dark gray/black for general text
        backgroundColor: "#ffffff", // White background
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "#6a737d", // Gray for comments
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "inserted"],
            style: {
                color: "#22863a", // Green for strings
            },
        },
        {
            types: ["number", "constant", "builtin", "char", "symbol"],
            style: {
                color: "#d73a49", // Red for numbers and constants
            },
        },
        {
            types: ["variable", "operator", "entity"],
            style: {
                color: "#e36209", // Yellow/Orange for variables and operators
            },
        },
        {
            types: ["function", "keyword"],
            style: {
                color: "#005cc5", // Blue for functions and keywords
            },
        },
        {
            types: ["class-name", "tag"],
            style: {
                color: "#111111", // Black for class names and tags
                fontWeight: "bold",
            },
        },
        {
            types: ["attr-name"],
            style: {
                color: "#032f62", // Darker blue for attribute names
            },
        },
        {
            types: ["punctuation", "selector"],
            style: {
                color: "#333333", // Dark gray for punctuation
            },
        },
        {
            types: ["deleted"],
            style: {
                color: "#d73a49", // Red for deletions
                fontStyle: "italic",
            },
        },
        {
            types: ["important", "bold"],
            style: {
                fontWeight: "bold",
            },
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["underline"],
            style: {
                textDecorationLine: "underline",
            },
        },
    ],
};

export default expressotsLightTheme;
