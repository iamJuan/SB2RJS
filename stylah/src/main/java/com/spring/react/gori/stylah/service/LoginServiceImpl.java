package com.spring.react.gori.stylah.service;

import com.spring.react.gori.stylah.model.Login;
import com.spring.react.gori.stylah.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements UserDetailsService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Login currentLogin = loginRepository.findByUsername(username);
        return new org.springframework.security.core.userdetails
                .User(username, currentLogin.getPassword(), true, true, true, true,
                AuthorityUtils.createAuthorityList(currentLogin.getRole()));
    }
}
