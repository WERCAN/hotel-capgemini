package com.example.demo.service;


import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    //@Autowired
    private UserRepository userRepository;

    public UserServiceImpl(){}

    @Autowired
    public UserServiceImpl(UserRepository userRepository){this.userRepository=userRepository;}

    @Override
    public Iterable<User> findAll(){
        Iterable<User> users = userRepository.findAll();

        //

        return users;
    }

    @Override
    public User createUser(User user) {
        User userCreated = userRepository.save(user);
        return userCreated;
    }
    @Override
    public boolean deleteUser(long userId) {
        userRepository.deleteById(userId);
        return true;
    }

}
