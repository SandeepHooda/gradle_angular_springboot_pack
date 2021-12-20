package com.sandeep.spring_angular.demo;

import com.sandeep.spring_angular.demo.vo.ResponseVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo")
public class DemoEndpoint {
    @GetMapping("/hello")
    public ResponseVO hello(){
        System.out.println(" hello service");
        ResponseVO vo = new ResponseVO();
        vo.setStrResponse("Hello Sandeep");
        return vo;
    }
}
