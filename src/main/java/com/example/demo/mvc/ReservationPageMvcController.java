package com.example.demo.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReservationPageMvcController {
    // http://localhost:9090/reservation/reservationpage

    @GetMapping("/reservation/reservationpage")
    public String reservationPage() {

        System.out.println("Inside Reservation Page");

        return "ReservationPage";
    }
}
