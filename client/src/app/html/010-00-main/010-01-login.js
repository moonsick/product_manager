angular.module('eventApp')
    .controller('login_Ctr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        // 전체 로그인 맴버 list
        $scope.member_list;
        var id_check = 0;        // 아이디 틀림 , 맞음 구분
        var pw_check = 0;        // 비밀번호 틀림 , 맞음 구분
        var id_number;           // 몇번째 아이디인지 알려줌



        // 로그인 list 가져오기
        executeResults.member_list().then(function(data) {
            $scope.member_list = data;
        });


// 아이디 쓰고 다음 누를시 비밀번호 입력 활성
        $scope.id_next = function(){
            $("#id_next").trigger('click');
        };


// 로그인 하기
        $scope.login = function(){

            for(var i=0; i<$scope.member_list.length; i++){
                if($scope.member_list[i].member_id == $("#loginId").val()){
                    id_check = 1;
                    if($scope.member_list[i].member_pw == $("#loginPw").val()){
                        pw_check = 1;
                        id_number=i;
                    }
                    else{
                        pw_check = 0;
                    }
                }

            };

            if(id_check == 0){
                alert("아이디가 존재하지 않습니다");
                return;
            }
            else if(pw_check == 0){
                id_check = 0;
                alert("비밀번호가 틀립니다.");
                return;
            }
            else if((id_check ==1) && (pw_check ==1)){


                if($("#auto_login").is(':checked')==false){
                    sessionStorage.setItem('aaa',1);
                    sessionStorage.setItem('member_id',$scope.member_list[id_number].member_id);
                    sessionStorage.setItem('member_name',$scope.member_list[id_number].member_name);
                    location.reload();
                }

                else{
                    localStorage.setItem('auto_login',1);
                    localStorage.setItem('auto_member_id',$scope.member_list[id_number].member_id);
                    localStorage.setItem('auto_member_name',$scope.member_list[id_number].member_name);
                    sessionStorage.setItem('member_id',$scope.member_list[id_number].member_id);
                    sessionStorage.setItem('member_name',$scope.member_list[id_number].member_name);
                    location.reload();
                }


            }     
            
        }

    });