angular.module('eventApp')
    .controller('inoutHistory03', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $scope.total_count = [];
        $scope.total_cost = [];

        $scope.total_count1 = [];
        $scope.total_cost2 = [];

        // 금일 물품별 main list day_move_company_list
        executeResults.day_move_company_list().then(function (data) {
            $scope.day_move_list = data;
        });

        // 금일 물품별 sub list day_move_company_sub_list
        executeResults.day_move_company_sub_list().then(function (data) {
            $scope.day_move_sub_list = data;
            if ($scope.day_move_sub_list[0].name !== "error") {

                for (var i = 0; i < $scope.day_move_sub_list.length; i++) {
                    $scope.day_move_sub_list[i].total_name = $scope.day_move_sub_list[i].product_name + " " + $scope.day_move_sub_list[i].product_option;
                };


                for (var i = 0; i < $scope.day_move_list.length; i++) {
                    $scope.total_count[i] = 0;
                    $scope.total_cost[i] = 0;
                    for (var j = 0; j < $scope.day_move_sub_list.length; j++) {
                        if($scope.day_move_list[i].company_id == $scope.day_move_sub_list[j].company_id){
                            $scope.total_count[i] = parseInt($scope.total_count[i]) +  parseInt($scope.day_move_sub_list[j].move_count);
                            $scope.total_cost[i] = parseInt($scope.total_cost[i]) +  parseInt($scope.day_move_sub_list[j].move_count*$scope.day_move_sub_list[j].product_cost);
                        }
                    }
                    $scope.total_cost[i] = $.number($scope.total_cost[i]);
                }

            }
        });


        $scope.main_click = function(id){
            $scope.total_name = $scope.day_move_list[id].total_name;
            $scope.total_count2 = $.number($scope.total_count[id]);
            $scope.total_cost2 = $.number($scope.total_cost[id]);
            $scope.avg_cost = $scope.total_cost[id]/$scope.total_count[id];
            $scope.avg_cost = Math.round($scope.avg_cost);
            $scope.avg_cost = Math.round($scope.avg_cost/10)*10;
        };

        $scope.sub_click = function(id){
            for (var j = 0; j < $scope.day_move_sub_list.length; j++) {
                if($scope.day_move_sub_list[j].product_move_info_id == id){
                    $scope.sub_total_name = $scope.day_move_sub_list[j].product_name + " "+$scope.day_move_sub_list[j].product_option;
                    $scope.sub_company_name =$scope.day_move_sub_list[j].company_name;
                    $scope.sub_insert_date=$scope.day_move_sub_list[j].insert_date.slice(0,10);
                    $scope.sub_product_count = $.number($scope.day_move_sub_list[j].move_count);
                    $scope.sub_product_cost = $.number($scope.day_move_sub_list[j].product_cost);
                    $scope.sub_product_total_cost = $.number($scope.day_move_sub_list[j].move_count * $scope.day_move_sub_list[j].product_cost);
                    $scope.sub_member_name =$scope.day_move_sub_list[j].member_name;
                }
            };
        }


        $scope.product_tab = function(num){
            if(num == 1){
                window.location ="/inoutHistory01";
            }
            if(num == 2){
                window.location ="/inoutHistory02";
            }
            if(num == 3){
                window.location = "/inoutHistory03";
            }
            if(num == 4){
                window.location = "/inoutHistory04";
            }
        }

    });