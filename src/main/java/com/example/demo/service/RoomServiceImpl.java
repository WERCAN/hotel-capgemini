package com.example.demo.service;

import com.example.demo.model.Room;
import com.example.demo.model.User;
import com.example.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

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
        List<Room> roomList = new ArrayList<>();
        rooms.forEach(roomList::add);

        roomList.removeIf(room -> !room.isRoomActive());
        return roomList;
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
