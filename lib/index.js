(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/helper-plugin-utils'), require('@babel/plugin-transform-react-jsx'), require('@babel/plugin-transform-react-jsx-development'), require('@babel/plugin-transform-react-display-name'), require('@babel/plugin-transform-react-jsx-source'), require('@babel/plugin-transform-react-jsx-self'), require('@babel/plugin-transform-react-pure-annotations'), require('@babel/core')) :
  typeof define === 'function' && define.amd ? define(['@babel/helper-plugin-utils', '@babel/plugin-transform-react-jsx', '@babel/plugin-transform-react-jsx-development', '@babel/plugin-transform-react-display-name', '@babel/plugin-transform-react-jsx-source', '@babel/plugin-transform-react-jsx-self', '@babel/plugin-transform-react-pure-annotations', '@babel/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['babel-preset-karas'] = factory(global.helperPluginUtils, global.transformReactJSX, global.transformReactJSXDevelopment, global.transformReactDisplayName, global.transformReactJSXSource, global.transformReactJSXSelf, global.transformReactPure, global.core));
}(this, (function (helperPluginUtils, transformReactJSX, transformReactJSXDevelopment, transformReactDisplayName, transformReactJSXSource, transformReactJSXSelf, transformReactPure, core) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var transformReactJSX__default = /*#__PURE__*/_interopDefaultLegacy(transformReactJSX);
  var transformReactJSXDevelopment__default = /*#__PURE__*/_interopDefaultLegacy(transformReactJSXDevelopment);
  var transformReactDisplayName__default = /*#__PURE__*/_interopDefaultLegacy(transformReactDisplayName);
  var transformReactJSXSource__default = /*#__PURE__*/_interopDefaultLegacy(transformReactJSXSource);
  var transformReactJSXSelf__default = /*#__PURE__*/_interopDefaultLegacy(transformReactJSXSelf);
  var transformReactPure__default = /*#__PURE__*/_interopDefaultLegacy(transformReactPure);

  var isCompatTag = core.types.react.isCompatTag;

  core.types.react.isCompatTag = function (tagName) {
    if (tagName && tagName.charAt(0) === '$') {
      return true;
    }

    return isCompatTag(tagName);
  };

  var isReactComponent = core.types.react.isReactComponent;

  core.types.react.isReactComponent = function (tagName) {
    if (tagName === '$') {
      return true;
    }

    return isReactComponent(tagName);
  };

  var index = helperPluginUtils.declare(function (api, opts) {
    api.assertVersion(7);
    var pragma = opts.pragma,
        pragmaFrag = opts.pragmaFrag;
    var pure = opts.pure,
        _opts$throwIfNamespac = opts.throwIfNamespace,
        throwIfNamespace = _opts$throwIfNamespac === void 0 ? true : _opts$throwIfNamespac,
        useSpread = opts.useSpread,
        _opts$runtime = opts.runtime,
        runtime = _opts$runtime === void 0 ? "classic" : _opts$runtime,
        importSource = opts.importSource; // TODO: (Babel 8) Remove setting these defaults

    if (runtime === "classic") {
      pragma = pragma || "karas.createElement";
      pragmaFrag = pragmaFrag || "karas.Fragment";
    } // TODO: (Babel 8) Don't cast these options but validate it


    var development = !!opts.development;
    var useBuiltIns = !!opts.useBuiltIns;

    if (typeof development !== "boolean") {
      throw new Error("@babel/preset-react 'development' option must be a boolean.");
    }

    var transformReactJSXPlugin = runtime === "automatic" && development ? transformReactJSXDevelopment__default['default'] : transformReactJSX__default['default'];
    return {
      plugins: [[transformReactJSXPlugin, {
        importSource: importSource,
        pragma: pragma,
        pragmaFrag: pragmaFrag,
        runtime: runtime,
        throwIfNamespace: throwIfNamespace,
        useBuiltIns: useBuiltIns,
        useSpread: useSpread,
        pure: pure
      }], transformReactDisplayName__default['default'], pure !== false && transformReactPure__default['default'], development && runtime === "classic" && transformReactJSXSource__default['default'], development && runtime === "classic" && transformReactJSXSelf__default['default']].filter(Boolean)
    };
  });

  return index;

})));
//# sourceMappingURL=index.js.map
