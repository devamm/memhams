package com.collabera.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	
	@RequestMapping("/")
    public String index() {
        return "index.html";
    }
	
//	@RequestMapping("/*")
//	public String indexAll() {
//	    return "index.html";
//	}
	
//	@RequestMapping(value = "/{[path:[^\\.]*}")
//	public void redirect(HttpServletResponse response) throws IOException {
//	    response.sendRedirect("/");
//	}

	
//    @RequestMapping("/{path:(?!.*.js|.*.css|.*.jpg).*$}")
//    public String index() {
//        return "index.html";
//    }
}

