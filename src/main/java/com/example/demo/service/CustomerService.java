package com.example.demo.service;

import com.example.demo.model.Customer;

public interface CustomerService {
    public Iterable<Customer> findAll();
    public Customer createCustomer(Customer customer);
}
