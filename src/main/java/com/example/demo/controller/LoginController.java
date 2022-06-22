package com.example.demo.controller;

import com.example.demo.model.Login;
import com.example.demo.model.User;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class LoginController {

    @Autowired
    LoginService loginService;

    public LoginController(){}


    @Autowired
    public LoginController(LoginService loginService){this.loginService=loginService;}



    // http://9090/api/home
    @PostMapping(value = "/home", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public boolean getUserCredentials(@RequestBody Login login){

        System.out.println("Inside getUserCredentials");


        User validUser = loginService.checkValidUser(login);
        if(validUser==null){
            return false;
        }






        return true;

    }
}
