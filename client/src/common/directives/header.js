'use strict';

angular.module('eventApp')
    .controller('header', function ($scope,executeResults, $http, $route, $rootScope,localStorageService, $location) {



        var url = window.location;
        var title = [];
        title = String(url).split('/');
        title= String(title[3]).split('?');


        if(title[0] == ""){
            $scope.header_title ="";
        }
        if(title[0] == "stockList"){
            $scope.header_title ="입고물품 목록";
        }
        if(title[0] == "insertNew"){
            $scope.header_title ="입고입력";
        }
        if(title[0] == "releaseList"){
            $scope.header_title ="출고물품 목록";
        }
        if(title[0] == "insertReturn2"){
            $scope.header_title ="출고입력";
        }
        if(title[0] == "inventoryList"){
            $scope.header_title ="재고물품 목록";
        }
        if(title[0] == "inventoryCheck"){
            $scope.header_title ="재고 확인";
        }
        if(title[0] == "inoutHistory01"){
            $scope.header_title ="물품별 입고 내역";
        }
        if(title[0] == "inoutHistory01"){
            $scope.header_title ="물품별 입고 내역";
        }
        if(title[0] == "inoutHistory02"){
            $scope.header_title ="물품별 출고 내역";
        }
        if(title[0] == "inoutHistory03"){
            $scope.header_title ="거래처별 입고 내역";
        }
        if(title[0] == "inoutHistory04"){
            $scope.header_title ="거래처별 출고 내역";
        }
        if(title[0] == "notice"){
            $scope.header_title ="공지사항";
        }
        if(title[0] == "notice_insert"){
            $scope.header_title ="공지사항 입력";
        }
        if(title[0] == "product_manager"){
            $scope.header_title = "물품 관리";
        }
        if(title[0] == "company_manager"){
            $scope.header_title = "거래처 관리";
        }







        $scope.log_out = function(){
            localStorage.setItem('auto_login',2);
            sessionStorage.setItem('aaa',2);
            location.href = "/";
        };



        $scope.main = function(){
            window.location = "/";
        };
        $scope.stockList = function(){
            window.location = "/stockList";
        };
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





        $scope.header_home = function(){
            window.location="/";
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


        $scope.main_mod_change = function(num){
            if(num == 3){
                window.location="/typeb"
            }
            if(num == 2){
                window.location="/"
            }
        }

    });
