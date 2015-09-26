define(['angular','angular_cookies'],function(){

    var customDirectives = angular.module("customDirectives", ["ngCookies"]);
    //use this directive to on enter key with function
    // in html we need to call directive into text field like this ng-enter=""
    //call function to ng-enter directive
    customDirectives.directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown", function (event) {
                if (event.which === 13) {
                    if(!scope.$$phase) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter, {'event': event});
                        });
                    }

                    event.preventDefault();
                }
            });
        };
    });



    customDirectives.directive('afterLoginFooter', function () {

             return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
               link: function ($scope, element, attrs) {

                    },
               template :     
            
            '<div class="copyright">'+
            '<p class="pull-left sm-pull-reset">'+
            '<span>Copyright <span class="copyright">©</span> 2015 </span>'+
            '<span>edgenetworks.in</span>.'+
            '<span>All rights reserved. </span>'+
            '</p>'+
            
        '</div>'

            }
    });

    customDirectives.directive('afterLoginHeader',  ['$cookies', function ($cookies) {

             return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
               link: function ($scope, element, attrs) {

                    },
                controller:["$scope","$location","$http","$cookies", function($scope,$location,$http,$cookies){

                    $scope.logout = function(){
                        console.log('logout')
                        $http({
                                url: '/api/logout',
                                method: 'GET'
                                }).success(function(data) {

                                  delete $cookies.username;
                                  delete $cookies.name;
                                  delete $cookies.email;

                                  $location.path('/login');

                                }).error(function(data) {

                                    console.log('session error')

                                   $location.path('/login')
                            });
                    }
                    $scope.change_password = function(){
                        console.log('change password')
                        $location.path('/change_password')

                    }
                }],
               template : 
      '<div class="topbar">'+
        '<div class="header-left">'+
       '<div class="topnav">'+
              '<a data-ng-click="slideManu()" class="menutoggle" data-toggle="sidebar-collapsed"><span class="menu__handle"><span>Menu</span></span></a>'+
            '</div>'+
          '</div>'+
          '<div class="header-right">'+
            '<ul class="header-menu nav navbar-nav">'+
              '<li class="dropdown" id="user-header">'+
                '<a data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="true">'+
                '<img src="../static/images/avatar1_big.png" alt="user image">'+
                '<span class="username">'+$cookies.username+'</span>'+

                '</a>'+
                '<ul class="dropdown-menu">'+
//                    '<li>'+
//                    '<a href="#/attrition_analysis"><i class="icon-logout"></i><span>Attrition Dashboard</span></a>'+
//                  '</li>'+
//                  '<li>'+
//                    '<a href="#/attrition_analysis/filter"><i class="icon-logout"></i><span>Attrition Filters</span></a>'+
//                  '</li>'+
                  '<li data-ng-click="change_password()">'+
                    '<a href="javascript:;"><i class="icon-logout"></i><span>Change password</span></a>'+
                  '</li>'+
                  '<li data-ng-click="logout()">'+
                    '<a href="javascript:;"><i class="icon-logout"></i><span>Logout</span></a>'+
                  '</li>'+
                '</ul>'+
              '</li>'+
            '</ul>'+
          '</div>'+
        '</div>'
            }
        }]);
    customDirectives.directive('menuList', function () {

             return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
               link: function ($scope, element, attrs) {

                    },

               template : 
 '<div class="sidebar">'+
        '<div class="logopanel">'+
          '<h1>'+
            '<a> <img src="../static/images/logo.png" alt="edge"/>'+
'</a>'+
          '</h1>'+
        '</div>'+
        '<div class="sidebar-inner">'+
          '<ul class="nav nav-sidebar">'+
            '<li data-ng-mouseover="showSubMenu(0)" data-ng-mouseleave="hideSubmenu(0)" id="attrition_analysis" class="nav-parent {{attrition_analysis}}"><a href="#/average_market_pay"><i class="icon-bar-chart"></i><span>Employee List</span></a>'+
            '<ul class="children collapse">'+
//                '<li class="{{attrition_analysis_dashboard}}"><a href="#/attrition_analysis/dashboard">Dashboard</a></li>'+
                '<li class="{{average_market_pay}}"><a href="#/attrition_analysis/average_market_pay"> List</a></li>'+

              '</ul>'+
            '</li>'+
//            '<li data-ng-mouseover="showSubMenu(1)" data-ng-mouseleave="hideSubmenu()" id="forecasting" class="nav-parent {{forecasting}}"><a href="#/forecasting/demand"><i class="icon-user"></i><span>Forecasting</span></a>'+
//            '<ul class="children collapse">'+
//                 '<li class="{{demand_forecasting}}"><a href="#/forecasting/demand">Demand</a></li>'+
////                '<li class="{{supply_dashboard_active}}"><a href="#/supply/dashboard"> Dashboard</a></li>'+
//
//              '</ul>'+
//            '</li>'+
//            '<li data-ng-mouseover="showSubMenu(2)" data-ng-mouseleave="hideSubmenu()" id="demand_supply" class="{{demand_supply}}"><a href="#/demand_supply_matching"><i class="fa fa-users"></i><span>Demand Supply <br/>Matching</span></a></li>'+
          '</ul>'+
          

        '</div>'+
      '</div>'


            }
    });
});

