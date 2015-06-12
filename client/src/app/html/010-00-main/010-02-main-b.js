'use strict';

angular.module('eventApp')
    .controller('main2_Ctr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {



        var url = window.location;
        var title = [];
        title = String(url).split('/');
        title= String(title[3]).split('?');

        if(title[0] == "typeb"){
            $rootScope.main_type ="1";
        }
        $scope.main_mod_change2 = function(num){
            if(num == 3){
                window.location="/typeb"
            }
            if(num == 2){
                window.location="/"
            }
        }


        $scope.member_name2 = sessionStorage.getItem('member_name');

        $scope.main_mod_change = function(num){
            $rootScope.layout = num;
        }


        $scope.log_out = function(){
            localStorage.setItem('auto_login',2);
            sessionStorage.setItem('aaa',2);
            location.href = "/";
        };


        $scope.home = function(){
            window.location = "/";
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





        executeResults.day_move_sub_list().then(function (data) {
            $rootScope.in_new = data;
        });


        executeResults.day_move_out_sub_list().then(function (data) {
            $rootScope.out_new = data;
        });

        executeResults.notice_new().then(function (data) {
            $rootScope.notice_new = data;
        });


    });
