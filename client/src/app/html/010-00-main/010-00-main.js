'use strict';

angular.module('eventApp')
    .controller('mainCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.member_name = sessionStorage.getItem('member_name');




        $scope.main_mod_change = function(num){
            $rootScope.layout = num;
        }



        $scope.stockList = function(){
            window.location = "/stockList";
        }
        $scope.returnList = function(){
            window.location = "/returnList";
        };
        $scope.releaseList = function(){
            window.location = "/releaseList";
        };
        $scope.inventoryList = function(){
            window.location = "/inventoryList";
        };
        $scope.inoutHistory01 = function(){
            window.location = "/inoutHistory01";
        };
        $scope.notice = function(){
            window.location = "/notice";
        };
        $scope.product_manager = function(){
            window.location = "/product_manager";
        };
        $scope.company_manager = function(){
            window.location = "/company_manager";
        };




    });
