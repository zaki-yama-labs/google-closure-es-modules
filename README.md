### deps.js

```
goog.addDependency('dom/forms.js', ['goog.dom.forms'], ['goog.structs.Map']);
```

引数は順に
1. 対象ファイル(base.jsからの相対パス)
2. 対象ファイルが提供するnamespace (`goog.provide()`)
3. 対象ファイルが必要とするnamespace (`goog.require()`)

### [Using DepsWriter  |  Closure Library  |  Google Developers](https://developers.google.com/closure/library/docs/depswriter?hl=ja)

`--root_with_prefix`

サンプルでは

```zsh
- closure-library/
  - closure/
    - bin/
      - build/
        - depswriter.py
    - goog/
      - base.js # ここを起点にprefixをつける

  - myproject/
    - foo.js
    - myproject-deps.js
  - index.html
```

実際のディレクトリは

```zsh
- node_modules/
  - google-closure-library/
    - closure/
      - bin/
        - build/
          - depswriter.py
      - goog/
        - base.js # ここを起点にprefixをつける

- myproject/
  - foo.js
  - myproject-deps.js
- index.html
```
