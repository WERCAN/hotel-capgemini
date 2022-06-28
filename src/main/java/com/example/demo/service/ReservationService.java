package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.model.Filter;
import com.example.demo.model.Reservation;
import com.example.demo.model.Room;

import java.util.List;

public interface ReservationService {
    public Iterable<Reservation> findAll();
    public Reservation createReservation(Reservation reservation);
    public boolean deleteReservation(long reservationId);
    public List<Room> getAvailableRooms(Filter filter);
}
