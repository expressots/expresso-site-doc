import { PrismTheme } from "prism-react-renderer";

const expressotsDarkTheme: PrismTheme = {
    plain: {
        color: "#e4e4e4", // Light gray/white for general text - better contrast
        backgroundColor: "#1e1e1e", // Darker background for better contrast
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "#6a9955", // Keep green only for comments
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "inserted"],
            style: {
                color: "#ce9178", // Warm orange/peach for strings - better contrast
            },
        },
        {
            types: ["number", "constant", "builtin", "char", "symbol"],
            style: {
                color: "#b5cea8", // Light green for numbers - subtle brand color
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
                color: "#569cd6", // Blue for functions and keywords - better contrast
            },
        },
        {
            types: ["class-name", "tag"],
            style: {
                color: "#4ec9b0", // Aqua/cyan for class names - subtle brand accent
            },
        },
        {
            types: ["attr-name"],
            style: {
                color: "#92c5f7", // Light blue for attribute names
            },
        },
        {
            types: ["punctuation", "selector"],
            style: {
                color: "#d4d4d4", // Light gray for punctuation
            },
        },
        {
            types: ["deleted"],
            style: {
                color: "#f48771", // Red/orange for deletions
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
