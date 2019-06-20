goog.provide('myproject.foo');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('myproject.bar');

myproject.foo.start = () => {
  myproject.bar.sayHello();
};
