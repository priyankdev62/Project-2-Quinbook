package com.example.FacebookPost.repository;

/**
 * @author meghna.bajoria
 * @since 10/03/21 9:00 PM
 **/
import com.example.FacebookPost.entity.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LoginDao {

    public static final String HASH_KEY = "Login";
    @Autowired
    private RedisTemplate template;

    public Login save(Login login){
        template.opsForHash().put(HASH_KEY,login.getUserName(),login);
        return login;
    }

    public List<Login> findAll(){

        return template.opsForHash().values(HASH_KEY);
    }

    public Login findUserById(String userName){
        return (Login) template.opsForHash().get(HASH_KEY,userName);
    }


    public String deleteUser(String sessionId){
        template.opsForHash().delete(HASH_KEY,sessionId);
        return "User removed !!";
    }



}

