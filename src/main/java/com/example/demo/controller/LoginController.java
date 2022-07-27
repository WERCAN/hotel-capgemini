package com.example.demo.controller;

import com.example.demo.model.Login;
import com.example.demo.model.User;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class LoginController {

    @Autowired
    LoginService loginService;

    public LoginController(){}


    @Autowired
    public LoginController(LoginService loginService){this.loginService=loginService;}



    // http://9090/api/home
    @CrossOrigin
    @PostMapping(value = "/home", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.TEXT_PLAIN_VALUE)
    public String getUserCredentials(@RequestBody Login login){

        System.out.println("Inside getUserCredentials");
        User validUser = loginService.checkValidUser(login);

        if(validUser==null){
            return "User not found!";
        }

        return validUser.getRole();
    }
}
