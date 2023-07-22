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
		'at-rule-no-vendor-prefix': true, // Запретить вендорные префиксы для директив

		'color-named': 'never', // Запретить именованные цвета
		'color-no-hex': true, // Запретить hex цвета

		'function-disallowed-list': ['rgba', 'hsla', 'rgb', 'hsl'], // Запретить функции из списка

		'length-zero-no-unit': true, // Запретить единицы для нулевого значения

		'media-feature-name-no-vendor-prefix': true, // Запретить вендорные префиксы для медиафич

		'property-no-vendor-prefix': true, // Запретить вендорные префиксы для свойств

		'value-no-vendor-prefix': true, // Запретить вендорные префиксы для значений

		'function-name-case': 'lower', // Строчные или прописные буквы для имен функций: строчные
		'selector-type-case': 'lower', // Строчные или прописные буквы для селекторов: строчные
		'value-keyword-case': [ // Строчные или прописные буквы для ключевых слов значений
			'lower', // Строчные
			{
				'camelCaseSvgKeywords': true // Ключевые слова SVG в формате camel case
			}
		],

		'at-rule-empty-line-before': [ // Пустая строка перед дерективой
			'always', // Всегда
			{
				'except': [ // Исключение
					'first-nested', // Деректива первая в блоке
					'inside-block' // Деректива внутри блока
				],
				'ignore': [ // Игнорировать
					'after-comment', // Деректива после комментария
					'blockless-after-blockless' // Несколько деректив подряд
				]
			}
		],
		'rule-empty-line-before': [ // Пустая строка перед правилом
			'always', // Всегда
			{
				'except': [ // Исключение
					'first-nested', // Селектор первый в блоке
					'inside-block' // Селектор внутри блока
				],
				'ignore': ['after-comment'] // Игнорировать: селектор после комментария
			}
		],

		'max-nesting-depth': [ // Ограничение глубины вложенности
			0,
			{
				'ignore': ['pseudo-classes'], // Игнорировать: псевдо классы
				'ignoreAtRules': ['media'] // Игнорировать: операторы из списка
			}
		],
		'number-max-precision': 2, // Ограничение количества десятичных знаков, разрешенных в числах
		'selector-max-id': 0, // Ограничение количества id в селекторах
		'selector-max-universal': 2, // Ограничение количества универсальных селекторов в селекторе

		'color-function-notation': 'modern', // Современная или устаревшая нотация для цветовых функций: современная
		'font-weight-notation': [ // Числовая или именованная нотация для насыщенности
			'numeric', // Числовая
			{
				'ignore': [
					'relative' // Игнорировать: относительные ключевые слова
				]
			}
		],
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block', // Ключевое слово или процентная нотация для @keyframes: однотипное представление
		'selector-not-notation': 'simple', // Простая или сложная нотация для селекторов псевдокласса :not(): простая
		'selector-pseudo-element-colon-notation': 'double', // ":" или "::" для записи псевдоэлементов: "::"

		'font-family-name-quotes': 'always-unless-keyword', // Требовать или запрещать кавычки для имен семейств шрифтов: всегда, пока не является ключевым словом
		'function-url-quotes': 'always', // Требовать или запрещать кавычки для url: всегда
		'selector-attribute-quotes': 'always', // Требовать или запрещать кавычки для значений атрибутов: всегда

		// Deprecated
		'function-comma-newline-after': 'always-multi-line', // Требовать перевод строки или запрещать пробел после запятых в функции: всегда при многострочной записи
		'function-comma-newline-before': 'never-multi-line', // Требовать перевод строки или запрещать пробел до запятых в функции: никогда при многострочной записи
		'function-comma-space-after': 'always-single-line', // Требовать или запрещать пробел после запятых в функциях: всегда при однострочной записи
		'function-comma-space-before': 'never', // Требовать или запрещать пробел до запятых в функциях: никогда
		'function-max-empty-lines': 0, // Ограничить количество смежных пустых строк внутри функций
		'function-parentheses-space-inside': 'never-single-line', // Требовать или запрещать пробелы внутри скобок функций: никогда при однострочной записи
		'function-whitespace-after': 'always', // Требовать или запрещать пробел после функций: всегда

		'number-leading-zero': 'always', // Требовать или запрещать начальный ноль для дробных чисел меньше 1: всегда
		'number-no-trailing-zeros': true, // Запретить конечный ноль в числах

		'string-quotes': 'double', // Одиночные или двойные кавычки вокруг строк: двойные

		'unit-case': 'lower', // Строчные или прописные буквы для единиц измерения: строчные

		'value-list-comma-newline-after': 'always-multi-line', // Требовать перевод строки или запрещать пробел после запятой в списоке значений: всегда при многострочной записи
		'value-list-comma-newline-before': 'never-multi-line', // Требовать перевод строки или запрещать пробел до запятой в списоке значений: никогда при многострочной записи
		'value-list-comma-space-after': 'always-single-line', // Требовать или запрещать пробел после запятых в списках значений: всегда при однострочной запси
		'value-list-comma-space-before': 'never', // Требовать или запрещать пробел до запятых в списках значений: никогда
		'value-list-max-empty-lines': 0, // Ограничить количество смежных пустых строк внутри списоков значений

		'property-case': 'lower', // Строчные или прописные буквы для свойств: строчные

		'declaration-bang-space-after': 'never', // Требовать или запрещать пробел после восклицательного знака в декларациях: никогда
		'declaration-bang-space-before': 'always', // Требовать или запрещать пробел до восклицательного знака в декларациях: всегда
		'declaration-colon-space-after': 'always-single-line', // Требовать или запрещать пробел после двоеточия в декларациях: всегда при однострочной запси
		'declaration-colon-space-before': 'never', // Требовать или запрещать пробел до двоеточия в декларациях: никогда

		'declaration-block-semicolon-newline-after': 'always', // Требовать перевод строки или запрещать пробел после точки с запятой в блоке деклараций: всегда
		'declaration-block-semicolon-newline-before': 'never-multi-line', // Требовать перевод строки или запрещать пробел до точки с запятой в блоке деклараций: никогда
		'declaration-block-semicolon-space-after': 'always-single-line', // Требовать или запрещать пробел после точки с запятой в блоке деклараций: всегда при однострочной записи
		'declaration-block-semicolon-space-before': 'never', // Требовать или запрещать пробел до точки с запятой в блоке деклараций: никогда
		'declaration-block-trailing-semicolon': 'always', // Требовать или запрещать точку с запятой в конце блока декларации: всегда

		'block-closing-brace-empty-line-before': 'never', // Требовать или запрещать перевод строки до закрывающий скобки блока: никогда
		'block-closing-brace-newline-after': 'always', // Требовать перевод строки или запрещать пробел после закрывающей скобки блока: всегда
		'block-closing-brace-newline-before': 'always', // Требовать перевод строки или запрещать пробел до закрывающей скобки блока: всегда
		'block-closing-brace-space-after': 'always-single-line', // Требовать или запрещать пробел после закрывающей скобки блока: всегда при однострочной записи
		'block-closing-brace-space-before': 'always-single-line', // Требовать или запрещать пробел до закрывающей скобки блока: всегда при однострочной записи
		'block-opening-brace-newline-after': 'always', // Требовать перевод строки после открывающей скобки блока: всегда
		'block-opening-brace-space-after': 'always-single-line', // Требовать или запрещать пробел после открывающей скобки блока: всегда при однострочной записи
		'block-opening-brace-space-before': 'always', // Требовать или запрещать пробел до открывающей скобки блока: всегда

		'selector-attribute-brackets-space-inside': 'never', // Требовать или запрещать пробел внутри скобок в селекторе атрибутов: никогда
		'selector-attribute-operator-space-after': 'never', // Требовать или запрещать пробел после операторов внутри селекторов атрибутов: никогда
		'selector-attribute-operator-space-before': 'never', // Требовать или запрещать пробел до операторов внутри селекторов атрибутов: никогда
		'selector-combinator-space-after': 'always', // Требовать или запрещать пробел после комбинированных селекторов: всегда
		'selector-combinator-space-before': 'always', // Требовать или запрещать пробел до комбинированных селекторов: всегда
		'selector-descendant-combinator-no-non-space': true, // Запретить не пробельные символы для комбинаторов потомков селекторов
		'selector-max-empty-lines': 0, // Ограничить количество смежных пустых строк внутри селекторов
		'selector-pseudo-class-case': 'lower', // Строчные или прописные буквы для псевдоклассов: строчные
		'selector-pseudo-class-parentheses-space-inside': 'never', // Требовать или запрещать пробел внутри скобок в псевдоклассах: никогда
		'selector-pseudo-element-case': 'lower', // Строчные или прописные буквы для псевдоэлементов: строчные

		'selector-list-comma-newline-after': 'always', // Требовать перевод строки или запрещать пробел после запятых в списке селекторов: всегда
		'selector-list-comma-newline-before': 'never-multi-line', // Требовать перевод строки или запрещать пробел до запятых в списке селекторов: никогда при многострочной записи
		'selector-list-comma-space-after': 'always-single-line', // Требовать или запрещать пробел после запятых в списке селекторов: всегда при однострочной записи
		'selector-list-comma-space-before': 'never', // Требовать или запрещать пробел до запятых в списке селекторов: всегда при однострочной записи

		'media-feature-colon-space-after': 'always', // Требовать или запрещать пробел после двоеточия в медиафичах: всегда
		'media-feature-colon-space-before': 'never', // Требовать или запрещать пробел до двоеточия в медиафичах: никогда
		'media-feature-name-case': 'lower', // Строчные или прописные буквы для имен медиафич: строчные
		'media-feature-parentheses-space-inside': 'never', // Требовать или запрещать пробел внутри скобок в медиафичах: никогда
		'media-feature-range-operator-space-after': 'always', // Требовать или запрещать пробел после оператора диапозона в медиафичах: всегда
		'media-feature-range-operator-space-before': 'always', // Требовать или запрещать пробел до оператора диапозона в медиафичах: всегда

		'media-query-list-comma-newline-after': 'always-multi-line', // Требовать перевод строки или запрещать пробел после запятых в условиях медиавыражений: всегда при многострочной записи
		'media-query-list-comma-newline-before': 'never-multi-line', // Требовать перевод строки или запрещать пробел до запятых в условиях медиавыражений: никогда при многострочной записи
		'media-query-list-comma-space-after': 'always-single-line', // Требовать или запрещать пробел после запятых в условиях медиавыражений: всегда при однострочной записи
		'media-query-list-comma-space-before': 'never-single-line', // Требовать или запрещать пробел до запятых в условиях медиавыражений: пробел до ",": никогда при однострочной записи

		'at-rule-name-case': 'lower', // Строчные или прописные буквы для директив: строчные
		'at-rule-name-space-after': 'always', // Требовать пробел после имени директивы: всегда
		'at-rule-semicolon-newline-after': 'always', // Требовать перевод строки после точки с запятой в директивах: всегда

		'indentation': [ // Отступ
			'tab', // Табуляция
			{
				'ignore': 'value' // Игнорировать: внутри значения
			}
		],
		'max-empty-lines': 2, // Ограничить количество смежных пустых строк
		'no-eol-whitespace': true, // Запретить пробелы в конце строк
		'no-extra-semicolons': true, // Запретить лишние точки с запятой
		'no-missing-end-of-source-newline': true // Запретить перевода строки в конце исходного кода
	}
};
