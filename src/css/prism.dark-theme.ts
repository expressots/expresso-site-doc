import { PrismTheme } from "prism-react-renderer";

const expressotsDarkTheme: PrismTheme = {
    plain: {
        color: "#6a9955", // Light gray for general text
        backgroundColor: "#2f2f2f", // Very dark gray background
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "#6a9955", // Muted green for comments
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "inserted"],
            style: {
                color: "#b5cea8", // Light green for strings
            },
        },
        {
            types: ["number", "constant", "builtin", "char", "symbol"],
            style: {
                color: "#dcdcaa", // Soft yellow for numbers and constants
            },
        },
        {
            types: ["variable", "operator", "entity"],
            style: {
                color: "#9cdcfe", // Light blue for variables and operators
            },
        },
        {
            types: ["function", "keyword"],
            style: {
                color: "#4ec9b0", // Aqua green for functions and keywords
            },
        },
        {
            types: ["class-name", "tag"],
            style: {
                color: "#569cd6", // Brighter blue for class names and tags
            },
        },
        {
            types: ["attr-name"],
            style: {
                color: "#c586c0", // Purple for attribute names
            },
        },
        {
            types: ["punctuation", "selector"],
            style: {
                color: "#d4d4d4", // Inherit light gray for punctuation
            },
        },
        {
            types: ["deleted"],
            style: {
                color: "#ff6666", // Red for deletions
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

export default expressotsDarkTheme;
