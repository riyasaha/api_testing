define(['angular','login','angular_cookies','login_ui','bootstrap','jquery_ui','application','backstretch','bootbox','bootstrap_hover_dropdown','bootstrap_progressbar','jquery_migrate','layout','modernizr_respond','plugins','sidebar_hover','builder'], function () {

	var loginApp	=	angular.module("loginApp",["ngCookies"]);
    loginApp.directive('ngEnter', function () {
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

	loginApp.controller("loginController",["$scope","$http","$location","$cookies", function($scope,$http,$location,$cookies){

		$scope.loginerroediv = false;
    $scope.showDiv = true
		$scope.loginerror = '';
        $scope.showdiv = function(flag){
          if(flag=='forgotpass')
          {
            $scope.showDiv = false
            $('.account').css('display','block')
            $('.form-password').css('display','block')
          }
          else
          {
            $scope.showDiv = true
          }
        }
        $scope.do_login = function(){

            if($scope.username!=undefined && $scope.password!=undefined){
                $http({
                    url: '/api/login',
                    method: 'POST',
                    data: {'username':$scope.username,'password':$scope.password}
                }).success(function(data) {
                    if(data.status == 'success'){
                         $cookies.username =data.result.username;
                         $cookies.name = data.result.name
                         $cookies.email = data.result.email;
                        // console.log('done;')
                        $location.path('/average_market_pay');
                        // document.location.reload(true);
                         $scope.loginerroediv = false;
                         $scope.loginerror = '';
                    }
                    else
                    {
                        $scope.loginerroediv = true;
                        $scope.loginerror = data.message;
                    }

                }).error(function(data) {
                   $location.path('/error')
                });
            }
            else
            {
          		$scope.loginerroediv = true;

                $scope.loginerror = 'Username and password is mandatory.'
            }
        }
        $scope.error_msg = ''
        $scope.do_change_password = function(){
            $scope.error_msg = ''

            var flag = 1
            if($scope.new_pass!=$scope.confirm_new_pass){
                $scope.error_msg = 'New password and confirm password is not same.'
                $scope.new_pass = ''
                $scope.confirm_new_pass = ''
                flag = 0
            }
            else
            {
                if($scope.new_pass.length<6 || $scope.confirm_new_pass.length<6){
                    $scope.error_msg = 'Password length must be greater than 6 character.'
                    $scope.new_pass = ''
                    $scope.confirm_new_pass = ''
                    flag = 0
                }
                else
                    flag = 1
            }
            if(flag==1)
           
            {
                $scope.error_msg = "Please wait for some time...";

               //hit api to change password
               $http({
                       url: '/api/change_password',
                       method: 'POST',
                       data: {'username':$cookies.username,'name':$cookies.name,'email':$cookies.email,'old_password':$scope.old_pass,'new_password':$scope.new_pass}
                     })
                     .success(function(data) {
                       console.log('data',data)
                       if(data.status == 'success'){
                        $scope.error_msg = "Password Changed Successfully.";

                        $scope.old_pass = '';
                        $scope.new_pass = '';
                        $scope.confirm_new_pass = '';


                       }
                       else
                       {
                           $scope.error_msg = "Invalid password.";

                       }

                   })
                   .error(function(data) {
                     $location.path('/error')
                   });
             }
        }
        $scope.forget_pass_error_msg = ''


        $scope.forgot_password = function(){

            $scope.forget_pass_error_msg = ''
            $scope.forget_pass_error_msg = "Please wait for Sometime.."
           $http({
                  url: '/api/forgot_password',
                  method: 'POST',
                  data: {'username':$scope.forgot_pass_username}
                })
                .success(function(data) {
                  if(data.status == 'success'){

                        $scope.forget_pass_error_msg = "Password Successfully sent to your email .Please Login.";
                        $scope.forgot_pass_username = ''


                  }
                  else
                  {
                     $scope.forget_pass_error_msg = "Invalid UserName.";

                  }

              })
              .error(function(data) {
                    $location.path('/error')
              });


        }
        $scope.redirect_to_login = function(){

            $http({
                    url: '/api/logout',
                    method: 'GET'
                    }).success(function(data) {

                      delete $cookies.username;
                      delete $cookies.name;
                       delete $cookies.email;

                      $location.path('/login');


                    }).error(function(data) {
                        $location.path('/error')
                    });

       }
	}]);

});