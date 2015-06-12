angular.module('eventApp')
    .controller('notice_insert_Ctr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


        $scope.notice_commend ="";

        $scope.notice_insert = function(){
            if($scope.notice_commend ==""){
                alert("내용을 입력해 주세요");
                return;
            }

            var space_check =0;
            for(var i=0; i<$scope.notice_commend.length; i++){
                if($scope.notice_commend[i] !== " "){
                    space_check = 1;
                }
            }

            if(space_check == 0){
                alert("내용을 입력해 주세요");
                return;
            };


            if(confirm("확인을 누르면 내용이 입력됩니다")){
                // 공지사항 입력 notice_insert
                executeResults.notice_insert($scope.notice_commend,sessionStorage.getItem('member_id')).then(function (data) {
                    $scope.notice_insert = data;
                    window.location = "/notice";
                });

            };


        }




    });