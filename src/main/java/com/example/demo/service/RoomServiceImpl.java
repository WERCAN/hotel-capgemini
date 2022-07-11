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
    public boolean createRoom(Room room) {
        if(checkRoomNumber(room)) {
            Room createdRoom = roomRepository.save(room);
            return true;
        }else if(room.getId() !=0 && checkEditRoomNumber(room)){

            Room editedRoom = roomRepository.save(room);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteRoom(long roomId) {
        roomRepository.deleteById(roomId);
        return true;
    }

    public boolean checkRoomNumber (Room roomNumber){
        Iterable<Room> rooms;
        List<Room> roomList = new ArrayList<>();
        rooms=roomRepository.findAll();
        rooms.forEach(roomList :: add);

        for (Room room : roomList) {
            if(roomNumber.getRoomNumber()==room.getRoomNumber()) {return false;}
        }
        return true;
    }



    public boolean checkEditRoomNumber(Room room){
        Iterable<Room> rooms;
        List<Room> roomList = new ArrayList<>();
        rooms=roomRepository.findAll();
        rooms.forEach(roomList :: add);

        for (Room room1 : roomList) {
            if(room1.getId()==room.getId()&&room1.getRoomNumber()==room.getRoomNumber()){return true;}
        }
        return false;
    }



}
