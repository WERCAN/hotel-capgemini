package com.bank.api;

import java.math.BigDecimal;

public interface BankingApi {

    public void login( String user, String password) throws Exception;
    public void logout( String user);
    public void transfer (BigDecimal amount, String userFrom, String userTo) throws Exception;
}
