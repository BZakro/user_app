module.exports = {
    "env": {
        "browser": true,
        "react-native/react-native": true,
        "node": true,
        "mocha": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "commonjs": true
    },
    "plugins": [
        "react", "react-native", "react-hooks"
    ],
    "globals": {
        "BEATIT_STORAGE": true
    },
    "rules": {
        "global-require": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "error",
        "camelcase": "off",
        "no-throw-literal": "off",
        "comma-dangle": ["error", "never"],
        "no-trailing-spaces": "error",
        "eqeqeq": ["error", "always"],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", { "max": 2 }],
        "no-restricted-syntax": "off",
        "no-use-before-define": "warn",
        "consistent-return": "off",
        "indent": ["error", 2, {
            "ignoredNodes": ["TemplateLiteral"]
        }],
        "max-len": ["error", 120],
        "no-return-assign": 0,
        "no-plusplus": 0,
        "object-curly-newline": 0,
        "template-curly-spacing": "off",
        "arrow-parens": 0,
        "radix": "off",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "react/jsx-filename-extension": "off",
        "react/prop-types": 0,
        "react/state-in-constructor": 0,
        "react/require-default-props": 0,
        "react/no-access-state-in-setstate": 0,
        "react/static-property-placement": 0,
        "react/style-prop-object": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-fragments": "off",
        "react/jsx-max-props-per-line": [1, { "maximum": 1 }],
        "react/no-unescaped-entities": "off",
        "react/destructuring-assignment": "warn",
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 1,
        "react-native/no-raw-text": 2,
        "react/sort-comp": 0
    }
};
