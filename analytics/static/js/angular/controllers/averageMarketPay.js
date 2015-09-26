
define(['angular','custom_directive','angular_material','modernizr_respond','jquery_mCustomScrollbar_concat','autocomplete'], function () {

	var averageMarketPayApp	=	angular.module("averageMarketPayApp",['ngMaterial','customDirectives','angucomplete-alt']);

	averageMarketPayApp.controller("averageMarketPayController",["$scope","$http","$location","$route","$rootScope",'$timeout', '$mdSidenav', '$mdUtil', '$log', function($scope,$http,$location,$route,$rootScope,$timeout, $mdSidenav, $mdUtil, $log){

		$('#overlay').addClass('loaded')

		/*start of right toogle bar */
			$scope.toggleRight = buildToggler('right');
			 function buildToggler(navID) {
			  var debounceFn =  $mdUtil.debounce(function(){
					$mdSidenav(navID)
					  .toggle()
					  .then(function () {
						$log.debug("toggle " + navID + " is done");
					  });
				  },200);
			  return debounceFn;
			}
			$scope.close = function () {
			  $mdSidenav('right').close()
				.then(function () {
				  $log.debug("close RIGHT is done");
				});
			};
	 	/*end of right toogle bar */
		/*start of shrink*/
		  var imagePath = '../static/images/name_initial/a.png';
		  $scope.todos = [];
		  for (var i = 0; i < 15; i++) {
			$scope.todos.push({
			  face: imagePath,
			  what: "Brunch this weekend?",
			  who: "Min Li Chan",
			  notes: "I'll be in your neighborhood doing errands.",
			  backgrnd: "../static/images/green.png",
			  val: "50%",
			});
		  }
	  /*end of shrink*/



  }]);

});