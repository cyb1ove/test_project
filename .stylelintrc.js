const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  "extends": ["stylelint-config-standard-scss"],
  "plugins": ["stylelint-order", "stylelint-declaration-block-no-ignored-properties"],
  "rules": {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
    "selector-class-pattern": null,
    "declaration-empty-line-before": [
      "always",
      {
        "ignore": [
          "after-comment",
          "after-declaration",
          "first-nested",
          "inside-single-line-block"
        ]
      }
    ],
    "string-quotes": "single",
    "plugin/declaration-block-no-ignored-properties": true
  }
}
