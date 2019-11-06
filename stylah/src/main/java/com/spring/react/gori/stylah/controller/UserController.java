package com.spring.react.gori.stylah.controller;

import com.spring.react.gori.stylah.model.User;
import com.spring.react.gori.stylah.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/users", method = GET)
    public Iterable<User> getUsers(){
        return userRepository.findAll();
    }

    @RequestMapping(value = "/users/findByGenderOrderByBirthdayAsc", method = GET)
    public Iterable<User> getUserByGenderOrderByBirthdayAsc(String gender){return userRepository.findByGenderOrderByBirthdayAsc(gender);}
}
