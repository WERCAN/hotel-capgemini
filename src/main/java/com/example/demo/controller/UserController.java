package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class UserController {
    private UserService userService;

    public UserController() {
    }

    @Autowired
    public UserController(UserService userService){this.userService=userService;}

    // http://localhost:9090/api/users
    @GetMapping(value = "/users", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<User>> getAllUsers(){

        System.out.println("Inside getAllUsers");

        Iterable<User> users = userService.findAll();
        return ResponseEntity.ok( users);

    }

    // http://9090/api/users
    @PostMapping(value = "/users", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> createUser( @RequestBody User user){

        System.out.println("Inside createUser");

        User userCreated = userService.createUser(user);

        return ResponseEntity.ok( userCreated);

    }

    @DeleteMapping(value = "/users/{userId}", produces= MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> deletebyUserId( @PathVariable Long userId){
        System.out.println("Inside deleteUserById");
        userService.deleteUser(userId);
        return ResponseEntity.ok( "User with id: " + userId + " is deleted");
    }
}
