package com.spring.react.gori.stylah.repository;

import com.spring.react.gori.stylah.model.Login;
import com.spring.react.gori.stylah.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
public class LoginRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private LoginRepository loginRepository;
    @Autowired
    private UserRepository userRepository;

    @Test
    public void test_saveLogin() {
        User user = new User("John","Aparejado","Orani, Bataan", "Male", 19880921L, 20190203L);
        entityManager.persistAndFlush(user);
        Login login = new Login("juan21", "$2y$12$4/hK8p2hRXjrmUEmyimFIORobjKciyUmOTqwQZMDbQJf8qhPIXmzG", "ADMIN", user);

        entityManager.persistAndFlush(login);
        assertThat(login.getId()).isNotNull();
    }

    @Test
    public void test_deleteLogin() {
        User user = new User("John","Aparejado","Orani, Bataan", "Male", 19880921L, 20190203L);
        entityManager.persistAndFlush(user);

        Login login = new Login("juan21", "$2y$12$4/hK8p2hRXjrmUEmyimFIORobjKciyUmOTqwQZMDbQJf8qhPIXmzG", "ADMIN", user);

        entityManager.persistAndFlush(login);

        loginRepository.deleteAll();
        assertThat(loginRepository.findAll()).isEmpty();
    }
}