package com.example.demo;

import com.example.demo.Util.Util;
import com.example.demo.model.Customer;
import com.example.demo.model.Reservation;
import com.example.demo.model.Room;
import com.example.demo.model.User;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.repository.RoomRepository;
import com.example.demo.repository.UserRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	//LocalDate date = LocalDate.now();
	Date date = new Date();
	String dateFormat = new SimpleDateFormat("dd-MM-yyyy").format(new Date());
//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
//	@JsonFormat(pattern = "MM/dd/yyyy")
//	private LocalDate startDate;

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	ReservationRepository reservationRepository;

	@Autowired
	RoomRepository roomRepository;


	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		List<Customer> customers = new ArrayList<>();
		for( int n = 0; n < 20; n++){
			customers.add( new Customer(0,Util.getFakeFirstName(),Util.getFakeLastName(),Util.getFakeAddress(),Util.getFakeEmail(),Util.getFakephoneNumber(),"Passport"));
		}

//		customerRepository.saveAll( customers);

		User adminUser =new User("Halid","Karabiyik","user@gmail.com","Konya42","hoptillepad","20/08/1996","Adminuser","Admin");
//		userRepository.save(adminUser);
		User gmUser =new User("Halid","Karabiyik","user@gmail.com","Konya42","hoptillepad","20/08/1996","Gmuser","General Manager");
//		userRepository.save(gmUser);
		User receptionistUser =new User("Halid","Karabiyik","user@gmail.com","Konya42","hoptillepad","20/08/1996","Reuser","Receptionist");
//		userRepository.save(receptionistUser);
		User roomCleanerUser =new User("Halid","Karabiyik","user@gmail.com","Konya42","hoptillepad","20/08/1996","Rcuser","Room Cleaner");
//		userRepository.save(roomCleanerUser);

		List<User> users = new ArrayList<>();
		for(int n=0; n<10; n++){
			users.add(new User(Util.getFakeFirstName(),Util.getFakeLastName(),Util.getFakeEmail(),Util.getFakePassword(),Util.getFakeAddress(), String.valueOf(Util.getFakeAge()),Util.getFakeUsername(),"Admin"));
		}

//		userRepository.saveAll(users);


		List<Room> rooms;

		ObjectMapper objectMapper = new ObjectMapper();
		String json = Files.readString(Paths.get("src/main/resources/roomsnew.json"));
		TypeReference<List<Room>> mapType = new TypeReference<List<Room>>() {};
		rooms = objectMapper.readValue(json, mapType);

		roomRepository.saveAll(rooms);



		List<Reservation> reservations = new ArrayList<>();

		Date stDate=Util.getFakeDate();
		Date enDate=new Date(stDate.getTime() + 3600 * 1000 * 24 * 10);

		System.out.println(stDate);
		System.out.println(enDate);


		Iterable<Room> roomsReservation=roomRepository.findAll();
		List<Room> roomList = new ArrayList<>();
		roomsReservation.forEach(roomList :: add);

		int i=0;
		for(int n=0; n<5; n++){
			double price = Util.getFakePrice();

			List<Customer> customerList = new ArrayList<>();
			customerList.add(customers.get(i++));
			customerList.add(customers.get(i++));
			reservations.add(new Reservation(0,stDate,enDate,true,true,true,Util.getFakePrice(),Util.getFakePrice(),0.0,6,date,roomList.get(n),customerList));

		}

	//	reservationRepository.saveAll(reservations);






	}

	/*@Override
	public void run2 (String... args) throws Exception{
		Reservation reservation = new Reservation("22","Halid@halid.com","hoptillepad56","938457348750");
		Reservation reservation1 = reservationRepository.save(reservation);
		System.out.println("ID: " + reservation1.getId());
	}

	 */


}
