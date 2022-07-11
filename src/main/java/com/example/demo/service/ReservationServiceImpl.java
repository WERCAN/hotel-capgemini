package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.model.Filter;
import com.example.demo.model.Reservation;
import com.example.demo.model.Room;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService{


    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private CustomerService customerService;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    
    @Autowired
    private RoomService roomService;
    

    @Override
    public Iterable<Reservation> findAll() {
        Iterable<Reservation> reservations = reservationRepository.findAll();


        return reservations;
    }

    @Override
    public Reservation createReservation(Reservation reservation) {

        Reservation reservationCreated = reservationRepository.save(reservation);
        return reservationCreated;
    }
    @Override
    public boolean deleteReservation(long reservationId) {
        reservationRepository.deleteById(reservationId);
        return true;
    }

    @Override
    public List<Room> getAvailableRooms(Filter filter) {
        Iterable<Room> allRooms = roomService.findAll();
        List<Room> rooms = new ArrayList<Room>();
        allRooms.forEach(rooms :: add);
        List <Room> availableRooms= new ArrayList<Room>();


        Iterable<Reservation> allReservations = reservationRepository.findAll();



        for (Reservation reservation : allReservations) {
            if(reservation.getStartDate().before(filter.getEndDate()) &&reservation.getEndDate().after(filter.getStartDate())){
                rooms.remove(reservation.getRoom());
            }
        }

        rooms.removeIf(room -> !room.isCleanRoom());

        rooms.removeIf(room -> room.isSmoke() == !filter.isSmoking());

        rooms.removeIf(room -> room.isDisabled() == !filter.isDisabled());

        for (Room room : rooms) {
            if(room.getRoomType().equals(filter.getRoomType())&&
                    room.getSizePerson()>=filter.getAdultSize()&&
                    room.getChildrenPlace()>= filter.getChildrenSize()){
                    availableRooms.add(room);
            }
        }






//        if((room.isSmoke()== filter.isSmoking() ||
//                room.isDisabled()== filter.isDisabled())&&room.isCleanRoom()==true){
//            availableRooms.add(room);
//            }
        
        
        return availableRooms;
    }

    @Override
    public Customer findLastCustomer() {

        Iterable<Customer> customers = customerService.findAll();
        List<Customer> customerList = new ArrayList<>();
        customers.forEach(customerList :: add);
        Customer lastCustomer = customerList.get(customerList.size()-1);


        return lastCustomer;
    }


}
