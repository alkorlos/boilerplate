module.exports = {
	env: { // Среда выполнения кода
		browser: true,
		es6: true
	},
	plugins: [
		'import',
		'no-autofix'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint', // Так как используется babel
	parserOptions: { // Конфигурация парсера
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'accessor-pairs': 'error', // Обеспечить пару getter/setter в объектах и классах: требовать getter для каждого свойства для которого определен setter (Best Practices)
		'array-bracket-spacing': ['error', 'never'], // Запретить или обеспечить пробелы непосредственно внутри скобок массива: запретить (Stylistic Issues)
		'arrow-spacing': ['error', { // Требовать пробел до/после стрелочной функции (ECMAScript 6)
			'before': true, // До: требовать
			'after': true // После: требовать
		}],
		'block-spacing': ['error', 'always'], // Запретить или обеспечить пробелы внутри блоков после открывающей скобки и до закрывающей скобки: обеспечить (Stylistic Issues)
		'brace-style': ['error', '1tbs', { // Требовать согласованный стиль фигурных скобок: one true brace style (Stylistic Issues)
			'allowSingleLine': true // Разрешить открывающую и закрывающую скобку блока на одной линии: да
		}],
		'camelcase': ['error', { // Требовать использование стиля CamelCase (Stylistic Issues)
			'properties': 'never' // Обеспечить для имен свойств: никогда
		}],
		'comma-dangle': ['error', { // Требовать или запретить висящие запятые (Stylistic Issues)
			'arrays': 'never', // Массивы: запретить
			'objects': 'never', // Объекты: запретить
			'imports': 'never', // Импорты: запретить
			'exports': 'never', // Экспорты: запретить
			'functions': 'never' // Функции: запретить
		}],
		'comma-spacing': ['error', { // Обеспечить пробел вокруг запятых (Stylistic Issues)
			'before': false, // До: запретить
			'after': true // После: требовать
		}],
		'comma-style': ['error', 'last'], // Стиль запятых: в литералах массива, литералах объекта и объявлениях переменных: требовать запятую после и на той же строке (Stylistic Issues)
		'computed-property-spacing': ['error', 'never'], // Запретить или обеспечить пробелы непосредственно внутри вычисляемых свойств: запретить (Stylistic Issues)
		'constructor-super': 'error', // Проверить вызов super() в конструкторах (ECMAScript 6)
		'curly': ['error', 'multi-line'], // Требовать соблюдения условий фигурных скобок: разрешить однострочную запись без фигурных скобок (Best Practices)
		'dot-location': ['error', 'property'], // Обеспечить новую строку до и после точки: точка должна находиться на той же строке что и часть свойства (Best Practices)
		'dot-notation': ['error', { // Требовать соблюдение точечной записи: стиль доступа к свойству (Best Practices)
			'allowKeywords': true // Избегать точечную запись для зарезерированных свойств слов: нет: разрешить точечную запись для зарезерированных свойств слов #todo
		}],
		'eol-last': ['error', 'always'], // Требовать или запретить новую строку в конце файла: требовать (Stylistic Issues)
		'eqeqeq': ['error', 'always', { // Требовать "===" и "!==": использование строгих типов равенств и неравенств: обеспечить (Best Practices)
			'null': 'ignore' // null литералы: игнорировать
		}],
		'func-call-spacing': ['error', 'never'], // Требовать или запретить пробел между идентификатором функции и её вызовом: между именем функции и открывающей круглой скобкой: запретить (Stylistic Issues)
		'generator-star-spacing': ['error', { // Обеспечить пробел вокруг * в функции генераторе (ECMAScript 6)
			'before': true, // До: обеспечить
			'after': true // После: обеспечить
		}],
		'handle-callback-err': ['error', '^(err|error)$'], // Обеспечить обработку ошибок при использовании callback: имя ошибки err или error (Node.js and CommonJS)
		'indent': ['error', 'tab', { // Обеспечить согласованные отступы: табуляция (Stylistic Issues)
			'SwitchCase': 1, // Условия case в инструкциях switch: 1
			'VariableDeclarator': 1, // Переменные: 1
			'outerIIFEBody': 1, // immediately invoked function expression: 1
			'MemberExpression': 1, // Многострочные цепочки свойств: 1
			'FunctionDeclaration': { // Объявления функций
				'parameters': 1, // Параметры: 1
				'body': 1 // Тело: 1
			},
			'FunctionExpression': { // Объявления функциональных выражений
				'parameters': 1, // Параметры: 1
				'body': 1 // Тело: 1
			},
			'CallExpression': { // Вызововы функций
				'arguments': 1 // Аргументы: 1
			},
			'ArrayExpression': 1, // Элементы массивов: 1
			'ObjectExpression': 1, // Свойства объектов: 1
			'ImportDeclaration': 1, // Инструкции импортов: 1
			'flatTernaryExpressions': false, // Тернарные операторы вложенные в тернарные операторы: не требовать отступ
			'ignoredNodes': ['TemplateLiteral *'], // Игнорировать: шаблонные строки
			'ignoreComments': false, // Игнорировать комментарии: нет
		}],
		'key-spacing': ['error', { // Обеспечить согласованный отступ между ключом и значением в свойствах литерала объекта (Stylistic Issues)
			'beforeColon': false, // До двоеточия: запретить
			'afterColon': true // После двоеточия: требовать
		}],
		'keyword-spacing': ['error', { // Обеспечить согласованный пробел до/после ключевых слов (Stylistic Issues)
			'before': true, // До: требовать
			'after': true // После: требовать
		}],
		'lines-between-class-members': ['error', 'always', { // Требовать или запретить пустую строку между элементами класса: требовать (Stylistic Issues)
			'exceptAfterSingleLine': true // Пропустить проверку после однострочных элементов класса
		}],
		'new-cap': ['error', { // Требовать чтобы имена конструкторов начинались с заглавной буквы (Stylistic Issues)
			'newIsCap': true, // Требовать вызов всех операторов new с функциями начинающимися с заглавной буквы: да
			'capIsNew': false, // Разрешить вызывать функции с заглавной буквы без оператора new: разрешить
			'properties': true // Позволить проверять свойства объекта: да
		}],
		'new-parens': ['error', 'always'], // Требовать круглые скобки при вызове конструктора без аргументов (Stylistic Issues)
		'no-array-constructor': 'error', // Запретить конструкторы Array (Stylistic Issues)
		'no-async-promise-executor': 'error', // Запретить использование асинхронной функции в качестве исполнителя Promise (Possible Errors)
		'no-caller': 'error', // Запретить использование caller/callee (Best Practices)
		'no-case-declarations': 'error', // Запретить лексические объявления (let, const, function и class) в условиях case/default (без фигурных скобок) (Best Practices)
		'no-class-assign': 'error', // Запретить изменение переменных объявлений класса (ECMAScript) #todo
		'no-compare-neg-zero': 'error', // Запретить сравнение с -0 (Possible Errors)
		'no-cond-assign': ['error', 'except-parens'], // Запретить операторы присваивания в условных инструкциях: разрешить присваивания в условиях теста если они в круглых скобках (Possible Errors) #todo
		'no-const-assign': 'error', // Запретить изменение переменных объявленных с помощью const (ECMAScript 6)
		'no-constant-condition': ['error', { // Запретить постоянные выражения в условиях (Possible Errors)
			'checkLoops': false // Разрешить в циклах
		}],
		'no-control-regex': 'error', // Запретить управляющие символы (ASCII диапозон 0-31) в регулярных выражениях (Possible Errors)
		'no-debugger': 'error', // Запретить использование debugger (Possible Errors)
		'no-delete-var': 'error', // Запретить удаление переменных: запретить использование оператора delete для переменных (Variables)
		'no-dupe-args': 'error', // Запретить дублирование аргументов в объявлениях function (Possible Errors)
		'no-dupe-class-members': 'error', // Запретить дублирование имен в членах класса (ECMAScript 6)
		'no-dupe-keys': 'error', // Запретить дублирование ключей в объектных литералах (Possible Errors)
		'no-duplicate-case': 'error', // Запретить дублирование аргументов case (Possible Errors) #todo
		'no-empty-character-class': 'error', // Запретить пустые символьные классы в регулярных выражениях (Possible Errors)
		'no-empty-pattern': 'error', // Запретить пустые деструктурирующие шаблоны (Best Practices)
		'no-eval': 'error', // Запретить eval() (Best Practices)
		'no-ex-assign': 'error', // Запретить переопределение исключений в условиях catch (Possible Errors)
		'no-extend-native': 'error', // Запретить расширение нативных объектов (Best Practices)
		'no-extra-bind': 'error', // Запретить ненужную привязку функции: ненужные вызовы bind() у функции (Best Practices)
		'no-extra-boolean-cast': 'error', // Запретить ненужные логические преобразования (Possible Errors) #todo
		'no-extra-parens': ['error', 'functions'], // Запретить ненужные круглые скобки: только вокруг функциональных выражений (Possible Errors)
		'no-fallthrough': 'error', // Запретить проваливание инструкций case (Best Practices) #todo
		'no-floating-decimal': 'error', // Запретить плавающие десятичные дроби (Best Practices)
		'no-func-assign': 'error', // Запретить переопределение объявлений function (Possible Errors)
		'no-global-assign': 'error', // Запретить присваивание нативным объектам или глобальным переменным только для чтения (Best Practices)
		'no-implied-eval': 'error', // Запретить подразумеваемый eval() (Best Practices) #todo
		'no-inner-declarations': ['error', 'functions'], // Запретить объявление пременных или объявление function во вложенных блоках: запретить объявление function во вложенных блоках (Possible Errors)
		'no-invalid-regexp': 'error', // Запретить недопустимые строки регулярного выражения в конструкторах RegExp (Possible Errors)
		'no-irregular-whitespace': 'error', // Запретить нестандартные пробельные символы (Possible Errors)
		'no-iterator': 'error', // Запретить итератор: использование свойства __iterator__ (Best Practices)
		'no-labels': ['error', { // Запретить инструкции метки (Best Practices)
			'allowLoop': false, // Игнорировать метки в цикле: нет
			'allowSwitch': false // Игнорировать метки в switch: нет
		}],
		'no-lone-blocks': 'error', // Запретить ненужные вложенные блоки (Best Practices)
		'no-misleading-character-class': 'error', // Запретить составные символы в character class syntax (Possible Errors) #todo
		'no-prototype-builtins': 'error', // Запретить использование прототипов объекта встроенных напрямую (Possible Errors)
		'no-useless-catch': 'error', // Запретить ненужные условия catch: catch содержащие только throw (Best Practices)
		'no-mixed-operators': ['error', { // Запретить смешивание разных операторов (Stylistic Issues)
			'groups': [ // Список групп однотипных операторов
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof']
			],
			'allowSamePrecedence': true // Разрешить смешивание операторов с одинаковым приоритетом: да
		}],
		'no-mixed-spaces-and-tabs': 'error', // Запретить смешивание пробелов и табуляции для отступов (Stylistic Issues)
		'no-multi-spaces': 'error', // Запретить множественные пробелы (Best Practices)
		'no-multi-str': 'error', // Запретить множественные строки: перенос строк с помощью "\" (Best Practices)
		'no-multiple-empty-lines': ['error', { // Запретить множественные пустые смежные строки (Stylistic Issues)
			'max': 1, // Обеспечить максимальное число: 1
			'maxEOF': 0 // Обеспечить максимальное число в конце файла: 0
		}],
		'no-negated-in-lhs': 'error', // Запретить отрицательный левый объект в выражениях in (Deprecated)
		'no-new': 'error', // Запретить new For Side Effects: для объектов не записываемых в переменную (Best Practices) #todo
		'no-new-func': 'error', // Запретить конструктор функции (Best Practices)
		'no-new-object': 'error', // Запретить конструкторы Object (Stylistic Issues)
		'no-new-require': 'error', // Запретить new require: выражение new require (Node.js and CommonJS)
		'no-new-symbol': 'error', // Запретить конструктор Symbol: вызов Symbol с оператором new (ECMAScript 6)
		'no-new-wrappers': 'error', // Запретить Primitive Wrapper Instances: использование String, Number и Boolean с оператором new (Best Practices)
		'no-obj-calls': 'error', // Запретить вызывать (свойства?) глобальные объекты как функции: объекты Math, JSON, Reflect и Atomics (Possible Errors)
		'no-octal': 'error', // Запретить восьмиричные литералы (Best Practices)
		'no-octal-escape': 'error', // Запретить экранирование восьмиричных последовательностей в строковых литералах (Best Practices)
		'no-path-concat': 'error', // Запретить конкатенацию строк при использовании __dirname и __filename (Node.js and CommonJS)
		'no-proto': 'error', // Запретить использование __proto__ (Best Practices)
		'no-redeclare': ['error', { // Запретить переопределение переменной: в той же зоне видимости (Best Practices)
			'builtinGlobals': false // Проверять переопределение встроенных глобальных значений: нет
		}],
		'no-regex-spaces': 'error', // Запретить множественные пробелы в литералах регулярных выражений (Possible Errors)
		'no-return-assign': ['error', 'except-parens'], // Запретить присваивание в инструкции return: если выражение не заключено в круглые скобки (Best Practices)
		'no-self-assign': ['error', { // Запретить self assignment: присваивание самих себя (Best Practices) #todo
			'props': true // Проверять self assignment у свойств: да #todo
		}],
		'no-self-compare': 'error', // Запретить self compare: сравнение самих себя (Best Practices) #todo
		'no-sequences': 'error', // Запретить использование оператора запятой: исключения: в инструкции for и если последовательность выражений в круглых скобках (Best Practices)
		'no-shadow-restricted-names': 'error', // Запретить затенение ограниченных имен (Variables)
		'no-sparse-arrays': 'error', // Запретить разряженные массивы (Possible Errors)
		'no-template-curly-in-string': 'error', // Запретить синтаксис подстановок шаблонных литералов в обычных строках (Possible Errors)
		'no-this-before-super': 'error', // Запретить использование this/super до вызова super() в конструкторах (ECMAScript 6)
		'no-throw-literal': 'error', // Ограничить что может быть брошено как исключение: только объекты Error (Best Practices)
		'no-trailing-spaces': 'error', // Запретить концевые пробельные символы в конце строк (Stylistic Issues)
		'no-undef': 'error', // Запретить необъявленные переменные (Variables)
		'no-undef-init': 'error', // Запретить инициалиацию в undefined: инициалиацию переменных как undefined (Variables)
		'no-unexpected-multiline': 'error', // Запретить неоднозначные многострочные выражения (Possible Errors)
		'no-unmodified-loop-condition': 'error', // Запретить неизменяемые условия циклов (Best Practices)
		'no-unneeded-ternary': ['error', { // Запретить тернарные операторы когда существуют более простые альтернативы (Stylistic Issues)
			'defaultAssignment': false // Запретить условное выражение в качестве шаблона по умолчанию: запретить #todo
		}],
		'no-unreachable': 'error', // Запретить недоступный код после инструкций return, throw, continue и break (Possible Errors)
		'no-unsafe-finally': 'error', // Запретить инструкции порядка выполнения в блоках finally: return, throw, break и continue (Possible Errors)
		'no-unsafe-negation': 'error', // Запретить отрицание левого операнда в операторах отношения: in и instanceof (Possible Errors)
		'no-unused-expressions': ['error', { // Запретить неиспользуемые выражения (Best Practices)
			'allowShortCircuit': true, // Разрешить сокращенные оценки в выражениях: да
			'allowTernary': true, // Позволить использовать тернарные операторы в выражениях аналогично сокращенным оценкам: да
			'allowTaggedTemplates': true // Позволить использовать теговые шаблонные литералы в выражениях: да
		}],
		'no-unused-vars': ['error', { // Запретить неиспользуемые переменные, функции и параметры функций (Variables)
			'vars': 'all', // Переменные: все, в том числе в глобальной области видимости
			'args': 'none', // Аргументы: не проверять
			'ignoreRestSiblings': true // Игнорировать Rest синтаксис: да
		}],
		'no-use-before-define': ['error', { // Запретить early use: использование индификаторов до объявления (Variables)
			'functions': false, // Функция до объявления функции: нет
			'classes': false, // Класс до объявления класса, игнорировать в верхней области видимости: нет
			'variables': false // Переменная до объявления переменной, игнорировать в верхней области видимости: нет
		}],
		'no-useless-call': 'error', // Запретить ненужные .call() и .apply() (Best Practices)
		'no-useless-computed-key': 'error', // Запретить ненужные ключи вычисляемых свойств в объектах и классах (ECMAScript 6)
		'no-useless-constructor': 'error', // Запретить ненужные конструкторы (ECMAScript 6)
		'no-useless-escape': 'error', // Запретить ненужное использование экранирования (Best Practices)
		'no-useless-rename': 'error', // Запретить переименование import, export и деструктуризации к тому же имени (ECMAScript 6)
		'no-useless-return': 'error', // Запретить избыточные инструкции return (Best Practices)
		'no-void': 'error', // Запретить использование оператора void (Best Practices)
		'no-whitespace-before-property': 'error', // Запретить пробельные символы перед свойствами: если объект и свойство (или свойства) на одной строке (Stylistic Issues)
		'no-with': 'error', // Запретить инструкцию with (Best Practices)
		'object-curly-newline': ['error', { // Обеспечить согласованный разрыв строк внутри фигурных скобок (Stylistic Issues)
			'multiline': true, // Требовать разрыв строк если есть разрывы строк внутри свойств или между свойствами, иначе запретить разрывы строк: да
			'consistent': true // Требовать чтобы обе фигурные скобки или ни одна не были на одной строке с содержимым: да
		}],
		'object-curly-spacing': ['error', 'always'], // Обеспечить согласованные пробелы непосредственно внутри фигурных скобок: объектных литералов, деструктуризации и import/export: требовать (Stylistic Issues)
		'object-property-newline': ['error', { // Обеспечить размещение свойств объекта на отдельных строках (Stylistic Issues)
			'allowMultiplePropertiesPerLine': true // Разрешить все свойства в одну строку: да #todo
		}],
		'one-var': ['error', { // Обеспечить объявление переменных вместе или раздельно в функциях (Stylistic Issues)
			'initialized': 'never' // Требовать несколько объявлений переменных для инициализированных переменных в одной области видимости
		}],
		'operator-linebreak': ['error', 'after', { // Обеспечить согласованный стиль перевода строки для операторов: требовать перевода строки после оператора (Stylistic Issues)
			'overrides': { // Переопределить глобальные настройки
				'?': 'before', // "?": требовать перевода строки до оператора
				':': 'before', // ":": требовать перевода строки до оператора
				'|>': 'before' // "|>": требовать перевода строки до оператора
			}
		}],
		'padded-blocks': ['error', { // Требовать или запретить пустые строки внутри блоков (Stylistic Issues) #todo
			'blocks': 'never', // Требовать или запретить пустые строки внутри инструкций блока: запретить пустые строки в начале и в конце
			'classes': 'never', // Требовать или запретить пустые строки внутри классов: запретить пустые строки в начале и в конце
			'switches': 'never' // Требовать или запретить пустые строки внутри инструкций switch: запретить пустые строки в начале и в конце
		}],
		'prefer-promise-reject-errors': 'error', // Требовать использовать объекты Error как причины отклонения Promise (Best Practices)
		'quote-props': ['error', 'as-needed'], // Требовать кавычки вокруг имен свойств объектных литералов: запретить кавычки не являющиеся строго обязательными (Stylistic Issues)
		'quotes': ['error', 'single', { // Обеспечить согласованное использование обратных кавычек, двойных кавычек или одинарных кавычек: одинарные кавычки (Stylistic Issues)
			'avoidEscape': true, // Разрешить строкам использовать одинарные или двойные кавычки, если строка содержит кавычку которую иначе пришлось бы экранировать
			'allowTemplateLiterals': false // Разрешить строкам использовать обратные кавычки
		}],
		'rest-spread-spacing': ['error', 'never'], // Обеспечить пробел между операторами rest и spread и их выражениями: никогда (ECMAScript 6)
		'semi': ['error', 'always'], // Требовать или запретить точку с запятой вместо ASI (automatic semicolon insertion): требовать (Stylistic Issues)
		'semi-spacing': ['error', { // Обеспечить пробел до и после точки с запятой (Stylistic Issues)
			'before': false, // До: нет
			'after': true // После: да: если не в конце строки
		}],
		'space-before-blocks': ['error', 'always'], // Требовать или запретить пробел до блоков: требовать (Stylistic Issues)
		'space-before-function-paren': ['error', 'always'], // Требовать или запретить пробел до круглой скобки функции: требовать (Stylistic Issues)
		'space-in-parens': ['error', 'never'], // Запретить или обеспечить пробелы непосредственно внутри круглых скобок: запретить (Stylistic Issues)
		'space-infix-ops': 'error', // Требовать пробел вокруг инфиксных операторов (Stylistic Issues)
		'space-unary-ops': ['error', { // Требовать или запретить пробелы до/после унарных операторов (Stylistic Issues)
			'words': true, // Применять к унарным операторам слов таким как: new, delete, typeof, void, yield: да
			'nonwords': false // Применять к унарным операторам таким как: -, +, --, ++, !, !!: нет
		}],
		'spaced-comment': ['error', 'always', { // Требовать или запретить пробельный символ (пробел или табуляцию) в начале комментария: после "//" или "/*": требовать (Stylistic Issues)
			'line': { // Строчные комментарии
				'markers': ['*package', '!', '/', ',', '='] // Массив шаблонов комментариев
			},
			'block': { // Блочные комментарии
				'balanced': true, // За "/*" должен следовать пробельный символ и перед "*/" должен быть пробельный символ
				'markers': ['*package', '!', ',', ':', '::', 'flow-include'], // Массив шаблонов комментариев
				'exceptions': ['*'] // Массив шаблонов исключений
			}
		}],
		'symbol-description': 'error', // Требовать описание symbol (ECMAScript 6)
		'template-curly-spacing': ['error', 'never'], // Обеспечить использование пробелов в шаблонных строках: запретить пробелы непосредственно внутри фигурных скобок (ECMAScript 6)
		'template-tag-spacing': ['error', 'never'], // Требовать или запретить пробел между теговыми шаблонами и их литералами: запретить (Stylistic Issues)
		'unicode-bom': ['error', 'never'], // Требовать или запретить Unicode Byte Order Mark (BOM): запретить (Stylistic Issues)
		'use-isnan': 'error', // Требовать вызывать isNaN() при проверке на NaN (Possible Errors)
		'valid-typeof': ['error', { // Обеспечить сравнение выражений typeof с валидными строками (Possible Errors)
			'requireStringLiterals': true // Требовать сравнение выражений typeof только со строковыми литералами или другими выражениями typeof, запретить сравнение с другими значениями: да
		}],
		'wrap-iife': ['error', 'any', { // Требовать обернуть IIFEs (immediately invoked function expressions): в круглые скобки: обеспечить оборачивание, но разрешить любой стиль (Best Practices)
			'functionPrototypeMethods': true // Дополнительно обеспечить оборачивание IIFEs (immediately invoked function expressions) использующих .call и .apply: да
		}],
		'yield-star-spacing': ['error', 'both'], // Обеспечить пробелы вокруг * в выражених yield*: до и после (ECMAScript 6)
		'yoda': ['error', 'never'], // Требовать или запретить условия Йоды: запретить (Best Practices)

		// Плагин eslint-plugin-import
		'import/export': 'error', // Сообщить о недопустимом экспорте, т.е. реэкспорте с тем же имененем (Helpful warnings)
		'import/first': 'error', // Обеспечить импорты перед другими инструкциями (Style guide)
		'import/no-absolute-path': ['error', { // Запретить импорт модулей с использованием абсолютных путей (Static analysis)
			'esmodule': true, // esmodule: запретить
			'commonjs': true, // commonjs: запретить
			'amd': false // amd: разрешить
		}],
		'import/no-duplicates': 'error', // Сообщить о повторном импорте одного и того же модуля в нескольких местах (Style guide)
		'import/no-named-default': 'error', // Запретить именованные экспорты по умолчанию (Style guide) #todo
		'import/no-webpack-loader-syntax': 'error', // Запретить синтаксис webpack loader в импортах (Static analysis)

		// Плагин eslint-plugin-no-autofix
		'no-autofix/prefer-const': ['error', { // Предлагать использовать const: если переменная не переопределяется после инициализации (ECMAScript 6)
			'destructuring': 'all' // Деструктуризация: если для всех переменных предпочительнее использовать const предупредит, в противном случае проигнорирует
		}],
	}
};
