package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminPanelMvcController {
    // http://localhost:9090/adminDashboard
    @GetMapping("/adminDashboard")
    public String customerPage() {

        System.out.println("Inside adminpanel");

        return "adminDashboard";
    }
}
