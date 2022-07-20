package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GeneralManagerMvcController {


    // http://localhost:9090/generalManager
    @GetMapping("/generalManager")
    public String generalManagerPage() {

        System.out.println("Inside generalManagerPage");

        return "GeneralManagerPage";
    }
}
