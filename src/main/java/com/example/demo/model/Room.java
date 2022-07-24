package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long Id;

    private String roomType;

    private int sizePerson;

    private int roomNumber;

    private int singleBedAmount;

    private int doubleBedAmount;

    private boolean cleanRoom;

    private boolean roomActive;

    private double price;

    private int childrenPlace;

    private boolean disabled;

    private boolean smoke;

    private  String facilities;

    public boolean isRoomActive() {
        return roomActive;
    }

    public void setRoomActive(boolean roomActive) {
        this.roomActive = roomActive;
    }

    public String getFacilities() {
        return facilities;
    }

    public void setFacilities(String facilities) {
        this.facilities = facilities;
    }

    public Room (){}

    public Room( String type, int sizePerson, int roomNumber, int singleBedAmount, int doubleBedAmount, boolean cleanRoom, boolean roomActive, double price, int childPlace, boolean disabled, boolean smoke, String facilities) {

        this.roomType = type;
        this.sizePerson = sizePerson;
        this.roomNumber = roomNumber;
        this.singleBedAmount = singleBedAmount;
        this.doubleBedAmount = doubleBedAmount;
        this.cleanRoom = cleanRoom;
        this.price = price;
        this.childrenPlace = childPlace;
        this.disabled = disabled;
        this.smoke = smoke;
        this.roomActive=roomActive;
        this.facilities=facilities;
    }


    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getChildrenPlace() {
        return childrenPlace;
    }

    public void setChildrenPlace(int childrenPlace) {
        this.childrenPlace = childrenPlace;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    public boolean isSmoke() {
        return smoke;
    }

    public void setSmoke(boolean smoke) {
        this.smoke = smoke;
    }


    public int getSingleBedAmount() {
        return singleBedAmount;
    }

    public void setSingleBedAmount(int singleBedAmount) {
        this.singleBedAmount = singleBedAmount;
    }

    public int getDoubleBedAmount() {
        return doubleBedAmount;
    }

    public void setDoubleBedAmount(int doubleBedAmount) {
        this.doubleBedAmount = doubleBedAmount;
    }

    public boolean isCleanRoom() {
        return cleanRoom;
    }

    public void setCleanRoom(boolean cleanRoom) {
        this.cleanRoom = cleanRoom;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        this.Id = id;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public int getSizePerson() {
        return sizePerson;
    }

    public void setSizePerson(int sizePerson) {
        this.sizePerson = sizePerson;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }
}
