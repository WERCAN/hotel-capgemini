package com.example.demo.service;


import com.example.demo.model.Login;
import com.example.demo.model.User;
import java.util.Optional;

public interface LoginService {
    public User checkValidUser(Login login);

}
