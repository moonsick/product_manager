'use strict';

var app = angular.module('eventApp', [
    'ngRoute',
    'angularFileUpload',
    'LocalStorageModule',
    'angular-storage',
    'ui.bootstrap',
    'ngCookies'
]);
app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/src/app/html/010-00-main/010-00-main.html'
            })
            .when('/typeb', {
                templateUrl: '/src/app/html/010-00-main/010-02-main-b.html'
            })
            /*.when('/kang', {
                redirectTo: '/'
            })*/
            .when('/stockList', {
                templateUrl: '/src/app/html/020-00-stockList/020-00-stockList.html'
            })
            .when('/insertNew', {
                templateUrl: '/src/app/html/020-00-stockList/020-02-insertNew.html'
            })


            .when('/returnList', {
                templateUrl: '/src/app/html/030-00-returnList/030-00-returnList.html'
            })
            .when('/releaseList', {
                templateUrl: '/src/app/html/040-00-releaseList/040-00-releaseList.html'
            })
            .when('/inventoryList', {
                templateUrl: '/src/app/html/050-00-inventoryList/050-00-inventoryList.html'
            })
            .when('/inoutHistory01', {
                templateUrl: '/src/app/html/060-00-inoutHistory/060-00-inoutHistory01.html'
            })
            .when('/notice', {
                templateUrl: '/src/app/html/070-00-notice/070-00-notice.html'
            })
            .when('/notice_insert', {
                templateUrl: '/src/app/html/070-00-notice/070-01-noticeWrite.html'
            })

            .when('/insertReturn2', {
                templateUrl: '/src/app/html/040-00-releaseList/040-02-insertReturn.html'
            })
            .when('/inventoryCheck', {
                templateUrl: '/src/app/html/050-00-inventoryList/050-01-inventoryCheck.html'
            })
            .when('/inoutHistory02', {
                templateUrl: '/src/app/html/060-00-inoutHistory/060-01-inoutHistory02.html'
            })
            .when('/inoutHistory03', {
                templateUrl: '/src/app/html/060-00-inoutHistory/060-02-inoutHistory03.html'
            })
            .when('/inoutHistory04', {
                templateUrl: '/src/app/html/060-00-inoutHistory/060-03-inoutHistory04.html'
            })
            .when('/product_manager', {
                templateUrl: '/src/app/html/080-00-product_manger/080-00-product_manger.html'
            })
            .when('/company_manager', {
                templateUrl: '/src/app/html/090-00-company_manager/090-00-company_manager.html'
            })






            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

app.directive('ngConfirmClick', [
    function(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('click', function(e){
                    var message = attrs.ngConfirmClick;
                    if(message && !confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

