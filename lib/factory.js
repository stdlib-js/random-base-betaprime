/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils-define-nonenumerable-read-write-accessor' );
var isObject = require( '@stdlib/assert-is-plain-object' );
var constantFunction = require( '@stdlib/utils-constant-function' );
var noop = require( '@stdlib/utils-noop' );
var gammaFactory = require( '@stdlib/random-base-gamma' ).factory;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var typedarray2json = require( '@stdlib/array-to-json' );
var format = require( '@stdlib/string-format' );
var validate = require( './validate.js' );
var betaprime0 = require( './betaprime.js' );


// MAIN //

/**
* Returns a pseudorandom number generator for generating beta prime distributed random numbers.
*
* @param {PositiveNumber} [alpha] - first shape parameter
* @param {PositiveNumber} [beta] - second shape parameter
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {PRNG} pseudorandom number generator
*
* @example
* var betaprime = factory( 2.0, 1.0 );
* var v = betaprime();
* // returns <number>
*
* @example
* var betaprime = factory( 2.0, 2.0, {
*     'seed': 297
* });
* var v = betaprime();
* // returns <number>
*/
function factory() {
	var rgamma;
	var alpha;
	var beta;
	var opts;
	var rand;
	var prng;
	var err;

	if ( arguments.length === 0 ) {
		rgamma = gammaFactory();
	} else if ( arguments.length === 1 ) {
		opts = arguments[ 0 ];
		if ( !isObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		rgamma = gammaFactory( opts );
	} else {
		alpha = arguments[ 0 ];
		beta = arguments[ 1 ];
		err = validate( alpha, beta );
		if ( err ) {
			throw err;
		}
		if ( arguments.length > 2 ) {
			opts = arguments[ 2 ];
			if ( !isObject( opts ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
			}
			rgamma = gammaFactory( opts );
		} else {
			rgamma = gammaFactory();
		}
	}
	if ( alpha === void 0 ) {
		prng = betaprime2;
	} else {
		prng = betaprime1;
	}
	rand = rgamma.PRNG;

	setReadOnly( prng, 'NAME', 'betaprime' );

	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( opts && opts.prng ) {
		setReadOnly( prng, 'seed', null );
		setReadOnly( prng, 'seedLength', null );
		setReadWriteAccessor( prng, 'state', constantFunction( null ), noop );
		setReadOnly( prng, 'stateLength', null );
		setReadOnly( prng, 'byteLength', null );
		setReadOnly( prng, 'toJSON', constantFunction( null ) );
	} else {
		setReadOnlyAccessor( prng, 'seed', getSeed );
		setReadOnlyAccessor( prng, 'seedLength', getSeedLength );
		setReadWriteAccessor( prng, 'state', getState, setState );
		setReadOnlyAccessor( prng, 'stateLength', getStateLength );
		setReadOnlyAccessor( prng, 'byteLength', getStateSize );
		setReadOnly( prng, 'toJSON', toJSON );
	}
	setReadOnly( prng, 'PRNG', rand );
	return prng;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		return rand.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rand.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rand.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rand.byteLength;
	}

	/**
	* Returns the current pseudorandom number generator state.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rand.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.state = s;
	}

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
	*
	* @private
	* @returns {Object} JSON representation
	*/
	function toJSON() {
		var out = {};
		out.type = 'PRNG';
		out.name = prng.NAME;
		out.state = typedarray2json( rand.state );
		if ( alpha === void 0 ) {
			out.params = [];
		} else {
			out.params = [ alpha, beta ];
		}
		return out;
	}

	/**
	* Returns a random number drawn from a beta prime distribution with bound parameter values.
	*
	* @private
	* @returns {PositiveNumber} pseudorandom number
	*
	* @example
	* var v = betaprime1();
	* // returns <number>
	*/
	function betaprime1() {
		return betaprime0( rgamma, alpha, beta );
	}

	/**
	* Returns a random number drawn from a beta prime distribution.
	*
	* @private
	* @param {PositiveNumber} alpha - first shape parameter
	* @param {PositiveNumber} beta - second shape parameter
	* @returns {PositiveNumber} pseudorandom number
	*
	* @example
	* var v = betaprime2( 2.0, 3.0 );
	* // returns <number>
	*/
	function betaprime2( alpha, beta ) {
		if (
			isnan( alpha ) ||
			isnan( beta ) ||
			alpha <= 0.0 ||
			beta <= 0.0
		) {
			return NaN;
		}
		return betaprime0( rgamma, alpha, beta );
	}
}


// EXPORTS //

module.exports = factory;
