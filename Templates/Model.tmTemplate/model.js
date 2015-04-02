(function() {
	'use strict';
	/**
	 * Model Name
	 * Description
	 **/

	angular.module(MODULE).factory(MODEL_NAME, MODEL_FUNCTION);

	MODEL_FUNCTION.$inject = [];
	function MODEL_FUNCTION() {
		// Set prototype accessors and properties
		// __constructor.prototype.property = property;
		return __constructor;

		/** Function definitions **/
		// Constructor
		function __constructor() {
			/*jshint validthis:true*/
			// Set individual instance properties here
		}

		// Public functions
		// These should be assigned on the prototype above.

		// Private functions
		// These should only be callable within the model function.
	}

})();