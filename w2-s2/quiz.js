const data = [
    {
        "label": "Which global object works across all JavaScript environments (Browser, Node.js, Web Workers)?",
        "options": ["window", "global", "globalThis", "self"],
        "ans": "globalThis"
    },
    {
        "label": "Why can't require() directly access variables or functions inside another file?",
        "options": [
            "Because Node.js blocks access for security", 
            "Because each file is wrapped inside a module scope", 
            "Because variables are private by default in JavaScript", 
            "Because require() only imports JSON files"
        ],
        "ans": "ecause each file is wrapped inside a module scope"
    },
    {
        "label": "Why does Node.js protect variables and functions inside modules?",
        "options": [
            "To improve JavaScript syntax", 
            "To prevent global scope pollution", 
            "To improve browser compatibility", 
            "To support JSON parsing"
        ],
        "ans": "To prevent global scope pollution"
    },
    {
        "label": "Which statement correctly describes the difference between CommonJS and ES Modules?",
        "options": [
            "CommonJS uses import and export", 
            "ES Modules use require()", 
            "CommonJS is synchronous, ES Modules support async loading", 
            "ES Modules only work in browsers"
        ],
        "ans": "CommonJS is synchronous, ES Modules support async loading"
    }
]

module.exports = data