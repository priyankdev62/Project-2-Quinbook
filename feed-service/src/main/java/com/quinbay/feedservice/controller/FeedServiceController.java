package com.quinbay.feedservice.controller;

import com.quinbay.feedservice.dto.Friend;
import com.quinbay.feedservice.entity.FeedEntity;
import com.quinbay.feedservice.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/feed")
public class FeedServiceController {

	@Autowired
	private FeedService feedService;

	@GetMapping("/fetchUserSocial")
	List<FeedEntity> getFriendProfile(@RequestParam("userName") String userName) {
		return feedService.getFriendProfile(userName);
	}
	@GetMapping("/fetchFriendList")
	List<String> fetchFriendList(@RequestParam("userName") String userName){
		return feedService.fetchFriendList(userName);
	}
}
