module.exports = {
	extends: './stylelint.config.rational-order.js',
	plugins: 'stylelint-order',
	rules: {
		'color-hex-case': 'lower', // hex цвета: строчные или прописные буквы: строчные (Stylistic issues)
		'color-hex-length': 'long', // hex цвета: короткая или длинная запись: длинная (Stylistic issues)
		'color-no-invalid-hex': true, // hex цвета: запретить неизвестные (Possible errors)

		'font-family-name-quotes': 'always-unless-keyword', // Шрифты: кавычки вокруг имен семейств: да, пока не является ключевым словом (Stylistic issues)
		'font-family-no-duplicate-names': true, // Шрифты: запретить дублирование семейств (Possible errors)
		'font-family-no-missing-generic-family-keyword': true, // Шрифты: запретить отсутствие общих семейств (sans-serif, serif) (Possible errors)

		'function-calc-no-unspaced-operator': true, // Функции: запретить отсутствие пробелов в функции calc (Possible errors)
		'function-comma-newline-after': 'always-multi-line', // Функции: новая строка после ",": всегда при многострочной записи (Stylistic issues)
		'function-comma-newline-before': 'never-multi-line', // Функции: новая строка до ",": никогда при многострочной записи (Stylistic issues)
		'function-comma-space-after': 'always', // Функции: пробел после ",": всегда (Stylistic issues)
		'function-comma-space-before': 'never', // Функции: пробел до ",": никогда (Stylistic issues)
		'function-linear-gradient-no-nonstandard-direction': true, // Функции: исправлять ошибки в linear-gradient() (Possible errors)
		'function-max-empty-lines': 0, // Функции: максимальное число пустых строк (Stylistic issues)
		'function-name-case': 'lower', // Функции: строчные или прописные буквы: строчные (Stylistic issues)
		'function-parentheses-space-inside': 'never', // Функции: пробелы внутри "()" по краям: никогда (Stylistic issues)
		'function-url-quotes': 'always', // Функции: кавычки для url: всегда (Stylistic issues)
		'function-whitespace-after': 'always', // Функции: пробел между функциями: всегда (Stylistic issues)

		'number-leading-zero': 'always', // Числа: начальный ноль для дробных чисел: всегда (Stylistic issues)
		'number-no-trailing-zeros': true, // Числа: запретить конечный ноль (Stylistic issues)
		'length-zero-no-unit': true, // Длина: запретить единицы для нулевого значения (Stylistic issues)

		'string-no-newline': true, // Строки: запретить переносы внутри (Possible errors)
		'string-quotes': 'double', // Строки: одиночные или двойные кавычки: двойные (Stylistic issues)

		'unit-case': 'lower', // Единицы измерения: строчные или прописные буквы: строчные (Stylistic issues)

		'value-keyword-case': 'lower', // Значения: строчные или прописные буквы: строчные (Stylistic issues)
		'value-list-comma-newline-after': 'always-multi-line', // Список значений: новая строка после ",": всегда при многострочной записи (Stylistic issues)
		'value-list-comma-newline-before': 'never-multi-line', // Список значений: новая строка до ",": никогда при многострочной записи (Stylistic issues)
		'value-list-comma-space-after': 'always-single-line', // Список значений: пробел после ",": всегда при однострочной запси (Stylistic issues)
		'value-list-comma-space-before': 'never', // Список значений: пробел до ",": никогда (Stylistic issues)
		'value-list-max-empty-lines': 0, // Список значений: максимальное число пустых строк (Stylistic issues)
		'value-no-vendor-prefix': true, // Значения: запретить вендорные префиксы (Limit language features)

		'property-case': 'lower', // Свойства: строчные или прописные буквы: строчные (Stylistic issues)
		'property-no-vendor-prefix': true, // Свойства: запретить вендорные префиксы (Limit language features)

		'keyframe-declaration-no-important': true, // @keyframes: запретить !important (Possible errors)

		'declaration-bang-space-after': 'never', // Декларации: пробел после "!": никогда (Stylistic issues)
		'declaration-bang-space-before': 'always', // Декларации: пробел до "!": всегда (Stylistic issues)
		'declaration-colon-space-after': 'always-single-line', // Декларации: пробел после ":": всегда при однострочной запси (Stylistic issues)
		'declaration-colon-space-before': 'never', // Декларации: пробел до ":": никогда (Stylistic issues)

		'declaration-block-no-duplicate-properties': true, // Блок деклараций: запретить дублирование свойств (Possible errors)
		'declaration-block-no-shorthand-property-overrides': true, // Блок деклараций: запретить короткие записи свойств если они переопределяют обычную запись (Possible errors)
		'declaration-block-semicolon-newline-after': 'always', // Блок деклараций: новая строка после ";": всегда (Stylistic issues)
		'declaration-block-semicolon-newline-before': 'never-multi-line', // Блок деклараций: новая строка до ";": никогда (Stylistic issues)
		'declaration-block-semicolon-space-after': 'always-single-line', // Блок деклараций: пробел после ";": всегда при однострочной записи (Stylistic issues)
		'declaration-block-semicolon-space-before': 'never', // Блок деклараций: пробел до ";": никогда (Stylistic issues)
		'declaration-block-trailing-semicolon': 'always', // Блок деклараций: ";" в записи свойств: всегда (Stylistic issues)

		'block-closing-brace-empty-line-before': 'never', // Блок: пустая строка до "}": никогда (Stylistic issues)
		'block-closing-brace-newline-after': 'always', // Блок: новая строка после "}": всегда (Stylistic issues)
		'block-closing-brace-newline-before': 'always', // Блок: новая строка до "}": всегда (Stylistic issues)
		'block-closing-brace-space-after': 'always-single-line', // Блок: пробел после "}": всегда при однострочной записи (Stylistic issues)
		'block-closing-brace-space-before': 'always-single-line', // Блок: пробел до "}": всегда при однострочной записи (Stylistic issues)
		'block-no-empty': true, // Блок: запретить пустые блоки (Possible errors)
		'block-opening-brace-newline-after': 'always', // Блок: новая строка после "{": всегда (Stylistic issues)
		'block-opening-brace-space-after': 'always-single-line', // Блок: новая строка до "{": всегда при однострочной записи (Stylistic issues)
		'block-opening-brace-space-before': 'always', // Блок: пробел после "{": всегда (Stylistic issues)

		'selector-attribute-brackets-space-inside': 'never', // Селекторы атрибутов: пробелы внутри "[]" по краям: никогда (Stylistic issues)
		'selector-attribute-operator-space-after': 'never', // Селекторы атрибутов: пробелы до оператора: никогда (Stylistic issues)
		'selector-attribute-operator-space-before': 'never', // Селекторы атрибутов: пробелы после оператора: никогда (Stylistic issues)
		'selector-attribute-quotes': 'always', // Селекторы атрибутов: кавычки для значений: всегда (Stylistic issues)
		'selector-combinator-space-after': 'always', // Комбинированные селекторы: пробелы после селекторов: всегда (Stylistic issues)
		'selector-combinator-space-before': 'always', // Комбинированные селекторы: пробелы до селекторов: всегда (Stylistic issues)
		'selector-descendant-combinator-no-non-space': true, // Комбинированные селекторы: запретить символы кроме пробелов (Stylistic issues)
		'selector-max-id': 0, // Селекторы: максимальное количество id (Limit language features)
		'selector-pseudo-class-case': 'lower', // Псевдоклассы: строчные или прописные буквы: строчные (Stylistic issues)
		'selector-pseudo-class-parentheses-space-inside': 'never', // Псевдоклассы: пробелы внутри "()" по краям: никогда (Stylistic issues)
		'selector-pseudo-element-case': 'lower', // Псевдоэлементы: строчные или прописные буквы: строчные (Stylistic issues)
		'selector-pseudo-element-colon-notation': 'double', // Псевдоэлементы: ":" или "::" для записи: "::" (Stylistic issues)
		'selector-pseudo-element-no-unknown': true, // Псевдоэлементы: запретить неизвестные (Possible errors)
		'selector-type-case': 'lower', // Селекторы: строчные или прописные буквы: строчные (Stylistic issues)
		'selector-type-no-unknown': true, // Селекторы: запретить неизвестные (Possible errors)
		'selector-max-empty-lines': 0, // Селекторы: максимальное число пустых строк (Limit language features)

		'selector-list-comma-newline-after': 'always', // Список селекторов: новая строка после ",": всегда (Stylistic issues)
		'selector-list-comma-newline-before': 'never-multi-line', // Список селекторов: новая строка до ",": никогда при многострочной записи (Stylistic issues)
		'selector-list-comma-space-after': 'always-single-line', // Список селекторов: пробел после ",": всегда при однострочной записи (Stylistic issues)
		'selector-list-comma-space-before': 'never', // Список селекторов: пробел до ",": никогда (Stylistic issues)

		'rule-empty-line-before': ['always', { // Селекторы: пустая строка до селектора: всегда (Stylistic issues)
			'except': [
				'first-nested', // Исключение: селектор первый в блоке
				'inside-block' // Исключение: селектор внутри блока
			],
			'ignore': ['after-comment'] // Игнорировать: селектор после комментария
		}],

		'media-feature-colon-space-after': 'always', // Характеристика устройства: пробел после ":": всегда (Stylistic issues)
		'media-feature-colon-space-before': 'never', // Характеристика устройства: пробел до ":": никогда (Stylistic issues)
		'media-feature-name-case': 'lower', // Характеристика устройства: строчные или прописные буквы: строчные (Stylistic issues)
		'media-feature-name-no-unknown': true, // Характеристика устройства: запретить неизвестные (Possible errors)
		'media-feature-name-no-vendor-prefix': true, // Характеристика устройства: запретить вендорные префиксы (Limit language features)
		'media-feature-parentheses-space-inside': 'never', // Характеристика устройства: пробелы внутри "()" по краям: никогда (Stylistic issues)
		'media-feature-range-operator-space-after': 'always', // Характеристика устройства диапазон: пробел после оператора: всегда (Stylistic issues)
		'media-feature-range-operator-space-before': 'always', // Характеристика устройства диапазон: пробел до оператора: всегда (Stylistic issues)

		'media-query-list-comma-newline-after': 'always-multi-line', // Медиавыражение: новая строка после ",": всегда при многострочной записи (Stylistic issues)
		'media-query-list-comma-newline-before': 'never-multi-line', // Медиавыражение: новая строка до ",": никогда при многострочной записи (Stylistic issues)
		'media-query-list-comma-space-after': 'always-single-line', // Медиавыражение: пробел после ",": всегда при однострочной записи (Stylistic issues)
		'media-query-list-comma-space-before': 'never-single-line', // Медиавыражение: пробел до ",": никогда при однострочной записи (Stylistic issues)

		'at-rule-empty-line-before': ['always', { // Директива: пустая строка до дерективы: всегда (Stylistic issues)
			'except': [
				'first-nested', // Исключение: деректива первая в блоке
				'inside-block' // Исключение: деректива внутри блока
			],
			'ignore': [
				'after-comment', // Игнорировать: деректива после комментария
				'blockless-after-blockless' // Игнорировать: несколько деректив подряд
			]
		}],
		'at-rule-name-case': 'lower', // Директива: строчные или прописные буквы: строчные (Stylistic issues)
		'at-rule-name-space-after': 'always', // Директива: пробел после имени: всегда (Stylistic issues)
		'at-rule-no-unknown': [true, { // Директива: запретить неизвестные (Possible errors)
			'ignoreAtRules': [ // Не считаются нарушениями
				'import-glob',
				'mixin',
				'define-mixin',
				'include',
				'content',
				'rules'
			]
		}],
		'at-rule-no-vendor-prefix': true, // Директива: запретить вендорные префиксы (Limit language features)
		'at-rule-semicolon-newline-after': 'always', // Директива: новая строка после ";": всегда (Stylistic issues)

		'comment-no-empty': true, // Комментарии: запретить пустые (Possible errors)

		'indentation': ['tab', { // Общие: отступ: табуляция (Stylistic issues)
			'ignore': 'value' // Игнорировать: внутри значения
		}],

		'max-empty-lines': 2, // Общие: максимальное число пустых смежных строк (Stylistic issues)
		'no-duplicate-selectors': true, // Общие: запретить дублирование селекторов (Possible errors)
		'no-duplicate-at-import-rules': true, // Общие: запретить дублирование @import (Possible errors)
		'no-empty-source': true, // Общие: запретить пустой код (например \n\t) (Possible errors)
		'no-eol-whitespace': true, // Общие: запретить пробелы в конце строк (Stylistic issues)
		'no-extra-semicolons': true, // Общие: запретить лишние ";", двойные и т.д. (Possible errors)
		'no-invalid-double-slash-comments': true, // Общие: запретить однострочные комментарии с помощью "//", этот способ может вызывать баги (Possible errors)
		'no-missing-end-of-source-newline': true // Общие: запретить отсутствующие пустые строки в конце кода (Stylistic issues)
	}
};
