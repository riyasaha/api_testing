
//Here declare all the required file which is having dependency with router
define(["route_lib","angular_cookies","login","averageMarketPay"], function () {
    
//here creating module and declaring dependent module names
    var router = angular.module('mainApp', ["ngRoute","ngCookies","loginApp","averageMarketPayApp"]);

//config for setting the route

    //.when will match with the url name and according to that we can declare template url and controller
    router.config(['$routeProvider', '$locationProvider','$interpolateProvider', function ($routeProvider, $locationProvider,$interpolateProvider) {
        $routeProvider

            .when('/average_market_pay',
            {  controller: 'averageMarketPayController',
                templateUrl: 'static/views/average_market_pay.html'
            })

          

            .when('/home',
                {  controller: '',
                    templateUrl: 'static/views/home_view.html'
                })
            .when('/error',
                {  controller: 'loginController',
                    templateUrl: 'static/views/error_view.html'
                })
            .when('/login',
                {  controller: 'loginController',
                    templateUrl: 'static/views/login_view.html'
                })

            .when('/change_password',
                {  controller: 'loginController',
                    templateUrl: 'static/views/chnage_password.html'
                })

           
           .otherwise({ redirectTo: '/' });//here we have to decalare the file which we want to redirect to default load page

            $interpolateProvider.startSymbol('{[');
            $interpolateProvider.endSymbol(']}');
    }]);

    router.run(["$rootScope","$cookies","$location","$templateCache", function($rootScope,$cookies,$location,$templateCache) {
        // $rootScope.$on('$viewContentLoaded', function() {
            console.log('template')
             $templateCache.removeAll();
        //});

        $rootScope.$on('$locationChangeSuccess', function (next, current) {
             $templateCache.removeAll();
            console.log($location.path())
            console.log($cookies.username)
//            if($location.path()=='/' && ($cookies.username!=undefined || $cookies.username)){
//
//
//                $location.path('/attrition_analysis/filter')
//            }
//            if($location.path()=='/' && ($cookies.username==undefined || !$cookies.username)){
//
//                $location.path('/login')
//            }
            if($location.path()=='/login' && ($cookies.username!=undefined || $cookies.username))
              $location.path('/average_market_pay')
            if($location.path()=='/' && ($cookies.username!=undefined || $cookies.username))
                  $location.path('/average_market_pay')
            if (($location.path()=='/' || $location.path()=='/attrition_analysis/filter'|| $location.path()=='/forecasting/demand' ) && ($cookies.username==undefined || !$cookies.username))
                $location.path('/login')
        });


        $rootScope.$on('$routeChangeStart', function(event, next, current) {
           // $('.builder').css('right','-240px')
            $rootScope.hiderightBarFlag = false
            $rootScope.hiderightBar =  function(flag){
                if (flag=='open'){
                     $('.builder').css('right','-240px')
                     $rootScope.hiderightBarFlag = false
                }
                else
                {
                    if(!$rootScope.hiderightBarFlag)
                    {
                       $('.builder').css('right','0px')

                       $rootScope.hiderightBarFlag = true
                    }
                     else
                     {
                        $('.builder').css('right','-240px')
                        $rootScope.hiderightBarFlag = false
                     }
                }

            }
             if (typeof(current) !== 'undefined'){
                 $templateCache.remove(current.templateUrl);
            }
            //on scope change
            if ($cookies.username!=undefined || $cookies.username) {

                        $rootScope.username = $cookies.username;
                        $rootScope.name = $cookies.username;
                        $rootScope.email = $cookies.username;
            }


//            if(($location.path()=='attrition_analysis') && ($cookies.username==undefined || !$cookies.username))
//              $location.path('/login')
            if($location.path()=='/login' && ($cookies.username!=undefined || $cookies.username))
              $location.path('/average_market_pay')
            if($location.path()=='/' && ($cookies.username!=undefined || $cookies.username))
                  $location.path('/average_market_pay')
           if (($location.path()=='/' || $location.path()=='/average_market_pay' || $location.path()=='/forecasting/demand' ) && ($cookies.username==undefined || !$cookies.username))
                $location.path('/login')
            

            if($location.path()=='/attrition_analysis/dashboard')
            {
                $rootScope.attrition_analysis = "active"
//                $rootScope.attrition_analysis_filter = "active"
                $rootScope.attrition_analysis_dashboard = "active"
                $rootScope.average_market_pay = ""
                 $rootScope.forecasting = ""
                $rootScope.demand_forecasting = ""


            }
            if($location.path()=='/average_market_pay')
            {
                $rootScope.attrition_analysis = "active"
//                $rootScope.attrition_analysis_filter = ""
                $rootScope.attrition_analysis_dashboard = ""
                $rootScope.average_market_pay = "active"
                 $rootScope.forecasting = ""
                $rootScope.demand_forecasting = ""


            }
            if($location.path()=='/forecasting/demand')
            {
                $rootScope.attrition_analysis = ""
//                $rootScope.attrition_analysis_filter = ""
                $rootScope.attrition_analysis_dashboard = ""
                $rootScope.average_market_pay = ""
                $rootScope.forecasting = "active"
                $rootScope.demand_forecasting = "active"


            }
            $rootScope.initVar = function(){
                $rootScope.slidemenuFlag =  true
            }
            $rootScope.slideManu =  function(){
                //$rootScope.initVar();

                if($rootScope.slidemenuFlag){
                    $rootScope.slidemenuFlag =  false
                    $('#body').addClass('sidebar-collapsed')
                }
                else{

                    $rootScope.slidemenuFlag =  true
                    $('#body').removeClass('sidebar-collapsed')
                }


            }
             $('#attrition_analysis').removeClass('nav-hover')

            $rootScope.hideSubmenu = function(){
                 if(!$rootScope.slidemenuFlag){


                  $('#attrition_analysis').removeClass('nav-hover')
                  $('#forecasting').removeClass('nav-hover')
//                  $('#attrition_analysis_supply').removeClass('nav-hover')
                 }
            }
            $rootScope.showSubMenu = function(tempflag){

                if(!$rootScope.slidemenuFlag){
                    if(tempflag==0){

                        $('#attrition_analysis').addClass('nav-hover')
                        $('#forecasting').removeClass('nav-hover')
//                        $('#removeClass').removeClass('nav-hover')

                    }
                    else if(tempflag==1){
                        $('#forecasting').addClass('nav-hover')
                        $('#attrition_analysis').removeClass('nav-hover')
                        $('#removeClass').removeClass('nav-hover')

                    }
//                    else if(tempflag==2){
//                        $('#attrition_analysis_supply').addClass('nav-hover')
//                        $('#supply').removeClass('nav-hover')
//                        $('#attrition_analysis').removeClass('nav-hover')
//
//                    }


                }
            }




        })
        $rootScope.slidemenuFlag =  true
         $('#attrition_analysis').removeClass('nav-hover')








    }]);

});