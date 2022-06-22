package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.model.Reservation;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl implements ReservationService{


    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public Iterable<Reservation> findAll() {
        Iterable<Reservation> reservations = reservationRepository.findAll();


        return reservations;
    }

    @Override
    public Reservation createReservation(Reservation reservation) {

        Reservation reservationCreated = reservationRepository.save(reservation);
        return reservationCreated;
    }
    @Override
    public boolean deleteReservation(long reservationId) {
        reservationRepository.deleteById(reservationId);
        return true;
    }
}
