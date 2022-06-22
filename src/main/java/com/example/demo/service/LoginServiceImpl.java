package com.example.demo.service;

import com.example.demo.model.Login;
import com.example.demo.model.User;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginServiceImpl implements LoginService{

    private LoginRepository loginRepository;

    @Autowired
    private UserRepository userRepository;

    public LoginServiceImpl (LoginRepository loginRepository){this.loginRepository=loginRepository;}





    @Override
    public User checkValidUser(Login login) {
        Iterable<User> users = userRepository.findAll();
        for (User user : users) {
            if(user.getUsername().equals(login.getUsername())&&
            user.getPassword().equals(login.getPassword())){
                System.out.println("inside checkValidUser");
                return user;
            }
        }
        return null;
    }
}
