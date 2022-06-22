package com.example.demo.mvc;

import com.example.demo.model.Room;
import com.example.demo.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoomMvc {
    @GetMapping("/rooms")
    public String roomPage(Room room) {

        System.out.println("Inside roompage");

        return "room";
    }
}
