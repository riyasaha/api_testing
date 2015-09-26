/**
 * This file contain all configuration regarding requireJs

 * .
 */
/*Requirejs configuration code*/


requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'static/js/angular/',
    urlArgs: "v=" +  (new Date()).getTime(),
    //urlArgs: "bust=v2",//for solving the browser cache problem
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is  relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory. Here declaring all necessary js file and jd library file,whichi we are going to use for our entire application
    //instead of giving entire path we cn use only the name which we r going to give at the left hand side.
    paths: {
        //all library files are included here.if any other library file is required include it here
        //library file include here
        angular: "./jslibs/angular.min",
        angular_fullscreen: "./jslibs/angular-fullscreen",
        route_lib: "./jslibs/angular-route",
        router_config: "./config/router_config",
        angular_cookies: "./jslibs/angular-cookies",
        highcharts_3d: "./jslibs/highChart/highcharts-3d",

        highcharts_more: "./jslibs/highChart/highcharts-more",

        jquery_ui: "./jslibs/highChart/jquery-ui",
        angular_file_upload: "./jslibs/file_upload/angular-file-upload.min",

        angular_file_shim: "./jslibs/file_upload/angular-file-upload-shim.min",

         autocomplete:"./jslibs/angucomplete-alt.min",
       //meterial design plugins
        angular_animate:"./jslibs/meterialDesign/angular-animate.min",
        angular_aria:"./jslibs/meterialDesign/angular-aria.min",
        angular_material:"./jslibs/meterialDesign/angular-material.min",

        //javascript lib files are included  for login

        application: "./ui_js/application",
        backstretch: "./ui_js/backstretch.min",
        bootbox: "./ui_js/bootbox.min",
        bootstrap_hover_dropdown: "./ui_js/bootstrap-hover-dropdown.min",
        bootstrap_progressbar: "./ui_js/bootstrap-progressbar.min",
        builder: "./ui_js/builder",


        jquery_migrate : "./ui_js/jquery-migrate-1.2.1.min",

        layout: "./ui_js/layout",
        jquery_mCustomScrollbar_concat: "./ui_js/jquery.mCustomScrollbar.concat.min",
        modernizr_respond: "./ui_js/modernizr",

        plugins: "./ui_js/plugins",

        sidebar_hover: "./ui_js/sidebar_hover",

        bootstrap: "./ui_js/bootstrap.min",
        login_ui: "./ui_js/login-v1",
        step_form_wizard: "./ui_js/step-form-wizard",
        form_wizard: "./ui_js/form_wizard",
        datepicker: "./ui_js/jquery-ui-timepicker-addon",
        bootstrap_datepicker: "./ui_js/bootstrap-datepicker.min",




       //factory/service files are  included here
        masterFactory: "./services/masterFactory",

        //controller files are included here
        login: "./controllers/login",
        averageMarketPay: "./controllers/averageMarketPay",




        //custom directive files are included here
        custom_directive:'./directives/customDirective',
        
         //custom filter files are included here
        customFilters : './filters/custom_filters',

    },
    //following code is required for loading angularjs before angular_route_lib file
    shim: {
        'angular': {
            exports: 'angular',
        },
        'route_lib':{
             deps: ['angular']

        },
        'router_config':{
            deps: ['angular']
        },
        'angular_fullscreen':{
             deps: ['angular']
        },
        'angular_material':{
             deps: ['angular','angular_aria','angular_animate']
        },

//        'highcharts_ng':{
//            deps: ['highstock_src','jquery_ui']
//        },
        'highcharts_more':{
            deps: ['highcharts','heatmap','treemap','highstock']
        },
        'datepicker':{
            deps: ['jquery_ui','bootstrap_datepicker']
        },
        'login_ui':{
            deps: ['backstretch']
        },
        'angular_file_upload':{
            deps: ['angular_file_shim']
        }
//        },
//        'cal_heatmap':{
//            deps: ['d3']
//        }

        
    }

});

require(["angular","router_config"], function () {

    angular.bootstrap(document, ['mainApp']);
    
});
