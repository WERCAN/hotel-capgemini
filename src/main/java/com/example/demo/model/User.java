package com.example.demo.model;

import javax.persistence.*;

@Entity(name="User")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @Column(name="First_Name")
    private String firstName;
    @Column(name="Last_Name")
    private String lastName;

    public void setId(long id) {
        this.id = id;
    }

    @Column(name="Emailaddress")
    private String emailAddress;
    @Column(name="Password")
    private String password;
    @Column(name="address")
    private String address;
    @Column(name="birthdate")
    private String birthDate;
    @Column(name="username")
    private String username;
    @Column(name="role")
    private String role;

    public User() {
    }

    public User(String firstName, String lastName, String emailAddress, String password, String address, String birthDate, String username, String role) {


        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.address = address;
        this.birthDate = birthDate;
        this.username = username;
        this.role = role;
    }

    public long getId() {
        return id;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
