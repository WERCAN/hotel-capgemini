package com.example.demo.controller;

import com.example.demo.model.Room;
import com.example.demo.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class RoomController {

    private RoomService roomService;

    public RoomController() {
    }

    @Autowired
    public RoomController (RoomService roomService) {this.roomService=roomService;}

    // http://localhost:9090/api/rooms
    @CrossOrigin
    @GetMapping(value = "/rooms", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Room>> getAllRooms(){

        System.out.println("Inside getAllRooms");

        Iterable<Room> rooms = roomService.findAll();
        return ResponseEntity.ok( rooms);

    }

    // http://localhost:9090/api/rooms
    @CrossOrigin
    @PostMapping(value = "/rooms", consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Room> createRoom( @RequestBody Room room){

        System.out.println("Inside createRoom");

        Room createdRoom = roomService.createRoom(room);

        return ResponseEntity.ok( createdRoom);

    }

    @DeleteMapping(value = "/rooms/{roomId}", produces= MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> deletebyRoomId( @PathVariable Long roomId){
        System.out.println("Inside deleteUserById");
        roomService.deleteRoom(roomId);
        return ResponseEntity.ok( "Room with id: " + roomId + " is deleted");
    }
}
