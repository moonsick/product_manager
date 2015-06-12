'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    execute = require('./controllers/execute')
var methodOverride = require('method-override');
var multipart = require('connect-multiparty');
var bodyParser = require('body-parser');
var xlsx = require('node-xlsx');
var fs = require('fs');


/**
 * Application routes
 */
module.exports = function (app) {

    app.use(bodyParser());
    app.use(multipart());
    app.use(methodOverride());




    //로그인 list 출력 member_list
    app.route('/member_list').post(execute.member_list);

    // 물품 list 가져오기  product_list
    app.route('/product_list').post(execute.product_list);

    // 회사 목록 list   company_list
    app.route('/company_list').post(execute.company_list);


    // 물품 id를 가지고 이름 가져오기  product_one_list
    app.route('/product_one_list').post(execute.product_one_list);


    //물픔 등록      product_insert
    app.route('/product_insert').post(execute.product_insert);


    // 입고 입력 시작 stock_insert_go
    app.route('/stock_insert_go').post(execute.stock_insert_go);


    // 거래처 등록 company_insert
    app.route('/company_insert').post(execute.company_insert);


    // 출고 입력 시작 release_insert_go
    app.route('/release_insert_go').post(execute.release_insert_go);


    // 물품의 입고 정보 list product_in_info_list
    app.route('/product_in_info_list').post(execute.product_in_info_list);

    // 물품의 출고 정보 list product_out_info_list
    app.route('/product_out_info_list').post(execute.product_out_info_list);



    // 금일 물품별 main list day_move_list
    app.route('/day_move_list').post(execute.day_move_list);


    // 금일 물품별 main list day_move_sub_list
    app.route('/day_move_sub_list').post(execute.day_move_sub_list);


    // 금일 물품별 main list day_move_out_list
    app.route('/day_move_out_list').post(execute.day_move_out_list);


    // 금일 물품별 main list day_move_sub_list
    app.route('/day_move_out_sub_list').post(execute.day_move_out_sub_list);





    // 금일 물품별 main list day_move_company_list
    app.route('/day_move_company_list').post(execute.day_move_company_list);


    // 금일 물품별 main list day_move_company_sub_list
    app.route('/day_move_company_sub_list').post(execute.day_move_company_sub_list);





    // 금일 물품별 main list day_move_company_out_list
    app.route('/day_move_company_out_list').post(execute.day_move_company_out_list);


    // 금일 물품별 main list day_move_company_out_sub_list
    app.route('/day_move_company_out_sub_list').post(execute.day_move_company_out_sub_list);


    // 공지사항 리스트 notice_list
    app.route('/notice_list').post(execute.notice_list);


    // 공지사항 입력 notice_insert
    app.route('/notice_insert').post(execute.notice_insert);


    // 공지사항 new 인지
    app.route('/notice_new').post(execute.notice_new);


    // 물품 정보 수정  product_update
    app.route('/product_update').post(execute.product_update);

    // 물품 삭제 product_delete
    app.route('/product_delete').post(execute.product_delete);

    // 거래처 중복 확인  company_update_list
    app.route('/company_update_list').post(execute.company_update_list);

    // 거래처 수정 company_update
    app.route('/company_update').post(execute.company_update);

    //거래처 삭제 company_delete
    app.route('/company_delete').post(execute.company_delete);






























































































    app.post('/lectureDown', execute.test1);





//  참석 여부 승낙
    app.route('/yes_attend')
        .post(execute.yes_attend);

//  참석 여부 거절
    app.route('/no_attend')
        .post(execute.no_attend);
































    app.route('/json1').get(index.json1);
    //app.route('/json2').get(index.json2);


    app.route('/test')
        .post(execute.updatefortest);

    //이용기관 관련
    app.route('/getUseComp')
        .post(execute.getUseComp);
    //이용기관 관련 - 선택한 기관별 타겟 명 추출
    app.route('/getOrgTarget')
        .post(execute.getOrgTarget);

    app.route('/insertOrgReg')
        .post(execute.insertOrgReg);

    app.route('/insertUseComp')
        .post(execute.insertUseComp);

    app.route('/updateUseComp')
        .post(execute.updateUseComp);

    //수신자 업데이트

    app.route('/deleteUseComp')
        .post(execute.deleteUseComp);

    //소스등록 관련
    app.route('/getSource')
        .post(execute.getSource);

    app.route('/insertSource')
        .post(execute.insertSource);

    app.route('/deleteSource')
        .post(execute.deleteSource);

    //타겟등록 관련
    app.route('/getTarget')
        .post(execute.getTarget);

    app.route('/insertTarget')
        .post(execute.insertTarget);

    app.route('/updateTarget')
        .post(execute.updateTarget);

    app.route('/deleteTarget')
        .post(execute.deleteTarget);

    //담당등록 관련
    app.route('/getCompMem')
        .post(execute.getCompMem);
    app.route('/getDept')
        .post(execute.getDept);
    app.route('/getPosList')
        .post(execute.getPosList);
    app.route('/insertDept')
        .post(execute.insertDept);
    app.route('/insertRole')
        .post(execute.insertRole);
    app.route('/getDepOne')
        .post(execute.getDeptOne);
    app.route('/getRoleOne')
        .post(execute.getRoleOne);
    app.route('/insertCompMem')
        .post(execute.insertCompMem);
    app.route('/updateCompMem')
        .post(execute.updateCompMem);
    app.route('/deleteCompMem')
        .post(execute.deleteCompMem);

    //측정치 누적 현황 리스트
    app.route('/getLogList')
        .post(execute.getLogList);
    app.route('/deleteLog')
        .post(execute.deleteLog);
    //임계치 기준정보관리 - 임계치 수신자등록 - 명단
    app.route('/getReceiverNameList')
        .post(execute.getReceiverNameList);
    //시스템등록 관련
    app.route('/getSysList')
        .post(execute.getSysList);

    app.route('/insertSysReg')
        .post(execute.insertSysReg);
    app.route('/updateSysReg')
        .post(execute.updateSysReg);
    app.route('/deleteSysReg')
        .post(execute.deleteSysReg);

    //수신자 등록
    app.route('/getUserList')
        .post(execute.getUserList);
    //액션코멘트 등록 관련
    app.route('/actList')
        .post(execute.actList);
    app.route('/actedList')
        .post(execute.actedList);
    app.route('/actData')
        .post(execute.actData);
    app.route('/insertAct')
        .post(execute.insertAct);
    app.route('/updateAct')
        .post(execute.updateAct);
    app.route('/deleteAct')
        .post(execute.deleteAct);


    app.post('/uploadFile', execute.insertF);
    //임계치 처리 현황 - 임계치 처리 현황리스트 get
    app.route('/getProcessList')
        .post(execute.getProcessList);
    //임계치 처리 현황 - 발생항목 코멘트 처리 내역 get
    app.route('/getActionList')
        .post(execute.getActionList);

    //임계치 관리항목 등록
    app.route('/insertStanThresReg')
        .post(execute.insertStanThresReg);
    //임계치 관리항목 상제
    app.route('/deleteStanThresReg')
        .post(execute.deleteStanThresReg);

    //임계치 class 삭제
    app.route('/deleteStanQualReg')
        .post(execute.deleteStanQualReg);

    //품질등급기준등록 삭제
    app.route('/selectReceiver')
        .post(execute.selectReceiver);

    //품질등급기준등록 삭제
    app.route('/deleteStanReg')
        .post(execute.deleteStanReg);

    //품질등급기준
    app.route('/updateStanReg')
        .post(execute.updateStanReg);


    //임계치 Addressee 리스트트
    app.route('/getAddresseeList')
        .post(execute.getAddresseeList);
    //임계치 품질등급 등록
    app.route('/insertStanQualReg')
        .post(execute.insertStanQualReg);

    //임계치 기준정보 관리 - 임계치 품질 액션 등록 - 액션 리스트 get
    app.route('/getActionNameList')
        .post(execute.getActionNameList);

    //임계치 기준정보 관리 -임계치 품질 상세 기준 항목 -저장 -insertDetail
    app.route('/insertDetail')
        .post(execute.insertDetail);
    //액션정보 등록
    app.route('/insertAction')
        .post(execute.insertAction);
    //임계치 품질 등록
    app.route('/insertStanReg')
        .post(execute.insertStanReg);

    //임계치 품질 액션등록
    app.route('/updateActReg')
        .post(execute.updateActReg);
    //임계치 품질 액션삭제
    app.route('/deleteActionReg')
        .post(execute.deleteActionReg);
    //임계치 발생 현황
    app.route('/getOccurList')
        .post(execute.getOccurList);
    app.route('/getOccurDetailList')
        .post(execute.getOccurDetailList);
    //임계치 차트 수치
    app.route('/getOccurQltCnt')
        .post(execute.getOccurQltCnt);


    //임계치 기준정보 관리-임계치 품질 등록-임계치 관리항목 리스트
    app.route('/getThresHoldList')
        .post(execute.getThresHoldList);
    //임계치 기준정보 관리-임계치 품질 등록-임계치 품질등급 리스트
    app.route('/getQualList')
        .post(execute.getQualList);

    app.route('/getStandardReg_ACT')
        .post(execute.getStandardReg_ACT);

    //임계치 기준정보 관리-임계치 품질 등록
    app.route('/getStandardReg')
        .post(execute.getStandardReg);
    //임계치 기준정보 관리 임계치 품질 액션 등록
    app.route('/getActionReg')
        .post(execute.getActionReg);
    //임계치 기준정보 관리 임계치 품질 액션 등록,수정,삭제 현황
    app.route('/getActionRegList')
        .post(execute.getActionRegList);
    //임계치 기준정보 관리 임계치 상세 기준 항목
    app.route('/getDetailReg')
        .post(execute.getDetailReg);

    app.route('/insertPosReg')
        .post(execute.insertPosReg);
    app.route('/deletePosReg')
        .post(execute.deletePosReg);


    //이용기관담당 관련
    app.route('/getCompMem')
        .post(execute.getCompMem);

    app.route('/*')
        .get(index.index);

    // Server API Routes
    app.route('/api/awesomeThings')
        .get(api.awesomeThings);

    app.route('/partials/*')
        .get(index.partials);


    //테스트용 값 입력
    app.route('/insertTestPram')
        .post(execute.insertTestPram);

    //테스트용 내부 로직 실행
    app.route('/logicTestPram')
        .post(execute.logicTestPram);



    //장바구니 카트 리스트
    app.route('/getCartList')
        .post(execute.getCartList);


    // All undefined api routes should return a 404
    app.route('/api/*')
        .get(function (req, res) {
            res.send(404);
        });

};
