package com.bank.api;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BankingApiImpl implements  BankingApi{

    private Map<String, String> credentials = new HashMap();
    private List<String> loggedInUser = new ArrayList();

    // Create constructor
    // add credentials


    public BankingApiImpl() {
        credentials.put("user1","S&cret");
    }


    @Override
    public void login(String user, String password) throws Exception {
        
        authenticateUser( user, password);
        
        // No exception is thrown
        loggedInUser.add(user);
        System.out.println("User '" + user + "' is logged in");
        
    }


    private void authenticateUser(String user, String password) throws Exception{

        // Call some internal service to check credentials in database
        // Throw an exception if user cannot be authenticated
        if(!credentials.containsKey(user)){
            throw new Exception("User not found");
        }

        if(!credentials.get(user).equals(password)){
            throw new Exception("Password incorrect");
        }

    }

    @Override
    public void logout(String user) {
        loggedInUser.remove(user);
        System.out.println("User '" + user + "' is logged out");
    }


    private boolean isUserLoggedIn(String user){
        return loggedInUser.contains(user);
    }


    private BigDecimal getBalance(String user) {
        return new BigDecimal( "1234.56");
    }

    @Override
    public void transfer(BigDecimal amount, String userFrom, String userTo) throws Exception {

        if( !isUserLoggedIn(userFrom)){
            throw new Exception("User must log in first");
        }

        checkBalance( userFrom, amount);

        // No exception, so transfer the money
        System.out.println("Money is transferred");
    }


    private void checkBalance(String userFrom, BigDecimal amount) throws Exception {
        if (getBalance(userFrom).compareTo( amount) < 0){
            throw new Exception("Balance insufficient");
        }
    }

}
