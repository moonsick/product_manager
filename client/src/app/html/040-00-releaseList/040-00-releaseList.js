angular.module('eventApp')
    .controller('releaseList_Ctr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {



        $scope.product_list = [];     // 물품 list 배열

        // 물품 list 가져오기  product_list
        executeResults.product_list().then(function(data) {
            $scope.product_list = data;
            if($scope.product_list[0].name=="error"){
                $scope.product_list_none ='data_none';
            }else{
                for(var i=0; i<$scope.product_list.length; i++){
                    $scope.product_list[i].total_name = $scope.product_list[i].product_name+' '+$scope.product_list[i].product_option
                }
            }
        });


        // 물품 클릭시 페이지 이동
        $scope.insertNew = function(product_id){
            window.location = "/insertReturn2?"+product_id
        };

        // 물품 등록 취소 누를시 input 초기화
        $scope.insert_cancle = function(){
            $("#insert_product_name").val("");
            $("#insert_product_option").val("");
        };


        var realay_count = 0;
        // 물품 등록
        $scope.product_insert_go = function(){

            if(realay_count == 0){
                var name_cut = $("#insert_product_name").val().replace( /(^\s*)|(\s*$)/g, "" );
                var option_cut = $("#insert_product_option").val().replace( /(^\s*)|(\s*$)/g, "" );
                if(name_cut ==''){
                    alert("제품명을 입력해 주세요");
                    $("#insert_product_name").val("");
                    $("#insert_product_name").focus();
                    return;
                }
                if(option_cut ==''){
                    alert("제품 옵션을 입력해 주세요");
                    $("#insert_product_option").val("");
                    $("#insert_product_option").focus();
                    return;
                }

                // 중복 검사를 위해 한번더 list를 불러 온다.
                executeResults.product_list().then(function(data) {
                    $scope.product_list = data;
                    if($scope.product_list[0].name=="error"){
                        $scope.product_list_none ='data_none';
                    }else{
                        for(var i=0; i<$scope.product_list.length; i++){
                            $scope.product_list[i].total_name = $scope.product_list[i].product_name+' '+$scope.product_list[i].product_option
                        }
                    }

                    for(var i=0; i<$scope.product_list.length; i++){
                        if($scope.product_list[i].total_name == name_cut+" "+option_cut){
                            alert("\""+name_cut+" "+option_cut+"\" 제품은 이미 등록 되었습니다");
                            return;
                        }
                    }
                    if(confirm("\""+name_cut+" "+option_cut+"\" 으로 제품을 등록 하시겠습니까")){
                        realay_count = 1;
                        executeResults.product_insert(name_cut,option_cut).then(function(data) {
                            $scope.product_insert_result = data;
                            window.location = "/insertNew?"+ $scope.product_insert_result[0].product_id
                        });
                    }
                });
            }


        };


    });