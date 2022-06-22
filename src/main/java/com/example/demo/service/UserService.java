package com.example.demo.service;
import com.example.demo.model.User;

public interface UserService {
    public Iterable<User> findAll();
    public User createUser(User user);
    public boolean deleteUser(long userId);
}
