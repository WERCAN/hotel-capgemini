package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomerMvcController {

    // http://localhost:9090/customer
    @GetMapping("/customer")
    public String customerPage() {

        System.out.println("Inside customerPage");

        return "customer";
    }
}

