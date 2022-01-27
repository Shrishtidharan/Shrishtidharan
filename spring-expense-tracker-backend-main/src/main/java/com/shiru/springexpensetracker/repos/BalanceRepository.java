package com.shiru.springexpensetracker.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiru.springexpensetracker.models.Balance;

public interface BalanceRepository extends JpaRepository<Balance, Long> {

}
