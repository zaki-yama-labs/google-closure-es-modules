Google Closure Compiler/Library with ES Modules
===============================================

ClosureでES Modules形式のモジュールを読み込むサンプル。

## Usage
### ディレクトリ構成

|ディレクトリ名|モジュール読み込み側|モジュール提供側|
|:-:|:-:|:-:|:--|
|`entry-goog-module-goog`|Closure Script|Closure Script|
|`entry-es-module-es`|ES|ES||
|`entry-goog-module-es`|Closure Script|ES|
|`entry-goog-modules-module-es`|Closure Modules|ES|

- Closure Script: `goog.provide`/`goog.require`で書かれたモジュール
- Closure Modules: `goog.module`で書かれたモジュール
- ES: `import/export`で書かれたモジュール

### 動作確認方法

```
$ npm install
$ npm start
```

するとローカルサーバーが起動するので、`http://localhost:8080/<各html>` を開いてください。

## TODO
- [x] Closure Modules x ES の組み合わせを試す
- [ ] Closure Compiler でのコンパイル
- [ ] [duck](https://github.com/teppeis/duck) を導入


## Memo

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
