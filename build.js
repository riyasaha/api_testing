
//  node r.js -o app.build.js
//here a file will minified into out.js,if there is any dependency with a.js then those file will also optimized into out.js
 
({
 	//dir: "../requirejs_optimizer",
    //By default load any module IDs from js/lib
//    appDir: "../wipro_analtics_optimized",
//    baseUrl: 'analytics/static/js/angular/',
//    dir: "../wipro_analtics_app-build",
//
    appDir: "../allegis_analytics_viz",
    baseUrl: "analytics/static/js/angular/",
    dir: "../allegis_analytics_prod",
    paths: {
        //all library files are included here.if any other library file is required include it here
        //library file include here
        angular: "./jslibs/angular.min",
        angular_fullscreen: "./jslibs/angular-fullscreen",
        route_lib: "./jslibs/angular-route",
        router_config: "./config/router_config",
        angular_cookies: "./jslibs/angular-cookies",
//        highcharts_3d: "./jslibs/highChart/highcharts-3d",
//        highcharts_ng: "./jslibs/highChart/highcharts-ng",
//        highstock_src: "./jslibs/highChart/highstock.src",
        jquery_ui: "./jslibs/highChart/jquery-ui",
        angular_file_upload: "./jslibs/file_upload/angular-file-upload.min",

        angular_file_shim: "./jslibs/file_upload/angular-file-upload-shim.min",
        d3: "./jslibs/d3/d3",
        cal_heatmap: "./jslibs/heatmap/cal-heatmap",
       // cal_heatmap_angular: "./jslibs/heatmap/calHeatmap.min",
        // autocomplete:"./jslibs/angucomplete-alt.min",

        //javascript lib files are included  for login

        application: "./ui_js/application",
        backstretch: "./ui_js/backstretch.min",
        bootbox: "./ui_js/bootbox.min",
        bootstrap_hover_dropdown: "./ui_js/bootstrap-hover-dropdown.min",
        bootstrap_progressbar: "./ui_js/bootstrap-progressbar.min",
        //builder: "./ui_js/builder",
        //Chart: "./ui_js/Chart.min",
        //icheck: "./ui_js/icheck.min",
        //jasny_bootstrap: "./ui_js/jasny-bootstrap.min",


        jquery_migrate : "./ui_js/jquery-migrate-1.2.1.min",

//        jquery_blockUI: "./ui_js/jquery.blockUI.min",
//        jquery_cookies: "./ui_js/jquery.cookies.min",
        //jquery_mCustomScrollbar_concat: "./ui_js/jquery.mCustomScrollbar.concat.min",
        layout: "./ui_js/layout",
      //  main_gsap: "./ui_js/main-gsap.min",
        modernizr_respond: "./ui_js/modernizr",
       // notes: "./ui_js/notes",
        plugins: "./ui_js/plugins",
        //quickview: "./ui_js/quickview",
       // retina: "./ui_js/retina.min",
       // search: "./ui_js/search",
        //select2: "./ui_js/select2.min",
        sidebar_hover: "./ui_js/sidebar_hover",
       // sparkline: "./ui_js/sparkline.min",
        bootstrap: "./ui_js/bootstrap.min",
        login_ui: "./ui_js/login-v1",
        step_form_wizard: "./ui_js/step-form-wizard",
        form_wizard: "./ui_js/form_wizard",
        datepicker: "./ui_js/jquery-ui-timepicker-addon",
        bootstrap_datepicker: "./ui_js/bootstrap-datepicker.min",




       //factory/service files are  included here
        masterFactory: "./services/masterFactory",

        //controller files are included here
        joiningProbability: "./controllers/joiningProbability",
        joiningProbabilityPredictive: "./controllers/joiningProbabilityPredictive",
        leaveProbability: "./controllers/leaveProbability",

        login: "./controllers/login",




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
//        'highcharts_ng':{
//            deps: ['highstock_src','jquery_ui']
//        },
        'datepicker':{
            deps: ['jquery_ui','bootstrap_datepicker']
        },
        'login_ui':{
            deps: ['backstretch']
        },
        'angular_file_upload':{
            deps: ['angular_file_shim']
        },
        'cal_heatmap':{
            deps: ['d3']
        }


    },


    modules: [
            {
                name: "config/require_config"
            }
    ]


})




