package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReceptionistMvc {

    // http://localhost:9090/receptionist
    @GetMapping("/receptionist")
    public String receptionistPage() {

        System.out.println("Inside roomCleanerPage");

        return "ReceptionistPage";
    }
}
