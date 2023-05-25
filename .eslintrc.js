module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  extends: ["plugin:vue/recommended", "plugin:vue/base"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },
  rules: {
    "max-len": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": "off",
    "no-tabs": "off",
    "linebreak-style": "off",
    "vue/name-property-casing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
}