package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoomCleanerMvc {



        // http://localhost:9090/reservation
        @GetMapping("/roomCleaner")
        public String roomCleanerPage() {

            System.out.println("Inside roomCleanerPage");

            return "RoomCleanerPage";
        }
    }

