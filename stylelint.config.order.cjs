const special = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: ['all']
};

const positioning = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'position',
		'top',
		'right',
		'bottom',
		'left',
		'inset',
		'inset-block-start',
		'inset-block-end',
		'inset-inline-start',
		'inset-inline-end',
		'z-index'
	]
};

const boxmodel = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'display',
		'grid-template',
		'grid-template-rows',
		'grid-template-columns',
		'grid-template-areas',
		'grid-auto-rows',
		'grid-auto-columns',
		'grid-auto-flow',
		'grid-area',
		'grid-row',
		'grid-column',
		'grid-row-start',
		'grid-row-end',
		'grid-column-start',
		'grid-column-end',
		'flex',
		'flex-grow',
		'flex-shrink',
		'flex-basis',
		'flex-flow',
		'flex-direction',
		'flex-wrap',
		'order',
		'justify-content',
		'justify-items',
		'justify-self',
		'align-content',
		'align-items',
		'align-self',
		'grid-gap',
		'gap',
		'grid-row-gap',
		'row-gap',
		'grid-column-gap',
		'column-gap',
		'float',
		'clear',
		'box-sizing',
		'writing-mode',
		'width',
		'min-width',
		'max-width',
		'height',
		'min-height',
		'max-height',
		'inline-size',
		'min-inline-size',
		'max-inline-size',
		'block-size',
		'min-block-size',
		'max-block-size',
		'margin',
		'margin-top',
		'margin-right',
		'margin-bottom',
		'margin-left',
		'margin-block-start',
		'margin-block-end',
		'margin-inline-start',
		'margin-inline-end',
		'padding',
		'padding-top',
		'padding-right',
		'padding-bottom',
		'padding-left',
		'padding-block-start',
		'padding-block-end',
		'padding-inline-start',
		'padding-inline-end',
		'overflow',
		'overflow-x',
		'overflow-y'
	]
};

const typography = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'color',
		'font',
		'font-weight',
		'font-size',
		'font-family',
		'font-style',
		'font-display',
		'font-variant',
		'font-size-adjust',
		'font-stretch',
		'font-effect',
		'font-emphasize',
		'font-emphasize-position',
		'font-emphasize-style',
		'font-smooth',
		'line-height',
		'direction',
		'letter-spacing',
		'white-space',
		'text-align',
		'text-align-last',
		'text-transform',
		'text-decoration',
		'text-emphasis',
		'text-emphasis-color',
		'text-emphasis-style',
		'text-emphasis-position',
		'text-indent',
		'text-justify',
		'text-outline',
		'text-wrap',
		'text-overflow',
		'text-overflow-ellipsis',
		'text-overflow-mode',
		'text-orientation',
		'text-shadow',
		'vertical-align',
		'word-wrap',
		'word-break',
		'word-spacing',
		'overflow-wrap',
		'tab-size',
		'hyphens',
		'unicode-bidi',
		'columns',
		'column-count',
		'column-fill',
		'column-gap',
		'column-rule',
		'column-rule-color',
		'column-rule-style',
		'column-rule-width',
		'column-span',
		'column-width',
		'page-break-after',
		'page-break-before',
		'page-break-inside',
		'src'
	]
};

const visual = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'list-style',
		'list-style-position',
		'list-style-type',
		'list-style-image',
		'table-layout',
		'empty-cells',
		'caption-side',
		'background',
		'background-color',
		'background-image',
		'background-repeat',
		'background-position',
		'background-position-x',
		'background-position-y',
		'background-size',
		'background-clip',
		'background-origin',
		'background-attachment',
		'background-blend-mode',
		'box-decoration-break',
		'border',
		'border-width',
		'border-style',
		'border-color',
		'border-top',
		'border-block-start',
		'border-top-width',
		'border-top-style',
		'border-top-color',
		'border-right',
		'border-inline-end',
		'border-right-width',
		'border-right-style',
		'border-right-color',
		'border-bottom',
		'border-block-end',
		'border-bottom-width',
		'border-bottom-style',
		'border-bottom-color',
		'border-left',
		'border-inline-start',
		'border-left-width',
		'border-left-style',
		'border-left-color',
		'border-radius',
		'border-top-left-radius',
		'border-top-right-radius',
		'border-bottom-right-radius',
		'border-bottom-left-radius',
		'border-image',
		'border-image-source',
		'border-image-slice',
		'border-image-width',
		'border-image-outset',
		'border-image-repeat',
		'border-collapse',
		'border-spacing',
		'outline',
		'outline-width',
		'outline-style',
		'outline-color',
		'outline-offset',
		'box-shadow',
		'visibility',
		'cursor',
		'mix-blend-mode'
	]
};

const compositing = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'backdrop-filter',
		'will-change',
		'transform',
		'transform-origin',
		'transform-style',
		'backface-visibility',
		'opacity',
		'filter',
		'perspective',
		'perspective-origin'
	]
};

const animation = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'transition',
		'transition-delay',
		'transition-timing-function',
		'transition-duration',
		'transition-property',
		'animation',
		'animation-name',
		'animation-duration',
		'animation-play-state',
		'animation-timing-function',
		'animation-delay',
		'animation-iteration-count',
		'animation-direction',
		'animation-fill-mode'
	]
};

const misc = {
	emptyLineBefore: 'threshold',
	noEmptyLineBetween: true,
	properties: [
		'appearance',
		'clip',
		'clip-path',
		'counter-reset',
		'counter-increment',
		'resize',
		'user-select',
		'nav-index',
		'nav-up',
		'nav-right',
		'nav-down',
		'nav-left',
		'pointer-events',
		'quotes',
		'touch-action',
		'zoom',
		'fill',
		'fill-rule',
		'clip-rule',
		'stroke',
		'stroke-width'
	]
};

const propertiesOrder = [
	special,
	positioning,
	boxmodel,
	typography,
	visual,
	animation,
	compositing,
	misc
];

const pseudoElements = [
	{
		'type': 'rule',
		'selector': '&::before'
	},
	{
		'type': 'rule',
		'selector': '&::after'
	},
	{
		'type': 'rule',
		'selector': '&::placeholder'
	},
	{
		'type': 'rule',
		'selector': '&::first-letter'
	},
	{
		'type': 'rule',
		'selector': '&::first-line'
	},
	{
		'type': 'rule',
		'selector': '&::selection'
	}
];

const pseudoClassesStates = [
	{
		'type': 'rule',
		'selector': '&:link'
	},
	{
		'type': 'rule',
		'selector': '&:visited'
	},
	{
		'type': 'rule',
		'selector': '&:hover'
	},
	{
		'type': 'rule',
		'selector': '&:active'
	},
	{
		'type': 'rule',
		'selector': '&:focus'
	},
	{
		'type': 'rule',
		'selector': '&:any-link'
	}
];

const pseudoClassesStructural = [
	{
		'type': 'rule',
		'selector': '&:first-child'
	},
	{
		'type': 'rule',
		'selector': '&:last-child'
	},
	{
		'type': 'rule',
		'selector': '&:nth-child'
	},
	{
		'type': 'rule',
		'selector': '&:nth-last-child'
	},
	{
		'type': 'rule',
		'selector': '&:only-child'
	},
	{
		'type': 'rule',
		'selector': '&:first-of-type'
	},
	{
		'type': 'rule',
		'selector': '&:last-of-type'
	},
	{
		'type': 'rule',
		'selector': '&:nth-of-type'
	},
	{
		'type': 'rule',
		'selector': '&:nth-last-of-type'
	},
	{
		'type': 'rule',
		'selector': '&:only-of-type'
	},
	{
		'type': 'rule',
		'selector': '&:not'
	},
	{
		'type': 'rule',
		'selector': '&:target'
	}
];

const pseudoClassesValidation = [
	{
		'type': 'rule',
		'selector': '&:checked'
	},
	{
		'type': 'rule',
		'selector': '&:default'
	},
	{
		'type': 'rule',
		'selector': '&:disabled'
	},
	{
		'type': 'rule',
		'selector': '&:empty'
	},
	{
		'type': 'rule',
		'selector': '&:enabled'
	},
	{
		'type': 'rule',
		'selector': '&:in-range'
	},
	{
		'type': 'rule',
		'selector': '&:out-of-range'
	},
	{
		'type': 'rule',
		'selector': '&:indeterminate'
	},
	{
		'type': 'rule',
		'selector': '&:valid'
	},
	{
		'type': 'rule',
		'selector': '&:invalid'
	},
	{
		'type': 'rule',
		'selector': '&:optional'
	},
	{
		'type': 'rule',
		'selector': '&:read-only'
	},
	{
		'type': 'rule',
		'selector': '&:read-write'
	},
	{
		'type': 'rule',
		'selector': '&:required'
	}
];

const pseudoClassesLanguage = [
	{
		'type': 'rule',
		'selector': '&:lang'
	}
];

const pseudoClassesMiscellaneous = [
	{
		'type': 'rule',
		'selector': '&:root'
	},
	{
		'type': 'rule',
		'selector': '&:fullscreen'
	},
	{
		'type': 'rule',
		'selector': '&:defined'
	}
];

const atRules = [
	{
		'type': 'at-rule',
		'name': 'media'
	},
	{
		'type': 'at-rule',
		'name': 'supports'
	}
];

const ruleOrder = [
	'custom-properties',
	'declarations',
	...pseudoElements,
	...pseudoClassesStates,
	...pseudoClassesStructural,
	...pseudoClassesValidation,
	...pseudoClassesLanguage,
	...pseudoClassesMiscellaneous,
	...atRules
];

module.exports = {
	rules: {
		'order/order': ruleOrder,
		'order/properties-order': [
			propertiesOrder,
			{
				emptyLineMinimumPropertyThreshold: 4
			},
		]
	}
};
