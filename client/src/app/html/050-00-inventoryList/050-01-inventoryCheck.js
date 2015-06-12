angular.module('eventApp')
    .controller('inventoryCheck', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


        var url = window.location;
        var product_id = [];
        product_id = String(url).split('?');



        // 물품 id를 가지고 정보1개 가져오기  product_one_list
        executeResults.product_one_list(product_id[1]).then(function(data) {
            $scope.product_one_list = data;
            $scope.product_name = $scope.product_one_list[0].product_name +' '+ $scope.product_one_list[0].product_option;
        });


       // 물품의 입고 정보 list product_in_info_list
        executeResults.product_in_info_list(product_id[1]).then(function(data) {
            $scope.product_in_info_list = data;
        });


        // 물품의 풀고 정보 list product_in_info_list
        executeResults.product_out_info_list(product_id[1]).then(function(data) {
            $scope.product_out_info_list = data;
        });


        $scope.list_click = function (mod, id) {
            if (mod == 'in') {
                $scope.mod = '입고';
                for (var i = 0; i < $scope.product_in_info_list.length; i++) {
                    if ($scope.product_in_info_list[i].product_move_info_id == id) {
                        $scope.company_name = $scope.product_in_info_list[i].company_name;
                        $scope.insert_date = $scope.product_in_info_list[i].insert_date.slice(0, 10);
                        $scope.product_count = $scope.product_in_info_list[i].move_count;
                        $scope.product_cost = $.number($scope.product_in_info_list[i].product_cost);
                        $scope.total_cost = $.number($scope.product_in_info_list[i].product_cost * $scope.product_in_info_list[i].move_count);
                        $scope.member_name = $scope.product_in_info_list[i].member_name;
                    }
                };
            }
            if (mod == 'out') {
                $scope.mod = '출고';
                for (var i = 0; i < $scope.product_out_info_list.length; i++) {
                    if ($scope.product_out_info_list[i].product_move_info_id == id) {
                        $scope.company_name = $scope.product_out_info_list[i].company_name;
                        $scope.insert_date = $scope.product_out_info_list[i].insert_date.slice(0, 10);
                        $scope.product_count = $scope.product_out_info_list[i].move_count;
                        $scope.product_cost = $.number($scope.product_out_info_list[i].product_cost);
                        $scope.total_cost = $.number($scope.product_out_info_list[i].product_cost * $scope.product_out_info_list[i].move_count);
                        $scope.member_name = $scope.product_out_info_list[i].member_name;
                    }
                };
            }


        };


    });