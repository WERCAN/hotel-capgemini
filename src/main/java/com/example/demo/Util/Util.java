package com.example.demo.Util;

import com.github.javafaker.Faker;

import java.util.Date;
import java.util.Random;

public class Util {

        private static Faker faker = new Faker();
        public static String getFakeFirstName(){
            return faker.name().firstName();
        }
        public static String getFakeFullName(){
            return faker.name().fullName();
        }
        public static String getFakeAddress(){
            return faker.address().fullAddress();
        }
        public static String getFakeLastName(){return faker.name().lastName();}
        public static String getFakeEmail(){return faker.internet().emailAddress();}
        public static String getFakePassword(){return faker.internet().password();}
        public static String getFakeUsername(){return faker.name().username();}
        Date d1 = new Date(2022, 11, 21);
        Date d2 = new Date(2022, 5, 21);

        public static Date getFakeDate(){return faker.date().birthday();}
        public static double getFakePrice(){return faker.number().randomDouble(2,100,1000);}
        public static String getFakephoneNumber(){return faker.phoneNumber().cellPhone();}

    public static int getFakeAge() {
            Random r = new Random();
            int low = 18;
            int high = 88;
            int age = r.nextInt(high - low) + low;
            return age;

    }
}
