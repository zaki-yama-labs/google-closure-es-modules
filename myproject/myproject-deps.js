goog.addDependency('../../../../myproject/bar.js', ['myproject.bar'], ['goog.string'], {'lang': 'es6'});
goog.addDependency('../../../../myproject/foo.js', ['myproject.foo'], ['goog.array', 'goog.dom', 'myproject.bar'], {});
goog.addDependency('../../../../myproject/mymodule.js', ['myproject.mymodule'], ['myproject.mymodule2'], {});
goog.addDependency('../../../../myproject/mymodule2.js', ['myproject.mymodule2'], [], {});
goog.addDependency('../../../../myproject/start.js', ['myproject.start'], ['goog.dom', 'goog.dom.TagName', 'myproject.mymodule'], {});

