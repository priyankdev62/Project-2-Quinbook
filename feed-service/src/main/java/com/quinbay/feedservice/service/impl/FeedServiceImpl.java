package com.quinbay.feedservice.service.impl;

import com.quinbay.feedservice.client.FriendClient;
import com.quinbay.feedservice.client.PostClient;
import com.quinbay.feedservice.dto.Friend;
import com.quinbay.feedservice.dto.FriendsSocialDTO;
import com.quinbay.feedservice.entity.FeedEntity;
import com.quinbay.feedservice.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FeedServiceImpl implements FeedService {
	@Autowired
	FriendClient friendClient;

	@Autowired
	PostClient postClient;

	FriendsSocialDTO friendsSocialDTO;

	@Override
	public List<FeedEntity> getFriendProfile(String userName) {
		try{
			friendsSocialDTO = friendClient.fetchFriendList(userName);
		}catch (Exception e){
			System.out.println(e);
		}
		return fetchPost(friendsSocialDTO.getFriendList());
	}

	public List<FeedEntity> fetchPost(List<Friend> friendList) {
		List<FeedEntity> feedEntityList1 = new ArrayList<>();
		try {

			for (Friend friend : friendList) {
				String userName = friend.getUserName();
				List<FeedEntity> feedEntityList = postClient.getFeedPost(userName);
				for (FeedEntity feedEntityinList : feedEntityList) {
//					feedEntityList1.add(feedEntityinList);
				}

			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return feedEntityList1;
	}

	@Override
	public List<String> fetchFriendList(String userName) {
		List<String> friendListByUserName = new ArrayList<>();
		try{
			friendsSocialDTO = friendClient.fetchFriendList(userName);
			List<Friend> friendListFromSocialDTO = friendsSocialDTO.getFriendList();
			for (Friend friend : friendListFromSocialDTO) {
				friendListByUserName.add(friend.getUserName());
			}
		}catch(Exception e){
			System.out.println(e);
		}
		return friendListByUserName;
	}


}
