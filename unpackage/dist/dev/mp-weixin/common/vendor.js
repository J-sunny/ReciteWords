(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 0:
/*!**********************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
__webpack_require__(/*! pages/style/init.css */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
// import{goback} from '/pages/commont/comment.js'
// import {goBack} from '/pages/commont/comment.js'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// 
// Vue.use(Vant);
_vue.default.config.productionTip = false;
_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 107:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fcomponent%2FbyLetter%2Findex"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/component/byLetter/index.vue */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 108:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fcomponent%2FbyCourse%2Findex"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/component/byCourse/index.vue */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 109:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"components%2Flee-select%2Flee-select%2Flee-select"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _leeSelect = _interopRequireDefault(__webpack_require__(/*! ./components/lee-select/lee-select/lee-select.vue */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_leeSelect.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 11:
/*!***********************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/pages/style/init.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 110:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fhome%2Fdetails%2Franking"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ranking = _interopRequireDefault(__webpack_require__(/*! ./pages/view/home/details/ranking.vue */ 111));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ranking.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 118:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fhome%2Fdetails%2FstudentDetails"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _studentDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/view/home/details/studentDetails.vue */ 119));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_studentDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 12:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fhome%2Findex%2Findex"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/home/index/index.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 124:
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/components/u-charts/u-charts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.9.1.20190821
 * uni-app平台高性能跨全端图表，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）
 * Copyright (c) 2019 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarGridCount: 3,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


var assign;
if (Object.assign) {
  assign = Object.assign;
} else {
  // 使用polyfill
  assign = function assign(target, varArgs) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];
      if (nextSource != null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(self, distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
    self.event.trigger('scrollLeft');
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
    self.event.trigger('scrollRight');
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y,
      points[
      i + 1].y);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeries(series, opts, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    if (!item.index) {
      item.index = 0;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        default:
          item.legendShape = "circle";}

    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;
  text = String(text);
  var text = text.split('');
  var width = 0;
  for (var i = 0; i < text.length; i++) {
    var item = text[i];
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  }
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i = 0; _i < validCalPoints.length; _i++) {
    var item = validCalPoints[_i];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i2 = 0; _i2 < validCalPoints.length; _i2++) {
    var item = validCalPoints[_i2];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    if (index == 0 && item.data[1] - item.data[0] < 0) {
      color[1] = downColor;
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, xAxisPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  var spacing = 0;
  if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
    spacing = opts.chartData.eachSpacing / 2;
  }
  if (isInExactChartArea(currentPoints, opts, config)) {
    xAxisPoints.forEach(function (item, index) {
      if (currentPoints.x + offset + spacing > item) {
        currentIndex = index;
      }
    });
  }
  return currentIndex;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (currentPoints.x > area[0] && currentPoints.x < area[2] && currentPoints.y > area[1] && currentPoints.y < area[3]) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y &&
  currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x < opts.width - opts.area[1] + 10 && currentPoints.x > opts.area[3] - 10 && currentPoints.y > opts.area[0] && currentPoints.y < opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config, chartData) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }

  var padding = opts.legend.padding;
  var margin = opts.legend.margin;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize) + opts.legend.itemGap;
      if (widthCount + itemWidth > opts.width - opts.padding[1] - opts.padding[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.padding[3];
          legendData.area.end.x = opts.padding[3] + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.padding[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.padding[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.padding[0] - opts.padding[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.padding[0] + margin;
        legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.padding[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.padding[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i3 = 0; _i3 < lineNum; _i3++) {
      var temp = series.slice(_i3 * maxLength, _i3 * maxLength + maxLength);
      _currentRow.push(temp);
    }

    legendData.points = _currentRow;

    if (_currentRow.length) {
      for (var _i4 = 0; _i4 < _currentRow.length; _i4++) {
        var _item = _currentRow[_i4];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize) + opts.legend.itemGap;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i5 = 0; _i5 < legendData.widthArr.length; _i5++) {
        _legendWidth += legendData.widthArr[_i5];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }

  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.padding[0] + margin;
      legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.padding[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.padding[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.padding[3];
      legendData.area.end.x = opts.padding[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.padding[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.padding[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }

  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i6 = 0; _i6 < series.length; _i6++) {
    var _item2 = series[_i6];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i7 = 0; _i7 < series.length; _i7++) {
    var _item3 = series[_i7];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }

  return series;
}

function getFunnelDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  series = series.sort(function (a, b) {return parseInt(b.data) - parseInt(a.data);});
  for (var i = 0; i < series.length; i++) {
    series[i].radius = series[i].data / series[0].data * radius * process;
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  return series.reverse();
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;

  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }

  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;

  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item4 = series[_i8];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0 || type == 'area') {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = _item4.data / count * process;
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData));
  }
  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item5 = series[_i9];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'circle') {
      totalAngle = 2;
    } else {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i10 = 0; _i10 < categories.length; _i10++) {
        if (item.data <= categories[_i10].value) {
          item.color = categories[_i10].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  }

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / columnLen);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }

    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      if (boundaryGap == 'center') {
        point.x += Math.round(eachSpacing / 2);
      }
      var value = item;
      if (typeof item === 'object' && item !== null) {
        value = item.value;
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        item.map(function (subitem) {
          sorted.push(subitem);
        });
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });
  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.yAxis.data[index].min === 'number') {
      minData = Math.min(opts.yAxis.data[index].min, minData);
    }
    if (typeof opts.yAxis.data[index].max === 'number') {
      maxData = Math.max(opts.yAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.yAxis.min === 'number') {
      minData = Math.min(opts.yAxis.min, minData);
    }
    if (typeof opts.yAxis.max === 'number') {
      maxData = Math.max(opts.yAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / config.yAxisSplit;

  for (var i = 0; i <= config.yAxisSplit; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  //如果是多Y轴，重新计算
  var YLength = opts.yAxis.data.length;
  var newSeries = new Array(YLength);
  if (YLength > 0) {
    for (var i = 0; i < YLength; i++) {
      newSeries[i] = [];
      for (var j = 0; j < series.length; j++) {
        if (series[j].index == i) {
          newSeries[i].push(series[j]);
        }
      }
    }
    var rangesArr = new Array(YLength);
    var rangesFormatArr = new Array(YLength);
    var yAxisWidthArr = new Array(YLength);var _loop3 = function _loop3(

    _i11) {
      var yData = opts.yAxis.data[_i11];
      //如果总开关不显示，强制每个Y轴为不显示
      if (opts.yAxis.disabled == true) {
        yData.disabled = true;
      }
      rangesArr[_i11] = getYAxisTextList(newSeries[_i11], opts, config, columnstyle.type, _i11);
      var yAxisFontSizes = yData.fontSize || config.fontSize;
      yAxisWidthArr[_i11] = { position: yData.position ? yData.position : 'left', width: 0 };
      rangesFormatArr[_i11] = rangesArr[_i11].map(function (items) {
        items = util.toFixed(items, 6);
        items = yData.format ? yData.format(Number(items)) : items;
        yAxisWidthArr[_i11].width = Math.max(yAxisWidthArr[_i11].width, measureText(items, yAxisFontSizes) + 5);
        return items;
      });
      var calibration = yData.calibration ? 4 * opts.pixelRatio : 0;
      yAxisWidthArr[_i11].width += calibration + 3 * opts.pixelRatio;
      if (yData.disabled === true) {
        yAxisWidthArr[_i11].width = 0;
      }};for (var _i11 = 0; _i11 < YLength; _i11++) {_loop3(_i11);
    }

  } else {
    var rangesArr = new Array(1);
    var rangesFormatArr = new Array(1);
    var yAxisWidthArr = new Array(1);
    rangesArr[0] = getYAxisTextList(series, opts, config, columnstyle.type);
    yAxisWidthArr[0] = { position: 'left', width: 0 };
    var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
    rangesFormatArr[0] = rangesArr[0].map(function (item) {
      item = util.toFixed(item, 6);
      item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
      yAxisWidthArr[0].width = Math.max(yAxisWidthArr[0].width, measureText(item, yAxisFontSize) + 5);
      return item;
    });
    yAxisWidthArr[0].width += 3 * opts.pixelRatio;
    if (opts.yAxis.disabled === true) {
      yAxisWidthArr[0] = { position: 'left', width: 0 };
      opts.yAxis.data[0] = { disabled: true };
    } else {
      opts.yAxis.data[0] = { disabled: false, position: 'left', max: opts.yAxis.max, min: opts.yAxis.min, format: opts.yAxis.format };
    }

  }

  return {
    rangesFormat: rangesFormatArr,
    ranges: rangesArr,
    yAxisWidth: yAxisWidthArr };


}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var minAxis = opts.area[0];
  var items = [];
  for (var i = 0; i < ranges.length; i++) {
    var maxVal = ranges[i].shift();
    var minVal = ranges[i].pop();
    var item = maxVal - (maxVal - minVal) * (point - minAxis) / spacingValid;
    item = opts.yAxis.data[i].format ? opts.yAxis.data[i].format(Number(item)) : item.toFixed(0);
    items.push(String(item));
  }
  return items;
}

function calMarkLineData(points, opts) {
  var minRange, maxRange;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    points[i].yAxisIndex = points[i].yAxisIndex ? points[i].yAxisIndex : 0;
    var range = [].concat(opts.chartData.yAxisData.ranges[points[i].yAxisIndex]);
    minRange = range.pop();
    maxRange = range.shift();
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  context.setStrokeStyle("#ffffff");
  context.setLineWidth(1 * opts.pixelRatio);
  context.setFillStyle(color);
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 3.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 4 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;

  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0);
    var startY = center.y + subtitlefontSize / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY += (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY -= (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;
  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(series.textSize || config.fontSize);
      context.setFillStyle(series.textColor || '#666666');
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        value = data[index].value;
      }
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(String(formatVal), item.x - measureText(formatVal, series.textSize || config.fontSize) / 2, item.y -
      2);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.labelFormat ? gaugeOption.labelFormat(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    if (item._rose_proportion_) item._proportion_ = item._rose_proportion_;
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);

    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }

  for (var _i12 = 0; _i12 < textObjectCollection.length; _i12++) {
    var _item6 = textObjectCollection[_i12];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize || config.fontSize);
    context.setFillStyle(_item6.textColor || '#666666');
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);

    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.padding[1];
  var points = calMarkLineData(markLineOption.data, opts);

  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);

    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.format ? opts.yAxis.format(Number(item.value)) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize);
      var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
      var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
      var bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pixelRatio);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);

  var startX = opts.area[3];
  var endX = opts.width - opts.padding[1];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    var widthArr = opts.chartData.yAxisData.yAxisWidth;
    var tStartLeft = opts.area[3];
    var tStartRight = opts.width - opts.area[1];
    for (var i = 0; i < labelText.length; i++) {
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText[i], config.fontSize);
      var bgStartX = void 0,bgEndX = void 0,bgWidth = void 0;
      if (widthArr[i].position == 'left') {
        bgStartX = tStartLeft - widthArr[i].width;
        bgEndX = Math.max(bgStartX, bgStartX + textWidth + config.toolTipPadding * 2);
      } else {
        bgStartX = tStartRight;
        bgEndX = Math.max(bgStartX + widthArr[i].width, bgStartX + textWidth + config.toolTipPadding * 2);
      }
      bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = opts.tooltip.offset.y;
      context.beginPath();
      context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
      context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
      context.setLineWidth(1 * opts.pixelRatio);
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
      context.fillText(labelText[i], textX, textY + 0.5 * config.fontSize);
      context.closePath();
      context.stroke();
      if (widthArr[i].position == 'left') {
        tStartLeft -= widthArr[i].width + opts.yAxis.padding;
      } else {
        tStartRight += widthArr[i].width + opts.yAxis.padding;
      }
    }
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.tooltip);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    showBox: true,
    bgColor: '#000000',
    bgOpacity: 0.7,
    fontColor: '#FFFFFF' },
  opts.extra.tooltip);
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  if (toolTipOption.showBox == false) {return;}
  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, opts.padding[3] + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meter: {
      border: 4,
      fillColor: '#FFFFFF' } },

  opts.extra.column);

  var calPoints = [];
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setStrokeStyle(item.color || eachSeries.color);
            context.setLineWidth(1);
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.moveTo(startX - 1, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            //context.rect(startX, item.y, item.width, height);
            context.closePath();
            context.stroke();
            context.fill();
          }
        });
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2 + 1;
            var height = opts.height - item.y - opts.area[2];
            var height0 = opts.height - item.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, item.y);
            context.fillRect(startX, item.y, item.width - 2, height);
            context.closePath();
            context.fill();
          }
        });
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          points.forEach(function (item, index) {
            if (item !== null) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = item.x - item.width / 2;
              var height = opts.height - item.y - opts.area[2];
              context.moveTo(startX, item.y);
              context.fillRect(startX, item.y, item.width, height);
              context.closePath();
              context.fill();
              //画边框线
              if (columnOption.meter.border > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
                context.moveTo(startX + columnOption.meter.border * 0.5, item.y + height);
                context.lineTo(startX + columnOption.meter.border * 0.5, item.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + item.width - columnOption.meter.border * 0.5, item.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + item.width - columnOption.meter.border * 0.5, item.y + height);
                context.stroke();
              }
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (item !== null) {
              context.beginPath();
              context.setFillStyle(item.color || eachSeries.color);
              var startX = item.x - item.width / 2;
              var height = opts.height - item.y - opts.area[2];
              context.moveTo(startX, item.y);
              context.fillRect(startX, item.y, item.width, height);
              context.closePath();
              context.fill();
            }
          });
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.colors },
  candleOption.average);
  opts.extra.candle = candleOption;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  //画均线
  if (candleOption.average.show) {
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      //calPoints.push(points);
      var splitPointList = splitPoints(points);

      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
              item.x, item.
              y);
            }
          });
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      });
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);
    splitPointList = splitPointList[0];

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      //如果上涨
      if (data[index][1] - data[index][0] > 0) {
        context.setStrokeStyle(candleOption.color.upLine);
        context.setFillStyle(candleOption.color.upFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      } else {
        context.setStrokeStyle(candleOption.color.downLine);
        context.setFillStyle(candleOption.color.downFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      }
      context.closePath();
      context.fill();
      context.stroke();
    });
  });

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2 },
  opts.extra.area);

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);var _loop4 = function _loop4(

    i) {
      var points = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (points.length > 1) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];

        context.moveTo(firstPoint.x, firstPoint.y);
        if (areaOption.type === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var item = points[0];
        context.moveTo(item.x - eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, endY);
        context.lineTo(item.x - eachSpacing / 2, endY);
        context.moveTo(item.x - eachSpacing / 2, item.y);
      }
      context.closePath();
      context.fill();

      //画连线
      if (areaOption.addLine) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (areaOption.type === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      }};for (var i = 0; i < splitPointList.length; i++) {_loop4(i);
    }

    //画点
    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = assign({}, {
    type: 'straight',
    width: 2 },
  opts.extra.line);
  lineOption.width *= opts.pixelRatio;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    if (eachSeries.lineType == 'dash') {
      var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
      dashLength *= opts.pixelRatio;
      context.setLineDash([dashLength, dashLength]);
    }
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(lineOption.width);

    splitPointList.forEach(function (points, index) {

      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        if (lineOption.type === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
              item.x, item.
              y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }
        context.moveTo(points[0].x, points[0].y);
      }

    });

    context.stroke();
    context.setLineDash([]);

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;

    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      points.forEach(function (item, index) {
        if (item !== null) {
          context.beginPath();
          context.setStrokeStyle(item.color || eachSeries.color);
          context.setLineWidth(1);
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.moveTo(startX, item.y);
          context.moveTo(startX - 1, item.y);
          context.lineTo(startX + item.width - 2, item.y);
          context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
          context.lineTo(startX, opts.height - opts.area[2]);
          context.lineTo(startX, item.y);
          //context.rect(startX, item.y, item.width, height);
          context.closePath();
          context.stroke();
          context.fill();
          context.closePath();
          context.fill();
        }
      });
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points);var _loop5 = function _loop5(
      i) {
        var points = _splitPointList[i];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length > 1) {
          firstPoint = points[0];
          var lastPoint = points[points.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          if (eachSeries.style === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var item = points[0];
          context.moveTo(item.x - eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, endY);
          context.lineTo(item.x - eachSpacing / 2, endY);
          context.moveTo(item.x - eachSpacing / 2, item.y);
        }
        context.closePath();
        context.fill();};for (var i = 0; i < _splitPointList.length; i++) {var firstPoint;_loop5(i);
      }
    }

    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (eachSeries.style == 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
                item.x,
                item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      points.forEach(function (pointsa, index) {
        if (pointsa) {
          context.beginPath();
          context.setFillStyle(eachSeries.color);
          context.setStrokeStyle('#FFFFFF');
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(pointsa.x + 3.5 * opts.pixelRatio, pointsa.y);
          context.arc(pointsa.x, pointsa.y, 4 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
        }
      });
    }

    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;

      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing
    //minRange: minRange,
    //maxRange: maxRange
  };
}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  //绘制X轴刻度线
  if (opts.xAxis.calibration === true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    xAxisPoints.forEach(function (item, index) {
      if (index > 0) {
        context.beginPath();
        context.moveTo(item - eachSpacing / 2, startY);
        context.lineTo(item - eachSpacing / 2, startY + 3 * opts.pixelRatio);
        context.closePath();
        context.stroke();
      }
    });
  }
  //绘制X轴网格
  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
    }
    opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
    xAxisPoints.forEach(function (item, index) {
      if (index % opts.xAxis.gridEval == 0) {
        context.beginPath();
        context.moveTo(item, startY);
        context.lineTo(item, endY);
        context.stroke();
      }
    });
    context.setLineDash([]);
  }


  //绘制X轴文案
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];

    var xAxisFontSize = opts.xAxis.fontSize || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var offset = -measureText(item, xAxisFontSize) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var scrollHeight = 0;
        if (opts.xAxis.scrollShow) {
          scrollHeight = 6 * opts.pixelRatio;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(item, xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - scrollHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });

    } else {
      newCategories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(item);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX + 15,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(item, xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

  //绘制X轴轴线
  if (opts.xAxis.axisLine) {
    context.beginPath();
    context.setStrokeStyle(opts.xAxis.axisLineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, opts.height - opts.area[2]);
    context.lineTo(endX, opts.height - opts.area[2]);
    context.stroke();
  }
}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / config.yAxisSplit;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < config.yAxisSplit + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor);
  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / config.yAxisSplit;
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pixelRatio;
  }
  if (opts.xAxis.rotateLabel) {
    fillEndY = opts.height - opts.area[2] + 3;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true) {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= config.yAxisSplit; i++) {
    points.push(opts.area[0] + eachSpacing * i);
  }

  var tStartLeft = opts.area[3];
  var tStartRight = opts.width - opts.area[1];var _loop6 = function _loop6(

  _i13) {
    var yData = opts.yAxis.data[_i13];
    if (yData.disabled !== true) {
      var rangesFormat = opts.chartData.yAxisData.rangesFormat[_i13];
      var yAxisFontSize = yData.fontSize || config.fontSize;
      var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[_i13];
      //画Y轴刻度及文案
      rangesFormat.forEach(function (item, index) {
        var pos = points[index] ? points[index] : endY;
        context.beginPath();
        context.setFontSize(yAxisFontSize);
        context.setLineWidth(1 * opts.pixelRatio);
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setFillStyle(yData.fontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(String(item), tStartLeft - yAxisWidth.width, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartLeft, pos);
            context.lineTo(tStartLeft - 3 * opts.pixelRatio, pos);
          }
        } else {
          context.fillText(String(item), tStartRight + 4 * opts.pixelRatio, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartRight, pos);
            context.lineTo(tStartRight + 3 * opts.pixelRatio, pos);
          }
        }
        context.closePath();
        context.stroke();
      });
      //画Y轴轴线
      if (yData.axisLine !== false) {
        context.beginPath();
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setLineWidth(1 * opts.pixelRatio);
        if (yAxisWidth.position == 'left') {
          context.moveTo(tStartLeft, opts.height - opts.area[2]);
          context.lineTo(tStartLeft, opts.area[0]);
        } else {
          context.moveTo(tStartRight, opts.height - opts.area[2]);
          context.lineTo(tStartRight, opts.area[0]);
        }
        context.stroke();
      }

      //画Y轴标题
      if (opts.yAxis.showTitle) {

        var titleFontSize = yData.titleFontSize || config.fontSize;
        var title = yData.title;
        context.beginPath();
        context.setFontSize(titleFontSize);
        context.setFillStyle(yData.titleFontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(title, tStartLeft - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        } else {
          context.fillText(title, tStartRight - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        }
        context.closePath();
        context.stroke();
      }
      if (yAxisWidth.position == 'left') {
        tStartLeft -= yAxisWidth.width + opts.yAxis.padding;
      } else {
        tStartRight += yAxisWidth.width + opts.yAxis.padding;
      }
    }};for (var _i13 = 0; _i13 < opts.yAxis.data.length; _i13++) {_loop6(_i13);
  }
}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var itemGap = opts.legend.itemGap;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);

  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();

  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      startX = legendArea.start.x + (legendArea.width - width) / 2;
      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }

    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio, 15 * opts.pixelRatio, 4 * opts.pixelRatio);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight, 5 * opts.pixelRatio, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);}

      context.closePath();
      context.fill();
      context.stroke();

      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    ringWidth: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.pie);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);

  series = getPieDataPoints(series, radius, process);

  var activeRadius = pieOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_,
        eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;

  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);

  var activeRadius = roseOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });

  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_,
        eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 *
    eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12 * opts.pixelRatio },
  opts.extra.arcbar);

  series = getArcbarDataPoints(series, arcbarOption, process);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= arcbarOption.width / 2;

  //背景颜色
  context.setLineWidth(arcbarOption.width);
  context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
  context.setLineCap('round');
  context.beginPath();
  if (arcbarOption.type == 'default') {
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle *
    Math.PI, false);
  } else {
    context.arc(centerPosition.x, centerPosition.y, radius, 0, 2 * Math.PI, false);
  }
  context.stroke();

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ *
    Math.PI, false);
    context.stroke();
  }

  drawRingTitle(opts, config, context, centerPosition);

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    type: 'default',
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);

  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);

  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;
  var totalAngle = 0;

  //判断仪表盘的样式：default百度样式，progress新样式
  if (gaugeOption.type == 'progress') {

    //## 第一步画中心圆形背景和进度条背景
    //中心圆形背景
    var pieRadius = radius - gaugeOption.width * 3;
    context.beginPath();
    var gradient = context.createLinearGradient(centerPosition.x, centerPosition.y - pieRadius, centerPosition.x, centerPosition.y + pieRadius);
    //配置渐变填充（起点：中心点向上减半径；结束点中心点向下加半径）
    gradient.addColorStop('0', hexToRgb(series[0].color, 0.3));
    gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
    context.setFillStyle(gradient);
    context.arc(centerPosition.x, centerPosition.y, pieRadius, 0, 2 * Math.PI, false);
    context.fill();
    //画进度条背景
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, gaugeOption.endAngle * Math.PI, false);
    context.stroke();

    //## 第二步画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var endX = -radius - gaugeOption.width - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    var len = gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1;
    var proc = series[0].data * process;
    for (var i = 0; i < len; i++) {
      context.beginPath();
      //刻度线随进度变色
      if (proc > i / len) {
        context.setStrokeStyle(hexToRgb(series[0].color, 1));
      } else {
        context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
      }
      context.setLineWidth(3 * opts.pixelRatio);
      context.moveTo(startX, 0);
      context.lineTo(endX, 0);
      context.stroke();
      context.rotate(childAngle * Math.PI);
    }
    context.restore();

    //## 第三步画进度条
    series = getArcbarDataPoints(series, gaugeOption, process);
    context.setLineWidth(gaugeOption.width);
    var gradient2 = context.createLinearGradient(centerPosition.x - innerRadius, centerPosition.y, centerPosition.x + innerRadius, centerPosition.y);
    gradient2.addColorStop('0', hexToRgb(series[0].color, 0.2));
    gradient2.addColorStop('1.0', hexToRgb(series[0].color, 1));
    context.setStrokeStyle(gradient2);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, series[0]._proportion_ * Math.PI, false);
    context.stroke();

    //## 第四步画指针
    var pointerRadius = radius - gaugeOption.width * 2.5;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((series[0]._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setLineWidth(gaugeOption.width / 3);
    var gradient3 = context.createLinearGradient(0, -pointerRadius * 0.6, 0, pointerRadius * 0.6);
    gradient3.addColorStop('0', hexToRgb('#FFFFFF', 0));
    gradient3.addColorStop('0.5', hexToRgb(series[0].color, 1));
    gradient3.addColorStop('1.0', hexToRgb('#FFFFFF', 0));
    context.setStrokeStyle(gradient3);
    context.arc(0, 0, pointerRadius, 0.85 * Math.PI, 1.15 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.setLineWidth(1);
    context.setStrokeStyle(series[0].color);
    context.setFillStyle(series[0].color);
    context.moveTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2 - 4, 0);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, 4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.stroke();
    context.fill();
    context.restore();

    //default百度样式
  } else {
    //画背景
    context.setLineWidth(gaugeOption.width);
    context.setLineCap('butt');
    for (var _i14 = 0; _i14 < categories.length; _i14++) {
      var eachCategories = categories[_i14];
      context.beginPath();
      context.setStrokeStyle(eachCategories.color);
      context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
      context.stroke();
    }
    context.save();

    //画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var _splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var _childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var _startX2 = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var _endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i15 = 0; _i15 < gaugeOption.splitLine.splitNumber + 1; _i15++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(2 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(_endX, 0);
      context.stroke();
      context.rotate(_splitAngle * Math.PI);
    }
    context.restore();

    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i16 = 0; _i16 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i16++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(1 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(childendX, 0);
      context.stroke();
      context.rotate(_childAngle * Math.PI);
    }
    context.restore();

    //画指针
    series = getGaugeDataPoints(series, categories, gaugeOption, process);

    for (var _i17 = 0; _i17 < series.length; _i17++) {
      var eachSeries = series[_i17];
      context.save();
      context.translate(centerPosition.x, centerPosition.y);
      context.rotate((eachSeries._proportion_ - 1) * Math.PI);
      context.beginPath();
      context.setFillStyle(eachSeries.color);
      context.moveTo(gaugeOption.pointer.width, 0);
      context.lineTo(0, -gaugeOption.pointer.width / 2);
      context.lineTo(-innerRadius, 0);
      context.lineTo(0, gaugeOption.pointer.width / 2);
      context.lineTo(gaugeOption.pointer.width, 0);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFillStyle('#FFFFFF');
      context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
      context.fill();
      context.restore();
    }

    if (opts.dataLabel !== false) {
      drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
    }
  }

  //画仪表盘标题，副标题
  drawRingTitle(opts, config, context, centerPosition);

  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    labelColor: '#666666',
    opacity: 0.2 },
  opts.extra.radar);

  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);

  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);
  //TODO逻辑不对
  radius -= opts.padding[1];

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();
  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor);
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / config.radarGridCount * i * Math.cos(angle), radius / config.radarGridCount *
      i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= config.radarGridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {return i + j;}) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {return false;}
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {return false;}
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {return false;}
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {return false;}
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {return false;}
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {return false;}
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }

  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  context.beginPath();
  context.clearRect(0, 0, opts.width, opts.height);
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pixelRatio);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        point = coordinateToPoint(coords[j][1], coords[j][0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || '#666666');
        context.fillText(text, point.x - measureText(text, fontSize) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type) {
  var points = opts.series.sort(function (a, b) {return parseInt(b.textSize) - parseInt(a.textSize);});
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize;
        var tWidth = measureText(text, tHeight);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 + opts.height / 2];
          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {return false;};
      };;
      for (var _i18 = 0; _i18 < points.length; _i18++) {
        var _text = points[_i18].name;
        var _tHeight = points[_i18].textSize;
        var _tWidth = measureText(_text, _tHeight);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i18].area = areav;
          points[_i18].areav = _area;
        } else {
          points[_i18].area = _area;
        }
        points[_i18].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);

  context.beginPath();
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);

  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize;
    var tWidth = measureText(text, tHeight);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }

      }
    }

    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right' },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  for (var i = 0; i < series.length; i++) {
    if (i == 0) {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(-activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(activeWidth, 0);
          context.lineTo(-activeWidth, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing, centerPosition.x + series[i].radius, centerPosition.y];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    } else {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(0, 0);
          context.lineTo(-series[i - 1].radius - activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(series[i - 1].radius + activeWidth, 0);
          context.lineTo(0, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i - 1].radius, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(series[i - 1].radius, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    }
    context.translate(0, -eachSpacing);
  }
  context.restore();

  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (i == 0) {
        startX = (item.funnelArea[2] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (i == 0) {
        startX = (item.funnelArea[0] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX - 5 - measureText(text), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}


function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';
  var delay = 17;

  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  this.animationInstance && this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }

  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);

  //重新计算图表区域

  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j];
  }

  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;

  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle') {
    _calYAxisData = calYAxisData(series, opts, config);
    yAxisWidth = _calYAxisData.yAxisWidth;
    //如果显示Y轴标题
    if (opts.yAxis.showTitle) {
      var maxTitleHeight = 0;
      for (var i = 0; i < opts.yAxis.data.length; i++) {
        maxTitleHeight = Math.max(maxTitleHeight, opts.yAxis.data[i].titleFontSize ? opts.yAxis.data[i].titleFontSize : config.fontSize);
      }
      opts.area[0] += (maxTitleHeight + 6) * opts.pixelRatio;
    }
    var rightIndex = 0,leftIndex = 0;
    //计算主绘图区域左右位置
    for (var _i19 = 0; _i19 < yAxisWidth.length; _i19++) {
      if (yAxisWidth[_i19].position == 'left') {
        if (leftIndex > 0) {
          opts.area[3] += yAxisWidth[_i19].width + opts.yAxis.padding;
        } else {
          opts.area[3] += yAxisWidth[_i19].width;
        }
        leftIndex += 1;
      } else {
        if (rightIndex > 0) {
          opts.area[1] += yAxisWidth[_i19].width + opts.yAxis.padding;
        } else {
          opts.area[1] += yAxisWidth[_i19].width;
        }
        rightIndex += 1;
      }
    }
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length) {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  }

  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA);
  }

  switch (type) {
    case 'word':
      var wordOption = assign({}, {
        type: 'normal',
        autoColors: true },
      opts.extra.word);
      if (opts.updateData == true || opts.updateData == undefined) {
        opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type);
      }
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.pixelRatio = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    data: [],
    showTitle: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio,
    gridColor: '#cccccc',
    padding: 10,
    fontColor: '#666666' },
  opts.yAxis);
  opts.yAxis.dashLength *= opts.pixelRatio;
  opts.yAxis.padding *= opts.pixelRatio;
  opts.xAxis = assign({}, {
    rotateLabel: false,
    type: 'calibration',
    gridType: 'solid',
    dashLength: 4,
    scrollAlign: 'left',
    boundaryGap: 'center',
    axisLine: true,
    axisLineColor: '#cccccc' },
  opts.xAxis);
  opts.xAxis.dashLength *= opts.pixelRatio;
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: '#333333',
    format: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.legend.borderWidth = opts.legend.borderWidth * opts.pixelRatio;
  opts.legend.itemGap = opts.legend.itemGap * opts.pixelRatio;
  opts.legend.padding = opts.legend.padding * opts.pixelRatio;
  opts.legend.margin = opts.legend.margin * opts.pixelRatio;
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.colors = opts.colors ? opts.colors : config$$1.colors;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  for (var i = 0; i < 4; i++) {
    opts.padding[i] *= opts.pixelRatio;
  }
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  opts.$this = opts.$this ? opts.$this : this;

  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  /* 兼容原生H5
                                                                     this.context = document.getElementById(opts.canvasId).getContext("2d");
                                                                     this.context.setStrokeStyle = function(e){ return this.strokeStyle=e; }
                                                                     this.context.setLineWidth = function(e){ return this.lineWidth=e; }
                                                                     this.context.setLineCap = function(e){ return this.lineCap=e; }
                                                                     this.context.setFontSize = function(e){ return this.font=e+"px sans-serif"; }
                                                                     this.context.setFillStyle = function(e){ return this.fillStyle=e; }
                                                                     this.context.draw = function(){ }
                                                                     */

  opts.chartData = {};
  this.event = new Event();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };


  this.opts = opts;
  this.config = config$$1;

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
      yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
      xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(
  this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

Charts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      this.opts.series[index].show = !this.opts.series[index].show;
      this.opts.animation = option.animation ? true : false;
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("touchError");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts.chartData.calPoints,
        index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map' || this.opts.type === 'word') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.properties.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.format ? option.format(item) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

Charts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

Charts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.extra.touchMoveLimit || 20;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(this, currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};
if ( true && typeof module.exports === "object") {
  module.exports = Charts;
  //export default Charts;//建议使用nodejs的module导出方式，如报错请使用export方式导出
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 127:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fhome%2Fdetails%2FoperationalDetails"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _operationalDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/view/home/details/operationalDetails.vue */ 128));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_operationalDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 135:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fmine%2Findex%2Findex"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/mine/index/index.vue */ 136));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 148:
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/components/uni-calendar/calendar.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                     * @1900-2100区间内的公历、农历互转
                                                                                                     * @charset UTF-8
                                                                                                     * @github  https://github.com/jjonline/calendar.js
                                                                                                     * @Author  Jea杨(JJonline@JJonline.Cn)
                                                                                                     * @Time    2014-7-21
                                                                                                     * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
                                                                                                     * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
                                                                                                     * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
                                                                                                     * @Version 1.0.3
                                                                                                     * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
                                                                                                     * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
                                                                                                     */
/* eslint-disable */
var calendar = {

  /**
                     * 农历1900-2100的润大小信息表
                     * @Array Of Property
                     * @return Hex
                     */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520], // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
                                                                    * 天干地支之天干速查表
                                                                    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
                                                                    * @return Cn string
                                                                    */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
                                                                                                                 * 天干地支之地支速查表
                                                                                                                 * @Array Of Property
                                                                                                                 * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
                                                                                                                 * @return Cn string
                                                                                                                 */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

  /**
                                                                                                                                     * 天干地支之地支速查表<=>生肖
                                                                                                                                     * @Array Of Property
                                                                                                                                     * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
                                                                                                                                     * @return Cn string
                                                                                                                                     */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

  /**
                                                                                                                                         * 24节气速查表
                                                                                                                                         * @Array Of Property
                                                                                                                                         * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
                                                                                                                                         * @return Cn string
                                                                                                                                         */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                   * 1900-2100各年的24节气日期速查表
                                                                                                                                                                                                                                                                                                                                                                                                                   * @Array Of Property
                                                                                                                                                                                                                                                                                                                                                                                                                   * @return 0x string For splice
                                                                                                                                                                                                                                                                                                                                                                                                                   */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
                                                                                                             * 数字转中文速查表
                                                                                                             * @Array Of Property
                                                                                                             * @trans ['日','一','二','三','四','五','六','七','八','九','十']
                                                                                                             * @return Cn string
                                                                                                             */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
                                                                                                                             * 日期转农历称呼速查表
                                                                                                                             * @Array Of Property
                                                                                                                             * @trans ['初','十','廿','卅']
                                                                                                                             * @return Cn string
                                                                                                                             */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
                                                       * 月份转农历称呼速查表
                                                       * @Array Of Property
                                                       * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
                                                       * @return Cn string
                                                       */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

  /**
                                                                                                                                       * 返回农历y年一整年的总天数
                                                                                                                                       * @param lunar Year
                                                                                                                                       * @return Number
                                                                                                                                       * @eg:var count = calendar.lYearDays(1987) ;//count=387
                                                                                                                                       */
  lYearDays: function lYearDays(y) {
    var i;var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {sum += this.lunarInfo[y - 1900] & i ? 1 : 0;}
    return sum + this.leapDays(y);
  },

  /**
         * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
         * @param lunar Year
         * @return Number (0-12)
         * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
         */
  leapMonth: function leapMonth(y) {// 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
         * 返回农历y年闰月的天数 若该年没有闰月则返回0
         * @param lunar Year
         * @return Number (0、29、30)
         * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
         */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },

  /**
         * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
         * @param lunar Year
         * @return Number (-1、29、30)
         * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
         */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
         * 返回公历(!)y年m月的天数
         * @param solar Year
         * @return Number (-1、28、29、30、31)
         * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
         */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {// 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
        * 农历年份转换为干支纪年
        * @param  lYear 农历年的年份数
        * @return Cn string
        */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
        * 公历月、日判断所属星座
        * @param  cMonth [description]
        * @param  cDay [description]
        * @return Cn string
        */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
         * 传入offset偏移量返回干支
         * @param offset 相对甲子的偏移量
         * @return Cn string
         */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
         * 传入公历(!)y年获得该年第n个节气的公历日期
         * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
         * @return day Number
         * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
         */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {return -1;}
    if (n < 1 || n > 24) {return -1;}
    var _table = this.sTermInfo[y - 1900];
    var _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()];

    var _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2)];

    return parseInt(_calday[n - 1]);
  },

  /**
         * 传入农历数字月份返回汉语通俗表示法
         * @param lunar month
         * @return Cn string
         * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
         */
  toChinaMonth: function toChinaMonth(m) {// 月 => \u6708
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },

  /**
         * 传入农历日期数字返回汉字表示法
         * @param lunar day
         * @return Cn string
         * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
         */
  toChinaDay: function toChinaDay(d) {// 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";break;
      case 20:
        s = "\u4E8C\u5341";break;
        break;
      case 30:
        s = "\u4E09\u5341";break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];}

    return s;
  },

  /**
         * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
         * @param y year
         * @return Cn string
         * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
         */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
         * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
         * @param y  solar year
         * @param m  solar month
         * @param d  solar day
         * @return JSON object
         * @eg:console.log(calendar.solar2lunar(1987,11,01));
         */
  solar2lunar: function solar2lunar(y, m, d) {// 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;var leap = 0;var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {isLeap = false;}
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;--i;
      }
    }
    if (offset < 0) {
      offset += temp;--i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);

    return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': this.getAnimal(year), 'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month), 'IDayCn': this.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661F\u671F" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
  },

  /**
         * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
         * @param y  lunar year
         * @param m  lunar month
         * @param d  lunar day
         * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
         * @return JSON object
         * @eg:console.log(calendar.lunar2solar(1987,9,10));
         */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {// 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {return -1;} // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {return -1;} // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {return -1;} // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {// 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {offset += day;}
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();

    return this.solar2lunar(cY, cM, cD);
  } };var _default =


calendar;exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fhome%2FarrangementTasks%2Findex"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/home/arrangementTasks/index.vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 38:
/*!************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/pages/commont/city.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var cityData = [{
  "initial": "A",
  "list": [{
    "code": "0997",
    "name": "阿克苏",
    "pinyin": "Akesu",
    "label": "Akesu0997" },

  {
    "code": "0837",
    "name": "阿坝",
    "pinyin": "Aba",
    "label": "Aba0837" },

  {
    "code": "0483",
    "name": "阿拉善盟",
    "pinyin": "Alashanmeng",
    "label": "Alashanmeng0483" },

  {
    "code": "0906",
    "name": "阿勒泰",
    "pinyin": "Aletai",
    "label": "Aletai0906" },

  {
    "code": "0897",
    "name": "阿里",
    "pinyin": "Ali",
    "label": "Ali0897" },

  {
    "code": "0915",
    "name": "安康",
    "pinyin": "Ankang",
    "label": "Ankang0915" },

  {
    "code": "0556",
    "name": "安庆",
    "pinyin": "Anqing",
    "label": "Anqing0556" },

  {
    "code": "0412",
    "name": "鞍山",
    "pinyin": "Anshan",
    "label": "Anshan0412" },

  {
    "code": "0853",
    "name": "安顺",
    "pinyin": "Anshun",
    "label": "Anshun0853" },

  {
    "code": "0372",
    "name": "安阳",
    "pinyin": "Anyang",
    "label": "Anyang0372" },

  {
    "code": "0451",
    "name": "阿城",
    "pinyin": "Acheng",
    "label": "Acheng0451" },

  {
    "code": "0796",
    "name": "安福",
    "pinyin": "Anfu",
    "label": "Anfu0796" },

  {
    "code": "0572",
    "name": "安吉",
    "pinyin": "Anji",
    "label": "Anji0572" },

  {
    "code": "0871",
    "name": "安宁",
    "pinyin": "Anning",
    "label": "Anning0871" },

  {
    "code": "0536",
    "name": "安丘",
    "pinyin": "Anqiu",
    "label": "Anqiu0536" },

  {
    "code": "0595",
    "name": "安溪",
    "pinyin": "Anxi",
    "label": "Anxi0595" },

  {
    "code": "0791",
    "name": "安义",
    "pinyin": "Anyi",
    "label": "Anyi0791" },

  {
    "code": "0797",
    "name": "安远",
    "pinyin": "Anyuan",
    "label": "Anyuan0797" }] },



{
  "initial": "B",
  "list": [{
    "code": "010",
    "name": "北京",
    "pinyin": "Beijing",
    "label": "Beijing010" },

  {
    "code": "0436",
    "name": "白城",
    "pinyin": "Baicheng",
    "label": "Baicheng0436" },

  {
    "code": "0776",
    "name": "百色",
    "pinyin": "Baise",
    "label": "Baise0776" },

  {
    "code": "0439",
    "name": "白山",
    "pinyin": "Baishan",
    "label": "Baishan0439" },

  {
    "code": "0943",
    "name": "白银",
    "pinyin": "Baiyin",
    "label": "Baiyin0943" },

  {
    "code": "0552",
    "name": "蚌埠",
    "pinyin": "Bangbu",
    "label": "Bangbu0552" },

  {
    "code": "0312",
    "name": "保定",
    "pinyin": "Baoding",
    "label": "Baoding0312" },

  {
    "code": "0917",
    "name": "宝鸡",
    "pinyin": "Baoji",
    "label": "Baoji0917" },

  {
    "code": "0875",
    "name": "保山",
    "pinyin": "Baoshan",
    "label": "Baoshan0875" },

  {
    "code": "0472",
    "name": "包头",
    "pinyin": "Baotou",
    "label": "Baotou0472" },

  {
    "code": "0478",
    "name": "巴彦淖尔",
    "pinyin": "Bayannaoer",
    "label": "Bayannaoer0478" },

  {
    "code": "0996",
    "name": "巴音郭楞",
    "pinyin": "Bayinguoleng",
    "label": "Bayinguoleng0996" },

  {
    "code": "0827",
    "name": "巴中",
    "pinyin": "Bazhong",
    "label": "Bazhong0827" },

  {
    "code": "0779",
    "name": "北海",
    "pinyin": "Beihai",
    "label": "Beihai0779" },

  {
    "code": "0414",
    "name": "本溪",
    "pinyin": "Benxi",
    "label": "Benxi0414" },

  {
    "code": "0857",
    "name": "毕节",
    "pinyin": "Bijie",
    "label": "Bijie0857" },

  {
    "code": "0543",
    "name": "滨州",
    "pinyin": "Binzhou",
    "label": "Binzhou0543" },

  {
    "code": "0909",
    "name": "博尔塔拉",
    "pinyin": "Boertala",
    "label": "Boertala0909" },

  {
    "code": "0558",
    "name": "亳州",
    "pinyin": "Bozhou",
    "label": "Bozhou0558" },

  {
    "code": "0514",
    "name": "宝应",
    "pinyin": "Baoying",
    "label": "Baoying0514" },

  {
    "code": "0451",
    "name": "巴彦",
    "pinyin": "Bayan",
    "label": "Bayan0451" },

  {
    "code": "0515",
    "name": "滨海",
    "pinyin": "Binhai",
    "label": "Binhai0515" },

  {
    "code": "0451",
    "name": "宾县",
    "pinyin": "Binxian",
    "label": "Binxian0451" },

  {
    "code": "0771",
    "name": "宾阳",
    "pinyin": "Binyang",
    "label": "Binyang0771" },

  {
    "code": "023",
    "name": "璧山",
    "pinyin": "Bishan",
    "label": "Bishan023" },

  {
    "code": "0391",
    "name": "博爱",
    "pinyin": "Boai",
    "label": "Boai0391" },

  {
    "code": "0752",
    "name": "博罗",
    "pinyin": "Boluo",
    "label": "Boluo0752" },

  {
    "code": "0543",
    "name": "博兴",
    "pinyin": "Boxing",
    "label": "Boxing0543" }] },



{
  "initial": "C",
  "list": [{
    "code": "023",
    "name": "重庆",
    "pinyin": "Chongqing",
    "label": "Chongqing023" },

  {
    "code": "0431",
    "name": "长春",
    "pinyin": "Changchun",
    "label": "Changchun0431" },

  {
    "code": "0731",
    "name": "长沙",
    "pinyin": "Changsha",
    "label": "Changsha0731" },

  {
    "code": "0519",
    "name": "常州",
    "pinyin": "Changzhou",
    "label": "Changzhou0519" },

  {
    "code": "028",
    "name": "成都",
    "pinyin": "Chengdu",
    "label": "Chengdu028" },

  {
    "code": "0317",
    "name": "沧州",
    "pinyin": "Cangzhou",
    "label": "Cangzhou0317" },

  {
    "code": "0736",
    "name": "常德",
    "pinyin": "Changde",
    "label": "Changde0736" },

  {
    "code": "0895",
    "name": "昌都",
    "pinyin": "Changdu",
    "label": "Changdu0895" },

  {
    "code": "0997",
    "name": "昌吉",
    "pinyin": "Changji",
    "label": "Changji0997" },

  {
    "code": "0355",
    "name": "长治",
    "pinyin": "Changzhi",
    "label": "Changzhi0355" },

  {
    "code": "0565",
    "name": "巢湖",
    "pinyin": "Chaohu",
    "label": "Chaohu0565" },

  {
    "code": "0421",
    "name": "朝阳",
    "pinyin": "Chaoyang",
    "label": "Chaoyang0421" },

  {
    "code": "0768",
    "name": "潮州",
    "pinyin": "Chaozhou",
    "label": "Chaozhou0768" },

  {
    "code": "0314",
    "name": "承德",
    "pinyin": "Chengde",
    "label": "Chengde0314" },

  {
    "code": "0735",
    "name": "郴州",
    "pinyin": "Chenzhou",
    "label": "Chenzhou0735" },

  {
    "code": "0476",
    "name": "赤峰",
    "pinyin": "Chifeng",
    "label": "Chifeng0476" },

  {
    "code": "0566",
    "name": "池州",
    "pinyin": "Chizhou",
    "label": "Chizhou0566" },

  {
    "code": "0771",
    "name": "崇左",
    "pinyin": "Chongzuo",
    "label": "Chongzuo0771" },

  {
    "code": "0875",
    "name": "楚雄",
    "pinyin": "Chuxiong",
    "label": "Chuxiong0875" },

  {
    "code": "0550",
    "name": "滁州",
    "pinyin": "Chuzhou",
    "label": "Chuzhou0550" },

  {
    "code": "0577",
    "name": "苍南",
    "pinyin": "Cangnan",
    "label": "Cangnan0577" },

  {
    "code": "0539",
    "name": "苍山",
    "pinyin": "Cangshan",
    "label": "Cangshan0539" },

  {
    "code": "0530",
    "name": "曹县",
    "pinyin": "Caoxian",
    "label": "Caoxian0530" },

  {
    "code": "0535",
    "name": "长岛",
    "pinyin": "Changdao",
    "label": "Changdao0535" },

  {
    "code": "0551",
    "name": "长丰",
    "pinyin": "Changfeng",
    "label": "Changfeng0551" },

  {
    "code": "0411",
    "name": "长海",
    "pinyin": "Changhai",
    "label": "Changhai0411" },

  {
    "code": "0591",
    "name": "长乐",
    "pinyin": "Changle",
    "label": "Changle0591" },

  {
    "code": "0536",
    "name": "昌乐",
    "pinyin": "Changle",
    "label": "Changle0536" },

  {
    "code": "0570",
    "name": "常山",
    "pinyin": "Changshan",
    "label": "Changshan0570" },

  {
    "code": "0512",
    "name": "常熟",
    "pinyin": "Changshu",
    "label": "Changshu0512" },

  {
    "code": "0596",
    "name": "长泰",
    "pinyin": "Changtai",
    "label": "Changtai0596" },

  {
    "code": "0597",
    "name": "长汀",
    "pinyin": "Changting",
    "label": "Changting0597" },

  {
    "code": "0572",
    "name": "长兴",
    "pinyin": "Changxing",
    "label": "Changxing0572" },

  {
    "code": "0536",
    "name": "昌邑",
    "pinyin": "Changyi",
    "label": "Changyi0536" },

  {
    "code": "0768",
    "name": "潮安",
    "pinyin": "Chaoan",
    "label": "Chaoan0768" },

  {
    "code": "0871",
    "name": "呈贡",
    "pinyin": "Chenggong",
    "label": "Chenggong0871" },

  {
    "code": "023",
    "name": "城口",
    "pinyin": "Chengkou",
    "label": "Chengkou023" },

  {
    "code": "0530",
    "name": "成武",
    "pinyin": "Chengwu",
    "label": "Chengwu0530" },

  {
    "code": "0635",
    "name": "茌平",
    "pinyin": "Chiping",
    "label": "Chiping0635" },

  {
    "code": "0794",
    "name": "崇仁",
    "pinyin": "Chongren",
    "label": "Chongren0794" },

  {
    "code": "0797",
    "name": "崇义",
    "pinyin": "Chongyi",
    "label": "Chongyi0797" },

  {
    "code": "028",
    "name": "崇州",
    "pinyin": "Chongzhou",
    "label": "Chongzhou028" },

  {
    "code": "0571",
    "name": "淳安",
    "pinyin": "Chunan",
    "label": "Chunan0571" },

  {
    "code": "0574",
    "name": "慈溪",
    "pinyin": "Cixi",
    "label": "Cixi0574" },

  {
    "code": "020",
    "name": "从化",
    "pinyin": "Conghua",
    "label": "Conghua020" },

  {
    "code": "0556",
    "name": "枞阳",
    "pinyin": "Congyang",
    "label": "Congyang0556" }] },



{
  "initial": "D",
  "list": [{
    "code": "0411",
    "name": "大连",
    "pinyin": "Dalian",
    "label": "Dalian0411" },

  {
    "code": "0769",
    "name": "东莞",
    "pinyin": "Dongguan",
    "label": "Dongguan0769" },

  {
    "code": "0872",
    "name": "大理",
    "pinyin": "Dali",
    "label": "Dali0872" },

  {
    "code": "0415",
    "name": "丹东",
    "pinyin": "Dandong",
    "label": "Dandong0415" },

  {
    "code": "0459",
    "name": "大庆",
    "pinyin": "Daqing",
    "label": "Daqing0459" },

  {
    "code": "0352",
    "name": "大同",
    "pinyin": "Datong",
    "label": "Datong0352" },

  {
    "code": "0457",
    "name": "大兴安岭",
    "pinyin": "Daxinganling",
    "label": "Daxinganling0457" },

  {
    "code": "0818",
    "name": "达州",
    "pinyin": "Dazhou",
    "label": "Dazhou0818" },

  {
    "code": "0692",
    "name": "德宏",
    "pinyin": "Dehong",
    "label": "Dehong0692" },

  {
    "code": "0838",
    "name": "德阳",
    "pinyin": "Deyang",
    "label": "Deyang0838" },

  {
    "code": "0534",
    "name": "德州",
    "pinyin": "Dezhou",
    "label": "Dezhou0534" },

  {
    "code": "0932",
    "name": "定西",
    "pinyin": "Dingxi",
    "label": "Dingxi0932" },

  {
    "code": "0887",
    "name": "迪庆",
    "pinyin": "Diqing",
    "label": "Diqing0887" },

  {
    "code": "0546",
    "name": "东营",
    "pinyin": "Dongying",
    "label": "Dongying0546" },

  {
    "code": "0515",
    "name": "大丰",
    "pinyin": "Dafeng",
    "label": "Dafeng0515" },

  {
    "code": "0580",
    "name": "岱山",
    "pinyin": "Daishan",
    "label": "Daishan0580" },

  {
    "code": "0557",
    "name": "砀山",
    "pinyin": "Dangshan",
    "label": "Dangshan0557" },

  {
    "code": "0555",
    "name": "当涂",
    "pinyin": "Dangtu",
    "label": "Dangtu0555" },

  {
    "code": "0530",
    "name": "单县",
    "pinyin": "Danxian",
    "label": "Danxian0530" },

  {
    "code": "0511",
    "name": "丹阳",
    "pinyin": "Danyang",
    "label": "Danyang0511" },

  {
    "code": "0753",
    "name": "大埔",
    "pinyin": "Dapu",
    "label": "Dapu0753" },

  {
    "code": "0598",
    "name": "大田",
    "pinyin": "Datian",
    "label": "Datian0598" },

  {
    "code": "028",
    "name": "大邑",
    "pinyin": "Dayi",
    "label": "Dayi028" },

  {
    "code": "0797",
    "name": "大余",
    "pinyin": "Dayu",
    "label": "Dayu0797" },

  {
    "code": "023",
    "name": "大足",
    "pinyin": "Dazu",
    "label": "Dazu023" },

  {
    "code": "0792",
    "name": "德安",
    "pinyin": "Dean",
    "label": "Dean0792" },

  {
    "code": "0595",
    "name": "德化",
    "pinyin": "Dehua",
    "label": "Dehua0595" },

  {
    "code": "0431",
    "name": "德惠",
    "pinyin": "Dehui",
    "label": "Dehui0431" },

  {
    "code": "0371",
    "name": "登封",
    "pinyin": "Dengfeng",
    "label": "Dengfeng0371" },

  {
    "code": "0572",
    "name": "德清",
    "pinyin": "Deqing",
    "label": "Deqing0572" },

  {
    "code": "0758",
    "name": "德庆",
    "pinyin": "Deqing",
    "label": "Deqing0758" },

  {
    "code": "0793",
    "name": "德兴",
    "pinyin": "Dexing",
    "label": "Dexing0793" },

  {
    "code": "0668",
    "name": "电白",
    "pinyin": "Dianbai",
    "label": "Dianbai0668" },

  {
    "code": "023",
    "name": "垫江",
    "pinyin": "Dianjiang",
    "label": "Dianjiang023" },

  {
    "code": "0797",
    "name": "定南",
    "pinyin": "Dingnan",
    "label": "Dingnan0797" },

  {
    "code": "0530",
    "name": "定陶",
    "pinyin": "Dingtao",
    "label": "Dingtao0530" },

  {
    "code": "0550",
    "name": "定远",
    "pinyin": "Dingyuan",
    "label": "Dingyuan0550" },

  {
    "code": "0635",
    "name": "东阿",
    "pinyin": "Donga",
    "label": "Donga0635" },

  {
    "code": "0518",
    "name": "东海",
    "pinyin": "Donghai",
    "label": "Donghai0518" },

  {
    "code": "0530",
    "name": "东明",
    "pinyin": "Dongming",
    "label": "Dongming0530" },

  {
    "code": "0538",
    "name": "东平",
    "pinyin": "Dongping",
    "label": "Dongping0538" },

  {
    "code": "0596",
    "name": "东山",
    "pinyin": "Dongshan",
    "label": "Dongshan0596" },

  {
    "code": "0515",
    "name": "东台",
    "pinyin": "Dongtai",
    "label": "Dongtai0515" },

  {
    "code": "0577",
    "name": "洞头",
    "pinyin": "Dongtou",
    "label": "Dongtou0577" },

  {
    "code": "0794",
    "name": "东乡",
    "pinyin": "Dongxiang",
    "label": "Dongxiang0794" },

  {
    "code": "0579",
    "name": "东阳",
    "pinyin": "Dongyang",
    "label": "Dongyang0579" },

  {
    "code": "0762",
    "name": "东源",
    "pinyin": "Dongyuan",
    "label": "Dongyuan0762" },

  {
    "code": "0566",
    "name": "东至",
    "pinyin": "Dongzhi",
    "label": "Dongzhi0566" },

  {
    "code": "0792",
    "name": "都昌",
    "pinyin": "Duchang",
    "label": "Duchang0792" },

  {
    "code": "028",
    "name": "都江堰",
    "pinyin": "Dujiangyan",
    "label": "Dujiangyan028" }] },



{
  "initial": "E",
  "list": [{
    "code": "0718",
    "name": "恩施",
    "pinyin": "Enshi",
    "label": "Enshi0718" },

  {
    "code": "0477",
    "name": "鄂尔多斯",
    "pinyin": "Eerduosi",
    "label": "Eerduosi0477" },

  {
    "code": "0711",
    "name": "鄂州",
    "pinyin": "Ezhou",
    "label": "Ezhou0711" },

  {
    "code": "0750",
    "name": "恩平",
    "pinyin": "Enping",
    "label": "Enping0750" }] },



{
  "initial": "F",
  "list": [{
    "code": "0413",
    "name": "抚顺",
    "pinyin": "Fushun",
    "label": "Fushun0413" },

  {
    "code": "0757",
    "name": "佛山",
    "pinyin": "Foshan",
    "label": "Foshan0757" },

  {
    "code": "0591",
    "name": "福州",
    "pinyin": "Fuzhou",
    "label": "Fuzhou0591" },

  {
    "code": "0770",
    "name": "防城港",
    "pinyin": "Fangchenggang",
    "label": "Fangchenggang0770" },

  {
    "code": "0418",
    "name": "阜新",
    "pinyin": "Fuxin",
    "label": "Fuxin0418" },

  {
    "code": "0558",
    "name": "阜阳",
    "pinyin": "Fuyang",
    "label": "Fuyang0558" },

  {
    "code": "0794",
    "name": "抚州",
    "pinyin": "Fuzhou",
    "label": "Fuzhou0794" },

  {
    "code": "024",
    "name": "法库",
    "pinyin": "Faku",
    "label": "Faku024" },

  {
    "code": "0553",
    "name": "繁昌",
    "pinyin": "Fanchang",
    "label": "Fanchang0553" },

  {
    "code": "0451",
    "name": "方正",
    "pinyin": "Fangzheng",
    "label": "Fangzheng0451" },

  {
    "code": "0538",
    "name": "肥城",
    "pinyin": "Feicheng",
    "label": "Feicheng0538" },

  {
    "code": "0551",
    "name": "肥东",
    "pinyin": "Feidong",
    "label": "Feidong0551" },

  {
    "code": "0551",
    "name": "肥西",
    "pinyin": "Feixi",
    "label": "Feixi0551" },

  {
    "code": "0539",
    "name": "费县",
    "pinyin": "Feixian",
    "label": "Feixian0539" },

  {
    "code": "0795",
    "name": "丰城",
    "pinyin": "Fengcheng",
    "label": "Fengcheng0795" },

  {
    "code": "023",
    "name": "丰都",
    "pinyin": "Fengdu",
    "label": "Fengdu023" },

  {
    "code": "0574",
    "name": "奉化",
    "pinyin": "Fenghua",
    "label": "Fenghua0574" },

  {
    "code": "023",
    "name": "奉节",
    "pinyin": "Fengjie",
    "label": "Fengjie023" },

  {
    "code": "0758",
    "name": "封开",
    "pinyin": "Fengkai",
    "label": "Fengkai0758" },

  {
    "code": "0753",
    "name": "丰顺",
    "pinyin": "Fengshun",
    "label": "Fengshun0753" },

  {
    "code": "0554",
    "name": "凤台",
    "pinyin": "Fengtai",
    "label": "Fengtai0554" },

  {
    "code": "0516",
    "name": "丰县",
    "pinyin": "Fengxian",
    "label": "Fengxian0516" },

  {
    "code": "0795",
    "name": "奉新",
    "pinyin": "Fengxin",
    "label": "Fengxin0795" },

  {
    "code": "0550",
    "name": "凤阳",
    "pinyin": "Fengyang",
    "label": "Fengyang0550" },

  {
    "code": "0790",
    "name": "分宜",
    "pinyin": "Fenyi",
    "label": "Fenyi0790" },

  {
    "code": "0763",
    "name": "佛冈",
    "pinyin": "Fogang",
    "label": "Fogang0763" },

  {
    "code": "0593",
    "name": "福安",
    "pinyin": "Fuan",
    "label": "Fuan0593" },

  {
    "code": "0593",
    "name": "福鼎",
    "pinyin": "Fuding",
    "label": "Fuding0593" },

  {
    "code": "0798",
    "name": "浮梁",
    "pinyin": "Fuliang",
    "label": "Fuliang0798" },

  {
    "code": "0871",
    "name": "富民",
    "pinyin": "Fumin",
    "label": "Fumin0871" },

  {
    "code": "0558",
    "name": "阜南",
    "pinyin": "Funan",
    "label": "Funan0558" },

  {
    "code": "0515",
    "name": "阜宁",
    "pinyin": "Funing",
    "label": "Funing0515" },

  {
    "code": "0591",
    "name": "福清",
    "pinyin": "Fuqing",
    "label": "Fuqing0591" },

  {
    "code": "0571",
    "name": "富阳",
    "pinyin": "Fuyang",
    "label": "Fuyang0571" }] },



{
  "initial": "G",
  "list": [{
    "code": "0941",
    "name": "甘南",
    "pinyin": "Gannan",
    "label": "Gannan0941" },

  {
    "code": "020",
    "name": "广州",
    "pinyin": "Guangzhou",
    "label": "Guangzhou020" },

  {
    "code": "0851",
    "name": "贵阳",
    "pinyin": "Guiyang",
    "label": "Guiyang0851" },

  {
    "code": "0797",
    "name": "赣州",
    "pinyin": "Ganzhou",
    "label": "Ganzhou0797" },

  {
    "code": "0836",
    "name": "甘孜",
    "pinyin": "Ganzi",
    "label": "Ganzi0836" },

  {
    "code": "0826",
    "name": "广安",
    "pinyin": "Guangan",
    "label": "Guangan0826" },

  {
    "code": "0839",
    "name": "广元",
    "pinyin": "Guangyuan",
    "label": "Guangyuan0839" },

  {
    "code": "0775",
    "name": "贵港",
    "pinyin": "Guigang",
    "label": "Guigang0775" },

  {
    "code": "0773",
    "name": "桂林",
    "pinyin": "Guilin",
    "label": "Guilin0773" },

  {
    "code": "0975",
    "name": "果洛",
    "pinyin": "Guoluo",
    "label": "Guoluo0975" },

  {
    "code": "0954",
    "name": "固原",
    "pinyin": "Guyuan",
    "label": "Guyuan0954" },

  {
    "code": "0797",
    "name": "赣县",
    "pinyin": "Ganxian",
    "label": "Ganxian0797" },

  {
    "code": "0518",
    "name": "赣榆",
    "pinyin": "Ganyu",
    "label": "Ganyu0518" },

  {
    "code": "0795",
    "name": "高安",
    "pinyin": "Gaoan",
    "label": "Gaoan0795" },

  {
    "code": "0311",
    "name": "藁城",
    "pinyin": "Gaocheng",
    "label": "Gaocheng0311" },

  {
    "code": "025",
    "name": "高淳",
    "pinyin": "Gaochun",
    "label": "Gaochun025" },

  {
    "code": "0931",
    "name": "皋兰",
    "pinyin": "Gaolan",
    "label": "Gaolan0931" },

  {
    "code": "029",
    "name": "高陵",
    "pinyin": "Gaoling",
    "label": "Gaoling029" },

  {
    "code": "0536",
    "name": "高密",
    "pinyin": "Gaomi",
    "label": "Gaomi0536" },

  {
    "code": "0533",
    "name": "高青",
    "pinyin": "Gaoqing",
    "label": "Gaoqing0533" },

  {
    "code": "0635",
    "name": "高唐",
    "pinyin": "Gaotang",
    "label": "Gaotang0635" },

  {
    "code": "0758",
    "name": "高要",
    "pinyin": "Gaoyao",
    "label": "Gaoyao0758" },

  {
    "code": "0311",
    "name": "高邑",
    "pinyin": "Gaoyi",
    "label": "Gaoyi0311" },

  {
    "code": "0514",
    "name": "高邮",
    "pinyin": "Gaoyou",
    "label": "Gaoyou0514" },

  {
    "code": "0668",
    "name": "高州",
    "pinyin": "Gaozhou",
    "label": "Gaozhou0668" },

  {
    "code": "0371",
    "name": "巩义",
    "pinyin": "Gongyi",
    "label": "Gongyi0371" },

  {
    "code": "0794",
    "name": "广昌",
    "pinyin": "Guangchang",
    "label": "Guangchang0794" },

  {
    "code": "0563",
    "name": "广德",
    "pinyin": "Guangde",
    "label": "Guangde0563" },

  {
    "code": "0793",
    "name": "广丰",
    "pinyin": "Guangfeng",
    "label": "Guangfeng0793" },

  {
    "code": "0758",
    "name": "广宁",
    "pinyin": "Guangning",
    "label": "Guangning0758" },

  {
    "code": "0546",
    "name": "广饶",
    "pinyin": "Guangrao",
    "label": "Guangrao0546" },

  {
    "code": "0599",
    "name": "光泽",
    "pinyin": "Guangze",
    "label": "Guangze0599" },

  {
    "code": "0518",
    "name": "灌南",
    "pinyin": "Guannan",
    "label": "Guannan0518" },

  {
    "code": "0635",
    "name": "冠县",
    "pinyin": "Guanxian",
    "label": "Guanxian0635" },

  {
    "code": "0518",
    "name": "灌云",
    "pinyin": "Guanyun",
    "label": "Guanyun0518" },

  {
    "code": "0701",
    "name": "贵溪",
    "pinyin": "Guixi",
    "label": "Guixi0701" },

  {
    "code": "0593",
    "name": "古田",
    "pinyin": "Gutian",
    "label": "Gutian0593" },

  {
    "code": "0552",
    "name": "固镇",
    "pinyin": "Guzhen",
    "label": "Guzhen0552" }] },



{
  "initial": "H",
  "list": [{
    "code": "0970",
    "name": "海北",
    "pinyin": "Haibei",
    "label": "Haibei0970" },

  {
    "code": "0451",
    "name": "哈尔滨",
    "pinyin": "Haerbin",
    "label": "Haerbin0451" },

  {
    "code": "0898",
    "name": "海口",
    "pinyin": "Haikou",
    "label": "Haikou0898" },

  {
    "code": "0310",
    "name": "邯郸",
    "pinyin": "Handan",
    "label": "Handan0310" },

  {
    "code": "0571",
    "name": "杭州",
    "pinyin": "Hangzhou",
    "label": "Hangzhou0571" },

  {
    "code": "0551",
    "name": "合肥",
    "pinyin": "Hefei",
    "label": "Hefei0551" },

  {
    "code": "0752",
    "name": "惠州",
    "pinyin": "Huizhou",
    "label": "Huizhou0752" },

  {
    "code": "0972",
    "name": "海东",
    "pinyin": "Haidong",
    "label": "Haidong0972" },

  {
    "code": "0974",
    "name": "海南",
    "pinyin": "Hainan",
    "label": "Hainan0974" },

  {
    "code": "0977",
    "name": "海西",
    "pinyin": "Haixi",
    "label": "Haixi0977" },

  {
    "code": "0902",
    "name": "哈密",
    "pinyin": "Hami",
    "label": "Hami0902" },

  {
    "code": "0916",
    "name": "汉中",
    "pinyin": "Hanzhong",
    "label": "Hanzhong0916" },

  {
    "code": "0392",
    "name": "鹤壁",
    "pinyin": "Hebi",
    "label": "Hebi0392" },

  {
    "code": "0778",
    "name": "河池",
    "pinyin": "Hechi",
    "label": "Hechi0778" },

  {
    "code": "0468",
    "name": "鹤岗",
    "pinyin": "Hegang",
    "label": "Hegang0468" },

  {
    "code": "0456",
    "name": "黑河",
    "pinyin": "Heihe",
    "label": "Heihe0456" },

  {
    "code": "0318",
    "name": "衡水",
    "pinyin": "Hengshui",
    "label": "Hengshui0318" },

  {
    "code": "0734",
    "name": "衡阳",
    "pinyin": "Hengyang",
    "label": "Hengyang0734" },

  {
    "code": "0903",
    "name": "和田地",
    "pinyin": "Hetiandi",
    "label": "Hetiandi0903" },

  {
    "code": "0762",
    "name": "河源",
    "pinyin": "Heyuan",
    "label": "Heyuan0762" },

  {
    "code": "0530",
    "name": "菏泽",
    "pinyin": "Heze",
    "label": "Heze0530" },

  {
    "code": "0774",
    "name": "贺州",
    "pinyin": "Hezhou",
    "label": "Hezhou0774" },

  {
    "code": "0873",
    "name": "红河",
    "pinyin": "Honghe",
    "label": "Honghe0873" },

  {
    "code": "0517",
    "name": "淮安",
    "pinyin": "Huaian",
    "label": "Huaian0517" },

  {
    "code": "0561",
    "name": "淮北",
    "pinyin": "Huaibei",
    "label": "Huaibei0561" },

  {
    "code": "0745",
    "name": "怀化",
    "pinyin": "Huaihua",
    "label": "Huaihua0745" },

  {
    "code": "0554",
    "name": "淮南",
    "pinyin": "Huainan",
    "label": "Huainan0554" },

  {
    "code": "0713",
    "name": "黄冈",
    "pinyin": "Huanggang",
    "label": "Huanggang0713" },

  {
    "code": "0973",
    "name": "黄南",
    "pinyin": "Huangnan",
    "label": "Huangnan0973" },

  {
    "code": "0559",
    "name": "黄山",
    "pinyin": "Huangshan",
    "label": "Huangshan0559" },

  {
    "code": "0714",
    "name": "黄石",
    "pinyin": "Huangshi",
    "label": "Huangshi0714" },

  {
    "code": "0471",
    "name": "呼和浩特",
    "pinyin": "Huhehaote",
    "label": "Huhehaote0471" },

  {
    "code": "0429",
    "name": "葫芦岛",
    "pinyin": "Huludao",
    "label": "Huludao0429" },

  {
    "code": "0470",
    "name": "呼伦贝尔",
    "pinyin": "Hulunbeier",
    "label": "Hulunbeier0470" },

  {
    "code": "0572",
    "name": "湖州",
    "pinyin": "Huzhou",
    "label": "Huzhou0572" },

  {
    "code": "0513",
    "name": "海安",
    "pinyin": "Haian",
    "label": "Haian0513" },

  {
    "code": "0660",
    "name": "海丰",
    "pinyin": "Haifeng",
    "label": "Haifeng0660" },

  {
    "code": "0513",
    "name": "海门",
    "pinyin": "Haimen",
    "label": "Haimen0513" },

  {
    "code": "0573",
    "name": "海宁",
    "pinyin": "Haining",
    "label": "Haining0573" },

  {
    "code": "0573",
    "name": "海盐",
    "pinyin": "Haiyan",
    "label": "Haiyan0573" },

  {
    "code": "0535",
    "name": "海阳",
    "pinyin": "Haiyang",
    "label": "Haiyang0535" },

  {
    "code": "0565",
    "name": "含山",
    "pinyin": "Hanshan",
    "label": "Hanshan0565" },

  {
    "code": "023",
    "name": "合川",
    "pinyin": "Hechuan",
    "label": "Hechuan023" },

  {
    "code": "0793",
    "name": "横峰",
    "pinyin": "Hengfeng",
    "label": "Hengfeng0793" },

  {
    "code": "0771",
    "name": "横县",
    "pinyin": "Hengxian",
    "label": "Hengxian0771" },

  {
    "code": "0762",
    "name": "和平",
    "pinyin": "Heping",
    "label": "Heping0762" },

  {
    "code": "0750",
    "name": "鹤山",
    "pinyin": "Heshan",
    "label": "Heshan0750" },

  {
    "code": "0565",
    "name": "和县",
    "pinyin": "Hexian",
    "label": "Hexian0565" },

  {
    "code": "0517",
    "name": "洪泽",
    "pinyin": "Hongze",
    "label": "Hongze0517" },

  {
    "code": "0596",
    "name": "华安",
    "pinyin": "Huaan",
    "label": "Huaan0596" },

  {
    "code": "0423",
    "name": "桦甸",
    "pinyin": "Huadian",
    "label": "Huadian0423" },

  {
    "code": "0758",
    "name": "怀集",
    "pinyin": "Huaiji",
    "label": "Huaiji0758" },

  {
    "code": "0556",
    "name": "怀宁",
    "pinyin": "Huaining",
    "label": "Huaining0556" },

  {
    "code": "0552",
    "name": "怀远",
    "pinyin": "Huaiyuan",
    "label": "Huaiyuan0552" },

  {
    "code": "0533",
    "name": "桓台",
    "pinyin": "Huantai",
    "label": "Huantai0533" },

  {
    "code": "0668",
    "name": "化州",
    "pinyin": "Huazhou",
    "label": "Huazhou0668" },

  {
    "code": "0595",
    "name": "惠安",
    "pinyin": "Huian",
    "label": "Huian0595" },

  {
    "code": "0797",
    "name": "会昌",
    "pinyin": "Huichang",
    "label": "Huichang0797" },

  {
    "code": "0752",
    "name": "惠东",
    "pinyin": "Huidong",
    "label": "Huidong0752" },

  {
    "code": "0663",
    "name": "惠来",
    "pinyin": "Huilai",
    "label": "Huilai0663" },

  {
    "code": "0543",
    "name": "惠民",
    "pinyin": "Huimin",
    "label": "Huimin0543" },

  {
    "code": "0792",
    "name": "湖口",
    "pinyin": "Hukou",
    "label": "Hukou0792" },

  {
    "code": "0451",
    "name": "呼兰",
    "pinyin": "Hulan",
    "label": "Hulan0451" },

  {
    "code": "0564",
    "name": "霍邱",
    "pinyin": "Huoqiu",
    "label": "Huoqiu0564" },

  {
    "code": "0564",
    "name": "霍山",
    "pinyin": "Huoshan",
    "label": "Huoshan0564" },

  {
    "code": "029",
    "name": "户县",
    "pinyin": "Huxian",
    "label": "Huxian029" }] },



{
  "initial": "J",
  "list": [{
    "code": "0454",
    "name": "佳木斯",
    "pinyin": "Jiamusi",
    "label": "Jiamusi0454" },

  {
    "code": "0391",
    "name": "焦作",
    "pinyin": "Jiaozuo",
    "label": "Jiaozuo0391" },

  {
    "code": "0573",
    "name": "嘉兴",
    "pinyin": "Jiaxing",
    "label": "Jiaxing0573" },

  {
    "code": "0423",
    "name": "吉林",
    "pinyin": "Jilin",
    "label": "Jilin0423" },

  {
    "code": "0531",
    "name": "济南",
    "pinyin": "Jinan",
    "label": "Jinan0531" },

  {
    "code": "0750",
    "name": "江门",
    "pinyin": "Jiangmen",
    "label": "Jiangmen0750" },

  {
    "code": "0796",
    "name": "吉安",
    "pinyin": "Jian",
    "label": "Jian0796" },

  {
    "code": "0937",
    "name": "嘉峪关",
    "pinyin": "Jiayuguan",
    "label": "Jiayuguan0937" },

  {
    "code": "0663",
    "name": "揭阳",
    "pinyin": "Jieyang",
    "label": "Jieyang0663" },

  {
    "code": "0935",
    "name": "金昌",
    "pinyin": "Jinchang",
    "label": "Jinchang0935" },

  {
    "code": "0356",
    "name": "晋城",
    "pinyin": "Jincheng",
    "label": "Jincheng0356" },

  {
    "code": "0798",
    "name": "景德镇",
    "pinyin": "Jingdezhen",
    "label": "Jingdezhen0798" },

  {
    "code": "0724",
    "name": "荆门",
    "pinyin": "Jingmen",
    "label": "Jingmen0724" },

  {
    "code": "0716",
    "name": "荆州",
    "pinyin": "Jingzhou",
    "label": "Jingzhou0716" },

  {
    "code": "0579",
    "name": "金华",
    "pinyin": "Jinhua",
    "label": "Jinhua0579" },

  {
    "code": "0537",
    "name": "济宁",
    "pinyin": "Jining",
    "label": "Jining0537" },

  {
    "code": "0354",
    "name": "晋中",
    "pinyin": "Jinzhong",
    "label": "Jinzhong0354" },

  {
    "code": "0416",
    "name": "锦州",
    "pinyin": "Jinzhou",
    "label": "Jinzhou0416" },

  {
    "code": "0792",
    "name": "九江",
    "pinyin": "Jiujiang",
    "label": "Jiujiang0792" },

  {
    "code": "0937",
    "name": "酒泉",
    "pinyin": "Jiuquan",
    "label": "Jiuquan0937" },

  {
    "code": "0467",
    "name": "鸡西",
    "pinyin": "Jixi",
    "label": "Jixi0467" },

  {
    "code": "0571",
    "name": "建德",
    "pinyin": "Jiande",
    "label": "Jiande0571" },

  {
    "code": "0514",
    "name": "江都",
    "pinyin": "Jiangdu",
    "label": "Jiangdu0514" },

  {
    "code": "023",
    "name": "江津",
    "pinyin": "Jiangjin",
    "label": "Jiangjin023" },

  {
    "code": "0598",
    "name": "将乐",
    "pinyin": "Jiangle",
    "label": "Jiangle0598" },

  {
    "code": "0570",
    "name": "江山",
    "pinyin": "Jiangshan",
    "label": "Jiangshan0570" },

  {
    "code": "0523",
    "name": "姜堰",
    "pinyin": "Jiangyan",
    "label": "Jiangyan0523" },

  {
    "code": "0510",
    "name": "江阴",
    "pinyin": "Jiangyin",
    "label": "Jiangyin0510" },

  {
    "code": "0515",
    "name": "建湖",
    "pinyin": "Jianhu",
    "label": "Jianhu0515" },

  {
    "code": "0598",
    "name": "建宁",
    "pinyin": "Jianning",
    "label": "Jianning0598" },

  {
    "code": "0599",
    "name": "建瓯",
    "pinyin": "Jianou",
    "label": "Jianou0599" },

  {
    "code": "0599",
    "name": "建阳",
    "pinyin": "Jianyang",
    "label": "Jianyang0599" },

  {
    "code": "0796",
    "name": "吉安",
    "pinyin": "Jian",
    "label": "Jian0796" },

  {
    "code": "0423",
    "name": "蛟河",
    "pinyin": "Jiaohe",
    "label": "Jiaohe0423" },

  {
    "code": "0753",
    "name": "蕉岭",
    "pinyin": "Jiaoling",
    "label": "Jiaoling0753" },

  {
    "code": "0532",
    "name": "胶南",
    "pinyin": "Jiaonan",
    "label": "Jiaonan0532" },

  {
    "code": "0532",
    "name": "胶州",
    "pinyin": "Jiaozhou",
    "label": "Jiaozhou0532" },

  {
    "code": "0573",
    "name": "嘉善",
    "pinyin": "Jiashan",
    "label": "Jiashan0573" },

  {
    "code": "0537",
    "name": "嘉祥",
    "pinyin": "Jiaxiang",
    "label": "Jiaxiang0537" },

  {
    "code": "0663",
    "name": "揭东",
    "pinyin": "Jiedong",
    "label": "Jiedong0663" },

  {
    "code": "0558",
    "name": "界首",
    "pinyin": "Jieshou",
    "label": "Jieshou0558" },

  {
    "code": "0663",
    "name": "揭西",
    "pinyin": "Jiexi",
    "label": "Jiexi0663" },

  {
    "code": "0532",
    "name": "即墨",
    "pinyin": "Jimo",
    "label": "Jimo0532" },

  {
    "code": "0795",
    "name": "靖安",
    "pinyin": "Jingan",
    "label": "Jingan0795" },

  {
    "code": "0563",
    "name": "旌德",
    "pinyin": "Jingde",
    "label": "Jingde0563" },

  {
    "code": "0796",
    "name": "井冈山",
    "pinyin": "Jinggangshan",
    "label": "Jinggangshan0796" },

  {
    "code": "0523",
    "name": "靖江",
    "pinyin": "Jingjiang",
    "label": "Jingjiang0523" },

  {
    "code": "0578",
    "name": "景宁",
    "pinyin": "Jingning",
    "label": "Jingning0578" },

  {
    "code": "0563",
    "name": "泾县",
    "pinyin": "Jingxian",
    "label": "Jingxian0563" },

  {
    "code": "0311",
    "name": "井陉",
    "pinyin": "Jingxing",
    "label": "Jingxing0311" },

  {
    "code": "0517",
    "name": "金湖",
    "pinyin": "Jinhu",
    "label": "Jinhu0517" },

  {
    "code": "0595",
    "name": "晋江",
    "pinyin": "Jinjiang",
    "label": "Jinjiang0595" },

  {
    "code": "0595",
    "name": "金门",
    "pinyin": "Jinmen",
    "label": "Jinmen0595" },

  {
    "code": "0871",
    "name": "晋宁",
    "pinyin": "Jinning",
    "label": "Jinning0871" },

  {
    "code": "0519",
    "name": "金坛",
    "pinyin": "Jintan",
    "label": "Jintan0519" },

  {
    "code": "028",
    "name": "金堂",
    "pinyin": "Jintang",
    "label": "Jintang028" },

  {
    "code": "0791",
    "name": "进贤",
    "pinyin": "Jinxian",
    "label": "Jinxian0791" },

  {
    "code": "0794",
    "name": "金溪",
    "pinyin": "Jinxi",
    "label": "Jinxi0794" },

  {
    "code": "0537",
    "name": "金乡",
    "pinyin": "Jinxiang",
    "label": "Jinxiang0537" },

  {
    "code": "0578",
    "name": "缙云",
    "pinyin": "Jinyun",
    "label": "Jinyun0578" },

  {
    "code": "0564",
    "name": "金寨",
    "pinyin": "Jinzhai",
    "label": "Jinzhai0564" },

  {
    "code": "0311",
    "name": "晋州",
    "pinyin": "Jinzhou",
    "label": "Jinzhou0311" },

  {
    "code": "0796",
    "name": "吉水",
    "pinyin": "Jishui",
    "label": "Jishui0796" },

  {
    "code": "0792",
    "name": "九江",
    "pinyin": "Jiujiang",
    "label": "Jiujiang0792" },

  {
    "code": "0431",
    "name": "九台",
    "pinyin": "Jiutai",
    "label": "Jiutai0431" },

  {
    "code": "0563",
    "name": "绩溪",
    "pinyin": "Jixi",
    "label": "Jixi0563" },

  {
    "code": "0531",
    "name": "济阳",
    "pinyin": "Jiyang",
    "label": "Jiyang0531" },

  {
    "code": "0391",
    "name": "济源",
    "pinyin": "Jiyuan",
    "label": "Jiyuan0391" },

  {
    "code": "0530",
    "name": "鄄城",
    "pinyin": "Juancheng",
    "label": "Juancheng0530" },

  {
    "code": "0539",
    "name": "莒南",
    "pinyin": "Junan",
    "label": "Junan0539" },

  {
    "code": "0511",
    "name": "句容",
    "pinyin": "Jurong",
    "label": "Jurong0511" },

  {
    "code": "0633",
    "name": "莒县",
    "pinyin": "Juxian",
    "label": "Juxian0633" },

  {
    "code": "0530",
    "name": "巨野",
    "pinyin": "Juye",
    "label": "Juye0530" }] },



{
  "initial": "K",
  "list": [{
    "code": "0378",
    "name": "开封",
    "pinyin": "Kaifeng",
    "label": "Kaifeng0378" },

  {
    "code": "0871",
    "name": "昆明",
    "pinyin": "Kunming",
    "label": "Kunming0871" },

  {
    "code": "0998",
    "name": "喀什地",
    "pinyin": "Kashidi",
    "label": "Kashidi0998" },

  {
    "code": "0990",
    "name": "克拉玛依",
    "pinyin": "Kelamayi",
    "label": "Kelamayi0990" },

  {
    "code": "0908",
    "name": "克孜勒",
    "pinyin": "Kezile",
    "label": "Kezile0908" },

  {
    "code": "0570",
    "name": "开化",
    "pinyin": "Kaihua",
    "label": "Kaihua0570" },

  {
    "code": "0750",
    "name": "开平",
    "pinyin": "Kaiping",
    "label": "Kaiping0750" },

  {
    "code": "023",
    "name": "开县",
    "pinyin": "Kaixian",
    "label": "Kaixian023" },

  {
    "code": "0851",
    "name": "开阳",
    "pinyin": "Kaiyang",
    "label": "Kaiyang0851" },

  {
    "code": "024",
    "name": "康平",
    "pinyin": "Kangping",
    "label": "Kangping024" },

  {
    "code": "0546",
    "name": "垦利",
    "pinyin": "Kenli",
    "label": "Kenli0546" },

  {
    "code": "0512",
    "name": "昆山",
    "pinyin": "Kunshan",
    "label": "Kunshan0512" }] },



{
  "initial": "L",
  "list": [{
    "code": "0772",
    "name": "来宾",
    "pinyin": "Laibin",
    "label": "Laibin0772" },

  {
    "code": "0931",
    "name": "兰州",
    "pinyin": "Lanzhou",
    "label": "Lanzhou0931" },

  {
    "code": "0772",
    "name": "柳州",
    "pinyin": "Liuzhou",
    "label": "Liuzhou0772" },

  {
    "code": "0379",
    "name": "洛阳",
    "pinyin": "Luoyang",
    "label": "Luoyang0379" },

  {
    "code": "0634",
    "name": "莱芜",
    "pinyin": "Laiwu",
    "label": "Laiwu0634" },

  {
    "code": "0316",
    "name": "廊坊",
    "pinyin": "Langfang",
    "label": "Langfang0316" },

  {
    "code": "0891",
    "name": "拉萨",
    "pinyin": "Lasa",
    "label": "Lasa0891" },

  {
    "code": "0833",
    "name": "乐山",
    "pinyin": "Leshan",
    "label": "Leshan0833" },

  {
    "code": "0834",
    "name": "凉山",
    "pinyin": "Liangshan",
    "label": "Liangshan0834" },

  {
    "code": "0518",
    "name": "连云港",
    "pinyin": "Lianyungang",
    "label": "Lianyungang0518" },

  {
    "code": "0635",
    "name": "聊城",
    "pinyin": "Liaocheng",
    "label": "Liaocheng0635" },

  {
    "code": "0419",
    "name": "辽阳",
    "pinyin": "Liaoyang",
    "label": "Liaoyang0419" },

  {
    "code": "0437",
    "name": "辽源",
    "pinyin": "Liaoyuan",
    "label": "Liaoyuan0437" },

  {
    "code": "0888",
    "name": "丽江",
    "pinyin": "Lijiang",
    "label": "Lijiang0888" },

  {
    "code": "0883",
    "name": "临沧",
    "pinyin": "Lincang",
    "label": "Lincang0883" },

  {
    "code": "0357",
    "name": "临汾",
    "pinyin": "Linfen",
    "label": "Linfen0357" },

  {
    "code": "0930",
    "name": "临夏",
    "pinyin": "Linxia",
    "label": "Linxia0930" },

  {
    "code": "0539",
    "name": "临沂",
    "pinyin": "Linyi",
    "label": "Linyi0539" },

  {
    "code": "0894",
    "name": "林芝",
    "pinyin": "Linzhi",
    "label": "Linzhi0894" },

  {
    "code": "0578",
    "name": "丽水",
    "pinyin": "Lishui",
    "label": "Lishui0578" },

  {
    "code": "0564",
    "name": "六安",
    "pinyin": "Liuan",
    "label": "Liuan0564" },

  {
    "code": "0858",
    "name": "六盘水",
    "pinyin": "Liupanshui",
    "label": "Liupanshui0858" },

  {
    "code": "0939",
    "name": "陇南",
    "pinyin": "Longnan",
    "label": "Longnan0939" },

  {
    "code": "0597",
    "name": "龙岩",
    "pinyin": "Longyan",
    "label": "Longyan0597" },

  {
    "code": "0738",
    "name": "娄底",
    "pinyin": "Loudi",
    "label": "Loudi0738" },

  {
    "code": "0395",
    "name": "漯河",
    "pinyin": "Luohe",
    "label": "Luohe0395" },

  {
    "code": "0830",
    "name": "泸州",
    "pinyin": "Luzhou",
    "label": "Luzhou0830" },

  {
    "code": "0358",
    "name": "吕梁",
    "pinyin": "Lvliang",
    "label": "Lvliang0358" },

  {
    "code": "0550",
    "name": "来安",
    "pinyin": "Laian",
    "label": "Laian0550" },

  {
    "code": "0532",
    "name": "莱西",
    "pinyin": "Laixi",
    "label": "Laixi0532" },

  {
    "code": "0535",
    "name": "莱阳",
    "pinyin": "Laiyang",
    "label": "Laiyang0535" },

  {
    "code": "0535",
    "name": "莱州",
    "pinyin": "Laizhou",
    "label": "Laizhou0535" },

  {
    "code": "0563",
    "name": "郎溪",
    "pinyin": "Langxi",
    "label": "Langxi0563" },

  {
    "code": "029",
    "name": "蓝田",
    "pinyin": "Lantian",
    "label": "Lantian029" },

  {
    "code": "0579",
    "name": "兰溪",
    "pinyin": "Lanxi",
    "label": "Lanxi0579" },

  {
    "code": "0794",
    "name": "乐安",
    "pinyin": "Lean",
    "label": "Lean0794" },

  {
    "code": "0751",
    "name": "乐昌",
    "pinyin": "Lechang",
    "label": "Lechang0751" },

  {
    "code": "0759",
    "name": "雷州",
    "pinyin": "Leizhou",
    "label": "Leizhou0759" },

  {
    "code": "0534",
    "name": "乐陵",
    "pinyin": "Leling",
    "label": "Leling0534" },

  {
    "code": "0798",
    "name": "乐平",
    "pinyin": "Leping",
    "label": "Leping0798" },

  {
    "code": "0577",
    "name": "乐清",
    "pinyin": "Leqing",
    "label": "Leqing0577" },

  {
    "code": "0315",
    "name": "乐亭",
    "pinyin": "Leting",
    "label": "Leting0315" },

  {
    "code": "0597",
    "name": "连城",
    "pinyin": "Liancheng",
    "label": "Liancheng0597" },

  {
    "code": "023",
    "name": "梁平",
    "pinyin": "Liangping",
    "label": "Liangping023" },

  {
    "code": "0537",
    "name": "梁山",
    "pinyin": "Liangshan",
    "label": "Liangshan0537" },

  {
    "code": "0799",
    "name": "莲花",
    "pinyin": "Lianhua",
    "label": "Lianhua0799" },

  {
    "code": "0591",
    "name": "连江",
    "pinyin": "Lianjiang",
    "label": "Lianjiang0591" },

  {
    "code": "0759",
    "name": "廉江",
    "pinyin": "Lianjiang",
    "label": "Lianjiang0759" },

  {
    "code": "0763",
    "name": "连南",
    "pinyin": "Liannan",
    "label": "Liannan0763" },

  {
    "code": "0762",
    "name": "连平",
    "pinyin": "Lianping",
    "label": "Lianping0762" },

  {
    "code": "0763",
    "name": "连山",
    "pinyin": "Lianshan",
    "label": "Lianshan0763" },

  {
    "code": "0517",
    "name": "涟水",
    "pinyin": "Lianshui",
    "label": "Lianshui0517" },

  {
    "code": "0763",
    "name": "连州",
    "pinyin": "Lianzhou",
    "label": "Lianzhou0763" },

  {
    "code": "024",
    "name": "辽中",
    "pinyin": "Liaozhong",
    "label": "Liaozhong024" },

  {
    "code": "0794",
    "name": "黎川",
    "pinyin": "Lichuan",
    "label": "Lichuan0794" },

  {
    "code": "0546",
    "name": "利津",
    "pinyin": "Lijin",
    "label": "Lijin0546" },

  {
    "code": "0571",
    "name": "临安",
    "pinyin": "Linan",
    "label": "Linan0571" },

  {
    "code": "0557",
    "name": "灵璧",
    "pinyin": "Lingbi",
    "label": "Lingbi0557" },

  {
    "code": "0311",
    "name": "灵寿",
    "pinyin": "Lingshou",
    "label": "Lingshou0311" },

  {
    "code": "0534",
    "name": "陵县",
    "pinyin": "Lingxian",
    "label": "Lingxian0534" },

  {
    "code": "0576",
    "name": "临海",
    "pinyin": "Linhai",
    "label": "Linhai0576" },

  {
    "code": "0635",
    "name": "临清",
    "pinyin": "Linqing",
    "label": "Linqing0635" },

  {
    "code": "0558",
    "name": "临泉",
    "pinyin": "Linquan",
    "label": "Linquan0558" },

  {
    "code": "0536",
    "name": "临朐",
    "pinyin": "Linqu",
    "label": "Linqu0536" },

  {
    "code": "0539",
    "name": "临沭",
    "pinyin": "Linshu",
    "label": "Linshu0539" },

  {
    "code": "0534",
    "name": "临邑",
    "pinyin": "Linyi",
    "label": "Linyi0534" },

  {
    "code": "025",
    "name": "溧水",
    "pinyin": "Lishui",
    "label": "Lishui025" },

  {
    "code": "0772",
    "name": "柳城",
    "pinyin": "Liucheng",
    "label": "Liucheng0772" },

  {
    "code": "0772",
    "name": "柳江",
    "pinyin": "Liujiang",
    "label": "Liujiang0772" },

  {
    "code": "0731",
    "name": "浏阳",
    "pinyin": "Liuyang",
    "label": "Liuyang0731" },

  {
    "code": "0558",
    "name": "利辛",
    "pinyin": "Lixin",
    "label": "Lixin0558" },

  {
    "code": "0519",
    "name": "溧阳",
    "pinyin": "Liyang",
    "label": "Liyang0519" },

  {
    "code": "0771",
    "name": "隆安",
    "pinyin": "Longan",
    "label": "Longan0771" },

  {
    "code": "0762",
    "name": "龙川",
    "pinyin": "Longchuan",
    "label": "Longchuan0762" },

  {
    "code": "0596",
    "name": "龙海",
    "pinyin": "Longhai",
    "label": "Longhai0596" },

  {
    "code": "0535",
    "name": "龙口",
    "pinyin": "Longkou",
    "label": "Longkou0535" },

  {
    "code": "0752",
    "name": "龙门",
    "pinyin": "Longmen",
    "label": "Longmen0752" },

  {
    "code": "0797",
    "name": "龙南",
    "pinyin": "Longnan",
    "label": "Longnan0797" },

  {
    "code": "0578",
    "name": "龙泉",
    "pinyin": "Longquan",
    "label": "Longquan0578" },

  {
    "code": "0570",
    "name": "龙游",
    "pinyin": "Longyou",
    "label": "Longyou0570" },

  {
    "code": "0311",
    "name": "栾城",
    "pinyin": "Luancheng",
    "label": "Luancheng0311" },

  {
    "code": "0379",
    "name": "栾川",
    "pinyin": "Luanchuan",
    "label": "Luanchuan0379" },

  {
    "code": "0315",
    "name": "滦南",
    "pinyin": "Luannan",
    "label": "Luannan0315" },

  {
    "code": "0315",
    "name": "滦县",
    "pinyin": "Luanxian",
    "label": "Luanxian0315" },

  {
    "code": "0660",
    "name": "陆丰",
    "pinyin": "Lufeng",
    "label": "Lufeng0660" },

  {
    "code": "0660",
    "name": "陆河",
    "pinyin": "Luhe",
    "label": "Luhe0660" },

  {
    "code": "0565",
    "name": "庐江",
    "pinyin": "Lujiang",
    "label": "Lujiang0565" },

  {
    "code": "0766",
    "name": "罗定",
    "pinyin": "Luoding",
    "label": "Luoding0766" },

  {
    "code": "0379",
    "name": "洛宁",
    "pinyin": "Luoning",
    "label": "Luoning0379" },

  {
    "code": "0591",
    "name": "罗源",
    "pinyin": "Luoyuan",
    "label": "Luoyuan0591" },

  {
    "code": "0311",
    "name": "鹿泉",
    "pinyin": "Luquan",
    "label": "Luquan0311" },

  {
    "code": "0871",
    "name": "禄劝",
    "pinyin": "Luquan",
    "label": "Luquan0871" },

  {
    "code": "0799",
    "name": "芦溪",
    "pinyin": "Luxi",
    "label": "Luxi0799" },

  {
    "code": "0772",
    "name": "鹿寨",
    "pinyin": "Luzhai",
    "label": "Luzhai0772" }] },



{
  "initial": "M",
  "list": [{
    "code": "0555",
    "name": "马鞍山",
    "pinyin": "Maanshan",
    "label": "Maanshan0555" },

  {
    "code": "0668",
    "name": "茂名",
    "pinyin": "Maoming",
    "label": "Maoming0668" },

  {
    "code": "028",
    "name": "眉山",
    "pinyin": "Meishan",
    "label": "Meishan028" },

  {
    "code": "0753",
    "name": "梅州",
    "pinyin": "Meizhou",
    "label": "Meizhou0753" },

  {
    "code": "0816",
    "name": "绵阳",
    "pinyin": "Mianyang",
    "label": "Mianyang0816" },

  {
    "code": "0453",
    "name": "牡丹江",
    "pinyin": "Mudanjiang",
    "label": "Mudanjiang0453" },

  {
    "code": "0771",
    "name": "马山",
    "pinyin": "Mashan",
    "label": "Mashan0771" },

  {
    "code": "0753",
    "name": "梅县",
    "pinyin": "Meixian",
    "label": "Meixian0753" },

  {
    "code": "0558",
    "name": "蒙城",
    "pinyin": "Mengcheng",
    "label": "Mengcheng0558" },

  {
    "code": "0379",
    "name": "孟津",
    "pinyin": "Mengjin",
    "label": "Mengjin0379" },

  {
    "code": "0539",
    "name": "蒙阴",
    "pinyin": "Mengyin",
    "label": "Mengyin0539" },

  {
    "code": "0391",
    "name": "孟州",
    "pinyin": "Mengzhou",
    "label": "Mengzhou0391" },

  {
    "code": "0550",
    "name": "明光",
    "pinyin": "Mingguang",
    "label": "Mingguang0550" },

  {
    "code": "0598",
    "name": "明溪",
    "pinyin": "Mingxi",
    "label": "Mingxi0598" },

  {
    "code": "0591",
    "name": "闽侯",
    "pinyin": "Minhou",
    "label": "Minhou0591" },

  {
    "code": "0591",
    "name": "闽清",
    "pinyin": "Minqing",
    "label": "Minqing0591" },

  {
    "code": "0451",
    "name": "木兰",
    "pinyin": "Mulan",
    "label": "Mulan0451" }] },



{
  "initial": "N",
  "list": [{
    "code": "0817",
    "name": "南充",
    "pinyin": "Nanchong",
    "label": "Nanchong0817" },

  {
    "code": "0791",
    "name": "南昌",
    "pinyin": "Nanchang",
    "label": "Nanchang0791" },

  {
    "code": "025",
    "name": "南京",
    "pinyin": "Nanjing",
    "label": "Nanjing025" },

  {
    "code": "0771",
    "name": "南宁",
    "pinyin": "Nanning",
    "label": "Nanning0771" },

  {
    "code": "0513",
    "name": "南通",
    "pinyin": "Nantong",
    "label": "Nantong0513" },

  {
    "code": "0574",
    "name": "宁波",
    "pinyin": "Ningbo",
    "label": "Ningbo0574" },

  {
    "code": "0599",
    "name": "南平",
    "pinyin": "Nanping",
    "label": "Nanping0599" },

  {
    "code": "0377",
    "name": "南阳",
    "pinyin": "Nanyang",
    "label": "Nanyang0377" },

  {
    "code": "0896",
    "name": "那曲",
    "pinyin": "Naqu",
    "label": "Naqu0896" },

  {
    "code": "0832",
    "name": "内江",
    "pinyin": "Neijiang",
    "label": "Neijiang0832" },

  {
    "code": "0593",
    "name": "宁德",
    "pinyin": "Ningde",
    "label": "Ningde0593" },

  {
    "code": "0886",
    "name": "怒江",
    "pinyin": "Nujiang",
    "label": "Nujiang0886" },

  {
    "code": "0595",
    "name": "南安",
    "pinyin": "Nanan",
    "label": "Nanan0595" },

  {
    "code": "0754",
    "name": "南澳",
    "pinyin": "Nanao",
    "label": "Nanao0754" },

  {
    "code": "0794",
    "name": "南城",
    "pinyin": "Nancheng",
    "label": "Nancheng0794" },

  {
    "code": "023",
    "name": "南川",
    "pinyin": "Nanchuan",
    "label": "Nanchuan023" },

  {
    "code": "0794",
    "name": "南丰",
    "pinyin": "Nanfeng",
    "label": "Nanfeng0794" },

  {
    "code": "0596",
    "name": "南靖",
    "pinyin": "Nanjing",
    "label": "Nanjing0596" },

  {
    "code": "0797",
    "name": "南康",
    "pinyin": "Nankang",
    "label": "Nankang0797" },

  {
    "code": "0553",
    "name": "南陵",
    "pinyin": "Nanling",
    "label": "Nanling0553" },

  {
    "code": "0751",
    "name": "南雄",
    "pinyin": "Nanxiong",
    "label": "Nanxiong0751" },

  {
    "code": "0797",
    "name": "宁都",
    "pinyin": "Ningdu",
    "label": "Ningdu0797" },

  {
    "code": "0563",
    "name": "宁国",
    "pinyin": "Ningguo",
    "label": "Ningguo0563" },

  {
    "code": "0574",
    "name": "宁海",
    "pinyin": "Ninghai",
    "label": "Ninghai0574" },

  {
    "code": "0598",
    "name": "宁化",
    "pinyin": "Ninghua",
    "label": "Ninghua0598" },

  {
    "code": "0534",
    "name": "宁津",
    "pinyin": "Ningjin",
    "label": "Ningjin0534" },

  {
    "code": "0731",
    "name": "宁乡",
    "pinyin": "Ningxiang",
    "label": "Ningxiang0731" },

  {
    "code": "0538",
    "name": "宁阳",
    "pinyin": "Ningyang",
    "label": "Ningyang0538" },

  {
    "code": "0431",
    "name": "农安",
    "pinyin": "Nongan",
    "label": "Nongan0431" }] },



{
  "initial": "P",
  "list": [{
    "code": "0427",
    "name": "盘锦",
    "pinyin": "Panjin",
    "label": "Panjin0427" },

  {
    "code": "0812",
    "name": "攀枝花",
    "pinyin": "Panzhihua",
    "label": "Panzhihua0812" },

  {
    "code": "0375",
    "name": "平顶山",
    "pinyin": "Pingdingshan",
    "label": "Pingdingshan0375" },

  {
    "code": "0933",
    "name": "平凉",
    "pinyin": "Pingliang",
    "label": "Pingliang0933" },

  {
    "code": "0799",
    "name": "萍乡",
    "pinyin": "Pingxiang",
    "label": "Pingxiang0799" },

  {
    "code": "0879",
    "name": "普洱",
    "pinyin": "Puer",
    "label": "Puer0879" },

  {
    "code": "0594",
    "name": "莆田",
    "pinyin": "Putian",
    "label": "Putian0594" },

  {
    "code": "0393",
    "name": "濮阳",
    "pinyin": "Puyang",
    "label": "Puyang0393" },

  {
    "code": "0579",
    "name": "磐安",
    "pinyin": "Panan",
    "label": "Panan0579" },

  {
    "code": "0423",
    "name": "磐石",
    "pinyin": "Panshi",
    "label": "Panshi0423" },

  {
    "code": "0516",
    "name": "沛县",
    "pinyin": "Peixian",
    "label": "Peixian0516" },

  {
    "code": "0535",
    "name": "蓬莱",
    "pinyin": "Penglai",
    "label": "Penglai0535" },

  {
    "code": "023",
    "name": "彭水",
    "pinyin": "Pengshui",
    "label": "Pengshui023" },

  {
    "code": "0792",
    "name": "彭泽",
    "pinyin": "Pengze",
    "label": "Pengze0792" },

  {
    "code": "028",
    "name": "彭州",
    "pinyin": "Pengzhou",
    "label": "Pengzhou028" },

  {
    "code": "0532",
    "name": "平度",
    "pinyin": "Pingdu",
    "label": "Pingdu0532" },

  {
    "code": "0596",
    "name": "平和",
    "pinyin": "Pinghe",
    "label": "Pinghe0596" },

  {
    "code": "0573",
    "name": "平湖",
    "pinyin": "Pinghu",
    "label": "Pinghu0573" },

  {
    "code": "0593",
    "name": "屏南",
    "pinyin": "Pingnan",
    "label": "Pingnan0593" },

  {
    "code": "0311",
    "name": "平山",
    "pinyin": "Pingshan",
    "label": "Pingshan0311" },

  {
    "code": "0591",
    "name": "平潭",
    "pinyin": "Pingtan",
    "label": "Pingtan0591" },

  {
    "code": "0577",
    "name": "平阳",
    "pinyin": "Pingyang",
    "label": "Pingyang0577" },

  {
    "code": "0531",
    "name": "平阴",
    "pinyin": "Pingyin",
    "label": "Pingyin0531" },

  {
    "code": "0539",
    "name": "平邑",
    "pinyin": "Pingyi",
    "label": "Pingyi0539" },

  {
    "code": "0534",
    "name": "平原",
    "pinyin": "Pingyuan",
    "label": "Pingyuan0534" },

  {
    "code": "0753",
    "name": "平远",
    "pinyin": "Pingyuan",
    "label": "Pingyuan0753" },

  {
    "code": "028",
    "name": "郫县",
    "pinyin": "Pixian",
    "label": "Pixian028" },

  {
    "code": "0516",
    "name": "邳州",
    "pinyin": "Pizhou",
    "label": "Pizhou0516" },

  {
    "code": "0793",
    "name": "鄱阳",
    "pinyin": "Poyang",
    "label": "Poyang0793" },

  {
    "code": "0599",
    "name": "浦城",
    "pinyin": "Pucheng",
    "label": "Pucheng0599" },

  {
    "code": "0579",
    "name": "浦江",
    "pinyin": "Pujiang",
    "label": "Pujiang0579" },

  {
    "code": "028",
    "name": "蒲江",
    "pinyin": "Pujiang",
    "label": "Pujiang028" },

  {
    "code": "0411",
    "name": "普兰店",
    "pinyin": "Pulandian",
    "label": "Pulandian0411" },

  {
    "code": "0663",
    "name": "普宁",
    "pinyin": "Puning",
    "label": "Puning0663" }] },



{
  "initial": "Q",
  "list": [{
    "code": "0855",
    "name": "黔东",
    "pinyin": "Qiandong",
    "label": "Qiandong0855" },

  {
    "code": "0532",
    "name": "青岛",
    "pinyin": "Qingdao",
    "label": "Qingdao0532" },

  {
    "code": "0595",
    "name": "泉州",
    "pinyin": "Quanzhou",
    "label": "Quanzhou0595" },

  {
    "code": "0854",
    "name": "黔南",
    "pinyin": "Qiannan",
    "label": "Qiannan0854" },

  {
    "code": "0859",
    "name": "黔西南",
    "pinyin": "Qianxinan",
    "label": "Qianxinan0859" },

  {
    "code": "0934",
    "name": "庆阳",
    "pinyin": "Qingyang",
    "label": "Qingyang0934" },

  {
    "code": "0763",
    "name": "清远",
    "pinyin": "Qingyuan",
    "label": "Qingyuan0763" },

  {
    "code": "0335",
    "name": "秦皇岛",
    "pinyin": "Qinhuangdao",
    "label": "Qinhuangdao0335" },

  {
    "code": "0777",
    "name": "钦州",
    "pinyin": "Qinzhou",
    "label": "Qinzhou0777" },

  {
    "code": "0452",
    "name": "齐齐哈尔",
    "pinyin": "Qiqihaer",
    "label": "Qiqihaer0452" },

  {
    "code": "0464",
    "name": "七台河",
    "pinyin": "Qitaihe",
    "label": "Qitaihe0464" },

  {
    "code": "0874",
    "name": "曲靖",
    "pinyin": "Qujing",
    "label": "Qujing0874" },

  {
    "code": "0570",
    "name": "衢州",
    "pinyin": "Quzhou",
    "label": "Quzhou0570" },

  {
    "code": "0315",
    "name": "迁安",
    "pinyin": "Qianan",
    "label": "Qianan0315" },

  {
    "code": "0556",
    "name": "潜山",
    "pinyin": "Qianshan",
    "label": "Qianshan0556" },

  {
    "code": "0793",
    "name": "铅山",
    "pinyin": "Qianshan",
    "label": "Qianshan0793" },

  {
    "code": "0315",
    "name": "迁西",
    "pinyin": "Qianxi",
    "label": "Qianxi0315" },

  {
    "code": "0513",
    "name": "启东",
    "pinyin": "Qidong",
    "label": "Qidong0513" },

  {
    "code": "0534",
    "name": "齐河",
    "pinyin": "Qihe",
    "label": "Qihe0534" },

  {
    "code": "023",
    "name": "綦江",
    "pinyin": "Qijiang",
    "label": "Qijiang023" },

  {
    "code": "0559",
    "name": "祁门",
    "pinyin": "Qimen",
    "label": "Qimen0559" },

  {
    "code": "0598",
    "name": "清流",
    "pinyin": "Qingliu",
    "label": "Qingliu0598" },

  {
    "code": "0578",
    "name": "青田",
    "pinyin": "Qingtian",
    "label": "Qingtian0578" },

  {
    "code": "0763",
    "name": "清新",
    "pinyin": "Qingxin",
    "label": "Qingxin0763" },

  {
    "code": "0566",
    "name": "青阳",
    "pinyin": "Qingyang",
    "label": "Qingyang0566" },

  {
    "code": "0578",
    "name": "庆元",
    "pinyin": "Qingyuan",
    "label": "Qingyuan0578" },

  {
    "code": "0534",
    "name": "庆云",
    "pinyin": "Qingyun",
    "label": "Qingyun0534" },

  {
    "code": "0851",
    "name": "清镇",
    "pinyin": "Qingzhen",
    "label": "Qingzhen0851" },

  {
    "code": "0536",
    "name": "青州",
    "pinyin": "Qingzhou",
    "label": "Qingzhou0536" },

  {
    "code": "0391",
    "name": "沁阳",
    "pinyin": "Qinyang",
    "label": "Qinyang0391" },

  {
    "code": "028",
    "name": "邛崃",
    "pinyin": "Qionglai",
    "label": "Qionglai028" },

  {
    "code": "0535",
    "name": "栖霞",
    "pinyin": "Qixia",
    "label": "Qixia0535" },

  {
    "code": "0550",
    "name": "全椒",
    "pinyin": "Quanjiao",
    "label": "Quanjiao0550" },

  {
    "code": "0797",
    "name": "全南",
    "pinyin": "Quannan",
    "label": "Quannan0797" },

  {
    "code": "0537",
    "name": "曲阜",
    "pinyin": "Qufu",
    "label": "Qufu0537" },

  {
    "code": "0751",
    "name": "曲江",
    "pinyin": "Qujiang",
    "label": "Qujiang0751" }] },



{
  "initial": "R",
  "list": [{
    "code": "0892",
    "name": "日喀则",
    "pinyin": "Rikaze",
    "label": "Rikaze0892" },

  {
    "code": "0633",
    "name": "日照",
    "pinyin": "Rizhao",
    "label": "Rizhao0633" },

  {
    "code": "0768",
    "name": "饶平",
    "pinyin": "Raoping",
    "label": "Raoping0768" },

  {
    "code": "0751",
    "name": "仁化",
    "pinyin": "Renhua",
    "label": "Renhua0751" },

  {
    "code": "0772",
    "name": "融安",
    "pinyin": "Rongan",
    "label": "Rongan0772" },

  {
    "code": "023",
    "name": "荣昌",
    "pinyin": "Rongchang",
    "label": "Rongchang023" },

  {
    "code": "0631",
    "name": "荣成",
    "pinyin": "Rongcheng",
    "label": "Rongcheng0631" },

  {
    "code": "0772",
    "name": "融水",
    "pinyin": "Rongshui",
    "label": "Rongshui0772" },

  {
    "code": "0513",
    "name": "如东",
    "pinyin": "Rudong",
    "label": "Rudong0513" },

  {
    "code": "0513",
    "name": "如皋",
    "pinyin": "Rugao",
    "label": "Rugao0513" },

  {
    "code": "0577",
    "name": "瑞安",
    "pinyin": "Ruian",
    "label": "Ruian0577" },

  {
    "code": "0792",
    "name": "瑞昌",
    "pinyin": "Ruichang",
    "label": "Ruichang0792" },

  {
    "code": "0797",
    "name": "瑞金",
    "pinyin": "Ruijin",
    "label": "Ruijin0797" },

  {
    "code": "0631",
    "name": "乳山",
    "pinyin": "Rushan",
    "label": "Rushan0631" },

  {
    "code": "0379",
    "name": "汝阳",
    "pinyin": "Ruyang",
    "label": "Ruyang0379" },

  {
    "code": "0751",
    "name": "乳源",
    "pinyin": "Ruyuan",
    "label": "Ruyuan0751" }] },



{
  "initial": "S",
  "list": [{
    "code": "0398",
    "name": "三门峡",
    "pinyin": "Sanmenxia",
    "label": "Sanmenxia0398" },

  {
    "code": "021",
    "name": "上海",
    "pinyin": "Shanghai",
    "label": "Shanghai021" },

  {
    "code": "024",
    "name": "沈阳",
    "pinyin": "Shenyang",
    "label": "Shenyang024" },

  {
    "code": "0755",
    "name": "深圳",
    "pinyin": "Shenzhen",
    "label": "Shenzhen0755" },

  {
    "code": "0311",
    "name": "石家庄",
    "pinyin": "Shijiazhuang",
    "label": "Shijiazhuang0311" },

  {
    "code": "0512",
    "name": "苏州",
    "pinyin": "Suzhou",
    "label": "Suzhou0512" },

  {
    "code": "0598",
    "name": "三明",
    "pinyin": "Sanming",
    "label": "Sanming0598" },

  {
    "code": "0899",
    "name": "三亚",
    "pinyin": "Sanya",
    "label": "Sanya0899" },

  {
    "code": "0914",
    "name": "商洛",
    "pinyin": "Shangluo",
    "label": "Shangluo0914" },

  {
    "code": "0370",
    "name": "商丘",
    "pinyin": "Shangqiu",
    "label": "Shangqiu0370" },

  {
    "code": "0793",
    "name": "上饶",
    "pinyin": "Shangrao",
    "label": "Shangrao0793" },

  {
    "code": "0893",
    "name": "山南",
    "pinyin": "Shannan",
    "label": "Shannan0893" },

  {
    "code": "0754",
    "name": "汕头",
    "pinyin": "Shantou",
    "label": "Shantou0754" },

  {
    "code": "0660",
    "name": "汕尾",
    "pinyin": "Shanwei",
    "label": "Shanwei0660" },

  {
    "code": "0751",
    "name": "韶关",
    "pinyin": "Shaoguan",
    "label": "Shaoguan0751" },

  {
    "code": "0575",
    "name": "绍兴",
    "pinyin": "Shaoxing",
    "label": "Shaoxing0575" },

  {
    "code": "0739",
    "name": "邵阳",
    "pinyin": "Shaoyang",
    "label": "Shaoyang0739" },

  {
    "code": "0719",
    "name": "十堰",
    "pinyin": "Shiyan",
    "label": "Shiyan0719" },

  {
    "code": "0952",
    "name": "石嘴山",
    "pinyin": "Shizuishan",
    "label": "Shizuishan0952" },

  {
    "code": "0469",
    "name": "双鸭山",
    "pinyin": "Shuangyashan",
    "label": "Shuangyashan0469" },

  {
    "code": "0349",
    "name": "朔州",
    "pinyin": "Shuozhou",
    "label": "Shuozhou0349" },

  {
    "code": "0434",
    "name": "四平",
    "pinyin": "Siping",
    "label": "Siping0434" },

  {
    "code": "0438",
    "name": "松原",
    "pinyin": "Songyuan",
    "label": "Songyuan0438" },

  {
    "code": "0455",
    "name": "绥化",
    "pinyin": "Suihua",
    "label": "Suihua0455" },

  {
    "code": "0825",
    "name": "遂宁",
    "pinyin": "Suining",
    "label": "Suining0825" },

  {
    "code": "0722",
    "name": "随州",
    "pinyin": "Suizhou",
    "label": "Suizhou0722" },

  {
    "code": "0527",
    "name": "宿迁",
    "pinyin": "Suqian",
    "label": "Suqian0527" },

  {
    "code": "0557",
    "name": "宿州",
    "pinyin": "Suzhou",
    "label": "Suzhou0557" },

  {
    "code": "0772",
    "name": "三江",
    "pinyin": "Sanjiang",
    "label": "Sanjiang0772" },

  {
    "code": "0576",
    "name": "三门",
    "pinyin": "Sanmen",
    "label": "Sanmen0576" },

  {
    "code": "0596",
    "name": "诏安",
    "pinyin": "Saoan",
    "label": "Saoan0596" },

  {
    "code": "0795",
    "name": "上高",
    "pinyin": "Shanggao",
    "label": "Shanggao0795" },

  {
    "code": "0597",
    "name": "上杭",
    "pinyin": "Shanghang",
    "label": "Shanghang0597" },

  {
    "code": "0531",
    "name": "商河",
    "pinyin": "Shanghe",
    "label": "Shanghe0531" },

  {
    "code": "0799",
    "name": "上栗",
    "pinyin": "Shangli",
    "label": "Shangli0799" },

  {
    "code": "0771",
    "name": "上林",
    "pinyin": "Shanglin",
    "label": "Shanglin0771" },

  {
    "code": "0793",
    "name": "上饶",
    "pinyin": "Shangrao",
    "label": "Shangrao0793" },

  {
    "code": "0797",
    "name": "上犹",
    "pinyin": "Shangyou",
    "label": "Shangyou0797" },

  {
    "code": "0575",
    "name": "上虞",
    "pinyin": "Shangyu",
    "label": "Shangyu0575" },

  {
    "code": "0451",
    "name": "尚志",
    "pinyin": "Shangzhi",
    "label": "Shangzhi0451" },

  {
    "code": "0599",
    "name": "邵武",
    "pinyin": "Shaowu",
    "label": "Shaowu0599" },

  {
    "code": "0575",
    "name": "绍兴",
    "pinyin": "Shaoxing",
    "label": "Shaoxing0575" },

  {
    "code": "0598",
    "name": "沙县",
    "pinyin": "Shaxian",
    "label": "Shaxian0598" },

  {
    "code": "0580",
    "name": "嵊泗",
    "pinyin": "Shengsi",
    "label": "Shengsi0580" },

  {
    "code": "0575",
    "name": "嵊州",
    "pinyin": "Shengzhou",
    "label": "Shengzhou0575" },

  {
    "code": "0635",
    "name": "莘县",
    "pinyin": "Shenxian",
    "label": "Shenxian0635" },

  {
    "code": "0311",
    "name": "深泽",
    "pinyin": "Shenze",
    "label": "Shenze0311" },

  {
    "code": "0559",
    "name": "歙县",
    "pinyin": "Shexian",
    "label": "Shexian0559" },

  {
    "code": "0515",
    "name": "射阳",
    "pinyin": "Sheyang",
    "label": "Sheyang0515" },

  {
    "code": "0797",
    "name": "石城",
    "pinyin": "Shicheng",
    "label": "Shicheng0797" },

  {
    "code": "0871",
    "name": "石林",
    "pinyin": "Shilin",
    "label": "Shilin0871" },

  {
    "code": "0595",
    "name": "石狮",
    "pinyin": "Shishi",
    "label": "Shishi0595" },

  {
    "code": "0566",
    "name": "石台",
    "pinyin": "Shitai",
    "label": "Shitai0566" },

  {
    "code": "0751",
    "name": "始兴",
    "pinyin": "Shixing",
    "label": "Shixing0751" },

  {
    "code": "023",
    "name": "石柱",
    "pinyin": "Shizhu",
    "label": "Shizhu023" },

  {
    "code": "0536",
    "name": "寿光",
    "pinyin": "Shouguang",
    "label": "Shouguang0536" },

  {
    "code": "0593",
    "name": "寿宁",
    "pinyin": "Shouning",
    "label": "Shouning0593" },

  {
    "code": "0564",
    "name": "寿县",
    "pinyin": "Shouxian",
    "label": "Shouxian0564" },

  {
    "code": "0451",
    "name": "双城",
    "pinyin": "Shuangcheng",
    "label": "Shuangcheng0451" },

  {
    "code": "028",
    "name": "双流",
    "pinyin": "Shuangliu",
    "label": "Shuangliu028" },

  {
    "code": "0564",
    "name": "舒城",
    "pinyin": "Shucheng",
    "label": "Shucheng0564" },

  {
    "code": "0423",
    "name": "舒兰",
    "pinyin": "Shulan",
    "label": "Shulan0423" },

  {
    "code": "0599",
    "name": "顺昌",
    "pinyin": "Shunchang",
    "label": "Shunchang0599" },

  {
    "code": "0527",
    "name": "沭阳",
    "pinyin": "Shuyang",
    "label": "Shuyang0527" },

  {
    "code": "0527",
    "name": "泗洪",
    "pinyin": "Sihong",
    "label": "Sihong0527" },

  {
    "code": "0758",
    "name": "四会",
    "pinyin": "Sihui",
    "label": "Sihui0758" },

  {
    "code": "0537",
    "name": "泗水",
    "pinyin": "Sishui",
    "label": "Sishui0537" },

  {
    "code": "0557",
    "name": "泗县",
    "pinyin": "Sixian",
    "label": "Sixian0557" },

  {
    "code": "0527",
    "name": "泗阳",
    "pinyin": "Siyang",
    "label": "Siyang0527" },

  {
    "code": "0871",
    "name": "嵩明",
    "pinyin": "Songming",
    "label": "Songming0871" },

  {
    "code": "0599",
    "name": "松溪",
    "pinyin": "Songxi",
    "label": "Songxi0599" },

  {
    "code": "0379",
    "name": "嵩县",
    "pinyin": "Songxian",
    "label": "Songxian0379" },

  {
    "code": "0578",
    "name": "松阳",
    "pinyin": "Songyang",
    "label": "Songyang0578" },

  {
    "code": "0578",
    "name": "遂昌",
    "pinyin": "Suichang",
    "label": "Suichang0578" },

  {
    "code": "0796",
    "name": "遂川",
    "pinyin": "Suichuan",
    "label": "Suichuan0796" },

  {
    "code": "0516",
    "name": "睢宁",
    "pinyin": "Suining",
    "label": "Suining0516" },

  {
    "code": "0561",
    "name": "濉溪",
    "pinyin": "Suixi",
    "label": "Suixi0561" },

  {
    "code": "0759",
    "name": "遂溪",
    "pinyin": "Suixi",
    "label": "Suixi0759" },

  {
    "code": "0556",
    "name": "宿松",
    "pinyin": "Susong",
    "label": "Susong0556" },

  {
    "code": "0527",
    "name": "宿豫",
    "pinyin": "Suyu",
    "label": "Suyu0527" }] },



{
  "initial": "T",
  "list": [{
    "code": "0901",
    "name": "塔城地",
    "pinyin": "Tachengdi",
    "label": "Tachengdi0901" },

  {
    "code": "022",
    "name": "天津",
    "pinyin": "Tianjin",
    "label": "Tianjin022" },

  {
    "code": "0576",
    "name": "台州",
    "pinyin": "Taizhou",
    "label": "Taizhou0576" },

  {
    "code": "0315",
    "name": "唐山",
    "pinyin": "Tangshan",
    "label": "Tangshan0315" },

  {
    "code": "0538",
    "name": "泰安",
    "pinyin": "Taian",
    "label": "Taian0538" },

  {
    "code": "0351",
    "name": "太原",
    "pinyin": "Taiyuan",
    "label": "Taiyuan0351" },

  {
    "code": "0523",
    "name": "泰州",
    "pinyin": "Taizhou",
    "label": "Taizhou0523" },

  {
    "code": "0938",
    "name": "天水",
    "pinyin": "Tianshui",
    "label": "Tianshui0938" },

  {
    "code": "0410",
    "name": "铁岭",
    "pinyin": "Tieling",
    "label": "Tieling0410" },

  {
    "code": "0919",
    "name": "铜川",
    "pinyin": "Tongchuan",
    "label": "Tongchuan0919" },

  {
    "code": "0435",
    "name": "通化",
    "pinyin": "Tonghua",
    "label": "Tonghua0435" },

  {
    "code": "0475",
    "name": "通辽",
    "pinyin": "Tongliao",
    "label": "Tongliao0475" },

  {
    "code": "0562",
    "name": "铜陵",
    "pinyin": "Tongling",
    "label": "Tongling0562" },

  {
    "code": "0856",
    "name": "铜仁",
    "pinyin": "Tongren",
    "label": "Tongren0856" },

  {
    "code": "0995",
    "name": "吐鲁番",
    "pinyin": "Tulufan",
    "label": "Tulufan0995" },

  {
    "code": "0512",
    "name": "太仓",
    "pinyin": "Taicang",
    "label": "Taicang0512" },

  {
    "code": "0558",
    "name": "太和",
    "pinyin": "Taihe",
    "label": "Taihe0558" },

  {
    "code": "0796",
    "name": "泰和",
    "pinyin": "Taihe",
    "label": "Taihe0796" },

  {
    "code": "0556",
    "name": "太湖",
    "pinyin": "Taihu",
    "label": "Taihu0556" },

  {
    "code": "0598",
    "name": "泰宁",
    "pinyin": "Taining",
    "label": "Taining0598" },

  {
    "code": "0750",
    "name": "台山",
    "pinyin": "Taishan",
    "label": "Taishan0750" },

  {
    "code": "0577",
    "name": "泰顺",
    "pinyin": "Taishun",
    "label": "Taishun0577" },

  {
    "code": "0523",
    "name": "泰兴",
    "pinyin": "Taixing",
    "label": "Taixing0523" },

  {
    "code": "0539",
    "name": "郯城",
    "pinyin": "Tancheng",
    "label": "Tancheng0539" },

  {
    "code": "0315",
    "name": "唐海",
    "pinyin": "Tanghai",
    "label": "Tanghai0315" },

  {
    "code": "0623",
    "name": "滕州",
    "pinyin": "Tengzhou",
    "label": "Tengzhou0623" },

  {
    "code": "0550",
    "name": "天长",
    "pinyin": "Tianchang",
    "label": "Tianchang0550" },

  {
    "code": "0576",
    "name": "天台",
    "pinyin": "Tiantai",
    "label": "Tiantai0576" },

  {
    "code": "0556",
    "name": "桐城",
    "pinyin": "Tongcheng",
    "label": "Tongcheng0556" },

  {
    "code": "0795",
    "name": "铜鼓",
    "pinyin": "Tonggu",
    "label": "Tonggu0795" },

  {
    "code": "0451",
    "name": "通河",
    "pinyin": "Tonghe",
    "label": "Tonghe0451" },

  {
    "code": "023",
    "name": "铜梁",
    "pinyin": "Tongliang",
    "label": "Tongliang023" },

  {
    "code": "0562",
    "name": "铜陵",
    "pinyin": "Tongling",
    "label": "Tongling0562" },

  {
    "code": "0571",
    "name": "桐庐",
    "pinyin": "Tonglu",
    "label": "Tonglu0571" },

  {
    "code": "023",
    "name": "潼南",
    "pinyin": "Tongnan",
    "label": "Tongnan023" },

  {
    "code": "0516",
    "name": "铜山",
    "pinyin": "Tongshan",
    "label": "Tongshan0516" },

  {
    "code": "0573",
    "name": "桐乡",
    "pinyin": "Tongxiang",
    "label": "Tongxiang0573" },

  {
    "code": "0513",
    "name": "通州",
    "pinyin": "Tongzhou",
    "label": "Tongzhou0513" }] },



{
  "initial": "W",
  "list": [{
    "code": "0913",
    "name": "渭南",
    "pinyin": "Weinan",
    "label": "Weinan0913" },

  {
    "code": "0536",
    "name": "潍坊",
    "pinyin": "Weifang",
    "label": "Weifang0536" },

  {
    "code": "0631",
    "name": "威海",
    "pinyin": "Weihai",
    "label": "Weihai0631" },

  {
    "code": "027",
    "name": "武汉",
    "pinyin": "Wuhan",
    "label": "Wuhan027" },

  {
    "code": "0510",
    "name": "无锡",
    "pinyin": "Wuxi",
    "label": "Wuxi0510" },

  {
    "code": "0876",
    "name": "文山",
    "pinyin": "Wenshan",
    "label": "Wenshan0876" },

  {
    "code": "0577",
    "name": "温州",
    "pinyin": "Wenzhou",
    "label": "Wenzhou0577" },

  {
    "code": "0473",
    "name": "乌海",
    "pinyin": "Wuhai",
    "label": "Wuhai0473" },

  {
    "code": "0553",
    "name": "芜湖",
    "pinyin": "Wuhu",
    "label": "Wuhu0553" },

  {
    "code": "0474",
    "name": "乌兰察布",
    "pinyin": "Wulanchabu",
    "label": "Wulanchabu0474" },

  {
    "code": "0991",
    "name": "乌鲁木齐",
    "pinyin": "Wulumuqi",
    "label": "Wulumuqi0991" },

  {
    "code": "0935",
    "name": "武威",
    "pinyin": "Wuwei",
    "label": "Wuwei0935" },

  {
    "code": "0953",
    "name": "吴忠",
    "pinyin": "Wuzhong",
    "label": "Wuzhong0953" },

  {
    "code": "0774",
    "name": "梧州",
    "pinyin": "Wuzhou",
    "label": "Wuzhou0774" },

  {
    "code": "0411",
    "name": "瓦房店",
    "pinyin": "Wafangdian",
    "label": "Wafangdian0411" },

  {
    "code": "0796",
    "name": "万安",
    "pinyin": "Wanan",
    "label": "Wanan0796" },

  {
    "code": "0731",
    "name": "望城",
    "pinyin": "Wangcheng",
    "label": "Wangcheng0731" },

  {
    "code": "0556",
    "name": "望江",
    "pinyin": "Wangjiang",
    "label": "Wangjiang0556" },

  {
    "code": "0793",
    "name": "万年",
    "pinyin": "Wannian",
    "label": "Wannian0793" },

  {
    "code": "0795",
    "name": "万载",
    "pinyin": "Wanzai",
    "label": "Wanzai0795" },

  {
    "code": "0537",
    "name": "微山",
    "pinyin": "Weishan",
    "label": "Weishan0537" },

  {
    "code": "0577",
    "name": "文成",
    "pinyin": "Wencheng",
    "label": "Wencheng0577" },

  {
    "code": "0631",
    "name": "文登",
    "pinyin": "Wendeng",
    "label": "Wendeng0631" },

  {
    "code": "0751",
    "name": "翁源",
    "pinyin": "Wengyuan",
    "label": "Wengyuan0751" },

  {
    "code": "0576",
    "name": "温岭",
    "pinyin": "Wenling",
    "label": "Wenling0576" },

  {
    "code": "0537",
    "name": "汶上",
    "pinyin": "Wenshang",
    "label": "Wenshang0537" },

  {
    "code": "0391",
    "name": "温县",
    "pinyin": "Wenxian",
    "label": "Wenxian0391" },

  {
    "code": "0558",
    "name": "涡阳",
    "pinyin": "Woyang",
    "label": "Woyang0558" },

  {
    "code": "0451",
    "name": "五常",
    "pinyin": "Wuchang",
    "label": "Wuchang0451" },

  {
    "code": "0534",
    "name": "武城",
    "pinyin": "Wucheng",
    "label": "Wucheng0534" },

  {
    "code": "0759",
    "name": "吴川",
    "pinyin": "Wuchuan",
    "label": "Wuchuan0759" },

  {
    "code": "0543",
    "name": "无棣",
    "pinyin": "Wudi",
    "label": "Wudi0543" },

  {
    "code": "0552",
    "name": "五河",
    "pinyin": "Wuhe",
    "label": "Wuhe0552" },

  {
    "code": "0553",
    "name": "芜湖",
    "pinyin": "Wuhu",
    "label": "Wuhu0553" },

  {
    "code": "0753",
    "name": "五华",
    "pinyin": "Wuhua",
    "label": "Wuhua0753" },

  {
    "code": "0311",
    "name": "无极",
    "pinyin": "Wuji",
    "label": "Wuji0311" },

  {
    "code": "0512",
    "name": "吴江",
    "pinyin": "Wujiang",
    "label": "Wujiang0512" },

  {
    "code": "0633",
    "name": "五莲",
    "pinyin": "Wulian",
    "label": "Wulian0633" },

  {
    "code": "023",
    "name": "武隆",
    "pinyin": "Wulong",
    "label": "Wulong023" },

  {
    "code": "0771",
    "name": "武鸣",
    "pinyin": "Wuming",
    "label": "Wuming0771" },

  {
    "code": "0792",
    "name": "武宁",
    "pinyin": "Wuning",
    "label": "Wuning0792" },

  {
    "code": "0597",
    "name": "武平",
    "pinyin": "Wuping",
    "label": "Wuping0597" },

  {
    "code": "023",
    "name": "巫山",
    "pinyin": "Wushan",
    "label": "Wushan023" },

  {
    "code": "0565",
    "name": "无为",
    "pinyin": "Wuwei",
    "label": "Wuwei0565" },

  {
    "code": "023",
    "name": "巫溪",
    "pinyin": "Wuxi",
    "label": "Wuxi023" },

  {
    "code": "0579",
    "name": "武义",
    "pinyin": "Wuyi",
    "label": "Wuyi0579" },

  {
    "code": "0599",
    "name": "武夷山",
    "pinyin": "Wuyishan",
    "label": "Wuyishan0599" },

  {
    "code": "0793",
    "name": "婺源",
    "pinyin": "Wuyuan",
    "label": "Wuyuan0793" },

  {
    "code": "0391",
    "name": "武陟",
    "pinyin": "Wuzhi",
    "label": "Wuzhi0391" }] },



{
  "initial": "X",
  "list": [{
    "code": "0710",
    "name": "襄樊",
    "pinyin": "Xiangfan",
    "label": "Xiangfan0710" },

  {
    "code": "0592",
    "name": "厦门",
    "pinyin": "Xiamen",
    "label": "Xiamen0592" },

  {
    "code": "029",
    "name": "西安",
    "pinyin": "Xian",
    "label": "Xian029" },

  {
    "code": "0374",
    "name": "许昌",
    "pinyin": "Xuchang",
    "label": "Xuchang0374" },

  {
    "code": "0516",
    "name": "徐州",
    "pinyin": "Xuzhou",
    "label": "Xuzhou0516" },

  {
    "code": "0732",
    "name": "湘潭",
    "pinyin": "Xiangtan",
    "label": "Xiangtan0732" },

  {
    "code": "0743",
    "name": "湘西",
    "pinyin": "Xiangxi",
    "label": "Xiangxi0743" },

  {
    "code": "0715",
    "name": "咸宁",
    "pinyin": "Xianning",
    "label": "Xianning0715" },

  {
    "code": "029",
    "name": "咸阳",
    "pinyin": "Xianyang",
    "label": "Xianyang029" },

  {
    "code": "0712",
    "name": "孝感",
    "pinyin": "Xiaogan",
    "label": "Xiaogan0712" },

  {
    "code": "0479",
    "name": "锡林郭勒盟",
    "pinyin": "Xilinguolemeng",
    "label": "Xilinguolemeng0479" },

  {
    "code": "0482",
    "name": "兴安盟",
    "pinyin": "Xinganmeng",
    "label": "Xinganmeng0482" },

  {
    "code": "0319",
    "name": "邢台",
    "pinyin": "Xingtai",
    "label": "Xingtai0319" },

  {
    "code": "0971",
    "name": "西宁",
    "pinyin": "Xining",
    "label": "Xining0971" },

  {
    "code": "0373",
    "name": "新乡",
    "pinyin": "Xinxiang",
    "label": "Xinxiang0373" },

  {
    "code": "0376",
    "name": "信阳",
    "pinyin": "Xinyang",
    "label": "Xinyang0376" },

  {
    "code": "0790",
    "name": "新余",
    "pinyin": "Xinyu",
    "label": "Xinyu0790" },

  {
    "code": "0350",
    "name": "忻州",
    "pinyin": "Xinzhou",
    "label": "Xinzhou0350" },

  {
    "code": "0691",
    "name": "西双版纳",
    "pinyin": "Xishuangbanna",
    "label": "Xishuangbanna0691" },

  {
    "code": "0563",
    "name": "宣城",
    "pinyin": "Xuancheng",
    "label": "Xuancheng0563" },

  {
    "code": "0796",
    "name": "峡江",
    "pinyin": "Xiajiang",
    "label": "Xiajiang0796" },

  {
    "code": "0534",
    "name": "夏津",
    "pinyin": "Xiajin",
    "label": "Xiajin0534" },

  {
    "code": "0574",
    "name": "象山",
    "pinyin": "Xiangshan",
    "label": "Xiangshan0574" },

  {
    "code": "0515",
    "name": "响水",
    "pinyin": "Xiangshui",
    "label": "Xiangshui0515" },

  {
    "code": "0576",
    "name": "仙居",
    "pinyin": "Xianju",
    "label": "Xianju0576" },

  {
    "code": "0594",
    "name": "仙游",
    "pinyin": "Xianyou",
    "label": "Xianyou0594" },

  {
    "code": "0557",
    "name": "萧县",
    "pinyin": "Xiaoxian",
    "label": "Xiaoxian0557" },

  {
    "code": "0593",
    "name": "霞浦",
    "pinyin": "Xiapu",
    "label": "Xiapu0593" },

  {
    "code": "0851",
    "name": "息烽",
    "pinyin": "Xifeng",
    "label": "Xifeng0851" },

  {
    "code": "0379",
    "name": "新安",
    "pinyin": "Xinan",
    "label": "Xinan0379" },

  {
    "code": "0575",
    "name": "新昌",
    "pinyin": "Xinchang",
    "label": "Xinchang0575" },

  {
    "code": "0797",
    "name": "信丰",
    "pinyin": "Xinfeng",
    "label": "Xinfeng0797" },

  {
    "code": "0751",
    "name": "新丰",
    "pinyin": "Xinfeng",
    "label": "Xinfeng0751" },

  {
    "code": "0796",
    "name": "新干",
    "pinyin": "Xingan",
    "label": "Xingan0796" },

  {
    "code": "0797",
    "name": "兴国",
    "pinyin": "Xingguo",
    "label": "Xingguo0797" },

  {
    "code": "0523",
    "name": "兴化",
    "pinyin": "Xinghua",
    "label": "Xinghua0523" },

  {
    "code": "0753",
    "name": "兴宁",
    "pinyin": "Xingning",
    "label": "Xingning0753" },

  {
    "code": "0311",
    "name": "行唐",
    "pinyin": "Xingtang",
    "label": "Xingtang0311" },

  {
    "code": "0371",
    "name": "荥阳",
    "pinyin": "Xingyang",
    "label": "Xingyang0371" },

  {
    "code": "0792",
    "name": "星子",
    "pinyin": "Xingzi",
    "label": "Xingzi0792" },

  {
    "code": "0311",
    "name": "辛集",
    "pinyin": "Xinji",
    "label": "Xinji0311" },

  {
    "code": "0791",
    "name": "新建",
    "pinyin": "Xinjian",
    "label": "Xinjian0791" },

  {
    "code": "028",
    "name": "新津",
    "pinyin": "Xinjin",
    "label": "Xinjin028" },

  {
    "code": "0311",
    "name": "新乐",
    "pinyin": "Xinle",
    "label": "Xinle0311" },

  {
    "code": "024",
    "name": "新民",
    "pinyin": "Xinmin",
    "label": "Xinmin024" },

  {
    "code": "0371",
    "name": "新密",
    "pinyin": "Xinmi",
    "label": "Xinmi0371" },

  {
    "code": "0538",
    "name": "新泰",
    "pinyin": "Xintai",
    "label": "Xintai0538" },

  {
    "code": "0766",
    "name": "新兴",
    "pinyin": "Xinxing",
    "label": "Xinxing0766" },

  {
    "code": "0516",
    "name": "新沂",
    "pinyin": "Xinyi",
    "label": "Xinyi0516" },

  {
    "code": "0668",
    "name": "信宜",
    "pinyin": "Xinyi",
    "label": "Xinyi0668" },

  {
    "code": "0371",
    "name": "新郑",
    "pinyin": "Xinzheng",
    "label": "Xinzheng0371" },

  {
    "code": "0559",
    "name": "休宁",
    "pinyin": "Xiuning",
    "label": "Xiuning0559" },

  {
    "code": "023",
    "name": "秀山",
    "pinyin": "Xiushan",
    "label": "Xiushan023" },

  {
    "code": "0792",
    "name": "修水",
    "pinyin": "Xiushui",
    "label": "Xiushui0792" },

  {
    "code": "0851",
    "name": "修文",
    "pinyin": "Xiuwen",
    "label": "Xiuwen0851" },

  {
    "code": "0391",
    "name": "修武",
    "pinyin": "Xiuwu",
    "label": "Xiuwu0391" },

  {
    "code": "0871",
    "name": "寻甸",
    "pinyin": "Xundian",
    "label": "Xundian0871" },

  {
    "code": "0797",
    "name": "寻乌",
    "pinyin": "Xunwu",
    "label": "Xunwu0797" },

  {
    "code": "0759",
    "name": "徐闻",
    "pinyin": "Xuwen",
    "label": "Xuwen0759" },

  {
    "code": "0517",
    "name": "盱眙",
    "pinyin": "Xuyi",
    "label": "Xuyi0517" }] },



{
  "initial": "Y",
  "list": [{
    "code": "0835",
    "name": "雅安",
    "pinyin": "Yaan",
    "label": "Yaan0835" },

  {
    "code": "0514",
    "name": "扬州",
    "pinyin": "Yangzhou",
    "label": "Yangzhou0514" },

  {
    "code": "0535",
    "name": "烟台",
    "pinyin": "Yantai",
    "label": "Yantai0535" },

  {
    "code": "0911",
    "name": "延安",
    "pinyin": "Yanan",
    "label": "Yanan0911" },

  {
    "code": "0433",
    "name": "延边",
    "pinyin": "Yanbian",
    "label": "Yanbian0433" },

  {
    "code": "0515",
    "name": "盐城",
    "pinyin": "Yancheng",
    "label": "Yancheng0515" },

  {
    "code": "0662",
    "name": "阳江",
    "pinyin": "Yangjiang",
    "label": "Yangjiang0662" },

  {
    "code": "0353",
    "name": "阳泉",
    "pinyin": "Yangquan",
    "label": "Yangquan0353" },

  {
    "code": "0831",
    "name": "宜宾",
    "pinyin": "Yibin",
    "label": "Yibin0831" },

  {
    "code": "0717",
    "name": "宜昌",
    "pinyin": "Yichang",
    "label": "Yichang0717" },

  {
    "code": "0458",
    "name": "伊春",
    "pinyin": "Yichun",
    "label": "Yichun0458" },

  {
    "code": "0795",
    "name": "宜春",
    "pinyin": "Yichun",
    "label": "Yichun0795" },

  {
    "code": "0999",
    "name": "伊犁哈萨克",
    "pinyin": "Yilihasake",
    "label": "Yilihasake0999" },

  {
    "code": "0951",
    "name": "银川",
    "pinyin": "Yinchuan",
    "label": "Yinchuan0951" },

  {
    "code": "0417",
    "name": "营口",
    "pinyin": "Yingkou",
    "label": "Yingkou0417" },

  {
    "code": "0701",
    "name": "鹰潭",
    "pinyin": "Yingtan",
    "label": "Yingtan0701" },

  {
    "code": "0737",
    "name": "益阳",
    "pinyin": "Yiyang",
    "label": "Yiyang0737" },

  {
    "code": "0746",
    "name": "永州",
    "pinyin": "Yongzhou",
    "label": "Yongzhou0746" },

  {
    "code": "0730",
    "name": "岳阳",
    "pinyin": "Yueyang",
    "label": "Yueyang0730" },

  {
    "code": "0775",
    "name": "玉林",
    "pinyin": "Yulin",
    "label": "Yulin0775" },

  {
    "code": "0912",
    "name": "榆林",
    "pinyin": "Yulin",
    "label": "Yulin0912" },

  {
    "code": "0359",
    "name": "运城",
    "pinyin": "Yuncheng",
    "label": "Yuncheng0359" },

  {
    "code": "0766",
    "name": "云浮",
    "pinyin": "Yunfu",
    "label": "Yunfu0766" },

  {
    "code": "0976",
    "name": "玉树",
    "pinyin": "Yushu",
    "label": "Yushu0976" },

  {
    "code": "0877",
    "name": "玉溪",
    "pinyin": "Yuxi",
    "label": "Yuxi0877" },

  {
    "code": "0662",
    "name": "阳春",
    "pinyin": "Yangchun",
    "label": "Yangchun0662" },

  {
    "code": "0662",
    "name": "阳东",
    "pinyin": "Yangdong",
    "label": "Yangdong0662" },

  {
    "code": "0635",
    "name": "阳谷",
    "pinyin": "Yanggu",
    "label": "Yanggu0635" },

  {
    "code": "0763",
    "name": "阳山",
    "pinyin": "Yangshan",
    "label": "Yangshan0763" },

  {
    "code": "0543",
    "name": "阳信",
    "pinyin": "Yangxin",
    "label": "Yangxin0543" },

  {
    "code": "0662",
    "name": "阳西",
    "pinyin": "Yangxi",
    "label": "Yangxi0662" },

  {
    "code": "0511",
    "name": "扬中",
    "pinyin": "Yangzhong",
    "label": "Yangzhong0511" },

  {
    "code": "0379",
    "name": "偃师",
    "pinyin": "Yanshi",
    "label": "Yanshi0379" },

  {
    "code": "0451",
    "name": "延寿",
    "pinyin": "Yanshou",
    "label": "Yanshou0451" },

  {
    "code": "0537",
    "name": "兖州",
    "pinyin": "Yanzhou",
    "label": "Yanzhou0537" },

  {
    "code": "0379",
    "name": "伊川",
    "pinyin": "Yichuan",
    "label": "Yichuan0379" },

  {
    "code": "0795",
    "name": "宜丰",
    "pinyin": "Yifeng",
    "label": "Yifeng0795" },

  {
    "code": "0794",
    "name": "宜黄",
    "pinyin": "Yihuang",
    "label": "Yihuang0794" },

  {
    "code": "0451",
    "name": "依兰",
    "pinyin": "Yilan",
    "label": "Yilan0451" },

  {
    "code": "0871",
    "name": "宜良",
    "pinyin": "Yiliang",
    "label": "Yiliang0871" },

  {
    "code": "0539",
    "name": "沂南",
    "pinyin": "Yinan",
    "label": "Yinan0539" },

  {
    "code": "0763",
    "name": "英德",
    "pinyin": "Yingde",
    "label": "Yingde0763" },

  {
    "code": "0558",
    "name": "颍上",
    "pinyin": "Yingshang",
    "label": "Yingshang0558" },

  {
    "code": "0539",
    "name": "沂水",
    "pinyin": "Yishui",
    "label": "Yishui0539" },

  {
    "code": "0579",
    "name": "义乌",
    "pinyin": "Yiwu",
    "label": "Yiwu0579" },

  {
    "code": "0559",
    "name": "黟县",
    "pinyin": "Yixian",
    "label": "Yixian0559" },

  {
    "code": "0510",
    "name": "宜兴",
    "pinyin": "Yixing",
    "label": "Yixing0510" },

  {
    "code": "0793",
    "name": "弋阳",
    "pinyin": "Yiyang",
    "label": "Yiyang0793" },

  {
    "code": "0379",
    "name": "宜阳",
    "pinyin": "Yiyang",
    "label": "Yiyang0379" },

  {
    "code": "0533",
    "name": "沂源",
    "pinyin": "Yiyuan",
    "label": "Yiyuan0533" },

  {
    "code": "0514",
    "name": "仪征",
    "pinyin": "Yizheng",
    "label": "Yizheng0514" },

  {
    "code": "0598",
    "name": "永安",
    "pinyin": "Yongan",
    "label": "Yongan0598" },

  {
    "code": "023",
    "name": "永川",
    "pinyin": "Yongchuan",
    "label": "Yongchuan023" },

  {
    "code": "0595",
    "name": "永春",
    "pinyin": "Yongchun",
    "label": "Yongchun0595" },

  {
    "code": "0931",
    "name": "永登",
    "pinyin": "Yongdeng",
    "label": "Yongdeng0931" },

  {
    "code": "0597",
    "name": "永定",
    "pinyin": "Yongding",
    "label": "Yongding0597" },

  {
    "code": "0796",
    "name": "永丰",
    "pinyin": "Yongfeng",
    "label": "Yongfeng0796" },

  {
    "code": "0423",
    "name": "永吉",
    "pinyin": "Yongji",
    "label": "Yongji0423" },

  {
    "code": "0577",
    "name": "永嘉",
    "pinyin": "Yongjia",
    "label": "Yongjia0577" },

  {
    "code": "0579",
    "name": "永康",
    "pinyin": "Yongkang",
    "label": "Yongkang0579" },

  {
    "code": "0771",
    "name": "邕宁",
    "pinyin": "Yongning",
    "label": "Yongning0771" },

  {
    "code": "0591",
    "name": "永泰",
    "pinyin": "Yongtai",
    "label": "Yongtai0591" },

  {
    "code": "0796",
    "name": "永新",
    "pinyin": "Yongxin",
    "label": "Yongxin0796" },

  {
    "code": "0792",
    "name": "永修",
    "pinyin": "Yongxiu",
    "label": "Yongxiu0792" },

  {
    "code": "0598",
    "name": "尤溪",
    "pinyin": "Youxi",
    "label": "Youxi0598" },

  {
    "code": "023",
    "name": "酉阳",
    "pinyin": "Youyang",
    "label": "Youyang023" },

  {
    "code": "0311",
    "name": "元氏",
    "pinyin": "Yuanshi",
    "label": "Yuanshi0311" },

  {
    "code": "0534",
    "name": "禹城",
    "pinyin": "Yucheng",
    "label": "Yucheng0534" },

  {
    "code": "0797",
    "name": "于都",
    "pinyin": "Yudu",
    "label": "Yudu0797" },

  {
    "code": "0556",
    "name": "岳西",
    "pinyin": "Yuexi",
    "label": "Yuexi0556" },

  {
    "code": "0793",
    "name": "余干",
    "pinyin": "Yugan",
    "label": "Yugan0793" },

  {
    "code": "0576",
    "name": "玉环",
    "pinyin": "Yuhuan",
    "label": "Yuhuan0576" },

  {
    "code": "0701",
    "name": "余江",
    "pinyin": "Yujiang",
    "label": "Yujiang0701" },

  {
    "code": "0766",
    "name": "郁南",
    "pinyin": "Yunan",
    "label": "Yunan0766" },

  {
    "code": "0766",
    "name": "云安",
    "pinyin": "Yunan",
    "label": "Yunan0766" },

  {
    "code": "0530",
    "name": "郓城",
    "pinyin": "Yuncheng",
    "label": "Yuncheng0530" },

  {
    "code": "0578",
    "name": "云和",
    "pinyin": "Yunhe",
    "label": "Yunhe0578" },

  {
    "code": "0596",
    "name": "云霄",
    "pinyin": "Yunxiao",
    "label": "Yunxiao0596" },

  {
    "code": "023",
    "name": "云阳",
    "pinyin": "Yunyang",
    "label": "Yunyang023" },

  {
    "code": "0793",
    "name": "玉山",
    "pinyin": "Yushan",
    "label": "Yushan0793" },

  {
    "code": "0431",
    "name": "榆树",
    "pinyin": "Yushu",
    "label": "Yushu0431" },

  {
    "code": "0537",
    "name": "鱼台",
    "pinyin": "Yutai",
    "label": "Yutai0537" },

  {
    "code": "0315",
    "name": "玉田",
    "pinyin": "Yutian",
    "label": "Yutian0315" },

  {
    "code": "0574",
    "name": "余姚",
    "pinyin": "Yuyao",
    "label": "Yuyao0574" },

  {
    "code": "0931",
    "name": "榆中",
    "pinyin": "Yuzhong",
    "label": "Yuzhong0931" }] },



{
  "initial": "Z",
  "list": [{
    "code": "0596",
    "name": "漳州",
    "pinyin": "Zhangzhou",
    "label": "Zhangzhou0596" },

  {
    "code": "0371",
    "name": "郑州",
    "pinyin": "Zhengzhou",
    "label": "Zhengzhou0371" },

  {
    "code": "0760",
    "name": "中山",
    "pinyin": "Zhongshan",
    "label": "Zhongshan0760" },

  {
    "code": "0756",
    "name": "珠海",
    "pinyin": "Zhuhai",
    "label": "Zhuhai0756" },

  {
    "code": "0623",
    "name": "枣庄",
    "pinyin": "Zaozhuang",
    "label": "Zaozhuang0623" },

  {
    "code": "0744",
    "name": "张家界",
    "pinyin": "Zhangjiajie",
    "label": "Zhangjiajie0744" },

  {
    "code": "0313",
    "name": "张家口",
    "pinyin": "Zhangjiakou",
    "label": "Zhangjiakou0313" },

  {
    "code": "0936",
    "name": "张掖",
    "pinyin": "Zhangye",
    "label": "Zhangye0936" },

  {
    "code": "0759",
    "name": "湛江",
    "pinyin": "Zhanjiang",
    "label": "Zhanjiang0759" },

  {
    "code": "0758",
    "name": "肇庆",
    "pinyin": "Zhaoqing",
    "label": "Zhaoqing0758" },

  {
    "code": "0870",
    "name": "昭通",
    "pinyin": "Zhaotong",
    "label": "Zhaotong0870" },

  {
    "code": "0511",
    "name": "镇江",
    "pinyin": "Zhenjiang",
    "label": "Zhenjiang0511" },

  {
    "code": "0955",
    "name": "中卫",
    "pinyin": "Zhongwei",
    "label": "Zhongwei0955" },

  {
    "code": "0394",
    "name": "周口",
    "pinyin": "Zhoukou",
    "label": "Zhoukou0394" },

  {
    "code": "0580",
    "name": "舟山",
    "pinyin": "Zhoushan",
    "label": "Zhoushan0580" },

  {
    "code": "0396",
    "name": "驻马店",
    "pinyin": "Zhumadian",
    "label": "Zhumadian0396" },

  {
    "code": "0731",
    "name": "株洲",
    "pinyin": "Zhuzhou",
    "label": "Zhuzhou0731" },

  {
    "code": "0533",
    "name": "淄博",
    "pinyin": "Zibo",
    "label": "Zibo0533" },

  {
    "code": "0813",
    "name": "自贡",
    "pinyin": "Zigong",
    "label": "Zigong0813" },

  {
    "code": "028",
    "name": "资阳",
    "pinyin": "Ziyang",
    "label": "Ziyang028" },

  {
    "code": "0852",
    "name": "遵义",
    "pinyin": "Zunyi",
    "label": "Zunyi0852" },

  {
    "code": "0311",
    "name": "赞皇",
    "pinyin": "Zanhuang",
    "label": "Zanhuang0311" },

  {
    "code": "020",
    "name": "增城",
    "pinyin": "Zengcheng",
    "label": "Zengcheng020" },

  {
    "code": "0512",
    "name": "张家港",
    "pinyin": "Zhangjiagang",
    "label": "Zhangjiagang0512" },

  {
    "code": "0597",
    "name": "漳平",
    "pinyin": "Zhangping",
    "label": "Zhangping0597" },

  {
    "code": "0596",
    "name": "漳浦",
    "pinyin": "Zhangpu",
    "label": "Zhangpu0596" },

  {
    "code": "0531",
    "name": "章丘",
    "pinyin": "Zhangqiu",
    "label": "Zhangqiu0531" },

  {
    "code": "0795",
    "name": "樟树",
    "pinyin": "Zhangshu",
    "label": "Zhangshu0795" },

  {
    "code": "0543",
    "name": "沾化",
    "pinyin": "Zhanhua",
    "label": "Zhanhua0543" },

  {
    "code": "0311",
    "name": "赵县",
    "pinyin": "Zhaoxian",
    "label": "Zhaoxian0311" },

  {
    "code": "0535",
    "name": "招远",
    "pinyin": "Zhaoyuan",
    "label": "Zhaoyuan0535" },

  {
    "code": "0311",
    "name": "正定",
    "pinyin": "Zhengding",
    "label": "Zhengding0311" },

  {
    "code": "0599",
    "name": "政和",
    "pinyin": "Zhenghe",
    "label": "Zhenghe0599" },

  {
    "code": "0593",
    "name": "柘荣",
    "pinyin": "Zherong",
    "label": "Zherong0593" },

  {
    "code": "0371",
    "name": "中牟",
    "pinyin": "Zhongmou",
    "label": "Zhongmou0371" },

  {
    "code": "023",
    "name": "忠县",
    "pinyin": "Zhongxian",
    "label": "Zhongxian023" },

  {
    "code": "0593",
    "name": "周宁",
    "pinyin": "Zhouning",
    "label": "Zhouning0593" },

  {
    "code": "029",
    "name": "周至",
    "pinyin": "Zhouzhi",
    "label": "Zhouzhi029" },

  {
    "code": "0411",
    "name": "庄河",
    "pinyin": "Zhuanghe",
    "label": "Zhuanghe0411" },

  {
    "code": "0536",
    "name": "诸城",
    "pinyin": "Zhucheng",
    "label": "Zhucheng0536" },

  {
    "code": "0575",
    "name": "诸暨",
    "pinyin": "Zhuji",
    "label": "Zhuji0575" },

  {
    "code": "0762",
    "name": "紫金",
    "pinyin": "Zijin",
    "label": "Zijin0762" },

  {
    "code": "0794",
    "name": "资溪",
    "pinyin": "Zixi",
    "label": "Zixi0794" },

  {
    "code": "0537",
    "name": "邹城",
    "pinyin": "Zoucheng",
    "label": "Zoucheng0537" },

  {
    "code": "0543",
    "name": "邹平",
    "pinyin": "Zouping",
    "label": "Zouping0543" },

  {
    "code": "0315",
    "name": "遵化",
    "pinyin": "Zunhua",
    "label": "Zunhua0315" }] }];var _default =





cityData;exports.default = _default;

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 50:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fmine%2FmyInformation%2Findex"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/mine/myInformation/index.vue */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 56:
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/pages/utils/getDate.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('-');
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

/** 
   * 时间戳转化为年 月 日 时 分 秒 
   * number: 传入时间戳 
   * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
  */
function formatTimeTwo(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

module.exports = {
  formatTime: formatTime,
  formatTimeTwo: formatTimeTwo };

/***/ }),

/***/ 59:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fmine%2FmyInformation%2FchangePassword"} ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _changePassword = _interopRequireDefault(__webpack_require__(/*! ./pages/view/mine/myInformation/changePassword.vue */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_changePassword.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 67:
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Flogin%2Findex"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/login/index.vue */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 75:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fmine%2FapprovalStudents%2Findex"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/mine/approvalStudents/index.vue */ 76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 83:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fmine%2FclassManagement%2FseeDetails"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _seeDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/view/mine/classManagement/seeDetails.vue */ 84));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_seeDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 91:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fmine%2FclassManagement%2Findex"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/view/mine/classManagement/index.vue */ 92));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 99:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ReciteWords/main.js?{"page":"pages%2Fview%2Fhome%2FarrangementTasks%2FcheckSelected"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _checkSelected = _interopRequireDefault(__webpack_require__(/*! ./pages/view/home/arrangementTasks/checkSelected.vue */ 100));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_checkSelected.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map