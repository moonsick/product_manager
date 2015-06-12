angular.module('eventApp')
    .controller('notice_Ctr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


        // 공지사항 리스트 notice_list
        executeResults.notice_list().then(function (data) {
            $scope.notice_list = data;
        });


        $scope.notice_insert_move = function(){
          window.location = "/notice_insert";
        };


        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

    });