package com.sooka.module.web.cms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sooka.common.utils.JsonUtil;
import com.sooka.common.utils.UuidUtil;
import com.sooka.module.web.cms.service.JlxnryService;
import com.sooka.mybatis.mapper.JlxnryMapper;
import com.sooka.mybatis.model.Jlxnry;


@Service
public class JlxnryServiceImpl implements JlxnryService {

    @Autowired
    private JlxnryMapper jlxnryMapper;

	@Override
	public String save(Jlxnry pojo) {
		pojo.setXnryId(UuidUtil.get32UUID());
		if(jlxnryMapper.insertSelective(pojo)>0){
            return JsonUtil.toSUCCESS("保存成功!","content-tab",true);
        }
        return JsonUtil.toERROR("保存失败!");
	}

	@Override
	public String update(Jlxnry pojo) {
		
		 if(jlxnryMapper.updateByPrimaryKeySelective(pojo)>0){
	            return JsonUtil.toSUCCESS("操作成功!","content-tab",true);
	     }
	     return JsonUtil.toERROR("操作失败!");
	}

	/*@Override
	public String delete(Integer[] ids) {
		if(ids!=null&&ids.length>0){
            for(Integer id:ids){
            	jlxnryMapper.deleteByPrimaryKey(id);
            }
            return JsonUtil.toSUCCESS("删除成功!","content-tab",true);
        }
        return JsonUtil.toERROR("删除失败!");
	}

	@Override
	public Jlxnry findById(Integer id) {
		return jlxnryMapper.selectByPrimaryKey(id);
	}
*/
	@Override
	public List<Jlxnry> findList(Jlxnry pojo) {
		return jlxnryMapper.select(pojo);
	}

	@Override
	public List<Jlxnry> findAll() {
		return jlxnryMapper.selectAll();
	}

	@Override
	public PageInfo<Jlxnry> page(Integer pageNumber, Integer pageSize, Jlxnry pojo) {
		PageHelper.startPage(pageNumber,pageSize);
        return new PageInfo<>(jlxnryMapper.selectAll());
	}

	@Override
	public PageInfo<Jlxnry> page(Integer pageNumber, Integer pageSize) {
		 PageHelper.startPage(pageNumber,pageSize);
	     return new PageInfo<>(findAll());
	}

	@Override
	public String delete(String[] ids) {
		if(ids!=null&&ids.length>0){
            for(String id:ids){
            	jlxnryMapper.deleteByPrimaryKey(id);
            }
            return JsonUtil.toSUCCESS("删除成功!","content-tab",true);
        }
        return JsonUtil.toERROR("删除失败!");
	}

	@Override
	public Jlxnry findById(String id) {
		return jlxnryMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<Jlxnry> findXnryByJibanbenId(String JL_BB_ID) {
		return jlxnryMapper.findXnryByJibanbenId(JL_BB_ID);
	}

	@Override
	public void deleteXnryByJibanbenId(String string) {
		jlxnryMapper.deleteXnryByJibanbenId(string);
		
	}
  
}
