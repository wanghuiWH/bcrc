package com.sooka.component.beetl.fun;

import com.sooka.mybatis.model.TCmsCategory;
import com.sooka.common.utils.ControllerUtil;
import com.sooka.module.web.cms.service.CategoryService;
import org.beetl.core.Context;
import org.beetl.core.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Description:输出子权限节点函数
 *
 *
 * @create 2017-04-15
 **/
@Service
public class TreeContentCategoryFunction implements Function{

    @Autowired
    private CategoryService service;

    @Value("${system.http.protocol}")
    private String httpProtocol;

    @Override
    public Object call(Object[] objects, Context context) {

        Long pid = Long.parseLong(objects[0].toString());
        return recursion(pid);
    }

    /* 递归函数 */
    private String recursion(Long pid){
       StringBuffer sbf = new StringBuffer();
       List<TCmsCategory> cats  = service.findCategoryListByPid(pid);
       if(cats!=null&&cats.size()>0){
           for(TCmsCategory cat:cats){
               sbf.append("  <li data-id=\""+cat.getCategoryId()+"\" data-pid=\""+pid+"\" data-url=\""+httpProtocol+"://"+ ControllerUtil.getDomain()+"/system/cms/content/input?id="+cat.getCategoryId()+"\" data-divid=\"#layout-11\">"+cat.getCategoryName()+"</li>");
               sbf.append(recursion(cat.getCategoryId()));
           }
           return  sbf.toString();
       }
       return "";
    }
}
