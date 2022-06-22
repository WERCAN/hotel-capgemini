package com.example.demo.mvc;

import com.example.demo.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginMvc {

    @GetMapping("/home")
    public String adminPanel(User user) {

        System.out.println("Inside homepage");

        return "home";
    }
}
