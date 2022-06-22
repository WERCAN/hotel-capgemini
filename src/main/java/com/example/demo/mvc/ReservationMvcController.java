package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReservationMvcController {

        // http://localhost:9090/reservation
        @GetMapping("/reservation")
        public String reservationPage() {

            System.out.println("Inside reservationPage");

            return "reservation";
        }
}
