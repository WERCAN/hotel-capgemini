package com.example.demo.service;
import com.example.demo.model.Room;


public interface RoomService {
    public Iterable<Room> findAll();
    public Room createRoom(Room room);
    public boolean deleteRoom(long roomId);
}
