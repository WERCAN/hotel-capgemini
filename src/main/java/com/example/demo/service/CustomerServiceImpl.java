package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

    //@Autowired
    private CustomerRepository customerRepository;

    public CustomerServiceImpl() {
    }

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Iterable<Customer> findAll(){
        Iterable<Customer> customers = customerRepository.findAll();

        //

        return customers;
    }

    @Override
    public Customer createCustomer( Customer customer){
        Customer customerCreated = customerRepository.save( customer);
        return customerCreated;
    }





}
