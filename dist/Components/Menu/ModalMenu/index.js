var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNative=require("react-native");var _index=_interopRequireDefault(require("./index.web"));var _index2=_interopRequireDefault(require("./index.native"));var index=_index2.default;if(_reactNative.Platform.OS=='web'){index=_index.default;}var _default=index;exports.default=_default;