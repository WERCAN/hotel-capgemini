package com.bank.api;

import java.math.BigDecimal;

public class BankingApplication {

    public static void main(String[] args) {

        BankingApi bankingApi = new BankingApiImpl();

        try {
            bankingApi.login("user1","S&cret");

            bankingApi.transfer( new BigDecimal("45777.89"), "user1", "user2");

            bankingApi.logout("user1");

        } catch (Exception e) {
            System.out.println( e.getMessage());
        }

    }
}
