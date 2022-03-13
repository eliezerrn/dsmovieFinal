package com.devsuperior.dsmovie.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.Entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
