module.exports = {
	env: { // Среда выполнения кода
		browser: true,
		es6: true
	},
	plugins: [
		'import'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: { // Конфигурация парсера
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'accessor-pairs': 'error', // Есть ли метод get для каждого свойства, для которого определен метод set (Best Practices)
		'array-bracket-spacing': ['error', 'never'], // Пробелы между скобками массива и элементами массива: никогда (Stylistic Issues)
		'arrow-spacing': ['error', { // Пробел до/после стрелочной функции (ECMAScript 6)
			'before': true, // До: всегда
			'after': true // После: всегда
		}],
		'block-spacing': ['error', 'always'], // Пробелы внутри блоков после открывающей скобки и до закрывающей скобки: всегда (Stylistic Issues)
		'brace-style': ['error', '1tbs', { // Расположение фигурных скобок: one true brace style (Stylistic Issues)
			'allowSingleLine': true // Разрешает распологать открывающую и закрывающую скобку блока на одной линии
		}],
		'camelcase': ['error', { // Использование CamelCase (Stylistic Issues)
			'properties': 'never' // Для имен свойств: никогда
		}],
		'comma-dangle': ['error', { // Использование висящих запятых (Stylistic Issues)
			'arrays': 'never', // Массивы: никогда
			'objects': 'never', // Объекты: никогда
			'imports': 'never', // Импорты: никогда
			'exports': 'never', // Экспорты: никогда
			'functions': 'never' // Функции: никогда
		}],
		'comma-spacing': ['error', { // Пробел до/после запятой (Stylistic Issues)
			'before': false, // До: никогда
			'after': true // После: всегда
		}],
		'comma-style': ['error', 'last'], // Стиль запятых для списков: после элемента списка и в той же строке (Stylistic Issues)
		'computed-property-spacing': ['error', 'never'], // Пробелы внутри вычисляемых свойств: никогда (Stylistic Issues)
		'constructor-super': 'error', // Существует ли допустимый вызов super() (ECMAScript 6)
		'curly': ['error', 'multi-line'], // Пропуск фигурных скобок: для однострочных символов (Best Practices)
		'dot-location': ['error', 'property'], // Новая строка до или после точки: точка на той же строке что и свойство (Best Practices)
		'dot-notation': ['error', { // Стиль доступа к свойству (Best Practices)
			'allowKeywords': true // Через точечную нотацию
		}],
		'eol-last': ['error', 'always'], // Новая строка в конце файла: всегда (Stylistic Issues)
		'eqeqeq': ['error', 'always', { // Использование строгих типов равенств и неравенств: всегда (Best Practices)
			'null': 'ignore' // null значения: игнорировать
		}],
		'func-call-spacing': ['error', 'never'], // Пробел между именем функции и открывающей скобкой: никогда (Stylistic Issues)
		'generator-star-spacing': ['error', { // Пробел до/после * в функции генератора (ECMAScript 6)
			'before': true, // До: всегда
			'after': true // После: всегда
		}],
		'handle-callback-err': ['error', '^(err|error)$'], // Обязательная обработка ошибок при использовании callback, имя ошибки err или error (Node.js and CommonJS)
		'indent': ['error', 'tab', { // Отступ: табуляция (Stylistic Issues)
			'SwitchCase': 1, // case внутри switch: 1
			'VariableDeclarator': 1, // Переменные: 1
			'outerIIFEBody': 1, // Внутри immediately invoked function expression: 1
			'MemberExpression': 1, // Многострочные цепочки свойств: 1
			'FunctionDeclaration': { // Объявление функции
				'parameters': 1, // Параметры: 1
				'body': 1 // Тело: 1
			},
			'FunctionExpression': { // Объявление функционального выражения
				'parameters': 1, // Параметры: 1
				'body': 1 // Тело: 1
			},
			'CallExpression': { // Вызов функции
				'arguments': 1 // Аргументы: 1
			},
			'ArrayExpression': 1, // Элементы массива: 1
			'ObjectExpression': 1, // Свойства объекта: 1
			'ImportDeclaration': 1, // Операторы импорта: 1
			'flatTernaryExpressions': false, // Тернарные операторы вложенные в тернарные операторы: отступ не требуется
			'ignoredNodes': ['TemplateLiteral *'], // Игнорировать: шаблонные строки
			'ignoreComments': false, // Игнорировать комментарии: нет
		}],
		'key-spacing': ['error', { // Свойство объекта, отступ до/после двоеточия между ключом и значением (Stylistic Issues)
			'beforeColon': false, // До двоеточия: никогда
			'afterColon': true // После двоеточия: всегда
		}],
		'keyword-spacing': ['error', { // Пробел до/после ключевых слов (Stylistic Issues)
			'before': true, // До: всегда
			'after': true // После: всегда
		}],
		'lines-between-class-members': ['error', 'always', { // Пустая строка между элементами класса: всегда (Stylistic Issues)
			'exceptAfterSingleLine': true // Пропустить проверку после однострочных элементов класса
		}],
		'new-cap': ['error', { // Имена конструкторов с заглавной буквы (Stylistic Issues)
			'newIsCap': true, // Функции new с заглавной буквы
			'capIsNew': false, // При объявлении операторов с заглавной буквы можно пропустить new
			'properties': true // Свойства объекта с заглавной буквы
		}],
		'new-parens': ['error', 'always'], // Скобки при вызове конструктора без аргументов (Stylistic Issues)
		'no-array-constructor': 'error', // Запрет конструкторов массивов (Stylistic Issues)
		'no-async-promise-executor': 'error', // Запретить использование асинхронной функции в качестве исполнителя Promise (Possible Errors)
		'no-caller': 'error', // Запретить использование arguments.caller и arguments.callee (Best Practices)
		'no-case-declarations': 'error', // Запретить объявления (let, const, function и class) в case/default без фигурных скобок. (Best Practices)
		'no-class-assign': 'error', // Запретить изменение переменных объявлений класса (ECMAScript) #todo
		'no-compare-neg-zero': 'error', // Запретить сравнение с -0 (Possible Errors)
		'no-cond-assign': ['error', 'except-parens'], // Запрет операторов присваивания в условных выражениях, разрешает присваивания в тесте если они в скобках (Possible Errors) #todo в тесте?
		'no-const-assign': 'error', // Запрет изменения переменных объявленных с помощью const (ECMAScript 6)
		'no-constant-condition': ['error', { // Запретить константы в условиях (Possible Errors)
			'checkLoops': false // Разрешить в циклах
		}],
		'no-control-regex': 'error', // Запретить управляющие символы (ASCII диапозон 0-31) в регулярных выражениях (Possible Errors)
		'no-debugger': 'error', // Запрет использования debugger (Possible Errors)
		'no-delete-var': 'error', // Запретить использование оператора delete для переменных (Variables)
		'no-dupe-args': 'error', // Запретить повторяющиеся аргументы в определениях функций (Possible Errors)
		'no-dupe-class-members': 'error', // Запретить повторяющиеся имена членов класса (ECMAScript 6)
		'no-dupe-keys': 'error', // Запретить дублирование ключей объекта (Possible Errors)
		'no-duplicate-case': 'error', // Запретить дублирование аргументов case (Possible Errors)
		'no-empty-character-class': 'error', // Запретить пустые классы символы в регулярных выражениях (Possible Errors) #todo
		'no-empty-pattern': 'error', // Запретить пустые шаблоны деструктурирования (Best Practices) #todo
		'no-eval': 'error', // Запретить функцию eval() (Best Practices)
		'no-ex-assign': 'error', // Запретить переназначение исключений в catch (Possible Errors) #todo
		'no-extend-native': 'error', // Запретить расширение нативных объектов (Best Practices)
		'no-extra-bind': 'error', // Запретить лишний bind() у функции (Best Practices)
		'no-extra-boolean-cast': 'error', // Запретить лишние логические преобразования (Possible Errors)
		'no-extra-parens': ['error', 'functions'], // Запретить лишние скобки, вокруг функций (Possible Errors)
		'no-fallthrough': 'error', // Запрещает fallthrough case (Best Practices)
		'no-floating-decimal': 'error', // Запрещает плавающие десятичные дроби (Best Practices)
		'no-func-assign': 'error', // Запрещает переназначение декларации функции (Possible Errors)
		'no-global-assign': 'error', // Запрещает присваивание нативным объектам и лобальным переменным только для чтения (Best Practices)
		'no-implied-eval': 'error', // Запрещает подразумеваемый eval() (Best Practices) #todo
		'no-inner-declarations': ['error', 'functions'], // Запрещает объявление функций во вложенных блоках (Possible Errors)
		'no-invalid-regexp': 'error', // Запретить недопустимые строки в регулярных выражениях (Possible Errors)
		'no-irregular-whitespace': 'error', // Запретить нестандартные пробелы (Possible Errors)
		'no-iterator': 'error', // Запретить свойство __iterator__ (Best Practices)
		'no-labels': ['error', { // Запретить labeled statement (инструкцию метки) (Best Practices)
			'allowLoop': false, // Игнорировать метки в цикле: нет
			'allowSwitch': false // Игнорировать метки в switch: нет
		}],
		'no-lone-blocks': 'error', // Запретить ненужные вложеные блоки (Best Practices)
		'no-misleading-character-class': 'error', // Запретить составные символы в регулярных выражениях (Possible Errors)
		'no-prototype-builtins': 'error', // Запретить использование некоторых методов Object.prototypes напрямую (Possible Errors)
		'no-useless-catch': 'error', // Запретить catch содержащие только throw (Best Practices)
		'no-mixed-operators': ['error', { // Запретить смешивание разных операторов (Stylistic Issues)
			'groups': [ // Группы операторов
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof']
			],
			'allowSamePrecedence': true // Разрешить ли смешивание операторов с одинаковым приоритетом: да
		}],
		'no-mixed-spaces-and-tabs': 'error', // Запретить смешивание пробелов и табуляции для отступов (Stylistic Issues)
		'no-multi-spaces': 'error', // Запретить множественные пробелы (Best Practices)
		'no-multi-str': 'error', // Запретить перенос строки с помощью \ (Best Practices)
		'no-multiple-empty-lines': ['error', { // Запретить пустые смежные строки (Stylistic Issues)
			'max': 1, // Максимальное число: 1
			'maxEOF': 0 // Максимальное число в конце файла: 0
		}],
		'no-negated-in-lhs': 'error', // Запретить отрицательный левый объект в выражениях с in (Deprecated)
		'no-new': 'error', // Запретить new для объектов не записываемых в переменную (Best Practices)
		'no-new-func': 'error', // Запретить function constructor (конструктор функций) (Best Practices)
		'no-new-object': 'error', // Запретить object constructors (конструктор объектов) (Stylistic Issues)
		'no-new-require': 'error', // Запретить выражение new require (Node.js and CommonJS)
		'no-new-symbol': 'error', // Запретить вызов Symbol с оператором new (ECMAScript 6)
		'no-new-wrappers': 'error', // Запретить использование String, Number, и Boolean с опрератором new (Best Practices)
		'no-obj-calls': 'error', // Запретить вызов объектов Math, JSON, Reflect и Atomics как функций (Possible Errors)
		'no-octal': 'error', // Запретить восьмиричные литералы (Best Practices)
		'no-octal-escape': 'error', // Запретить экранирование восьмиричных последовательностей в строковых литералах (Best Practices)
		'no-path-concat': 'error', // Запретить конкатинацию строк при использовании __dirname и __filename (Node.js and CommonJS)
		'no-proto': 'error', // Запретить использование __proto__ (Best Practices)
		'no-redeclare': ['error', { // Запретить повторное объяление переменной в той же зоне видимости (Best Practices)
			'builtinGlobals': false // Проверять переопределение встроенных глобальных значений:нет
		}],
		'no-regex-spaces': 'error', // Запретить несколько множественные пробелы в регулярных выражениях (Possible Errors)
		'no-return-assign': ['error', 'except-parens'], // Запретить присваивание в return, если выражение не заключено в скобки (Best Practices)
		'no-self-assign': ['error', { // Запретить присваивание самих себя (Best Practices) #todo
			'props': true // Проверять присваивание самих себя у свойств: да
		}],
		'no-self-compare': 'error', // Запретить сравнение самих себя (Best Practices) #todo
		'no-sequences': 'error', // Запретить использование оператора запятой, кроме в for и если последовательность в скобках (Best Practices)
		'no-shadow-restricted-names': 'error', // Запретить затенение ограниченных имен (Variables)
		'no-sparse-arrays': 'error', // Запретить разряженные массивы (Possible Errors)
		'no-template-curly-in-string': 'error', // Запретить подстановки из шаблонных строк в обычных строках (Possible Errors)
		'no-this-before-super': 'error', // Запретить использование this/super перед вызовом super() в конструкторах (ECMAScript 6)
		'no-throw-literal': 'error', // Ограничить что может быть throw (Best Practices)
		'no-trailing-spaces': 'error', // Запретить пробельные символы в конце строк (Stylistic Issues)
		'no-undef': 'error', // Запретить необъявленные переменные (Variables)
		'no-undef-init': 'error', // Запретить инициалиацию переменных как undefined (Variables)
		'no-unexpected-multiline': 'error', // Запретить неоднозначные многострочные выражения (Possible Errors)
		'no-unmodified-loop-condition': 'error', // Запретить неизменяемые условия циклов (Best Practices)
		'no-unneeded-ternary': ['error', { // Запретить тернарные операторы когда можно упростить выражение (Stylistic Issues)
			'defaultAssignment': false // Условное выражение в качестве шаблона по умочнанию: нет
		}],
		'no-unreachable': 'error', // Запретить недоступный код после операторов return, throw, continue и break (Possible Errors)
		'no-unsafe-finally': 'error', // Запретить внутри блока finally инструкции return, throw, break, и continue (Possible Errors)
		'no-unsafe-negation': 'error', // Запретить отрицание левого операнда в операторах in и instanceof (Possible Errors)
		'no-unused-expressions': ['error', { // Запретить неиспользуемые выражения (Best Practices)
			'allowShortCircuit': true, // Использовать сокращенные оценки в выражениях: да
			'allowTernary': true, // Тернарные операторы в выражениях аналогично сокращенным оценкам: да
			'allowTaggedTemplates': true // Теговые шаблонные литералы в выражениях: да
		}],
		'no-unused-vars': ['error', { // Запретить неиспользуемые переменные, функции и параметры функций (Variables)
			'vars': 'all', // Переменные: все, в том числе в глобальной области видимости
			'args': 'none', // Аргументы: не проверять аргументы
			'ignoreRestSiblings': true // Игнорировать Rest синтаксис: да
		}],
		'no-use-before-define': ['error', { // Запретить использование индификаторов до объявления (Variables)
			'functions': false, // Функции до объявления функции: нет
			'classes': false, // Классы в верхней области видимости: нет
			'variables': false // Переменные в верхней области видимости: нет
		}],
		'no-useless-call': 'error', // Запретить бесполезные .call() и .apply() (Best Practices)
		'no-useless-computed-key': 'error', // Запретить бесполезные ключи вычисляемых свойств в объектах и классах (ECMAScript 6)
		'no-useless-constructor': 'error', // Запретить бесполезные конструкторы классов (ECMAScript 6)
		'no-useless-escape': 'error', // Запретить бесполезное экранирование (Best Practices)
		'no-useless-rename': 'error', // Запретить бесполезное переименование import, export и деструктуризации (ECMAScript 6)
		'no-useless-return': 'error', // Запретить бесполезный return (Best Practices)
		'no-void': 'error', // Запретить оператор void (Best Practices)
		'no-whitespace-before-property': 'error', // Запретить пробел перед свойством, когда объект и свойство на одной строке (Stylistic Issues)
		'no-with': 'error', // Запретить инструкцию with (Best Practices)
		'object-curly-newline': ['error', { // Обеспечить разрыв строк внутри фигурных скобок (Stylistic Issues)
			'multiline': true, // Требует разрыв строк если есть разрывы строк внутри свойств или между свойствами, иначе запретить разрывы строк
			'consistent': true // Требует чтобы обе фигурные скобки или ни одна не были на одной строке с содержимым
		}],
		'object-curly-spacing': ['error', 'never'], // Обеспечить пробелы внутри фигурных скобок: объектных литералов, деструктуризации и import/export (Stylistic Issues)
		'object-property-newline': ['error', { // Обеспечить свойства объекта на отдельных строках (Stylistic Issues)
			'allowMultiplePropertiesPerLine': true // Разрешить свойства объекта в одну строку: да
		}],
		'one-var': ['error', { // Обеспечить объявление переменных вместе или раздельно в функциях (Stylistic Issues)
			'initialized': 'never' // Требует несколько объявлений для инициализированных переменных в одной области видимости
		}],
		'operator-linebreak': ['error', 'after', { // Обеспечить согласованный стиль перевода строки для операторов: требует перевода строки после оператора (Stylistic Issues)
			'overrides': { // Переопределить глобальные настройки
				'?': 'before', // ? : требует перевода строки до оператора
				':': 'before', // : : требует перевода строки до оператора
				'|>': 'before' // |> : требует перевода строки до оператора
			}
		}],
		'padded-blocks': ['error', { // Требует или запрещает пустые строки внутри блоков (Stylistic Issues)
			'blocks': 'never', // Требует или запрещает пустые строки внутри инструкции блока: запретить пустые строки в начале и в конце
			'classes': 'never', // Требует или запрещает пустые строки внутри классов: запретить пустые строки в начале и в конце
			'switches': 'never' // Требует или запрещает пустые строки внутри инструкций switch: запретить пустые строки в начале и в конце
		}],
		'prefer-const': ['error', { // Предлагает использовать const, если переменная не переопределяется (ECMAScript 6)
			'destructuring': 'all' // Деструктуризация: если для всех переменных предпочительнее использовать const предупредит, в противном случае проигнорирует
		}],
		'prefer-promise-reject-errors': 'error', // Требует использовать объекты Error как причину отклонения Promise (Best Practices)
		'quote-props': ['error', 'as-needed'], // Требует кавычки вокруг литеральной нотации имен свойств: которые не являются обязательными: запрещает (Stylistic Issues)
		'quotes': ['error', 'single', { // Обеспечить согласованное использование кавычек: одинарные кавычеки (Stylistic Issues)
			'avoidEscape': true, // Разрешить строкам использовать одинарные или двойные кавычки, если строка содержит кавычку которую иначе пришлось бы экранировать
			'allowTemplateLiterals': false // Разрешить строкам использовать обратные кавычки
		}],
		'rest-spread-spacing': ['error', 'never'], // Обеспечить пробел между операторами rest и spread и их выражениями: никогда (ECMAScript 6)
		'semi': ['error', 'always'], // Требует или запрещает точку с запятой вместо ASI: требует (Stylistic Issues)
		'semi-spacing': ['error', { // Обеспечить пробел до и после точки с запятой (Stylistic Issues)
			'before': false, // До: нет
			'after': true // После: да: если не в конце строки
		}],
		'space-before-blocks': ['error', 'always'], // Требует или запрещает пробел перед блоками: перед блоком всегда должен быть пробел (Stylistic Issues)
		'space-before-function-paren': ['error', 'never'], // Требует или запрещает пробел перед круглой скобкой функции: запрещает (Stylistic Issues)
		'space-in-parens': ['error', 'never'], // Запретить или обеспечить пробелы непосредственно внутри круглых скобок: запретить (Stylistic Issues)
		'space-infix-ops': 'error', // Требует пробел вокруг инфиксных операторов (Stylistic Issues)
		'space-unary-ops': ['error', { // Требует или запрещает пробелы до/после унарных операторов (Stylistic Issues)
			'words': true, // Применяется к унарным операторам слов таким как new, delete, typeof, void, yield: да
			'nonwords': false // Применяется к унарным операторам таким как -, +, --, ++, !, !!: нет
		}],
		'spaced-comment': ['error', 'always', { // Требует или запрещает отступ (пробел или табуляция) в начале комментария: за // или /*: требует (Stylistic Issues)
			'line': { // Строчные комментарии
				'markers': ['*package', '!', '/', ',', '='] // Массив шаблонов комментариев
			},
			'block': { // Блочные комментарии
				'balanced': true, // За /* должен следовать хотя бы один отступ и перед */ должен быть хотя бы один отступ
				'markers': ['*package', '!', ',', ':', '::', 'flow-include'], // Массив шаблонов комментариев
				'exceptions': ['*'] // Массив шаблонов исключений
			}
		}],
		'symbol-description': 'error', // Требуется описание symbol (ECMAScript 6)
		'template-curly-spacing': ['error', 'never'], // Обеспечить пробелы в шаблонных строках: запретить пробелы в шаблонных строках (ECMAScript 6)
		'template-tag-spacing': ['error', 'never'], // Требует или запрещает пробелы между теговыми шаблономи и их литералами: запретить (Stylistic Issues)
		'unicode-bom': ['error', 'never'], // Требует или запрещает Unicode Byte Order Mark (BOM): запрещает (Stylistic Issues)
		'use-isnan': 'error', // Требует вызов isNaN() при проверке на NaN (Possible Errors)
		'valid-typeof': ['error', { // Обеспечить сравнение выражений typeof с валидными строками (Possible Errors)
			'requireStringLiterals': true // Требует сравнение выражений typeof только со строками или другими выражениями typeof, запрещает сравнение с другим значением: да
		}],
		'wrap-iife': ['error', 'any', { // Требует обернуть immediately invoked function expressions в круглые скобки: обеспечить оборачивание, но разрешает любой стиль (Best Practices)
			'functionPrototypeMethods': true // Дополнительно обеспечивает оборачивание функциональных выражений вызываемых при помощи .call и .apply
		}],
		'yield-star-spacing': ['error', 'both'], // Обеспечить пробелы вокруг выражений * в yield *: до и после (ECMAScript 6)
		'yoda': ['error', 'never'], // Требует или запрщает условия Йоды: запрещает (Best Practices)

		// Плагин eslint-plugin-import
		'import/export': 'error', // Сообщить о недопустимом экспорте, т.е. реэкспорте с тем же имененем (Helpful warnings)
		'import/first': 'error', // Обеспечивает появление импортов перед другими инструкциями (Style guide)
		'import/no-absolute-path': ['error', { // Запретить импорт модулей с использованием абсолютных путей (Static analysis)
			'esmodule': true, // esmodule: запретить
			'commonjs': true, // commonjs: запретить
			'amd': false // amd: разрешить
		}],
		'import/no-duplicates': 'error', // Сообщить о повторном импорте одного и того же модуля в нескольких местах (Style guide)
		'import/no-named-default': 'error', // Запретить именованные экспорты по умолчанию (Style guide) #todo
		'import/no-webpack-loader-syntax': 'error', // Запретить синтаксис webpack loader в импорте (Static analysis)
	}
}
