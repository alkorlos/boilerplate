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
		'accessor-pairs': 'error', // Обеспечить пару getter/setter в объектах и классах: getter должен быть для каждого свойства, для которого определен setter (Best Practices)
		'array-bracket-spacing': ['error', 'never'], // Запретить или обеспечить пробелы непосредственно внутри скобок массива: запретить (Stylistic Issues)
		'arrow-spacing': ['error', { // Требовать пробел до/после стрелочной функции (ECMAScript 6)
			'before': true, // До: требовать
			'after': true // После: требовать
		}],
		'block-spacing': ['error', 'always'], // Запретить или обеспечить пробелы внутри блоков после открывающей скобки и до закрывающей скобки: обеспечить (Stylistic Issues)
		'brace-style': ['error', '1tbs', { // Требовать согласованный стиль фигурных скобок: one true brace style (Stylistic Issues)
			'allowSingleLine': true // Разрешить распологать открывающую и закрывающую скобку блока на одной линии: да
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
		'comma-spacing': ['error', { // Обеспечить пробел до/после запятой (Stylistic Issues)
			'before': false, // До: запретить
			'after': true // После: требовать
		}],
		'comma-style': ['error', 'last'], // Стиль запятых: для массивов, объектов и объявлений переменных: требовать запятую после элемента и в той же строке (Stylistic Issues)
		'computed-property-spacing': ['error', 'never'], // Запретить или обеспечить пробелы внутри вычисляемых свойств: запретить (Stylistic Issues)
		'constructor-super': 'error', // Проверить вызов super() в конструкторе (ECMAScript 6)
		'curly': ['error', 'multi-line'], // Требовать соблюдения условий фигурных скобок: разрешить однострочную запись без фигурных скобок (Best Practices)
		'dot-location': ['error', 'property'], // Обеспечить новую строку до или после точки: требовать что бы точка находилась на той же строке что и свойство (Best Practices)
		'dot-notation': ['error', { // Требовать соблюдение точечной записи: стиль доступа к свойству (Best Practices)
			'allowKeywords': true // Требовать соблюдение точечной записи: да
		}],
		'eol-last': ['error', 'always'], // Требовать или запретить новую строку в конце файла: требовать (Stylistic Issues)
		'eqeqeq': ['error', 'always', { // Требовать "===" и "!==" : использование строгих типов равенств и неравенств: обеспечить (Best Practices)
			'null': 'ignore' // null значения: не применять
		}],
		'func-call-spacing': ['error', 'never'], // Требовать или запретить пробел между именем функции и открывающей скобкой: запретить (Stylistic Issues)
		'generator-star-spacing': ['error', { // Обеспечить пробел до/после "*" в функции генератора (ECMAScript 6)
			'before': true, // До: обеспечить
			'after': true // После: обеспечить
		}],
		'handle-callback-err': ['error', '^(err|error)$'], // Обеспечить обработку ошибок при использовании callback: имя ошибки err или error (Node.js and CommonJS)
		'indent': ['error', 'tab', { // Обеспечить согласованные отступы: табуляция (Stylistic Issues)
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
			'flatTernaryExpressions': false, // Тернарные операторы вложенные в тернарные операторы: не требовать отступ
			'ignoredNodes': ['TemplateLiteral *'], // Игнорировать: шаблонные строки
			'ignoreComments': false, // Игнорировать комментарии: нет
		}],
		'key-spacing': ['error', { // Обеспечить согласованный отступ в свойстве объекта до/после двоеточия между ключом и значением (Stylistic Issues)
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
			'newIsCap': true, // Функции new с заглавной буквы: требовать
			'capIsNew': false, // При объявлении операторов с заглавной буквы можно пропустить new: разрешить
			'properties': true // Свойства объекта с заглавной буквы: позволить
		}],
		'new-parens': ['error', 'always'], // Требовать круглые скобки при вызове конструктора без аргументов (Stylistic Issues)
		'no-array-constructor': 'error', // Запретить конструкторы Array (Stylistic Issues)
		'no-async-promise-executor': 'error', // Запретить использование асинхронной функции в качестве исполнителя Promise (Possible Errors)
		'no-caller': 'error', // Запретить использование caller/callee (Best Practices)
		'no-case-declarations': 'error', // Запретить лексические объявления (let, const, function и class) в case/default без фигурных скобок (Best Practices)
		'no-class-assign': 'error', // Запретить изменение переменных объявлений класса (ECMAScript) #todo
		'no-compare-neg-zero': 'error', // Запретить сравнение с -0 (Possible Errors)
		'no-cond-assign': ['error', 'except-parens'], // Запретить операторы присваивания в условных выражениях: разрешить присваивания в тесте если они в скобках (Possible Errors) #todo
		'no-const-assign': 'error', // Запретить изменение переменных объявленных с помощью const (ECMAScript 6)
		'no-constant-condition': ['error', { // Запретить постоянные выражения в условиях (Possible Errors)
			'checkLoops': false // Разрешить в циклах
		}],
		'no-control-regex': 'error', // Запретить управляющие символы (ASCII диапозон 0-31) в регулярных выражениях (Possible Errors)
		'no-debugger': 'error', // Запретить использование debugger (Possible Errors)
		'no-delete-var': 'error', // Запретить удаление переменных: запретить использование оператора delete для переменных (Variables)
		'no-dupe-args': 'error', // Запретить повторяющиеся аргументы в объявлениях function (Possible Errors)
		'no-dupe-class-members': 'error', // Запретить повторяющиеся имена в членах класса (ECMAScript 6)
		'no-dupe-keys': 'error', // Запретить дублирование ключей в объектах (Possible Errors)
		'no-duplicate-case': 'error', // Запретить дублирование аргументов case (Possible Errors)
		'no-empty-character-class': 'error', // Запретить пустые символьные классы в регулярных выражениях (Possible Errors)
		'no-empty-pattern': 'error', // Запретить пустые деструктурирующие шаблоны (Best Practices)
		'no-eval': 'error', // Запретить eval() (Best Practices)
		'no-ex-assign': 'error', // Запретить переприсваивание исключений в catch (Possible Errors)
		'no-extend-native': 'error', // Запретить расширение нативных объектов (Best Practices)
		'no-extra-bind': 'error', // Запретить ненужные вызовы bind() у функции (Best Practices)
		'no-extra-boolean-cast': 'error', // Запретить ненужные логические преобразования (Possible Errors)
		'no-extra-parens': ['error', 'functions'], // Запретить ненужные круглые скобки: до/после функциональных выражний (Possible Errors)
		'no-fallthrough': 'error', // Запретить проваливание case (Best Practices)
		'no-floating-decimal': 'error', // Запретить плавающие десятичные дроби (Best Practices)
		'no-func-assign': 'error', // Запретить переприсваивание объявлений function (Possible Errors)
		'no-global-assign': 'error', // Запретить присваивание нативным объектам и глобальным переменным только для чтения (Best Practices)
		'no-implied-eval': 'error', // Запретить подразумеваемый eval() (Best Practices) #todo
		'no-inner-declarations': ['error', 'functions'], // Запретить объявление пременных и function во вложенных блоках (Possible Errors)
		'no-invalid-regexp': 'error', // Запретить недопустимые регулярные выражения в конструкторе RegExp (Possible Errors)
		'no-irregular-whitespace': 'error', // Запретить нестандартные пробельные символы (Possible Errors)
		'no-iterator': 'error', // Запретить использование свойства __iterator__ (Best Practices)
		'no-labels': ['error', { // Запретить инструкцию метки (Best Practices) #todo
			'allowLoop': false, // Игнорировать метки в цикле: нет
			'allowSwitch': false // Игнорировать метки в switch: нет
		}],
		'no-lone-blocks': 'error', // Запретить ненужные вложеные блоки (Best Practices)
		'no-misleading-character-class': 'error', // Запретить составные символы в character class syntax (Possible Errors) #todo
		'no-prototype-builtins': 'error', // Запретить использование встроенных методов Object.prototypes напрямую (Possible Errors)
		'no-useless-catch': 'error', // Запретить ненужные условия catch: catch содержащие только throw (Best Practices)
		'no-mixed-operators': ['error', { // Запретить смешивание разных операторов (Stylistic Issues)
			'groups': [ // Группы однотипных операторов
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof']
			],
			'allowSamePrecedence': true // Разрешить смешивание операторов с одинаковым приоритетом: да
		}],
		'no-mixed-spaces-and-tabs': 'error', // Запретить смешивание пробелов и табуляции для отступов (Stylistic Issues)
		'no-multi-spaces': 'error', // Запретить множественные пробелы (Best Practices)
		'no-multi-str': 'error', // Запретить множественные строки: перенос строки с помощью "\" (Best Practices)
		'no-multiple-empty-lines': ['error', { // Запретить множественные пустые смежные строки (Stylistic Issues)
			'max': 1, // Обеспечить максимальное число: 1
			'maxEOF': 0 // Обеспечить максимальное число в конце файла: 0
		}],
		'no-negated-in-lhs': 'error', // Запретить отрицательный левый объект в выражениях с in (Deprecated)
		'no-new': 'error', // Запретить new For Side Effects: для объектов не записываемых в переменную (Best Practices) #todo
		'no-new-func': 'error', // Запретить конструктор функций (Best Practices)
		'no-new-object': 'error', // Запретить конструктор Object (Stylistic Issues)
		'no-new-require': 'error', // Запретить new require: оператору new вызовы require (Node.js and CommonJS)
		'no-new-symbol': 'error', // Запретить конструктор Symbol: вызов Symbol с оператором new (ECMAScript 6)
		'no-new-wrappers': 'error', // Запретить Primitive Wrapper Instances: использование String, Number, и Boolean с опрератором new (Best Practices)
		'no-obj-calls': 'error', // Запретить вызывать глобальные объекты как функции: объекты Math, JSON, Reflect и Atomics (Possible Errors)
		'no-octal': 'error', // Запретить восьмиричные литералы (Best Practices)
		'no-octal-escape': 'error', // Запретить экранирование восьмиричных последовательностей в строковых литералах (Best Practices)
		'no-path-concat': 'error', // Запретить конкатинацию строк при использовании __dirname и __filename (Node.js and CommonJS)
		'no-proto': 'error', // Запретить использование __proto__ (Best Practices)
		'no-redeclare': ['error', { // Запретить переопределение переменных: в той же зоне видимости (Best Practices)
			'builtinGlobals': false // Проверять переопределение встроенных глобальных значений: нет
		}],
		'no-regex-spaces': 'error', // Запретить множественные пробелы в регулярных выражениях (Possible Errors)
		'no-return-assign': ['error', 'except-parens'], // Запретить присваивание в инструкции return: если выражение не заключено в круглые скобки (Best Practices)
		'no-self-assign': ['error', { // Запретить self assignment: присваивание самих себя (Best Practices) #todo
			'props': true // Проверять self assignment у свойств: да #todo
		}],
		'no-self-compare': 'error', // Запретить self compare: сравнение самих себя (Best Practices) #todo
		'no-sequences': 'error', // Запретить использование оператора запятой: кроме в операторе for и если последовательность в круглых скобках (Best Practices)
		'no-shadow-restricted-names': 'error', // Запретить затенение ограниченных имен (Variables)
		'no-sparse-arrays': 'error', // Запретить разряженные массивы (Possible Errors)
		'no-template-curly-in-string': 'error', // Запретить подстановки из шаблонных строк в обычных строках (Possible Errors)
		'no-this-before-super': 'error', // Запретить использование this/super перед вызовом super() в конструкторах (ECMAScript 6)
		'no-throw-literal': 'error', // Ограничить то что может быть брошено как исключение: выражение throw (Best Practices)
		'no-trailing-spaces': 'error', // Запретить концевые пробельные символы в конце строк (Stylistic Issues)
		'no-undef': 'error', // Запретить необъявленные переменные (Variables)
		'no-undef-init': 'error', // Запретить инициалиацию переменных как undefined (Variables)
		'no-unexpected-multiline': 'error', // Запретить неоднозначные многострочные выражения (Possible Errors)
		'no-unmodified-loop-condition': 'error', // Запретить неизменяемые условия циклов (Best Practices)
		'no-unneeded-ternary': ['error', { // Запретить тернарные операторы когда можно упростить выражение (Stylistic Issues)
			'defaultAssignment': false // Условное выражение в качестве шаблона по умочнанию: запретить
		}],
		'no-unreachable': 'error', // Запретить недоступный код после инструкций return, throw, continue и break (Possible Errors)
		'no-unsafe-finally': 'error', // Запретить инструкции потока внутри блока finally: return, throw, break и continue (Possible Errors)
		'no-unsafe-negation': 'error', // Запретить отрицание левого операнда в операторах отношения: in и instanceof (Possible Errors)
		'no-unused-expressions': ['error', { // Запретить неиспользуемые выражения (Best Practices)
			'allowShortCircuit': true, // Разрешить сокращенные оценки в выражениях: разрешить
			'allowTernary': true, // Позволить использовать тернарные операторы в выражениях аналогично сокращенным оценкам: позволить
			'allowTaggedTemplates': true // Позволить использовать теговые шаблонные литералы в выражениях: позволить
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
		'no-whitespace-before-property': 'error', // Запретить пробельные символы перед свойством: когда объект и свойство на одной строке (Stylistic Issues)
		'no-with': 'error', // Запретить инструкцию with (Best Practices)
		'object-curly-newline': ['error', { // Обеспечить разрыв строк внутри фигурных скобок (Stylistic Issues)
			'multiline': true, // Требовать разрыв строк если есть разрывы строк внутри свойств или между свойствами, иначе запретить разрывы строк
			'consistent': true // Требовать чтобы обе фигурные скобки или ни одна не были на одной строке с содержимым
		}],
		'object-curly-spacing': ['error', 'never'], // Обеспечить пробелы внутри фигурных скобок: объектных литералов, деструктуризации и import/export (Stylistic Issues)
		'object-property-newline': ['error', { // Обеспечить свойства объекта на отдельных строках (Stylistic Issues)
			'allowMultiplePropertiesPerLine': true // Разрешить свойства объекта в одну строку: да
		}],
		'one-var': ['error', { // Обеспечить объявление переменных вместе или раздельно в функциях (Stylistic Issues)
			'initialized': 'never' // Требовать несколько объявлений для инициализированных переменных в одной области видимости
		}],
		'operator-linebreak': ['error', 'after', { // Обеспечить согласованный стиль перевода строки для операторов: требовать перевода строки после оператора (Stylistic Issues)
			'overrides': { // Переопределить глобальные настройки
				'?': 'before', // "?" : требовать перевода строки до оператора
				':': 'before', // ":" : требовать перевода строки до оператора
				'|>': 'before' // "|>" : требовать перевода строки до оператора
			}
		}],
		'padded-blocks': ['error', { // Требовать или запретить пустые строки внутри блоков (Stylistic Issues)
			'blocks': 'never', // Требовать или запретить пустые строки внутри инструкции блока: запретить пустые строки в начале и в конце
			'classes': 'never', // Требовать или запретить пустые строки внутри классов: запретить пустые строки в начале и в конце
			'switches': 'never' // Требовать или запретить пустые строки внутри инструкций switch: запретить пустые строки в начале и в конце
		}],
		'prefer-const': ['error', { // Предлагает использовать const, если переменная не переопределяется (ECMAScript 6)
			'destructuring': 'all' // Деструктуризация: если для всех переменных предпочительнее использовать const предупредит, в противном случае проигнорирует
		}],
		'prefer-promise-reject-errors': 'error', // Требовать использовать объекты Error как причину отклонения Promise (Best Practices)
		'quote-props': ['error', 'as-needed'], // Требовать кавычки вокруг литеральной нотации имен свойств: запретить кавычки не являются обязательными (Stylistic Issues)
		'quotes': ['error', 'single', { // Обеспечить согласованное использование кавычек: одинарные кавычеки (Stylistic Issues)
			'avoidEscape': true, // Разрешить строкам использовать одинарные или двойные кавычки, если строка содержит кавычку которую иначе пришлось бы экранировать
			'allowTemplateLiterals': false // Разрешить строкам использовать обратные кавычки
		}],
		'rest-spread-spacing': ['error', 'never'], // Обеспечить пробел между операторами rest и spread и их выражениями: никогда (ECMAScript 6)
		'semi': ['error', 'always'], // Требовать или запретить точку с запятой вместо ASI: требовать (Stylistic Issues)
		'semi-spacing': ['error', { // Обеспечить пробел до и после точки с запятой (Stylistic Issues)
			'before': false, // До: нет
			'after': true // После: да: если не в конце строки
		}],
		'space-before-blocks': ['error', 'always'], // Требовать или запретить пробел перед блоками: перед блоками всегда должен быть пробел (Stylistic Issues)
		'space-before-function-paren': ['error', 'never'], // Требовать или запретить пробел перед круглой скобкой функции: запретить (Stylistic Issues)
		'space-in-parens': ['error', 'never'], // Запретить или обеспечить пробелы непосредственно внутри круглых скобок: запретить (Stylistic Issues)
		'space-infix-ops': 'error', // Требовать пробел вокруг инфиксных операторов (Stylistic Issues)
		'space-unary-ops': ['error', { // Требовать или запретить пробелы до/после унарных операторов (Stylistic Issues)
			'words': true, // Применяется к унарным операторам слов таким как new, delete, typeof, void, yield: да
			'nonwords': false // Применяется к унарным операторам таким как -, +, --, ++, !, !!: нет
		}],
		'spaced-comment': ['error', 'always', { // Требовать или запретить отступ (пробел или табуляция) в начале комментария: за "//" или "/*": требовать (Stylistic Issues)
			'line': { // Строчные комментарии
				'markers': ['*package', '!', '/', ',', '='] // Массив шаблонов комментариев
			},
			'block': { // Блочные комментарии
				'balanced': true, // За "/*" должен следовать хотя бы один отступ и перед "*/" должен быть хотя бы один отступ
				'markers': ['*package', '!', ',', ':', '::', 'flow-include'], // Массив шаблонов комментариев
				'exceptions': ['*'] // Массив шаблонов исключений
			}
		}],
		'symbol-description': 'error', // Требовать описание symbol (ECMAScript 6)
		'template-curly-spacing': ['error', 'never'], // Обеспечить пробелы в шаблонных строках: запретить пробелы в шаблонных строках (ECMAScript 6)
		'template-tag-spacing': ['error', 'never'], // Требовать или запретить пробелы между теговыми шаблонами и их литералами: запретить (Stylistic Issues)
		'unicode-bom': ['error', 'never'], // Требовать или запретить Unicode Byte Order Mark (BOM): запретить (Stylistic Issues)
		'use-isnan': 'error', // Требовать вызов isNaN() при проверке на NaN (Possible Errors)
		'valid-typeof': ['error', { // Обеспечить сравнение выражений typeof с валидными строками (Possible Errors)
			'requireStringLiterals': true // Требовать сравнение выражений typeof только со строками или другими выражениями typeof, запретить сравнение с другим значением: да
		}],
		'wrap-iife': ['error', 'any', { // Требовать обернуть immediately invoked function expressions в круглые скобки: обеспечить оборачивание, но разрешить любой стиль (Best Practices)
			'functionPrototypeMethods': true // Дополнительно обеспечить оборачивание функциональных выражений вызываемых при помощи .call и .apply
		}],
		'yield-star-spacing': ['error', 'both'], // Обеспечить пробелы вокруг выражений * в yield *: до и после (ECMAScript 6)
		'yoda': ['error', 'never'], // Требовать или запретить условия Йоды: запретить (Best Practices)

		// Плагин eslint-plugin-import
		'import/export': 'error', // Сообщить о недопустимом экспорте, т.е. реэкспорте с тем же имененем (Helpful warnings)
		'import/first': 'error', // Обеспечить появление импортов перед другими инструкциями (Style guide)
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
