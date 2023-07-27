module.exports = {
	extends: './stylelint.config.order.cjs',
	plugins: 'stylelint-order',
	rules: {
		// Avoid errors
		'no-descending-specificity': true, // Запретить селекторы с меньшей специфичностью после переопределяющих селекторов с более высокой специфичностью

		'declaration-block-no-duplicate-custom-properties': true, // Запретить дублирование кастомных свойств в пределах блоков деклараций
		'declaration-block-no-duplicate-properties': true, // Запретить дублирование свойств в пределах блоков деклараций
		'font-family-no-duplicate-names': true, // Запретить дублирование имен в пределах семейств шрифтов
		'keyframe-block-no-duplicate-selectors': true, // Запретить дублирование селекторов в пределах @keyframes
		'no-duplicate-at-import-rules': true, // Запретить дублирование @import
		'no-duplicate-selectors': true, // Запретить дублирование селекторов

		'block-no-empty': true, // Запретить пустые блоки
		'comment-no-empty': true, // Запретить пустые комментарии
		'no-empty-source': true, // Запретить пустой исходный код

		'function-calc-no-unspaced-operator': true, // Запретить недопустимые операторы без пробелов в пределах функций calc
		'keyframe-declaration-no-important': true, // Запретить недопустимые !important в пределах @keyframes
		'media-query-no-invalid': true, // Запретить недопустимые медиавыражения
		'named-grid-areas-no-invalid': true, // Запретить недопустимые грид-области
		'no-invalid-double-slash-comments': true, // Запретить недопустимые комментарии с помощью "//"
		'no-invalid-position-at-import-rule': true, // Запретить недопустимое позиционирование правил @import
		'string-no-newline': true, // Запретить недопустимые переносы в пределах строк

		'no-irregular-whitespace': true, // Запретить нестандартные пробелы

		'custom-property-no-missing-var-function': true, // Запретить отсутствие функции var для кастомных свойств
		'font-family-no-missing-generic-family-keyword': true, // Запретить отсутствие общего ключевого слова семейства в пределах семейств шрифтов

		'function-linear-gradient-no-nonstandard-direction': true, // Запретить нестандартные значения направления для функций линейного градиента

		'declaration-block-no-shorthand-property-overrides': true, // Запретить сокращенные свойства если они переопределяют полные свойства

		'selector-anb-no-unmatchable': true, // Запретить неподходящие селекторы An+B

		'annotation-no-unknown': true, // Запретить неизвестные аннотации
		'at-rule-no-unknown': [ // Запретить неизвестные директивы
			true,
			{
				'ignoreAtRules': [ // Игнорировать директивы
					'import-glob'
				]
			}
		],
		'declaration-property-value-no-unknown': true, // Запретить неизвестные значения для свойств в пределах деклараций
		'function-no-unknown': true, // Запретить неизвестные функции
		'media-feature-name-no-unknown': true, // Запретить неизвестные медиафичи
		'media-feature-name-value-no-unknown': true, // Запретить неизвестные значения для медиафич
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

		'color-named': 'never', // Требовать или запретить именованные цвета: никогда
		'color-no-hex': true, // Запретить hex цвета

		'function-disallowed-list': ['rgba', 'hsla', 'rgb', 'hsl'], // Указать список запрещенных функций

		'length-zero-no-unit': true, // Запретить единицы для нулевых значений

		'media-feature-name-no-vendor-prefix': true, // Запретить вендорные префиксы для медиафич

		'property-no-vendor-prefix': true, // Запретить вендорные префиксы для свойств

		'value-no-vendor-prefix': true, // Запретить вендорные префиксы для значений

		'function-name-case': 'lower', // Указать строчные или прописные буквы для имен функций: строчные
		'selector-type-case': 'lower', // Указать строчные или прописные буквы для селекторов: строчные
		'value-keyword-case': [ // Указать строчные или прописные буквы для ключевых слов значений
			'lower', // Строчные
			{
				'camelCaseSvgKeywords': true // Ключевые слова SVG в формате camel case
			}
		],

		'at-rule-empty-line-before': [ // Требовать или запретить пустую строку до деректив
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
		'rule-empty-line-before': [ // Требовать или запретить пустую строку до правил
			'always', // Всегда
			{
				'except': [ // Исключение
					'first-nested', // Селектор первый в блоке
					'inside-block' // Селектор внутри блока
				],
				'ignore': [ // Игнорировать
					'after-comment' // Селектор после комментария
				]
			}
		],

		'max-nesting-depth': [ // Ограничение глубины вложенности
			0,
			{
				'ignore': [ // Игнорировать
					'blockless-at-rules', // Директивы содержащие только другие правила и не имеющие блоков деклараций
					'pseudo-classes' // Псевдо классы
				],
			}
		],
		'number-max-precision': 2, // Ограничение количества десятичных знаков разрешенных в числах
		'selector-max-compound-selectors': 2, // Ограничение количества составных селекторов в селекторе
		'selector-max-id': 0, // Ограничение количества селекторов id в селекторе
		'selector-max-universal': 2, // Ограничение количества универсальных селекторов в селекторе

		'color-function-notation': 'modern', // Указать современную или устаревшую нотацию для цветовых функций: современная
		'font-weight-notation': [ // Указать числовая или именованная нотация для насыщенностей
			'numeric', // Числовая
			{
				'ignore': [ // Игнорировать
					'relative' // Относительные ключевые слова
				]
			}
		],
		'import-notation': 'string', // Указать строковую или URL-нотацию для правил @import: строковая
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block', // Указать ключевое слово или процентная нотация для @keyframes: однотипное представление
		'selector-not-notation': 'simple', // Указать простая или сложная нотация для селекторов псевдокласса :not(): простая
		'selector-pseudo-element-colon-notation': 'double', // Указать ":" или "::" для применимых псевдоэлементов: "::"

		'font-family-name-quotes': 'always-unless-keyword', // Требовать или запретить кавычки для имен семейств шрифтов: всегда, пока не является ключевым словом
		'function-url-quotes': 'always', // Требовать или запретить кавычки для urls: всегда
		'selector-attribute-quotes': 'always', // Требовать или запретить кавычки для значений атрибутов: всегда

		// Deprecated
		'function-comma-newline-after': 'always-multi-line', // Требовать перенос строки или запретить пробел после запятых в функциях: всегда при многострочной записи
		'function-comma-newline-before': 'never-multi-line', // Требовать перенос строки или запретить пробел до запятых в функциях: никогда при многострочной записи
		'function-comma-space-after': 'always-single-line', // Требовать или запретить пробел после запятых в функциях: всегда при однострочной записи
		'function-comma-space-before': 'never', // Требовать или запретить пробел до запятых в функциях: никогда
		'function-max-empty-lines': 0, // Ограничить количество смежных пустых строк в пределах функций
		'function-parentheses-space-inside': 'never-single-line', // Требовать или запретить пробел внутри скобок функций: никогда при однострочной записи
		'function-whitespace-after': 'always', // Требовать или запретить пробел после функций: всегда

		'number-leading-zero': 'always', // Требовать или запретить начальный ноль для дробных чисел меньше 1: всегда
		'number-no-trailing-zeros': true, // Запретить конечный ноль в числах

		'string-quotes': 'double', // Указать одиночные или двойные кавычки вокруг строк: двойные

		'unit-case': 'lower', // Указать строчные или прописные буквы для единиц измерений: строчные

		'value-list-comma-newline-after': 'always-multi-line', // Требовать перенос строки или запретить пробел после запятых в списках значений: всегда при многострочной записи
		'value-list-comma-newline-before': 'never-multi-line', // Требовать перенос строки или запретить пробел до запятых в списках значений: никогда при многострочной записи
		'value-list-comma-space-after': 'always-single-line', // Требовать или запретить пробел после запятых в списках значений: всегда при однострочной записи
		'value-list-comma-space-before': 'never', // Требовать или запретить пробел до запятых в списках значений: никогда
		'value-list-max-empty-lines': 0, // Ограничить количество смежных пустых строк в пределах списоков значений

		'property-case': 'lower', // Указать строчные или прописные буквы для свойств: строчные

		'declaration-bang-space-after': 'never', // Требовать или запретить пробел после восклицательного знака в декларациях: никогда
		'declaration-bang-space-before': 'always', // Требовать или запретить пробел до восклицательного знака в декларациях: всегда
		'declaration-colon-newline-after': 'always-multi-line', // Требовать перенос строки или запретить пробел после двоеточия в декларациях: всегда при многострочной записи
		'declaration-colon-space-after': 'always-single-line', // Требовать или запретить пробел после двоеточия в декларациях: всегда при однострочной записи
		'declaration-colon-space-before': 'never', // Требовать или запретить пробел до двоеточия в декларациях: никогда

		'declaration-block-semicolon-newline-after': 'always', // Требовать перенос строки или запретить пробел после точки с запятой в блоках деклараций: всегда
		'declaration-block-semicolon-newline-before': 'never-multi-line', // Требовать перенос строки или запретить пробел до точки с запятой в блоках деклараций: никогда при многострочной записи
		'declaration-block-semicolon-space-after': 'always-single-line', // Требовать или запретить пробел после точки с запятой в блоках деклараций: всегда при однострочной записи
		'declaration-block-semicolon-space-before': 'never', // Требовать или запретить пробел до точки с запятой в блоках деклараций: никогда
		'declaration-block-trailing-semicolon': 'always', // Требовать или запретить точку с запятой в пределах блоков деклараций: всегда

		'block-closing-brace-empty-line-before': 'never', // Требовать или запретить пустую строку до закрывающей скобки блоков: никогда
		'block-closing-brace-newline-after': 'always', // Требовать перенос строки или запретить пробел после закрывающей скобки блоков: всегда
		'block-closing-brace-newline-before': 'always', // Требовать перенос строки или запретить пробел до закрывающей скобки блоков: всегда
		'block-closing-brace-space-after': 'always-single-line', // Требовать или запретить пробел после закрывающей скобки блоков: всегда при однострочной записи
		'block-closing-brace-space-before': 'always-single-line', // Требовать или запретить пробел до закрывающей скобки блоков: всегда при однострочной записи
		'block-opening-brace-newline-after': 'always', // Требовать перенос строки после открывающей скобки блоков: всегда
		'block-opening-brace-space-after': 'always-single-line', // Требовать или запретить пробел после открывающей скобки блоков: всегда при однострочной записи
		'block-opening-brace-space-before': 'always', // Требовать или запретить пробел до открывающей скобки блоков: всегда

		'selector-attribute-brackets-space-inside': 'never', // Требовать или запретить пробел внутри скобок в пределах селектора атрибутов: никогда
		'selector-attribute-operator-space-after': 'never', // Требовать или запретить пробел после операторов в пределах селектора атрибутов: никогда
		'selector-attribute-operator-space-before': 'never', // Требовать или запретить пробел до операторов в пределах селектора атрибутов: никогда
		'selector-combinator-space-after': 'always', // Требовать или запретить пробел после комбинированных селекторов: всегда
		'selector-combinator-space-before': 'always', // Требовать или запретить пробел до комбинированных селекторов: всегда
		'selector-descendant-combinator-no-non-space': true, // Запретить не пробельные символы в качестве комбинаторов потомков в селекторах
		'selector-max-empty-lines': 0, // Ограничить количество смежных пустых строк в пределах селекторов
		'selector-pseudo-class-case': 'lower', // Указать строчные или прописные буквы для псевдоклассов: строчные
		'selector-pseudo-class-parentheses-space-inside': 'never', // Требовать или запретить пробел внутри скобок в пределах псевдоклассов: никогда
		'selector-pseudo-element-case': 'lower', // Указать строчные или прописные буквы для псевдоэлементов: строчные

		'selector-list-comma-newline-after': 'always', // Требовать перенос строки или запретить пробел после запятых в списке селекторов: всегда
		'selector-list-comma-newline-before': 'never-multi-line', // Требовать перенос строки или запретить пробел до запятых в списке селекторов: никогда при многострочной записи
		'selector-list-comma-space-after': 'always-single-line', // Требовать или запретить пробел после запятых в списке селекторов: всегда при однострочной записи
		'selector-list-comma-space-before': 'never', // Требовать или запретить пробел до запятых в списке селекторов: никогда

		'media-feature-colon-space-after': 'always', // Требовать или запретить пробел после двоеточия в медиафичах: всегда
		'media-feature-colon-space-before': 'never', // Требовать или запретить пробел до двоеточия в медиафичах: никогда
		'media-feature-name-case': 'lower', // Указать строчные или прописные буквы для имен медиафич: строчные
		'media-feature-parentheses-space-inside': 'never', // Требовать или запретить пробел внутри скобок в пределах медиафич: никогда
		'media-feature-range-operator-space-after': 'always', // Требовать или запретить пробел после оператора диапозона в медиафичах: всегда
		'media-feature-range-operator-space-before': 'always', // Требовать или запретить пробел до оператора диапозона в медиафичах: всегда

		'media-query-list-comma-newline-after': 'always-multi-line', // Требовать перенос строки или запретить пробел после запятых в условиях медиавыражений: всегда при многострочной записи
		'media-query-list-comma-newline-before': 'never-multi-line', // Требовать перенос строки или запретить пробел до запятых в условиях медиавыражений: никогда при многострочной записи
		'media-query-list-comma-space-after': 'always-single-line', // Требовать или запретить пробел после запятых в условиях медиавыражений: всегда при однострочной записи
		'media-query-list-comma-space-before': 'never-single-line', // Требовать или запретить пробел до запятых в условиях медиавыражений: никогда при однострочной записи

		'at-rule-name-case': 'lower', // Указать строчные или прописные буквы для имен директив: строчные
		'at-rule-name-space-after': 'always', // Требовать пробел после имен директив: всегда
		'at-rule-semicolon-newline-after': 'always', // Требовать перенос строки после точки с запятой в директивах: всегда

		'indentation': 'tab', // Указать отступ: табуляция
		'max-empty-lines': 2, // Ограничить количество смежных пустых строк
		'no-eol-whitespace': true, // Запретить пробелы в конце строк
		'no-extra-semicolons': true, // Запретить лишние точки с запятой
		'no-missing-end-of-source-newline': true // Запретить отсутствие переноса строки в конце исходного кода
	}
};
