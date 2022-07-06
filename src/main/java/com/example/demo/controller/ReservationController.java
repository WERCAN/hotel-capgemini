package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.Filter;
import com.example.demo.model.Reservation;
import com.example.demo.model.Room;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ReservationController {
    private ReservationService reservationService;

    public ReservationController(){

    }

    @Autowired
    public ReservationController (ReservationService reservationService){this.reservationService=reservationService;}

    // http://9090/api/reservations
    @CrossOrigin
    @GetMapping(value = "/reservations", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Reservation>> getAllReservations(){
        System.out.println("Inside getAllReservations");
        Iterable<Reservation> reservations = reservationService.findAll();
        return ResponseEntity.ok( reservations);
    }

    @CrossOrigin
    @PostMapping(value = "/reservations/availableRooms", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Room>> getAvailableRooms(@RequestBody Filter filter){
        System.out.println("Inside getAvailableRooms");
        Iterable<Room> availableRooms = reservationService.getAvailableRooms(filter);
        return ResponseEntity.ok(availableRooms);
    }

    // http://9090/api/reservations
    @CrossOrigin
    @PostMapping(value = "/reservations", consumes= MediaType.APPLICATION_JSON_VALUE,
            produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Reservation> createReservation( @RequestBody Reservation reservation){
        System.out.println("Inside createReservation");
        Reservation reservationCreated = reservationService.createReservation(reservation);
        return ResponseEntity.ok( reservationCreated);
    }

    // http://9090/api/reservations/1
    @CrossOrigin
    @DeleteMapping(value = "/reservations/{reservationId}", produces= MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> deleteReservationById( @PathVariable Long reservationId){
        System.out.println("Inside deleteReservationById");
        reservationService.deleteReservation(reservationId);
        return ResponseEntity.ok( "Reservation with id: " + reservationId + " is deleted");
    }

//    @Autowired
//    public ReservationController(ReservationService reservationService){
//        this.reservationService = reservationService;
//    }
//
//    // http://localhost:9090/api/reservation
//    @GetMapping(value = "/reservation", produces= MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Iterable<Reservation>> getAllReservations(){
//
//        System.out.println("Inside getAllReservations");
//
//        Iterable<Reservation> reservations = reservationService.findAll();
//        return ResponseEntity.ok( reservations);
//
//    }
//
//    // http://9090/api/reservation
//    @PostMapping(value = "/reservation", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Reservation> createReservation( @RequestBody Reservation reservation){
//
//        System.out.println("Inside createReservation");
//
//        Reservation reservationCreated = reservationService.createReservation(reservation);
//
//        return ResponseEntity.ok( reservationCreated);
//
//    }


}

