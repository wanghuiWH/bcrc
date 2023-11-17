package com.sooka.module.web.system.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sooka.common.utils.CmsUtil;
import com.sooka.common.utils.JsonUtil;
import com.sooka.module.web.system.service.AttachmentService;
import com.sooka.mybatis.mapper.TSysAttachmentMapper;
import com.sooka.mybatis.model.TSysAttachment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;

/**
 * Description:
 *
 *
 * @create 2017-08-08
 **/
@Service
public class AttachmentServiceImpl implements AttachmentService{

    @Autowired
    private TSysAttachmentMapper attachmentMapper;

    @Override
    public void save(TSysAttachment pojo) {
        this.attachmentMapper.insertSelective(pojo);
    }


    @Override
    public String delete(Long[] ids) {
        if(CmsUtil.isNullOrEmpty(ids)) {
            return JsonUtil.toERROR("id不能为空！");
        }
        for(Long id :ids) {
            deleteAttachmentFile(id);
        }
        return JsonUtil.toSUCCESS("删除成功!");
    }

    @Override
    public TSysAttachment findByKey(String key) {
        TSysAttachment attachment = new TSysAttachment();
        attachment.setFileKey(key);
        return this.attachmentMapper.selectOne(attachment);
    }

    @Async
    public void deleteAttachmentFile(Long id){
        TSysAttachment attachment = this.attachmentMapper.selectByPrimaryKey(id);
        if(!CmsUtil.isNullOrEmpty(attachment)){
            File file = new File(attachment.getFilePath());
            file.delete();
            this.attachmentMapper.deleteByPrimaryKey(id);
        }
    }

    @Override
    public List<TSysAttachment> findList(TSysAttachment pojo) {
        return this.attachmentMapper.select(pojo);
    }

    @Override
    public List<TSysAttachment> findAll() {
        return this.attachmentMapper.selectAll();
    }

    @Override
    public PageInfo<TSysAttachment> page(Integer pageNumber, Integer pageSize, TSysAttachment pojo) {
        PageHelper.startPage(pageNumber,pageSize);
        return new PageInfo<>(this.findList(pojo));
    }

    @Override
    public PageInfo<TSysAttachment> page(Integer pageNumber, Integer pageSize) {
        PageHelper.startPage(pageNumber,pageSize);
        return new PageInfo<>(this.findAll());
    }
}
