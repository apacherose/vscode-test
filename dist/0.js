webpackJsonp([0],{

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Foo;

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

__webpack_require__(413);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Foo() {
  return React.createElement(
    "pre",
    { className: "foo" },
    "I am Foo!"
  );
};

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(414);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(161)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./foo.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./foo.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(160)(false);
// imports


// module
exports.push([module.i, ".foo {\r\n  background-color: green;\r\n}\r\n", ""]);

// exports


/***/ })

});