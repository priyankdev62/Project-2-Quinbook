package com.quinbay.feedservice.service;

import com.quinbay.feedservice.dto.Friend;
import com.quinbay.feedservice.dto.FriendListDTO;
import com.quinbay.feedservice.dto.FriendsProfileDetails;
import com.quinbay.feedservice.entity.FeedEntity;

import java.util.List;

public interface FeedService {

	List<FeedEntity> getFriendProfile(String userName);
	List<FeedEntity> fetchPost(List<Friend> friendList);
	List<String> fetchFriendList(String userName);
}
