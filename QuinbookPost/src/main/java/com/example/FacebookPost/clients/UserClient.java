package com.example.FacebookPost.clients;

/**
 * @author meghna.bajoria
 * @since 10/03/21 7:11 PM
 **/

import com.example.FacebookPost.dto.FriendProfileDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@FeignClient(name = "user-name-fetching", url="http://10.177.68.27:8090")
public interface UserClient {

    @RequestMapping(method = RequestMethod.GET,path="/userName")
    FriendProfileDTO getFriendProfile(@RequestParam("userName") String userName);
}