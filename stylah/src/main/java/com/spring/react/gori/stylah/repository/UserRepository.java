package com.spring.react.gori.stylah.repository;

import com.spring.react.gori.stylah.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface UserRepository extends CrudRepository<User, Long> {

    List<User> findByGenderOrderByBirthdayAsc(String gender);
    List<User> findByGenderAndAddress(String gender, String address);

    @Query("select u from User u where u.dateRegistered like :dateRegistered%")
    List<User> findByDateRegistered(long dateRegistered);
}
