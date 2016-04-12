/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(56);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(26);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(25)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(27)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(29);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = ReactBootstrap;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(17);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(35);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(22)('wks')
	  , uid    = __webpack_require__(23)
	  , Symbol = __webpack_require__(10).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(28)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(7).Object.getPrototypeOf;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	module.exports = __webpack_require__(7).Object.setPrototypeOf;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(50);
	module.exports = __webpack_require__(7).Symbol;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(1);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(13)
	  , getNames  = __webpack_require__(1).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(1)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(15);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(15);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(1)
	  , toIObject = __webpack_require__(13);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(1).getDesc
	  , isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(1).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(24)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(47);
	
	__webpack_require__(43)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(45).set});

/***/ },
/* 50 */
/***/ function(module, exports) {



/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(1)
	  , global         = __webpack_require__(10)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(44)
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(46)
	  , uid            = __webpack_require__(23)
	  , wks            = __webpack_require__(24)
	  , keyOf          = __webpack_require__(41)
	  , $names         = __webpack_require__(37)
	  , enumKeys       = __webpack_require__(36)
	  , isArray        = __webpack_require__(40)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(13)
	  , createDesc     = __webpack_require__(21)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(42)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AuthBox = function (_Component) {
	  (0, _inherits3.default)(AuthBox, _Component);
	
	  function AuthBox() {
	    (0, _classCallCheck3.default)(this, AuthBox);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AuthBox).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(AuthBox, [{
	    key: 'clearAll',
	    value: function clearAll() {
	      chrome.storage.local.clear(function () {
	        console.log('Clearn all..');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Testray Screenshot'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: handleGoogleDocUpdate },
	            'Auth'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.clearAll.bind(this) },
	            'Clear'
	          )
	        )
	      );
	    }
	  }]);
	  return AuthBox;
	}(_react.Component);

	exports.default = AuthBox;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var InfoPanel = function (_Component) {
	  (0, _inherits3.default)(InfoPanel, _Component);
	
	  function InfoPanel() {
	    (0, _classCallCheck3.default)(this, InfoPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InfoPanel).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(InfoPanel, [{
	    key: 'render',
	    value: function render() {
	      var _props$info = this.props.info;
	      var name = _props$info.name;
	      var link = _props$info.link;
	      var build = _props$info.build;
	      var env = _props$info.env;
	
	
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Info'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 5 },
	          _react2.default.createElement(
	            _reactBootstrap.ListGroup,
	            { componentClass: 'ul' },
	            _react2.default.createElement(
	              _reactBootstrap.ListGroupItem,
	              { header: _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Run Id'
	                ), bsStyle: 'info' },
	              _react2.default.createElement(
	                'a',
	                { href: link.href, target: '_blank' },
	                link.text
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.ListGroupItem,
	              { header: _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Project Name'
	                ), bsStyle: 'info' },
	              _react2.default.createElement(
	                'span',
	                null,
	                name
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.ListGroupItem,
	              { header: _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Build'
	                ), bsStyle: 'info' },
	              _react2.default.createElement(
	                'span',
	                null,
	                build
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.ListGroupItem,
	              { header: _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Environment'
	                ), bsStyle: 'info' },
	              _react2.default.createElement(
	                'span',
	                null,
	                env
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 7 },
	          _react2.default.createElement(
	            _reactBootstrap.ListGroup,
	            { componentClass: 'ul' },
	            _react2.default.createElement(
	              _reactBootstrap.ListGroupItem,
	              { header: _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Overview'
	                ), bsStyle: 'warning' },
	              _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: this.props.overview } })
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return InfoPanel;
	}(_react.Component);
	
	exports.default = InfoPanel;
	
	
	InfoPanel.propTypes = {
	  info: _react2.default.PropTypes.object,
	  overview: _react2.default.PropTypes.any
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(9);
	
	var _InfoPanel = __webpack_require__(53);
	
	var _InfoPanel2 = _interopRequireDefault(_InfoPanel);
	
	var _ResultPanel = __webpack_require__(55);
	
	var _ResultPanel2 = _interopRequireDefault(_ResultPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFragment = _react2.default.addons.createFragment;
	
	var ResultBox = function (_Component) {
	  (0, _inherits3.default)(ResultBox, _Component);
	
	  function ResultBox(props) {
	    (0, _classCallCheck3.default)(this, ResultBox);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ResultBox).call(this, props));
	
	    _this.state = {
	      key: 0,
	      tabs: []
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(ResultBox, [{
	    key: 'generateTabs',
	    value: function generateTabs(resultList) {
	      var _this2 = this;
	
	      if (resultList) {
	        return resultList.map(function (e, i) {
	          var RunA = e.info.RunA;
	
	          var removeIcon = _react2.default.createElement(
	            'span',
	            null,
	            RunA.title,
	            _react2.default.createElement('icon', { onClick: _this2.handleRemove.bind(_this2, i), className: 'glyphicon glyphicon-remove' })
	          );
	
	          return createFragment({
	            tab: _react2.default.createElement(
	              _reactBootstrap.Tab,
	              { eventKey: i, title: removeIcon },
	              _react2.default.createElement(_InfoPanel2.default, { info: RunA, index: i, overview: e.overview }),
	              _react2.default.createElement(_ResultPanel2.default, { resultList: e.result })
	            )
	          });
	        });
	      }
	    }
	  }, {
	    key: 'handleRemove',
	    value: function handleRemove(i) {
	      var _this3 = this;
	
	      var isRemove = confirm('Do you want to remove this scrennshot index? It is irreversible.');
	      if (isRemove) {
	        (function () {
	          var resultList = _this3.props.resultList;
	
	
	          resultList.splice(i, 1);
	
	          chrome.storage.local.set({ resultList: resultList }, function () {
	            console.log('The screenshot of index ' + i + ' has been removed.');
	            _this3.setState({
	              tabs: [_this3.generateTabs(resultList)],
	              key: 0
	            });
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      var resultList = props.resultList;
	
	      // this.state.tabs.push(this.generateTabs(resultList))
	
	      this.setState({
	        tabs: [this.generateTabs(resultList)]
	      });
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(key) {
	      this.setState({ key: key });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'The Screenshots'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(
	            _reactBootstrap.Tabs,
	            { activeKey: this.state.key, onSelect: this.handleSelect.bind(this) },
	            this.state.tabs
	          )
	        )
	      );
	    }
	  }]);
	  return ResultBox;
	}(_react.Component);
	
	exports.default = ResultBox;
	
	
	ResultBox.propTypes = {
	  resultList: _react2.default.PropTypes.array
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFragment = _react2.default.addons.createFragment;
	
	var ResultPanel = function (_Component) {
	  (0, _inherits3.default)(ResultPanel, _Component);
	
	  function ResultPanel(props) {
	    (0, _classCallCheck3.default)(this, ResultPanel);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ResultPanel).call(this, props));
	
	    _this.state = {
	      resultList: props.resultList,
	      searchValue: ''
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(ResultPanel, [{
	    key: 'handleSearch',
	    value: function handleSearch(e) {
	      var value = e.target.value;
	      var resultList = this.props.resultList;
	
	
	      this.setState({
	        resultList: resultList.filter(function (e) {
	          var key = value.toLowerCase();
	          var component = e[2].toLowerCase();
	          var testcase = e[3].toLowerCase();
	
	          return testcase.indexOf(key) > -1 || component.indexOf(key) > -1;
	        }),
	
	        searchValue: value
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var resultTrsHtml = [];
	      var resultList = this.state.resultList;
	
	
	      if (resultList.length > 0) {
	        resultList.forEach(function (tr, i) {
	          var resultTdsHtml = tr.map(function (td) {
	            var cellHtml = void 0;
	
	            if (td.constructor === Object) {
	              cellHtml = _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { href: td.link, target: '_blank' },
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    td.text
	                  )
	                )
	              );
	            } else {
	              cellHtml = _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  td
	                )
	              );
	            }
	            return createFragment({
	              td: cellHtml
	            });
	          });
	
	          resultTrsHtml.push(createFragment({
	            tr: _react2.default.createElement(
	              'tr',
	              null,
	              resultTdsHtml
	            )
	          }));
	        });
	      }
	
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'show-grid' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Result'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { xs: 12 },
	          _react2.default.createElement(_reactBootstrap.Input, {
	            type: 'text',
	            placeholder: 'Search..',
	            value: this.state.searchValue,
	            onChange: this.handleSearch.bind(this) }),
	          _react2.default.createElement(
	            _reactBootstrap.Table,
	            {
	              striped: true,
	              bordered: true,
	              condensed: true,
	              hover: true },
	            _react2.default.createElement(
	              'thead',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  '#'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Priority'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Component'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Case'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Status in Run A'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Status in Run B'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'tbody',
	              null,
	              resultTrsHtml
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return ResultPanel;
	}(_react.Component);
	
	exports.default = ResultPanel;
	
	
	ResultPanel.propTypes = {
	  resultList: _react2.default.PropTypes.array
	};
	
	ResultPanel.defaultProps = {
	  resultList: [['foo', 1, 2, 3, 4], ['foo', 1, 2, 3, 4], ['bar', 1, 2, 3, 4], ['baz', 1, 2, 3, 4], ['baz', 1, 2, 3, 4]]
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(59);
	
	var _reactBootstrap = __webpack_require__(9);
	
	var _ContraoPanelBox = __webpack_require__(52);
	
	var _ContraoPanelBox2 = _interopRequireDefault(_ContraoPanelBox);
	
	var _ResultBox = __webpack_require__(54);
	
	var _ResultBox2 = _interopRequireDefault(_ResultBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(58);
	
	// mock props
	var mockProps = [{
	  info: {
	    title: 'Title 1'
	  },
	
	  result: [[0, 'foo1', 1, 2, 3, 4], [1, 'foo1', 1, 2, 3, 4], [2, 'bar1', 1, 2, 3, 4], [3, 'baz1', 1, 2, 3, 4], [4, 'baz1', 1, 2, 3, 4]]
	}, {
	  info: {
	    title: 'Title 2'
	  },
	
	  result: [[0, 'foo2', 1, 2, 3, 4], [1, 'foo2', 1, 2, 3, 4], [2, 'bar2', 1, 2, 3, 4], [3, 'baz2', 1, 2, 3, 4], [4, 'baz2', 1, 2, 3, 4]]
	}];
	
	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);
	
	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));
	
	    _this.state = {
	      resultList: mockProps
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      chrome.storage.local.get('resultList', function (data) {
	        console.log('Current screenshots are:');
	        console.log(data.resultList);
	        _this2.setState({
	          resultList: data.resultList
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Grid,
	        null,
	        _react2.default.createElement(_ContraoPanelBox2.default, null),
	        _react2.default.createElement(_ResultBox2.default, { resultList: this.state.resultList })
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);
	
	exports.default = App;
	
	
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.querySelector('#app'));

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
//# sourceMappingURL=index.build.js.map