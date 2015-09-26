define(['angular'], function(){

    var filters     =       angular.module("customFilters",[]);

    /*
    * this filter use for making first latter is capital
    * $filter pass this $inject to any controller function
    * use this like {{ string | capitalize}}
    */
    filters.filter('capitalize', function() {
        return function(str, scope) {
            if(str)
                return str.substring(0,1).toUpperCase()+str.substring(1);
        }
    });//end of capitalize filter method


});