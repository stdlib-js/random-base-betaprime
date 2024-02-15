// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";function u(e,t){return l(e)?l(t)?null:new TypeError(d("invalid argument. Second argument must be a positive number. Value: `%s`.",t)):new TypeError(d("invalid argument. First argument must be a positive number. Value: `%s`.",e))}function p(e,t,n){return e(t,1)/e(n,1)}function h(){var l,h,f,j,c,g,v;if(0===arguments.length)l=o();else if(1===arguments.length){if(!s(j=arguments[0]))throw new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",j));l=o(j)}else{if(v=u(h=arguments[0],f=arguments[1]))throw v;if(arguments.length>2){if(!s(j=arguments[2]))throw new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",j));l=o(j)}else l=o()}return g=void 0===h?T:O,c=l.PRNG,e(g,"NAME","betaprime"),j&&j.prng?(e(g,"seed",null),e(g,"seedLength",null),n(g,"state",r(null),i),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",r(null))):(t(g,"seed",b),t(g,"seedLength",y),n(g,"state",N,w),t(g,"stateLength",x),t(g,"byteLength",L),e(g,"toJSON",E)),e(g,"PRNG",c),g;function b(){return c.seed}function y(){return c.seedLength}function x(){return c.stateLength}function L(){return c.byteLength}function N(){return c.state}function w(e){c.state=e}function E(){var e={type:"PRNG"};return e.name=g.NAME,e.state=a(c.state),e.params=void 0===h?[]:[h,f],e}function O(){return p(l,h,f)}function T(e,t){return m(e)||m(t)||e<=0||t<=0?NaN:p(l,e,t)}}var f=h();e(f,"factory",h);export{f as default,h as factory};
//# sourceMappingURL=index.mjs.map
