package com.example.demo.service;
import com.example.demo.model.Room;

import java.util.List;


public interface RoomService {
    public Iterable<Room> findAll();
    public boolean createRoom(Room room);
    public boolean deleteRoom(long roomId);
    public List<Room> checkedOut();
    public List<Room> checkedIn();
}
