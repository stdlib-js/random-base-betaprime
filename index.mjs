// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";function u(e,t,n){return e(t,1)/e(n,1)}function f(){var f,h,p,j,c,v,g;if(0===arguments.length)f=o();else if(1===arguments.length){if(!s(j=arguments[0]))throw new TypeError(l("0nx2V",j));f=o(j)}else{if(g=function(e,t){return a(e)?a(t)?null:new TypeError(l("0nx72",t)):new TypeError(l("0nx71",e))}(h=arguments[0],p=arguments[1]))throw g;if(arguments.length>2){if(!s(j=arguments[2]))throw new TypeError(l("0nx2V",j));f=o(j)}else f=o()}return v=void 0===h?function(e,t){if(d(e)||d(t)||e<=0||t<=0)return NaN;return u(f,e,t)}:function(){return u(f,h,p)},c=f.PRNG,e(v,"NAME","betaprime"),j&&j.prng?(e(v,"seed",null),e(v,"seedLength",null),n(v,"state",r(null),i),e(v,"stateLength",null),e(v,"byteLength",null),e(v,"toJSON",r(null))):(t(v,"seed",(function(){return c.seed})),t(v,"seedLength",(function(){return c.seedLength})),n(v,"state",(function(){return c.state}),(function(e){c.state=e})),t(v,"stateLength",(function(){return c.stateLength})),t(v,"byteLength",(function(){return c.byteLength})),e(v,"toJSON",(function(){var e={type:"PRNG"};e.name=v.NAME,e.state=m(c.state),e.params=void 0===h?[]:[h,p];return e}))),e(v,"PRNG",c),v}var h=f();e(h,"factory",f);export{h as default,f as factory};
//# sourceMappingURL=index.mjs.map
