(function() {
	'use strict';
	/**
	 * Service Name
	 * Description
	 **/

	angular.module(MODULE_NAME).factory(SERVICE_NAME, SERVICE_FUNCTION);

	SERVICE_FUNCTION.$inject = [];
	function SERVICE_FUNCTION() {
		// We return an object rather than a function to maintain this as static.
		var serviceObj = {};
		// Set serviceObj public properties
		// Set serviceObj public methods
		return serviceObj;

		/** Function definitions **/
		// Define public functions to hook as public methods above
		// Define private functions
	}

})();