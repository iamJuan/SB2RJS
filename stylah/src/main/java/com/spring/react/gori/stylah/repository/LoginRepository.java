package com.spring.react.gori.stylah.repository;

import com.spring.react.gori.stylah.model.Login;
import org.springframework.data.repository.CrudRepository;

public interface LoginRepository extends CrudRepository<Login, Long> {
    Login findByUsername(String username);
}
