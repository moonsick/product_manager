angular.module('eventApp')
    .controller('company_manager_Ctr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {






        $scope.product_list = [];     // 물품 list 배열
        $scope.product_id;

        // 물품 list 가져오기  product_list

        executeResults.company_list().then(function(data) {
            $scope.company_list = data;
            if($scope.company_list[0].name=="error"){
                $scope.company_list_none ='data_none';
            }
        });



        // 물품 클릭시 modal 정보 뿌리기
        $scope.insertNew = function(company_id){
            $scope.company_id = company_id;
            for(var i=0; i<$scope.company_list.length; i++){
                if(company_id == $scope.company_list[i].company_id){
                    $scope.company_name = $scope.company_list[i].company_name;
                    $scope.company_call = $scope.company_list[i].company_call;
                    $scope.leader_name = $scope.company_list[i].leader_name;
                    $scope.company_fax = $scope.company_list[i].company_fax;
                    $scope.company_class = $scope.company_list[i].company_class;
                    $scope.company_email = $scope.company_list[i].company_email;
                    $scope.company_address = $scope.company_list[i].company_address;
                    $scope.company_call = $scope.company_list[i].company_call;

                }
            }
        };

        // 물품 등록 취소 누를시 input 초기화
        $scope.insert_cancle = function(){
            $("#insert_product_name").val("");
            $("#insert_product_option").val("");
        };


        var company_realay = 0;
        // 회사 등록
        $scope.company_insert_go = function(){

            if(company_realay == 0){
                var name_cut = $("#insert_company_name").val().replace( /(^\s*)|(\s*$)/g, "" );
                var call_cut = $("#insert_company_call").val().replace( /(^\s*)|(\s*$)/g, "" );
                if(name_cut ==''){
                    alert("회사명을 입력해 주세요");
                    $("#insert_company_name").val("");
                    $("#insert_company_name").focus();
                    return;
                }
                if(call_cut ==''){
                    alert("연락처를 입력해 주세요");
                    $("#insert_company_call").val("");
                    $("#insert_company_call").focus();
                    return;
                }

                // 중복 검사를 위해 한번더 list를 불러 온다.
                executeResults.company_list().then(function(data) {
                    $scope.company_list = data;
                    if($scope.company_list[0].name=="error"){
                        $scope.company_list_none ='data_none';
                    }else{
                        for(var i=0; i<$scope.company_list.length; i++){
                            if($scope.company_list[i].company_name == name_cut){
                                alert("\""+name_cut+"\" 거래처는 이미 등록 되었습니다");
                                return;
                            }
                        }
                    }

                    if(confirm("\""+name_cut+"\""+"\n"+"\""+call_cut+"\" 으로 거래처를 수정 하시겠습니까")){
                        company_realay = 1;
                        executeResults.company_insert(name_cut,call_cut).then(function(data) {
                            $scope.company_insert = data;

                            // 회사 목록 다시 list
                            executeResults.company_list().then(function(data) {
                                $scope.company_list = data;
                                if($scope.company_list[0].name=="error"){
                                    $scope.company_list_none ='data_none';
                                }

                                $("#company_insert_cancle").trigger('click');
                            });

                        });
                    }
                });
            }
        };



        // 물품 등록
        $scope.product_update_go = function(){

            var name_cut = $("#company_name2").val().replace( /(^\s*)|(\s*$)/g, "" );
            var call_cut = $("#company_call2").val().replace( /(^\s*)|(\s*$)/g, "" );
            if(name_cut ==''){
                alert("회사명을 입력해 주세요");
                $("#company_name2").val("");
                $("#company_name2").focus();
                return;
            }
            if(call_cut ==''){
                alert("연락처를 입력해 주세요");
                $("#company_call2").val("");
                $("#company_call2").focus();
                return;
            }


            // 중복 검사를 위해 한번더 list를 불러 온다.
            executeResults.company_update_list($scope.company_id).then(function(data) {
                $scope.company_update_list = data;
                if($scope.company_update_list[0].name=="error"){
                    $scope.company_update_list_none ='data_none';
                }else{
                    for(var i=0; i<$scope.company_update_list.length; i++){
                        if($scope.company_update_list[i].company_name == name_cut){
                            alert("\""+name_cut+"\" 거래처는 이미 등록 되었습니다");
                            return;
                        }
                    }
                }

                if(confirm("\""+name_cut+"\"으로 거래처를 등록 하시겠습니까")){
                    executeResults.company_update(name_cut,call_cut,$scope.leader_name,$scope.company_fax,
                        $scope.company_class,$scope.company_email,$scope.company_address,$scope.company_id).then(function(data) {
                        $scope.company_update = data;

                        location.reload();

                    });
                }
            });
        };




        $scope.product_delete_go = function(){
            if(confirm("\""+$scope.company_name+"\" 거래처를 삭제 하시겠습니까")){
                executeResults.company_delete($scope.company_id).then(function(data) {
                    $scope.company_delete = data;
                    location.reload();
                });
            }
        };

    });