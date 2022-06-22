package com.example.demo.service;

import com.example.demo.model.Room;
import com.example.demo.model.User;
import com.example.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RoomServiceImpl implements RoomService{

    private RoomRepository roomRepository;

    public RoomServiceImpl() {
    }

    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository=roomRepository;
    }

    @Override
    public Iterable<Room> findAll() {
        Iterable<Room> rooms = roomRepository.findAll();
        return rooms;
    }

    @Override
    public Room createRoom(Room room) {
        Room createdRoom = roomRepository.save(room);
        return createdRoom;
    }

    @Override
    public boolean deleteRoom(long roomId) {
        roomRepository.deleteById(roomId);
        return true;
    }

}
