'use strict';

angular.module('eventApp')
    .controller('MainCtrl', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $http.get('/api/awesomeThings').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.sideClass= function(index){
            $scope.index=index;
            console.log("INDEX"+index);
        }



        $rootScope.member_id;



        if(localStorage.getItem('auto_login')==null||localStorage.getItem('auto_login')==2){
            //자동 로그인이 아닐때 XXXXXXX

            if(sessionStorage.getItem('aaa')==null||sessionStorage.getItem('aaa')==2)
            {
                $rootScope.layout = 1;
                console.log("로그아웃 일때 동작 합니다");
            }
            else if(sessionStorage.getItem('aaa')==1){
                $rootScope.layout = 2;
                console.log("로그인 일때 동작 합니다");
            }


        }else {
            // 자동 로그인일때

            sessionStorage.setItem('member_id',localStorage.getItem('auto_member_id'));
            sessionStorage.setItem('member_name',localStorage.getItem('auto_member_name'));
            $rootScope.layout = 2;
            console.log("자동 로그인으로 로그인");
        };


    });