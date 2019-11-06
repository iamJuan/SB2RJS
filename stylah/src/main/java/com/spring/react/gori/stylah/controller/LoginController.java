package com.spring.react.gori.stylah.controller;

import com.spring.react.gori.stylah.model.Login;
import com.spring.react.gori.stylah.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @RequestMapping("/logins")
    public Iterable<Login> getUsers(){
        return loginRepository.findAll();
    }
}
