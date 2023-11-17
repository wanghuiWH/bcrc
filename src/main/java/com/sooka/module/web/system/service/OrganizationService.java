package com.sooka.module.web.system.service;

import com.sooka.mybatis.model.TSysOrg;

import java.util.List;

/**
 * Description:部门service
 *
 *
 * @create 2017-07-26
 **/
public interface OrganizationService {

    List<TSysOrg> findByPid(Integer pid);

    TSysOrg findById(Integer id);

    String delete(Integer id);

    String save(TSysOrg pojo);

    String update(TSysOrg pojo);

    int findCountByOrgIdAndUserId(Integer orgId,Integer userId);

}
