package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;
import com.example.demo.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class CustomerController {

    private CustomerService customerService;

    public CustomerController(){

    }

    @Autowired
    public CustomerController( CustomerService customerService){
        this.customerService = customerService;
    }

    // http://localhost:9090/api/customer
    @CrossOrigin
    @GetMapping(value = "/customer", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Customer>> getAllCustomers(){

        System.out.println("Inside getAllCustomers");

        Iterable<Customer> customers = customerService.findAll();
        return ResponseEntity.ok( customers);

    }

    // http://9090/api/customer
    @CrossOrigin
    @PostMapping(value = "/customer", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> createCustomer( @RequestBody Customer customer){

        System.out.println("Inside createCustomer");

        Customer customerCreated = customerService.createCustomer(customer);

        return ResponseEntity.ok( customerCreated);

    }


    @DeleteMapping(value = "/customer/{customerId}", produces= MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> deleteCustomerById( @PathVariable Long customerId){
        System.out.println("Inside deleteCustomerById");
        customerService.deleteCustomer(customerId);
        return ResponseEntity.ok( "Customer with id: " + customerId + " is deleted");
    }

}
