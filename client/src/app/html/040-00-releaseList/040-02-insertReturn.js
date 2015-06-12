angular.module('eventApp')
    .controller('insertReturn2', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


        var url = window.location;
        var product_id = [];
        product_id = String(url).split('?');


        var product_count = 0;   // 출고수량 플래그 함수 1 일때 동작
        var product_cost = 0;   // 출고단가 플래그 함수 1 일때 동작

        $scope.company_name ="--거래처--";
        $scope.product_cost = "클릭해 주세요";
        $scope.product_count = "클릭해 주세요";


        $scope.stockList_go = function(){
            window.location = "/releaseList"
        }


        // 회사 list 보이기 감추기 기능
        $scope.company_select = function(mod){
            $scope.company_list_show = mod;
        };



        // 물품 id를 가지고 이름 가져오기  product_one_list
        executeResults.product_one_list(product_id[1]).then(function(data) {
            $scope.product_one_list = data;
            $scope.product_name = $scope.product_one_list[0].product_name +' '+ $scope.product_one_list[0].product_option;
        });



        // 회사 목록 list   company_list
        executeResults.company_list().then(function(data) {
            $scope.company_list = data;
            if($scope.company_list[0].name=="error"){
                $scope.company_list_none ='data_none';
            }
        });


        // 회사 목록 선택
        $scope.company_click = function(id,name){
            $("#company_id").val(id);
            $scope.company_name = name;
            $scope.company_list_show = 'no';
        };




        // 숫자 입력
        $scope.number_click = function(num){
            if(product_count == 1){
                if($scope.product_count == ''){
                    if(num !==0){
                        $scope.product_count = $scope.product_count + num;
                    }
                }else{
                    $scope.product_count = $scope.product_count + num;
                }
            }
            if(product_cost == 1){
                if($scope.product_cost == ''){
                    if(num !==0){
                        $scope.product_cost = $scope.product_cost + num;
                    }
                }else{
                    $scope.product_cost = $scope.product_cost + num;
                }
            }
        };


        // 출고수량 출고단가 플레그
        $scope.product_count_click = function(){
            product_count = 1;
            product_cost = 0;
            $scope.count_click = 0;
            $scope.cost_click = 1;
            $scope.product_count = '';
        };
        $scope.product_cost_click = function(){
            product_count = 0;
            product_cost = 1;
            $scope.count_click = 1;
            $scope.cost_click = 0;
            $scope.product_cost = '';
        };





        // 입력
        $scope.product_in_insert = function(){
            if($scope.company_name == '--거래처--'){
                alert("거래처를 선택해 주세요");
                return;
            }
            if($scope.product_count == '클릭해 주세요' || $scope.product_count == ''){
                alert("출고 수량을 입력해 주세요");
                return;
            }

            // 데이터 갱신하여 갯수를 가져오고 비교 한다.
            executeResults.product_one_list(product_id[1]).then(function(data) {
                $scope.product_one_list = data;
                if(parseInt($scope.product_count) > parseInt($scope.product_one_list[0].product_count)){
                    alert("입고 수량보다 출고 수량이 많습니다\n\n현재 수량 : "+$scope.product_one_list[0].product_count+"\n출고 수량 : "+$scope.product_count);
                    return;
                }



                if($scope.product_cost == '클릭해 주세요' || $scope.product_cost == ''){
                    alert("출고 단가를 입력해 주세요");
                    return;
                }
                // 입력 마지막 정보 show
                $scope.stock_insert_view='true';
                $scope.stock_insert_background = 'true';

                $scope.product_cost2 = $.number($scope.product_cost);
            });

        };



        var insert_realay = 0;
        // 출고 입력 시작 release_insert_go
        $scope.stock_insert_go = function(){
            if(insert_realay == 0){
                insert_realay = 1;
                executeResults.release_insert_go(product_id[1],$("#company_id").val(),sessionStorage.getItem('member_id'),
                    $scope.product_count, $scope.product_cost).then(function(data) {
                        $scope.stock_insert_go = data;
                        $scope.stock_insert_background = 'true';
                        $scope.stock_insert_view = 'success';
                    });
            }
        };


        // 입력 정보 취소
        $scope.stock_insert_cancle = function(){
            $scope.stock_insert_background = 'false';
            $scope.stock_insert_view='false';
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

                    if(confirm("\""+name_cut+"\""+"\n"+"\""+call_cut+"\" 으로 거래처를 등록 하시겠습니까")){
                        company_realay = 1;
                        executeResults.company_insert(name_cut,call_cut).then(function(data) {
                            $scope.company_insert = data;
                            console.log($scope.company_insert);

                            // 회사 목록 다시 list
                            executeResults.company_list().then(function(data) {
                                $scope.company_list = data;
                                if($scope.company_list[0].name=="error"){
                                    $scope.company_list_none ='data_none';
                                }

                                $("#company_insert_cancle").trigger('click');
                                $scope.company_click($scope.company_insert[0].company_id,$scope.company_insert[0].company_name);
                                company_realay = 0;

                            });

                        });
                    }
                });
            }





        };





        $scope.product_in_insert_cancle = function(){
            window.location = "/";
        }



    });