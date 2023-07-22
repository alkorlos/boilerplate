module.exports = {
	extends: './stylelint.config.rational-order.cjs',
	plugins: 'stylelint-order',
	rules: {
		// Avoid errors
		'no-descending-specificity': true, // Запретить селекторы с меньшей специфичностью после переопределяющих селекторов с более высокой специфичностью

		'declaration-block-no-duplicate-custom-properties': true, // Запретить дублирование кастомных свойств внутри блоков деклараций
		'declaration-block-no-duplicate-properties': true, // Запретить дублирование свойств внутри блоков деклараций
		'font-family-no-duplicate-names': true, // Запретить дублирование имен внутри семейств шрифтов
		'keyframe-block-no-duplicate-selectors': true, // Запретить дублирование селекторов внутри @keyframes
		'no-duplicate-at-import-rules': true, // Запретить дублирование @import
		'no-duplicate-selectors': true, // Запретить дублирование селекторов

		'block-no-empty': true, // Запретить пустые блоки
		'comment-no-empty': true, // Запретить пустые комментарии
		'no-empty-source': true, // Запретить пустой исходный код

		'function-calc-no-unspaced-operator': true, // Запретить операторы без пробелов внутри функции calc
		'keyframe-declaration-no-important': true, // Запретить !important внутри @keyframes
		'media-query-no-invalid': true, // Запретить недопустимые медиавыражения
		'named-grid-areas-no-invalid': true, // Запретить недопустимые грид-области
		'no-invalid-double-slash-comments': true, // Запретить комментарии с помощью "//"
		'no-invalid-position-at-import-rule': true, // Запретить недопустимое позиционирование правил @import
		'string-no-newline': true, // Запретить недопустимые переносы внутри строк

		'no-irregular-whitespace': true, // Запретить неправильные пробелы

		'custom-property-no-missing-var-function': true, // Запретить отсутствие функции var для кастомных свойств
		'font-family-no-missing-generic-family-keyword': true, // Запретить отсутствие общего имени шрифта (sans-serif, serif) внутри семейства шрифта

		'function-linear-gradient-no-nonstandard-direction': true, // Запретить нестандартные значения направления для функций линейных градиентов

		'declaration-block-no-shorthand-property-overrides': true, // Запретить краткую форму записи свойств если они переопределяют развернутую запись

		'selector-anb-no-unmatchable': true, // Запретить неподходящие селекторы An+B

		'annotation-no-unknown': true, // Запретить неизвестные аннотации
		'at-rule-no-unknown': [ // Запретить неизвестные директивы
			true,
			{
				'ignoreAtRules': [ // Не считаются нарушениями
					'import-glob'
				]
			}
		],
		'function-no-unknown': true, // Запретить неизвестные функции
		'media-feature-name-no-unknown': true, // Запретить неизвестные медиафичи
		'property-no-unknown': true, // Запретить неизвестные свойства
		'selector-pseudo-class-no-unknown': true, // Запретить неизвестные псевдоклассы
		'selector-pseudo-element-no-unknown': true, // Запретить неизвестные псевдоэлементы
		'selector-type-no-unknown': [ // Запретить неизвестные селекторы
			true,
			{
				'ignore': [ // Игнорировать
					'custom-elements' // Пользовательские элементы
				],
			},
		],
		'unit-no-unknown': true, // Запретить неизвестные единицы измерения

		// Enforce conventions
		// Allowed, disallowed & required
		// At-rule
		'at-rule-no-vendor-prefix': true, // Директива: запретить вендорные префиксы

		// Color
		'color-named': 'never', // Цвета: запретить именованные
		'color-no-hex': true, // Цвета: запретить hex цвета

		// Function
		'function-disallowed-list': ['rgba', 'hsla', 'rgb', 'hsl'], // Функции: запретить функции из списка

		// Length
		'length-zero-no-unit': true, // Длина: запретить единицы для нулевого значения

		// Media feature
		'media-feature-name-no-vendor-prefix': true, // Характеристика устройства: запретить вендорные префиксы

		// Property
		'property-no-vendor-prefix': true, // Свойства: запретить вендорные префиксы

		// Value
		'value-no-vendor-prefix': true, // Значения: запретить вендорные префиксы

		// Case
		'function-name-case': 'lower', // Функции: строчные или прописные буквы: строчные
		'selector-type-case': 'lower', // Селекторы: строчные или прописные буквы: строчные
		'value-keyword-case': [ // Значения: строчные или прописные буквы
			'lower', // Строчные
			{
				'camelCaseSvgKeywords': true // Ключевые слова SVG в формате camel case
			}
		],

		// Empty lines
		'at-rule-empty-line-before': [ // Директива: пустая строка до дерективы
			'always', // Всегда
			{
				'except': [
					'first-nested', // Исключение: деректива первая в блоке
					'inside-block' // Исключение: деректива внутри блока
				],
				'ignore': [
					'after-comment', // Игнорировать: деректива после комментария
					'blockless-after-blockless' // Игнорировать: несколько деректив подряд
				]
			}
		],
		'rule-empty-line-before': [ // Селекторы: пустая строка до селектора
			'always', // Всегда
			{
				'except': [
					'first-nested', // Исключение: селектор первый в блоке
					'inside-block' // Исключение: селектор внутри блока
				],
				'ignore': ['after-comment'] // Игнорировать: селектор после комментария
			}
		],

		// Max & min
		'max-nesting-depth': [ // Ограничение глубины вложенности
			0,
			{
				'ignore': ['pseudo-classes'], // Игнорировать: псевдо классы
				'ignoreAtRules': ['media'] // Игнорировать: операторы из списка
			}
		],
		'number-max-precision': 2, // Ограничение количества десятичных знаков, разрешенных в числах
		'selector-max-id': 0, // Селекторы: максимальное количество id
		'selector-max-universal': 2, // Ограничение количества универсальных селекторов в селекторе

		// Notation
		'color-function-notation': 'modern', // Цвета: современная или устаревшая нотация для цветовых функций: современная
		'font-weight-notation': [ // font-weight
			'numeric', // Требовать числовое значение
			{
				'ignore': [
					'relative' // Игнорировать: относительные ключевые слова
				]
			}
		],
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block', // @keyframes: определить представление селекторов: однотипное представление
		'selector-not-notation': 'simple', // Нотация для селекторов псевдокласса :not(): простая
		'selector-pseudo-element-colon-notation': 'double', // Псевдоэлементы: ":" или "::" для записи: "::"

		// Quotes
		'font-family-name-quotes': 'always-unless-keyword', // Шрифты: кавычки вокруг имен семейств: да, пока не является ключевым словом
		'function-url-quotes': 'always', // Функции: кавычки для url: всегда
		'selector-attribute-quotes': 'always', // Селекторы атрибутов: кавычки для значений: всегда

		// Deprecated
		// Function
		'function-comma-newline-after': 'always-multi-line', // Функции: новая строка после ",": всегда при многострочной записи
		'function-comma-newline-before': 'never-multi-line', // Функции: новая строка до ",": никогда при многострочной записи
		'function-comma-space-after': 'always-single-line', // Функции: пробел после ",": всегда при однострочной записи
		'function-comma-space-before': 'never', // Функции: пробел до ",": никогда
		'function-max-empty-lines': 0, // Функции: максимальное число пустых строк
		'function-parentheses-space-inside': 'never-single-line', // Функции: пробелы внутри "()" по краям: никогда при однострочной записи
		'function-whitespace-after': 'always', // Функции: пробел между функциями: всегда

		// Number
		'number-leading-zero': 'always', // Числа: начальный ноль для дробных чисел: всегда
		'number-no-trailing-zeros': true, // Числа: запретить конечный ноль

		// String
		'string-quotes': 'double', // Строки: одиночные или двойные кавычки: двойные

		// Unit
		'unit-case': 'lower', // Единицы измерения: строчные или прописные буквы: строчные

		// Value list
		'value-list-comma-newline-after': 'always-multi-line', // Список значений: новая строка после ",": всегда при многострочной записи
		'value-list-comma-newline-before': 'never-multi-line', // Список значений: новая строка до ",": никогда при многострочной записи
		'value-list-comma-space-after': 'always-single-line', // Список значений: пробел после ",": всегда при однострочной запси
		'value-list-comma-space-before': 'never', // Список значений: пробел до ",": никогда
		'value-list-max-empty-lines': 0, // Список значений: максимальное число пустых строк

		// Property
		'property-case': 'lower', // Свойства: строчные или прописные буквы: строчные

		// Declaration
		'declaration-bang-space-after': 'never', // Декларации: пробел после "!": никогда
		'declaration-bang-space-before': 'always', // Декларации: пробел до "!": всегда
		'declaration-colon-space-after': 'always-single-line', // Декларации: пробел после ":": всегда при однострочной запси
		'declaration-colon-space-before': 'never', // Декларации: пробел до ":": никогда

		// Declaration block
		'declaration-block-semicolon-newline-after': 'always', // Блок деклараций: новая строка после ";": всегда
		'declaration-block-semicolon-newline-before': 'never-multi-line', // Блок деклараций: новая строка до ";": никогда
		'declaration-block-semicolon-space-after': 'always-single-line', // Блок деклараций: пробел после ";": всегда при однострочной записи
		'declaration-block-semicolon-space-before': 'never', // Блок деклараций: пробел до ";": никогда
		'declaration-block-trailing-semicolon': 'always', // Блок деклараций: ";" в записи свойств: всегда

		// Block
		'block-closing-brace-empty-line-before': 'never', // Блок: пустая строка до "}": никогда
		'block-closing-brace-newline-after': 'always', // Блок: новая строка после "}": всегда
		'block-closing-brace-newline-before': 'always', // Блок: новая строка до "}": всегда
		'block-closing-brace-space-after': 'always-single-line', // Блок: пробел после "}": всегда при однострочной записи
		'block-closing-brace-space-before': 'always-single-line', // Блок: пробел до "}": всегда при однострочной записи
		'block-opening-brace-newline-after': 'always', // Блок: новая строка после "{": всегда
		'block-opening-brace-space-after': 'always-single-line', // Блок: новая строка до "{": всегда при однострочной записи
		'block-opening-brace-space-before': 'always', // Блок: пробел после "{": всегда

		// Selector
		'selector-attribute-brackets-space-inside': 'never', // Селекторы атрибутов: пробелы внутри "[]" по краям: никогда
		'selector-attribute-operator-space-after': 'never', // Селекторы атрибутов: пробелы до оператора: никогда
		'selector-attribute-operator-space-before': 'never', // Селекторы атрибутов: пробелы после оператора: никогда
		'selector-combinator-space-after': 'always', // Комбинированные селекторы: пробелы после селекторов: всегда
		'selector-combinator-space-before': 'always', // Комбинированные селекторы: пробелы до селекторов: всегда
		'selector-descendant-combinator-no-non-space': true, // Комбинированные селекторы: запретить символы кроме пробелов
		'selector-max-empty-lines': 0, // Селекторы: максимальное число пустых строк
		'selector-pseudo-class-case': 'lower', // Псевдоклассы: строчные или прописные буквы: строчные
		'selector-pseudo-class-parentheses-space-inside': 'never', // Псевдоклассы: пробелы внутри "()" по краям: никогда
		'selector-pseudo-element-case': 'lower', // Псевдоэлементы: строчные или прописные буквы: строчные

		// Selector list
		'selector-list-comma-newline-after': 'always', // Список селекторов: новая строка после ",": всегда
		'selector-list-comma-newline-before': 'never-multi-line', // Список селекторов: новая строка до ",": никогда при многострочной записи
		'selector-list-comma-space-after': 'always-single-line', // Список селекторов: пробел после ",": всегда при однострочной записи
		'selector-list-comma-space-before': 'never', // Список селекторов: пробел до ",": никогда

		// Media feature
		'media-feature-colon-space-after': 'always', // Характеристика устройства: пробел после ":": всегда
		'media-feature-colon-space-before': 'never', // Характеристика устройства: пробел до ":": никогда
		'media-feature-name-case': 'lower', // Характеристика устройства: строчные или прописные буквы: строчные
		'media-feature-parentheses-space-inside': 'never', // Характеристика устройства: пробелы внутри "()" по краям: никогда
		'media-feature-range-operator-space-after': 'always', // Характеристика устройства диапазон: пробел после оператора: всегда
		'media-feature-range-operator-space-before': 'always', // Характеристика устройства диапазон: пробел до оператора: всегда

		// Media query list
		'media-query-list-comma-newline-after': 'always-multi-line', // Медиавыражение: новая строка после ",": всегда при многострочной записи
		'media-query-list-comma-newline-before': 'never-multi-line', // Медиавыражение: новая строка до ",": никогда при многострочной записи
		'media-query-list-comma-space-after': 'always-single-line', // Медиавыражение: пробел после ",": всегда при однострочной записи
		'media-query-list-comma-space-before': 'never-single-line', // Медиавыражение: пробел до ",": никогда при однострочной записи

		// At-rule
		'at-rule-name-case': 'lower', // Директива: строчные или прописные буквы: строчные
		'at-rule-name-space-after': 'always', // Директива: пробел после имени: всегда
		'at-rule-semicolon-newline-after': 'always', // Директива: новая строка после ";": всегда

		// General / Sheet
		'indentation': [ // Общие: отступ
			'tab', // Табуляция
			{
				'ignore': 'value' // Игнорировать: внутри значения
			}
		],
		'max-empty-lines': 2, // Общие: максимальное число пустых смежных строк
		'no-eol-whitespace': true, // Общие: запретить пробелы в конце строк
		'no-extra-semicolons': true, // Общие: запретить лишние ";", двойные и т.д.
		'no-missing-end-of-source-newline': true // Общие: запретить отсутствующие пустые строки в конце кода
	}
};
