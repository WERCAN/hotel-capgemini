package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Filter {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private Date startDate;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private Date endDate;
    private String roomType;
    private int adultSize;
    private int childrenSize;
    private boolean isSmoking;
    private boolean isNonsmoking;
    private boolean disabled;




    public Filter() {
    }

    public Filter(long id, Date startDate, Date endDate, String roomType, int adultSize, int childrenSize, boolean isSmoking, boolean isNonsmoking, boolean disabled) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.roomType = roomType;
        this.adultSize = adultSize;
        this.childrenSize = childrenSize;
        this.isSmoking = isSmoking;
        this.isNonsmoking = isNonsmoking;
        this.disabled = disabled;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public int getAdultSize() {
        return adultSize;
    }

    public void setAdultSize(int adultSize) {
        this.adultSize = adultSize;
    }

    public int getChildrenSize() {
        return childrenSize;
    }

    public void setChildrenSize(int childrenSize) {
        this.childrenSize = childrenSize;
    }

    public boolean isSmoking() {
        return isSmoking;
    }

    public void setSmoking(boolean smoking) {
        isSmoking = smoking;
    }

    public boolean isNonsmoking() {
        return isNonsmoking;
    }

    public void setNonsmoking(boolean nonsmoking) {
        isNonsmoking = nonsmoking;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }
}
