package com.shiru.springexpensetracker.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiru.springexpensetracker.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findFirstByUsername(String username);
}
