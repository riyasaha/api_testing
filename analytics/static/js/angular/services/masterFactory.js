define(["angular"],function(){

	var masterFactory = angular.module("masterFactory",[]);

	masterFactory.factory("masterFactoryFn",function($http){

		var factoryFn = {};

        //getting gender list
        factoryFn.getGender = function () {
           
            return $http({
                method: 'get',
                url: '',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).then(function (response) {
                return response.data;
            });
        } 
        
        return factoryFn;

	});

});