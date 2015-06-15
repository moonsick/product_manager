//로그인 list 출력 member_list
exports.member_list = "select * from member_M where isnull(is_del);";


// 물품 list 가져오기  product_list
exports.product_list = "select * from product_M where isnull(is_del) order by product_name,product_option;";


// 회사 목록 list   company_list
exports.company_list = "select * from company_M where isnull(is_del) order by company_name;";


// 물품 id를 가지고 이름 가져오기  product_one_list
exports.product_one_list = "select * from product_M where isnull(is_del) and product_id=? order by product_name,product_option;";


//물픔 등록      product_insert
exports.product_insert = "insert into product_M(product_M.product_id, product_M.product_name, product_M.product_option) " +
"select (select lpad(count(product_M.product_id)+1,7,'0') from product_M) , ? , ?;";
exports.product_last_id = "select * from product_M where product_M.product_id=(select lpad(max(product_M.product_id),7,'0') from product_M);";


// 입고 입력 시작 stock_insert_go
exports.stock_insert_go = "insert into product_move_info(product_move_info_id,product_id,company_id,member_id,move_mod,move_count,product_cost,insert_date) " +
"select (select lpad(count(product_move_info.product_move_info_id)+1,9,'0') from product_move_info),?,?,?,?,?,?,now();";
exports.product_count_update = "update product_M set product_M.product_count = product_M.product_count+? where product_M.product_id=?;";
exports.product_count_update2 = "update product_M set product_M.product_count = product_M.product_count-? where product_M.product_id=?;";
exports.product_update_next_count = "select * from product_M where product_id=?;";



// 거래처 등ㄺ company_insert
exports.company_insert = "insert into company_M(company_M.company_id, company_M.company_name, company_M.company_call) " +
"select (select lpad(count(company_M.company_id)+1,6,'0') from company_M) , ? , ?;";
exports.company_last_id = "select * from company_M where company_id = (select lpad(max(company_M.company_id),6,'0') from company_M);";





// 입고 입력 시작 release_insert_go
exports.release_insert_go = "insert into product_move_info(product_move_info_id,product_id,company_id,member_id,move_mod,move_count,product_cost,insert_date) " +
"select (select lpad(count(product_move_info.product_move_info_id)+1,9,'0') from product_move_info),?,?,?,?,?,?,now();";
exports.product_count_sub_update = "update product_M set product_M.product_count = product_M.product_count-? where product_M.product_id=?;";
exports.product_count_sub_update2 = "update product_M set product_M.product_count = product_M.product_count+? where product_M.product_id=?;";





// 물품의 입고 정보 list product_in_info_list
exports.product_in_info_list="select * from product_move_info,company_M,member_M where product_id=? and move_mod ='in' " +
"and company_M.company_id=product_move_info.company_id and product_move_info.member_id = member_M.member_id order by product_move_info.insert_date desc limit 1000;";

// 물품의 입고(반품) 정보 list product_in_return_info_list
exports.product_in_return_info_list="select * from product_move_info,company_M,member_M where product_id=? and move_mod ='in_return' " +
"and company_M.company_id=product_move_info.company_id and product_move_info.member_id = member_M.member_id order by product_move_info.insert_date desc limit 1000;";


// 물품의 출고 정보 list product_out_info_list
exports.product_out_info_list="select * from product_move_info,company_M,member_M where product_id=? and move_mod ='out' " +
"and company_M.company_id=product_move_info.company_id and product_move_info.member_id = member_M.member_id order by product_move_info.insert_date desc limit 1000;";

// 물품의 출고(반품) 정보 list product_out_return_info_list
exports.product_out_return_info_list="select * from product_move_info,company_M,member_M where product_id=? and move_mod ='out_return' " +
"and company_M.company_id=product_move_info.company_id and product_move_info.member_id = member_M.member_id order by product_move_info.insert_date desc limit 1000;";




// 금일 물품별 main list day_move_list
exports.day_move_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in' group by product_move_info.product_id order by product_M.product_name,product_M.product_option;";
// 금일 물품별 main list day_move_list_return
exports.day_move_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in_return' group by product_move_info.product_id order by product_M.product_name,product_M.product_option;";



// 금일 물품별 main list day_move_sub_list
exports.day_move_sub_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in' order by product_M.product_name,product_M.product_option;";
// 금일 물품별 main list day_move_sub_list_return
exports.day_move_sub_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in_return' order by product_M.product_name,product_M.product_option;";



// 금일 물품별 main list day_move_out_list
exports.day_move_out_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out' group by product_move_info.product_id order by product_M.product_name,product_M.product_option;";
// 금일 물품별 main list day_move_out_list_return
exports.day_move_out_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out_return' group by product_move_info.product_id order by product_M.product_name,product_M.product_option;";



// 금일 물품별 main list day_move_out_sub_list
exports.day_move_out_sub_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out' order by product_M.product_name,product_M.product_option;";
// 금일 물품별 main list day_move_out_sub_list_return
exports.day_move_out_sub_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out_return' order by product_M.product_name,product_M.product_option;";




// 금일 물품별 main list day_move_company_list
exports.day_move_company_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in' group by product_move_info.company_id order by company_M.company_name;";
// 금일 물품별 main list day_move_company_list_return
exports.day_move_company_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in_return' group by product_move_info.company_id order by company_M.company_name;";




// 금일 물품별 main list day_move_company_sub_list
exports.day_move_company_sub_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in' order by company_M.company_name;";
// 금일 물품별 main list day_move_company_sub_list_return
exports.day_move_company_sub_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='in_return' order by company_M.company_name;";





// 금일 물품별 main list day_move_company_out_list
exports.day_move_company_out_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out' group by product_move_info.company_id order by company_M.company_name;";
// 금일 물품별 main list day_move_company_out_list_return
exports.day_move_company_out_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out_return' group by product_move_info.company_id order by company_M.company_name;";




// 금일 물품별 main list day_move_company_out_sub_list
exports.day_move_company_out_sub_list = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out' order by company_M.company_name;";
// 금일 물품별 main list day_move_company_out_sub_list_return
exports.day_move_company_out_sub_list_return = "select * from product_move_info,company_M,product_M,member_M where product_move_info.insert_date> date(now()) " +
"and company_M.company_id=product_move_info.company_id and product_move_info.product_id=product_M.product_id " +
"and product_move_info.member_id=member_M.member_id and product_move_info.move_mod='out_return' order by company_M.company_name;";




// 공지사항 리스트 notice_list
exports.notice_list = "select * from notice where isnull(is_del) order by insert_date desc;";


// 공지사항 입력 notice_insert
exports.notice_insert = "insert into notice(notice.notice_id,notice.member_id,notice.notice_commend,notice.insert_date) " +
"select (select lpad(count(notice.notice_id)+1,7,'0') from notice),?,?,now();";




// 공지사항 new 인지  notice_new
exports.notice_new = "select * from notice where notice.insert_date> date(now());";


// 물품 정보 수정  product_update
exports.product_update = "update product_M set product_name = ?, product_option=? where product_id = ?;";

// 물품 삭제  product_delete
exports.product_delete = "update product_M set is_del='delete' where product_id = ?;";


// 거래처 중복 확인  company_update_list
exports.company_update_list = "select * from company_M where company_id != ? and isnull(is_del);";

// 거래처 수정 company_update
exports.company_update = "update company_M set company_name=?, company_call=?, leader_name=?, company_fax=? ," +
"company_class=? , company_email=? , company_address=? where company_id=?;";


//거래처 삭제 company_delete
exports.company_delete = "update company_M set is_del='delete' where company_id = ?;";












// 로그인 쿼리
exports.login_go="select user_D.*,event_M.event_name from user_D,event_M " +
"where user_D.NFC_LID=? and event_M.event_ID = user_D.event_ID " +
"and isnull(event_M.is_ended) and isnull(event_M.is_del) and isnull(user_D.is_del);";


// 이벤트 코맨트 출력 eventComment
exports.eventComment="select * from event_M where event_ID =? and isnull(is_del)";


// 강의 리스트 쿼리
exports.lecture_Order="select * from event_schedule_D " +
"inner join user_D " +
"on event_schedule_D.user_ID = user_D.user_ID " +
"and event_schedule_D.event_ID=user_D.event_ID " +
"and event_schedule_D.user_class_ID=user_D.user_class_ID " +
"where isnull(event_schedule_D.is_del) " +
"and isnull(user_D.is_del) " +
"and event_schedule_D.event_ID=? " +
"order by schedule_seq";

// 강의 질문 쿼리
exports.insert_qna="insert into QNA_D select ?,?,?,?, " +
"(select (count(QNA_D.QNA_ID)+1) from QNA_D where event_ID=? and user_class_ID=? and user_ID=? and schedule_ID=?),?,?,?,null";



// 강의 질문 list
exports.list_qna="select * from QNA_D " +
"inner join event_schedule_D " +
"on QNA_D.event_ID = event_schedule_D.event_ID " +
"and QNA_D.user_class_ID = event_schedule_D.user_class_ID " +
"and QNA_D.user_ID = event_schedule_D.user_ID " +
"and QNA_D.schedule_ID = event_schedule_D.schedule_ID " +
"where QNA_D.event_ID=? and  QNA_D.user_class_ID=? and  QNA_D.user_ID=? and isnull(QNA_D.is_del) " +
"order by QNA_D.schedule_ID , QNA_D.QNA_ID desc";




// 강의 질문 detail
exports.detail_qna="select * from QNA_D where event_ID=? and user_class_ID=? and user_ID=? and schedule_ID=? and QNA_ID=? and isnull(is_del)";


//강의 자료 list
exports.lectureList="select * from lecture_material where isnull(is_del) and event_ID=? order by lecture_ID desc";


//강의 자료 detail
exports.detail_lecture="select * from lecture_material where event_ID=? and lecture_ID=? and isnull(is_del)";


//주변 정보 list
exports.turisme="select * from tourisme_info_D where event_ID=? and isnull(is_del) order by info_ID desc";


//인사말 그림 출력
exports.information="select * from event_info_D where event_ID=?";


// top 움직이는 공지사항
exports.notice_D="select * from notice_D where event_ID=? and isnull(is_del) order by notice_ID desc limit 1";



//  참석 여부 승낙
exports.yes_attend = "update user_D set user_D.is_attend = '1' , user_D.is_infoAccept = '1' "  +
"where user_D.NFC_LID=? and user_D.event_ID=? and isnull(user_D.is_del);";
//  참석 여부 승낙
exports.no_attend = "update user_D set user_D.is_attend = '2' " +
"where user_D.NFC_LID=? and user_D.event_ID=? and isnull(user_D.is_del);";




































//임계치 테스트용 요청
exports.updatefortest = "set @rev_seq = (select lpad(rev_seq + 1, 7,'0') from d_org_thr_rev order by rev_seq desc limit 1) COLLATE utf8_unicode_ci; " +
"insert into d_org_thr_rev values(?,?,?,?,@rev_seq,?,?,?,?,?,now(),?);";

//이용자등록-이용기관등록 리스트 획득
exports.getUseComp = "select * from m_organization where is_delete is null order by org_code;";

//이용자등록-이용기관등록 기관추가
exports.insertUseComp = "set @org_code = (select lpad(org_code + 1, 5,'0') from m_organization order by org_code desc limit 1) COLLATE utf8_unicode_ci; " +
"insert into m_organization values(@org_code,null,?,?,?,?,?,?,null);";


//이용자등록-이용기관등록 기관수정
exports.updateUseComp = "update t_m_organization set org_name=?, city_name=?, addr_code=?, org_tel=?, org_fax=?, notice=? where org_code=?;";
//이용자등록-이용기관등록 기관삭제
exports.deleteUseComp = "update m_organization set is_delete='y' where org_code=?;";


//이용자등록-소스등록 소스리스트 획득
//exports.getSource = 'select m.org_code, m.org_name, s.targetA_code from m_organization m, m_organization_source s where m.org_code=s.org_code and m.is_delete is null and s.is_delete is null;';
exports.getSource = "SELECT  m_organization.org_code, m_organization.org_name, m_organization_source.targetA_code, m_organization.is_delete " +
"FROM     m_organization INNER JOIN " +
"m_organization_source ON m_organization.org_code = m_organization_source.org_code " +
"where isnull(m_organization.is_delete)";

//이용자등록-소스등록 소스삽입
exports.insertSource = 'insert into  m_organization_source values(?,?,null);';
//이용자등록-소스등록 소스삭제
exports.deleteSource = "update m_organization_source set is_delete='y' where source_code=?";

exports.deleteStanReg = "update  d_threshold_detail set is_delete='y' where thrs_item_code=? and qlt_code=? and item =?";

//이용자등록-타겟등록 타겟리스트 획득
//exports.getTarget = 'select m.org_code, m.org_name, t.targetB_code, t.targetB_name, t.targetB_notice from t_m_organization m, t_d_target t where m.org_code=t.org_code and m.is_delete is null and t.is_delete is null;';
exports.getTarget = " SELECT  m_organization.org_name, m_organization.org_code, m_field.field_name, m_field.field_code " +
"FROM     m_field INNER JOIN " +
"m_organization ON m_field.org_code = m_organization.org_code " +
"where isnull(m_field.is_delete);";
//이용자등록-타겟등록 타겟삽입
//exports.insertTarget ='insert into m_field values(?,?,?,?,null);';
exports.insertTarget = "set @rev_seq = (select lpad(field_code + 1, 5,'0') from m_field order by field_code desc limit 1) COLLATE utf8_unicode_ci; " +
"insert into m_field values(?,?,?,41250,null,null,null,null);";

//이용자등록-타겟등록 타겟삭제
exports.deleteTarget = "update  m_field set is_delete='y' where field_code=?";
//이용자등록-타겟등록 타겟수정
exports.updateTarget = "update  m_field set org_code=?, field_name=?, target_notice=? where field_code=?;";


//이용자등록-담당등록 리스트 획득
exports.getCompMem = "select m_organization.org_name , m_member.*, c_member_position.pos_name " +
"from m_member " +
"inner join m_organization on m_member.org_code=m_organization.org_code " +
"inner join c_member_position on m_member.pos_code=c_member_position.pos_code " +
"where isnull(m_member.is_delete); ";


exports.insertCompMem = "set @check_member_seq=(select lpad(count(*)+1 , 5 ,'0' )from m_member);" +
"insert into m_member(org_code,member_id,member_name,dept,pos_code,tel,email,passwd,notice) values('1000',@check_member_seq,?,?,?,?,?,?,?)";
//이용자등록-담당등록 담당삽입
/*exports.insertCompMem = "set @mem_code = (select lpad(mem_code + 1, 5,'0') from t_m_orgMember order by mem_code desc limit 1) COLLATE utf8_unicode_ci;" +
 " insert into t_m_orgMember values(@mem_code,?,?,?,?,?,?,?,?,?,null);";*/


//이용자등록-담당등록 담당삭제
/*exports.deleteCompMem = "update m_member set is_delete='y' where member_id=?; " +
 "update m_addressee "+
 "set m_addressee.is_delete = 'y' "+
 "where m_addressee.member_id=?; ";*/

//이용자등록-담당등록 담당수정
exports.updateCompMem = "update m_member set org_code=?, member_name=?, dept=?,pos_code=?,tel=?,email=?, passwd=?,notice=? where member_id=?;";

//이용자등록-담당등록 담당삽입
/*exports.insertCompMem = "set @mem_code = (select lpad(mem_code + 1, 5,'0') from t_m_orgMember order by mem_code desc limit 1) COLLATE utf8_unicode_ci;" +
 " insert into t_m_orgMember values(@mem_code,?,?,?,?,?,?,?,?,?,null);";*/
//이용자등록-담당등록 담당삭제
exports.deleteCompMem = "update m_member set is_delete='y' where member_id=?; " +
"update m_addressee " +
"set m_addressee.is_delete = 'y' " +
"where m_addressee.member_id=?; ";

/*exports.insertAct = "set @check_seq = (select count(d_action_comment.cmt_seq)+1 "+
 "from d_action_comment "+
 "where d_action_comment.thrs_item_code = :thrs_item_code "+
 "and d_action_comment.qlt_code = :qlt_code "+
 "and d_action_comment.action_code=:action_code) ;" +
 "insert into d_action_comment values( "+
 ":thrs_item_code,:qlt_code,:action_code,@check_seq,null,null,:cmt_text,null); ";*/
//임계치 수신자 등록
exports.insertReceiver = "set @check_address_seq=(select lpad(count(*)+1 , 2 ,'0' )from m_addressee where thrs_item_code=:thrs_item_code and qlt_code=:qlt_code and action_code=:action_code);" +
"insert into m_addressee values(:thrs_item_code,:qlt_code,:action_code,@check_address_seq,:org_code,:member_id,null,null);";

exports.updateReceiver = "update m_addressee set is_delete=:is_delete where " +
"thrs_item_code=:thrs_item_code and qlt_code=:qlt_code and action_code=:action_code and member_id=:member_id ";

exports.selectReceiver = "select * from m_addressee where" +
" thrs_item_code=:thrs_item_code and qlt_code=:qlt_code and action_code=:action_code and member_id=:member_id  ";

// 부서 획득
exports.getDeptList = "select m_member.dept from m_member;";
// 직위 획득
exports.getPosList = "select * from c_member_position where isnull(is_delete); ";

exports.insertPosReg="set @pos_code= (SELECT lpad(count(c_member_position.pos_code) , 2 ,'0') from c_member_position);"+
  "insert into c_member_position values(@pos_code,?,null)";
exports.deletePosReg="update c_member_position set is_delete='y' where pos_code=?;";
// 부서 등록
exports.insertDept = "set @dep_code = (select lpad(dep_code + 1, 2,'0') from t_c_dep order by dep_code desc limit 1) COLLATE utf8_unicode_ci;" +
"insert into t_c_dep values(@dep_code,?);";
// 직위 등록

exports.insertRole = "set @role_code = (select lpad(role_code + 1, 2,'0') from t_c_role order by role_code desc limit 1) COLLATE utf8_unicode_ci;" +
"insert into t_c_role values(@role_code,?);";
// 부서 한개 획득
exports.getDeptOne = "select * from t_c_dep where dep_name=?;";
// 직위 한개 획득
exports.getRoleOne = "select * from t_c_role where role_name=?;";


//"update t_d_system set org_code=?,sys_name=?,sys_notice=? where sys_code=?";


//이용기관시스템등록 리스트 획득
//exports.getSysList = 'select m.org_name, s.* from t_m_organization m, t_d_system s where m.org_code=s.org_code and s.is_delete is null and m.is_delete is null;';
exports.getSysList = "select * from m_system where isnull(is_delete) and m_system.system_code!='EEEE';";

//이용기관시스템등록 시스템등록
//exports.insertSys = "set @sys_code = (select lpad(sys_code + 1, 2,'0') from m_system order by sys_code desc limit 1) COLLATE utf8_unicode_ci;" +
//    " insert into m_system values(@sys_code,?,?,?,null);";
exports.insertSysReg = "set @system_code = (select lpad(count(system_code) , 4,'0') from m_system order by system_code desc limit 1); " +
"INSERT INTO m_system VALUES (@system_code,?,null,null);";

exports.getOrgTarget = "";
//이용기관시스템등록 시스템업데이트
exports.updateSysReg = "update m_system set system_name=? where system_code=?";
//이용기관시스템등록 시스템삭제
exports.deleteSysReg = "update m_system set is_delete='y' where system_code=?;";

//액션코멘트관리 등록현황 획득
exports.actList = " select * ,c_threshold_item.thrs_item_name , c_quality_class.qlt_name , c_action.action_name " +
"from m_threshold_action inner join c_threshold_item on m_threshold_action.thrs_item_code=c_threshold_item.thrs_item_code " +
"inner join c_quality_class on m_threshold_action.qlt_code=c_quality_class.qlt_code " +
"inner join c_action on m_threshold_action.action_code = c_action.action_code " +
"where isnull(m_threshold_action.is_delete) " +
"order by m_threshold_action.thrs_item_code , m_threshold_action.qlt_code , m_threshold_action.action_code;  ";

exports.actedList = "select * , c_threshold_item.thrs_item_name m,c_quality_class.qlt_name,c_action.action_name,d_action_comment.cmt_text " +
"from d_action_comment inner join c_threshold_item on d_action_comment.thrs_item_code=c_threshold_item.thrs_item_code " +
"inner join c_quality_class on d_action_comment.qlt_code=c_quality_class.qlt_code " +
"inner join c_action on d_action_comment.action_code = c_action.action_code " +
"where isnull(d_action_comment.is_delete) " +
"order by d_action_comment.thrs_item_code , d_action_comment.qlt_code , d_action_comment.action_code; ";


exports.actData = "select cmt_type from d_action_comment group by cmt_type;";


exports.check_cmt = "select * from d_action_comment where thrs_item_code=:thrs_item_code and qlt_code=:qlt_code and action_code=:action_code and is_delete=null";

//액션코멘트 등록
exports.insertAct = "set @check_seq = (select count(d_action_comment.cmt_seq)+1 " +
"from d_action_comment " +
"where d_action_comment.thrs_item_code = :thrs_item_code " +
"and d_action_comment.qlt_code = :qlt_code " +
"and d_action_comment.action_code=:action_code) ;" +
"insert into d_action_comment values( " +
":thrs_item_code,:qlt_code,:action_code,@check_seq,:cmt_type,:cmt_text,null); ";
//액션 등록
exports.insertAction = "set @actMaxCode = (SELECT count(c_action.action_code)+1 from c_action) ; "
+ 'insert into c_action values(@actMaxCode,?,null)';
//액션코멘트 업뎃
exports.updateAct = "update d_action_comment set cmt_text=:cmt_text where thrs_item_code=:thrs_item_code and qlt_code=:qlt_code and action_code=:action_code";
//액션코멘트 삭제
exports.deleteAct = "update d_action_comment set is_delete='y' where thrs_item_code=? and qlt_code=? and action_code=? and cmt_seq=?;";


//수신자 등록
//이용자 리스트
exports.getUserList ="select m_member.*, c_member_position.pos_name from m_member,c_member_position where isnull(m_member.is_delete) and m_member.pos_code= c_member_position.pos_code;";


//임계치 발생 현황
exports.getOccurList = "select d_source_rev_change.item_value, d_source_rev_change.company_name,d_source_rev_change.system_name,d_source_rev_change.targetA,d_source_rev_change.targetB,d_source_rev_change.check_time, c_threshold_item.thrs_item_name,c_quality_class.qlt_name,d_source_rev_change.is_checked_TIME,STR_TO_DATE(d_source_rev_change.check_time,'%Y%m%d%H%i%s') as check_timeDT " +
"from m_threshold_occur " +
" inner join d_source_rev_change on m_threshold_occur.targetA = d_source_rev_change.targetA and m_threshold_occur.targetB = d_source_rev_change.targetB and m_threshold_occur.check_time = d_source_rev_change.check_time " +
"inner join c_threshold_item on c_threshold_item.thrs_item_code = m_threshold_occur.thrs_item_code inner join c_quality_class on c_quality_class.qlt_code = m_threshold_occur.qlt_code;";

exports.getOccurDetailList = "select d_source_rev_change.item_value, d_source_rev_change.company_name,d_source_rev_change.system_name," +
"d_source_rev_change.targetA,d_source_rev_change.targetB,d_source_rev_change.check_time," +
"c_threshold_item.thrs_item_name,c_quality_class.qlt_name,d_source_rev_change.is_checked_TIME,STR_TO_DATE(d_source_rev_change.check_time,'%Y%m%d%H%i%s') as check_timeDT " +
"from m_threshold_occur_info " +
"inner join d_source_rev_change on m_threshold_occur_info.targetA2 = d_source_rev_change.targetA and m_threshold_occur_info.targetB2 = d_source_rev_change.targetB " +
"and m_threshold_occur_info.check_time2 = d_source_rev_change.check_time and m_threshold_occur_info.seq_id = d_source_rev_change.seq_id inner join m_threshold_occur on m_threshold_occur.targetA = m_threshold_occur_info.targetA " +
"and m_threshold_occur.targetB = m_threshold_occur_info.targetB and m_threshold_occur.check_time = m_threshold_occur_info.check_time " +
"inner join c_threshold_item on c_threshold_item.thrs_item_code = m_threshold_occur.thrs_item_code inner join c_quality_class on c_quality_class.qlt_code = m_threshold_occur.qlt_code " +
"where m_threshold_occur_info.targetA =? " +
"and m_threshold_occur_info.targetB = ? " +
"and m_threshold_occur_info.check_time = ? order by targetB,d_source_rev_change.check_time desc;";



exports.insertOrgReg="set @org_code = (select lpad(org_code + 1, 4,'0') from m_organization order by org_code desc limit 1) COLLATE utf8_unicode_ci;"+
  "insert into m_organization values(@org_code,null,?,null,null,null,null,null,null);";

//임계치 addressee 목록
exports.getAddresseeList = "select * from m_addressee where ISNULL(m_addressee.is_delete) ";


// 임계치 발생 현황 차트 수치
exports.getOccurQltCnt = "select qlt_code,count(qlt_Code)'cnt' from m_threshold_occur1 group by qlt_code;";
// 임계치 관리 항목 삭제
exports.deleteStanThresReg = "update c_threshold_item set is_delete='y' where thrs_item_code= :thrs_item_code; " +
"update d_threshold_detail set is_delete='y' where thrs_item_code=:thrs_item_code; " +
"update m_threshold_action set is_delete='y' where thrs_item_code=:thrs_item_code;" +
"update d_action_comment set is_delete='y' where thrs_item_code=:thrs_item_code;" +
"update m_addressee set is_delete='y' where thrs_item_code=:thrs_item_code;"
//임계치 class 삭제
exports.deleteStanQualReg = "update c_quality_class set is_delete='y' where qlt_code=:qlt_code; " +
"update d_threshold_detail set is_delete='y' where qlt_code=:qlt_code; " +
"update m_threshold_action set is_delete='y' where qlt_code=:qlt_code;" +
"update d_action_comment set is_delete='y' where qlt_code=:qlt_code;" +
"update m_addressee set is_delete='y' where qlt_code=:qlt_code;";

exports.updateStanReg = "update d_threshold_detail set priority=?, value=?, value1=?, value2=? where item=? and thrs_item_code=? and qlt_code=? and seq=? ;";


// 임계치 처리 현황 - 발생현황 리스트 get
exports.getProcessList = "select STR_TO_DATE(d_source_rev_change.check_time,'%Y%m%d%H%i%s') as check_time1,d_source_rev_change.company_name,d_source_rev_change.system_name," +
" c_threshold_item.thrs_item_name,c_quality_class.qlt_name,c_action.action_name, d_threshold_action.targetA, d_threshold_action.targetB ," +
" d_threshold_action.check_time , d_threshold_action.action_code from d_threshold_action inner join d_source_rev_change on d_threshold_action.targetA = d_source_rev_change.targetA " +
"and d_threshold_action.targetB = d_source_rev_change.targetB and d_threshold_action.check_time = d_source_rev_change.check_time inner join c_threshold_item on c_threshold_item.thrs_item_code = d_threshold_action.thrs_item_code " +
"inner join c_quality_class on c_quality_class.qlt_code = d_threshold_action.qlt_code inner join c_action on c_action.action_code = d_threshold_action.action_code;";



//임계치 처리 현황 - 발생항목 코멘트 처리 내역 get
//exports.getActionList = "select commentContents,occurName,occurValue,occurCount,comLocation,sendDate from `[temp]process`;";

exports.getActionList = "select d_threshold_status.cmt_text , d_threshold_status.send_time , d_threshold_status.member_name , d_threshold_status.p_email, d_threshold_status.p_tel from d_threshold_status inner join c_threshold_item on c_threshold_item.thrs_item_code = d_threshold_status.thrs_item_code inner join c_quality_class on c_quality_class.qlt_code = d_threshold_status.qlt_code " +
"where d_threshold_status.targetA = ? " +
"and d_threshold_status.targetB = ? " +
"and d_threshold_status.check_time = ?" +
"and d_threshold_status.action_code = ?;";


//임계치 관리항목 리스트
exports.getThresHoldList = "SELECT * FROM c_threshold_item where ISNULL(c_threshold_item.is_delete) "
//임계치 품질등급 리스트
exports.getQualList = "SELECT * FROM c_quality_class where ISNULL(c_quality_class.is_delete) "


//임계치 기준정보관리 - 임계치 관리항목 등록 - 등록
exports.insertStanThresReg = "set @thresMaxCode = (SELECT lpad(count(c_threshold_item.thrs_item_code) , 2 ,'0') from c_threshold_item) ; " +
"insert into c_threshold_item(thrs_item_code,thrs_item_name) values(@thresMaxCode,?);";

//임계치 기준정보관리 - 임계치 품질등급 등록 - 등록
exports.insertStanQualReg = "set @qualMaxCode = (SELECT count(c_quality_class.qlt_code) from c_quality_class) ; " +
"insert into c_quality_class(qlt_code,qlt_name) values(@qualMaxCode,?);";

//임계치 품질등록 저장
//exports.insertStanReg =  "insert into d_threshold_detail(thrs_item_code,qlt_code,seq) values(?,?,'1');";
exports.insertStanReg1 = "set @seq = (SELECT lpad(count(d_threshold_detail.seq)+1 , 2 ,'0') from d_threshold_detail where d_threshold_detail.thrs_item_code = :thrs_item_code AND d_threshold_detail.qlt_code=:qlt_code); " +
"insert into d_threshold_detail(thrs_item_code,qlt_code,seq,item,value,value1,value2) values(:thrs_item_code,:qlt_code,@seq,:item,:value,:value1,:value2); ";
//임계치 기준정보 관리 - 임계치 품질 액션 등록 - 액션 리스트 get

//exports.insertStanReg =  "insert into d_threshold_detail(thrs_item_code,qlt_code,seq) values(?,?,'1');";
exports.insertStanReg2 = "set @seq = (SELECT lpad(count(d_threshold_detail.seq)+1 , 2 ,'0') from d_threshold_detail where d_threshold_detail.thrs_item_code = :thrs_item_code AND d_threshold_detail.qlt_code=:qlt_code); " +
"insert into d_threshold_detail(thrs_item_code,qlt_code,seq,item,value,value1,value2,priority) values(:thrs_item_code,:qlt_code,@seq,:item,:value,:value1,:value2, :priority); ";
//임계치 기준정보 관리 - 임계치 품질 액션 등록 - 액션 리스트 get
exports.getActionNameList = "SELECT * FROM c_action";

//임계치 품질 액션 저장
exports.updateActReg = /*"set @seq = (SELECT count(m_threshold_action.action_seq)+1 from m_threshold_action where m_threshold_action.thrs_item_code = :ithrs_item_code AND m_threshold_action.qlt_code=:iqlt_code); " +*/
  "insert ignore into m_threshold_action (thrs_item_code,qlt_code,action_code) values( :ithrs_item_code,:iqlt_code,:iaction_code);" +
  "update m_threshold_action set is_delete=null where thrs_item_code=:ithrs_item_code and qlt_code=:iqlt_code and action_code=:iaction_code;";


//임계치 기준정보 관리-임계치 품질 등록 리스트 출력
/*원래 쿼리

 */
exports.getStandardReg = "SELECT  d_threshold_detail.seq, c_threshold_item.thrs_item_name, c_quality_class.qlt_name, d_threshold_detail.thrs_item_code, d_threshold_detail.qlt_code,d_threshold_detail.item,d_threshold_detail.value,d_threshold_detail.value1,d_threshold_detail.value2,d_threshold_detail.priority " +
"FROM     d_threshold_detail INNER JOIN " +
"c_quality_class ON d_threshold_detail.qlt_code = c_quality_class.qlt_code INNER JOIN " +
"c_threshold_item ON d_threshold_detail.thrs_item_code = c_threshold_item.thrs_item_code " +
"WHERE ISNULL(d_threshold_detail.is_delete) " +
"order by c_threshold_item.thrs_item_code,c_quality_class.qlt_code,d_threshold_detail.value1; ";
/*exports.getStandardReg ="select 'aasdf' ";*/
/*exports.getStandardReg ="select * from d_threshold_detail";*/

exports.getStandardReg_ACT = "SELECT c_threshold_item.thrs_item_name," +
" c_quality_class.qlt_name, d_threshold_detail.thrs_item_code," +
" d_threshold_detail.qlt_code,d_threshold_detail.item," +
"d_threshold_detail.value,d_threshold_detail.value1," +
"d_threshold_detail.value2 " +
"FROM d_threshold_detail INNER JOIN " +
"c_quality_class ON d_threshold_detail.qlt_code = c_quality_class.qlt_code INNER JOIN " +
"c_threshold_item ON d_threshold_detail.thrs_item_code = c_threshold_item.thrs_item_code " +
"WHERE ISNULL(d_threshold_detail.is_delete) " +
"group by d_threshold_detail.thrs_item_code, d_threshold_detail.qlt_code " +
"order by c_threshold_item.thrs_item_code,c_quality_class.qlt_code,d_threshold_detail.value1;"




//임계치 기준정보 관리- 임계치 품질 액션 등록-
//exports.getActionReg ="select t.action_seq, a.action_name, i.thrs_item_name, q.qlt_name from ch_threshold_action t, c_quality_class q, c_threshold_item i, c_action a where t.qlt_code= q.qlt_code and t.thrs_item_code = i.thrs_item_code and t.action_code =a.action_code;";
exports.getActionReg = " SELECT   * " +
"FROM     c_threshold_item inner join c_quality_class " +
"where c_threshold_item.thrs_item_code!='EE' " +
"and c_quality_class.qlt_code!='E' " +
"order by c_threshold_item.thrs_item_code,c_quality_class.qlt_code;";
//임계치 기준정보 관리-임계치 품질 액션 등록,수정,삭제 현황
exports.getActionRegList = " SELECT  c_quality_class.qlt_code,c_action.action_code, c_threshold_item.thrs_item_code,   c_threshold_item.thrs_item_name, c_quality_class.qlt_name, c_action.action_name " +
"FROM         c_action INNER JOIN " +
"m_threshold_action ON c_action.action_code = m_threshold_action.action_code INNER JOIN " +
"c_quality_class ON m_threshold_action.qlt_code = c_quality_class.qlt_code INNER JOIN " +
"c_threshold_item ON m_threshold_action.thrs_item_code = c_threshold_item.thrs_item_code where isnull(m_threshold_action.is_delete) ";
//임계치 기준정보 관리 임계치 상세 기준 항목
exports.getDetailReg = "SELECT     c_threshold_item.thrs_item_name, c_quality_class.qlt_name, d_threshold_detail.item, d_threshold_detail.value " +
"FROM         c_quality_class INNER JOIN " +
"d_threshold_detail ON c_quality_class.qlt_code = d_threshold_detail.qlt_code INNER JOIN " +
"c_threshold_item ON d_threshold_detail.thrs_item_code = c_threshold_item.thrs_item_code";
/*
 //임계치 기준정보 관리-임계치 품질 삭제
 exports.deleteStandardReg = "delete";

 //임계치 기준정보 관리 임계치 상세 기준 항목 삭제
 exports.deleteDetailReg = "delete";*/

//임계치 기준정보 관리 임계치 품질 액션 삭제
exports.deleteActionReg = "update m_threshold_action set is_delete='y' where thrs_item_code=? and qlt_code=?  and action_code=? ";

//임계치 기준정보 관리 -임계치 품질 상세 기준 항목 -저장 -
// 아래 쿼리는 수정 필요
//exports.insertDetail="insert into d_threshold_detail (thrs_item_code,qlt_code,item,value) values( :thrs_item_code,:qlt_code,:detail_name,:detail_value);" +
//    "set @detailMaxCodeA = (SELECT lpad(max(d_threshold_detail.seq)+1 , 2 ,'0') from d_threshold_detail where d_threshold_detail.thrs_item_code=:thrs_item_code and d_threshold_detail.qlt_code=:qlt_code); "+
//    "update d_threshold_detail set seq=@detailMaxCodeA where d_threshold_detail.thrs_item_code=:thrs_item_code and d_threshold_detail.qlt_code=:qlt_code;";
exports.insertDetail = "set @detailMax=(SELECT lpad(count(d_threshold_detail.id_seq)+1 , 2 ,'0') from d_threshold_detail where d_threshold_detail.thrs_item_code = :thrs_item_code and d_threshold_detail.qlt_code=:qlt_code); " +
"insert into d_threshold_detail (thrs_item_code,qlt_code,id_seq,item,value,thrs_item_name,qlt_code_name) values( :thrs_item_code,:qlt_code,@detailMax,:detail_name,:detail_value);";


//임계치 기준정보관리 - 임계치 수신자 등록 - 명단
exports.getReceiverNameList = "select org_code , member_id , member_name from m_member where isnull(m_member.is_delete); ";

//측정치 누적 현황 리스트
exports.getLogList = " select h_source_rev.item_name,h_source_rev.targetA_name,h_source_rev.targetB_name,h_source_rev.item_value,c_threshold_item.thrs_item_name,c_quality_class.qlt_name "+
    ",d_source_rev_change.is_acted,m_system.system_name as system_nameA, m_system.system_code,d_source_rev_change.thrs_item_code,d_source_rev_change.qlt_code, h_source_rev.check_time,h_source_rev.system_name as system_nameB" +
    ",d_source_rev_change.thrs_item_code,d_source_rev_change.qlt_code "+
"from h_source_rev "+
"inner join d_source_rev_change "+
"on h_source_rev.seq_id = d_source_rev_change.seq_id "+
"inner join c_threshold_item "+
"on d_source_rev_change.thrs_item_code = c_threshold_item.thrs_item_code "+
"inner join c_quality_class "+
"on c_quality_class.qlt_code= d_source_rev_change.qlt_code "+
"inner join m_system on d_source_rev_change.system_code = m_system.system_code "+
"where isnull(h_source_rev.is_delete) "+
"order by h_source_rev.check_time DESC,h_source_rev.seq_id DESC;";

exports.deleteLog = "update h_source_rev set h_source_rev.is_delete='y' where isnull(h_source_rev.is_delete)";

// 테스트용 쿼리 - 값 입력
exports.insertTestPram = "" +
   /* "update h_source_rev " +
    "set h_source_rev.is_checked = 'y' " +
    "where isnull(h_source_rev.is_checked); " +*/
    "set @seq_1= (select DATE_FORMAT(now(),'%Y%m%d%H')); " +
"set @seq_2= (select lpad(right(count(h_source_rev.seq_id)+1,5),5,'0')from h_source_rev); " +
"set @seq_final=(select concat (@seq_1,@seq_2)); " +
"INSERT INTO h_source_rev (`seq_id`,`company_name`, `system_name`, `targetA_name`, `targetB_name`, `item_name`, `item_value`,`check_time`) VALUES (@seq_final,?, ?, ?,?, ?,?,now());" +
    "commit;" +
"call p_thr_count1_check(); " ;//+
//"#call p_thr_count2_check(); " +
//"#call p_thr_count3_check(); " +
//"#call p_thr_count4_check(); " +
//"#call p_thr_count5_check(); ";
// 테스트용 쿼리 - 내부 로직 실행
//exports.logicTestPram="" +
//    "call p_thr_count_check(000000000008998); " +
//    "set @tmp_val=(select d_threshold_detail.value " +
//        "from d_threshold_detail " +
//        "where d_threshold_detail.qlt_code=:checkQlt and d_threshold_detail.item='횟수'); "+
//    "set @tmp_val2=(select count(*) "+
//        "from d_threshold_rev_countcheck "+
//        "where d_threshold_rev_countcheck.qlt_code=:checkQlt "+
//        "AND ISNULL(d_threshold_rev_countcheck.ischecked) "+
//        "group by d_threshold_rev_countcheck.qlt_code); "+
//
//
//  "CALL p_thr_occur_check(@tmp_val,@tmp_val2,:checkQlt);";


//////// 엑셀 쿼리 //////////
exports.excel_commentl = "select c_threshold_item.thrs_item_name,c_quality_class.qlt_name,c_action.action_name,d_action_comment.cmt_text " +
"from d_action_comment " +
"inner join c_threshold_item on d_action_comment.thrs_item_code=c_threshold_item.thrs_item_code " +
"inner join c_quality_class on d_action_comment.qlt_code = c_quality_class.qlt_code " +
"inner join c_action on d_action_comment.action_code = c_action.action_code " +
"where isnull(d_action_comment.is_delete);";

exports.excel_receiver = "select c_threshold_item.thrs_item_name,c_quality_class.qlt_name,c_action.action_name,m_organization.org_name,m_member.member_name " +
"from m_addressee " +
"inner join c_threshold_item on m_addressee.thrs_item_code=c_threshold_item.thrs_item_code " +
"inner join c_quality_class on m_addressee.qlt_code = c_quality_class.qlt_code " +
"inner join c_action on m_addressee.action_code = c_action.action_code " +
"inner join m_member on m_addressee.member_id = m_member.member_id " +
"inner join m_organization on m_addressee.org_code = m_organization.org_code " +
"where isnull(m_addressee.is_delete);";
/////// 엑셀 쿼리 끝 /////////


exports.logicTestPram = "call p_thr_count_check_all(); ";



//장바구니 카트 리스트
exports.getCartList =
    "select user_id,product_id,product_unit,product_name,product_count,product_amount " +
    "from cart_list; ";
