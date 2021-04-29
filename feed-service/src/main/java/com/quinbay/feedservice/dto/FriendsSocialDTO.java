package com.quinbay.feedservice.dto;

import lombok.Data;

import java.util.List;

@Data

public class FriendsSocialDTO {
	private String userName;
	private List<Friend> friendList;
	private List<String> gotBlockedByList;
	private Policy policy;
}
