# Структура репозитория

```text
bundler/
|── docs
|── gulp
|  |── tasks
|  |── config.js
|── src
|  |── files
|  |── fonts
|  |── images
|  |  |── inspections
|  |── js
|  |── styles
|  |── svg
|  |── templates
|  |  |── block
|── .babelrc
|── .editorconfig
|── .gitignore
|── License.md
|── README.md
|── gulpfile.js
|── package-lock.json
|── package.json
|── postcss.config.js
|── stylelint.config.js
|── stylelint.config.rational-order.js
|── webpack.config.js
```

* `/docs` - документация к репозиторию;
* `/gulp` - таски gulp и все пути используемые ими;
* `/gulp/tasks` - таски gulp;
* `/gulp/config.js` - пути;
* `/src` - исходные файлы проекта;
* `/src/files` - файлы;
* `/src/fonts` - шрифты;
* `/src/images` - изображения;
* `/src/images/inspections` - дизайны проекта в растровом формате;
* `/src/js` - скрипты;
* `/src/styles` - стили;
* `/src/svg` - векторная графика;
* `/src/templates` - шаблоны;
* `/src/templates/block` - блоки шаблонов;
* `.babelrc` - конфигурация JavaScript-компилятора Babel;
* `.editorconfig` - конфигурация редактора;
* `.gitignore` - конфигурация исключений git;
* `License.md` - лицензия;
* `README.md` - описание проекта;
* `gulpfile.js` - конфигурация gulp;
* `package-lock.json` - фиксация версий зависимостей;
* `package.json` - информация о проекте: название, скрипты, зависимости, browserslist и т.д;
* `postcss.config.js` - конфигурация PostCSS:
* `stylelint.config.js` - конфигурация stylelint:
* `stylelint.config.rational-order.js` - порядок свойств, селекторов и директив для stylelint:
* `webpack.config.js` - конфигурация webpack.
