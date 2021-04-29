package com.quinbay.feedservice.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.quinbay.feedservice.client.FriendClient;
import com.quinbay.feedservice.client.PostClient;
import com.quinbay.feedservice.dto.Friend;
import com.quinbay.feedservice.dto.FriendsSocialDTO;
import com.quinbay.feedservice.entity.FeedEntity;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
class FeedServiceImplTest {
	@InjectMocks
	private FeedServiceImpl feedServiceImpl;

	@Mock
	private FriendClient friendClient;

	@Mock
	private PostClient postClient;

	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
	}

	@AfterEach
	public void teardown() {

	}

	@Test
	void getFriendProfile() throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Map<String, String>> searchListMock = objectMapper.readValue(
				new URL("file:src/test/resources/friendList.mock"), List.class);
		List<Friend> list = new ArrayList<>();
		for (Map<String, String> objectMap : searchListMock) {
			Friend friend = new Friend();
			friend.setUserName(objectMap.get("userName"));
			list.add(friend);
		}
		FriendsSocialDTO friendsSocialDTO = new FriendsSocialDTO();
		friendsSocialDTO.setFriendList(list);
		Mockito.when(friendClient.fetchFriendList("akhilesh")).thenReturn(friendsSocialDTO);
		List<String> response = feedServiceImpl.fetchFriendList("akhilesh");

		assertEquals(response.size(), 1);
	}

	@Test
	void fetchPost() {
//		ObjectMapper objectMapper=new ObjectMapper();
//		List<Map<String,Object>> feedListMock=objectMapper.readValue(new URL("file:src/test/resources/feedList.mock"),List.class);
//		List<>

	}

	@Test
	void fetchFriendList() {
	}
}
