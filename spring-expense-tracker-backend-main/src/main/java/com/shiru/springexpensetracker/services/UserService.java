package com.shiru.springexpensetracker.services;

import com.shiru.springexpensetracker.models.User;

public interface UserService {
	public User createUser(User user);
	public User getUserByUsername(String username);
	public User saveUser(User user);
}
