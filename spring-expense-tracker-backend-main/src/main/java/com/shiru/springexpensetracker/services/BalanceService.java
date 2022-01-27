package com.shiru.springexpensetracker.services;

import com.shiru.springexpensetracker.models.Balance;

public interface BalanceService {
	public Balance saveBalance(Balance balance);
	public Balance createBalance();
}
