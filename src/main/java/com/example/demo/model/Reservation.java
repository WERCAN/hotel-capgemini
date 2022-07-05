package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
public class Reservation {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private Date startDate;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private Date endDate;

    private boolean checkedIn;
    private boolean checkedOut;

    private boolean payment;
    private double price;
    private double totalPrice;
    private double roomServicePrice;
    private int babyBed;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate nowDate = LocalDate.now();
    @ManyToOne
    @JoinTable(name="reservation_room")
    private Room room;
    @ManyToMany
    @JoinTable(name="reservation_customer")
    private List<Customer> customers;

    public Reservation() {


    }

    public Reservation(long id, Date startDate, Date endDate, boolean checkedIn, boolean checkedOut, boolean payment, double price, double totalPrice, double roomServicePrice, int babyBed, LocalDate nowDate, Room room, List<Customer> customers) {
        Id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.checkedIn = checkedIn;
        this.checkedOut = checkedOut;
        this.payment=payment;
        this.price = price;
        this.totalPrice = totalPrice;
        this.roomServicePrice = roomServicePrice;
        this.babyBed = babyBed;
        this.nowDate = nowDate;
        this.room = room;
        this.customers = customers;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public boolean isCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(boolean checkedIn) {
        this.checkedIn = checkedIn;
    }

    public boolean isCheckedOut() {
        return checkedOut;
    }

    public void setCheckedOut(boolean checkedOut) {
        this.checkedOut = checkedOut;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public double getRoomServicePrice() {
        return roomServicePrice;
    }

    public void setRoomServicePrice(double roomServicePrice) {
        this.roomServicePrice = roomServicePrice;
    }

    public int getBabyBed() {
        return babyBed;
    }

    public void setBabyBed(int babyBed) {
        this.babyBed = babyBed;
    }

    public LocalDate getNowDate() {
        return nowDate;
    }

    public void setNowDate(LocalDate nowDate) {
        this.nowDate = nowDate;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public boolean isPayment() {
        return payment;
    }

    public void setPayment(boolean payment) {
        this.payment = payment;
    }
}
