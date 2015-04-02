(function() {
'use strict';
/**
 * Directive Name
 * Description
 **/
	angular.module(MODULE).directive(DIRECTIVE_NAME, DIRECTIVE_FUNCTION);

	DIRECTIVE_FUNCTION.$inject = [];
	function DIRECTIVE_FUNCTION() {
		var directive = {
			template: '',
			controller: CONTROLLER_FUNCTION,
			controllerAs: 'vm',
			link: directiveLinkFunction
		}

		return directive;

		function directiveLinkFunction($scope, $element, attrs) {
			// Link behaviors
		}
	}

	CONTROLLER_FUNCTION.$inject = ['$scope', '$element'];
	function CONTROLLER_FUNCTION($scope, $element) {
		/*jshint validthis:true*/
		var vm = this; // Preserve reference in called functions
		// Set controller interface
	}

})();