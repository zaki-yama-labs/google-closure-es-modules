goog.module('myproject.main');
goog.module.declareLegacyNamespace();

const Foo = goog.require('myproject.Foo');

exports.bootstrap = () => {
  const foo = new Foo();
  foo.sayHello();
}
