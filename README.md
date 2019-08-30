# Boilerplate для frontend разработки

## Используемые технологии

* Система сборки gulp.

* Bundler webpack.

* HTML шаблонизатор pug.

* CSS постпроцессор PostCSS.

## Основные возможности

* Проверка CSS линтером stylelint.

* Автоматическое обновление страницы при разработке при помощи Browsersync.

* Автоматическая сборка svg спарайта.

## Начало работы

В папке со сборщиком выполнить команду:

```bash
npm install
```

Для начала работы выполнить команду `npm run start`.

## Скрипты

* `npm run start` - основной скрипт, сборка проекта, `watch` и `server`.

* `npm run build` - сборка проекта для продакшена.

* `npm run webpack` - сборка скриптов.

* `npm run webpack-production` - сборка скриптов для продакшена.

* `npm run stylelint` - проверка и исправление CSS файлов линтером stylelint.

[Документация](https://github.com/alkorlos/bundler/tree/master/docs) для этой конфигурации сборщика.
