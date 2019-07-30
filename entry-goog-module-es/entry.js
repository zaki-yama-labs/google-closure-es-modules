goog.provide('myproject.main');

goog.require('myproject.es6module');

goog.scope(() => {
  // Destructruing is required as this will return the entire
  // module!
  const { Es6Class } = goog.module.get('myproject.es6module');
  new Es6Class().render();
});
