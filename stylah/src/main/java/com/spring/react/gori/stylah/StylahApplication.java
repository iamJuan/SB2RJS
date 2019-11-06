package com.spring.react.gori.stylah;

import com.spring.react.gori.stylah.model.Login;
import com.spring.react.gori.stylah.model.User;
import com.spring.react.gori.stylah.repository.LoginRepository;
import com.spring.react.gori.stylah.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@EnableAutoConfiguration
@SpringBootApplication
public class StylahApplication {

	private static final Logger logger = LoggerFactory.getLogger(StylahApplication.class);

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private LoginRepository loginRepository;

	public static void main(String[] args) {
		SpringApplication.run(StylahApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(){
//		return args -> {
//
//			User user = new User("John","Aparejado","Orani, Bataan", "Male", 19880921, 20190203);
//			userRepository.save(user);
//
//			Login login = new Login("juan21", "$2y$12$4/hK8p2hRXjrmUEmyimFIORobjKciyUmOTqwQZMDbQJf8qhPIXmzG", "ADMIN", user);
//			loginRepository.save(login);
//		};
//	}
}
