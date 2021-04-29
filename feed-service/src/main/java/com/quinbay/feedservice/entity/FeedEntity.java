package com.quinbay.feedservice.entity;

import lombok.Data;

import java.util.List;

@Data
public class FeedEntity {
	private String userName;
	private String postId;
	private String postCaption;
	private List<String> postImages;
	private int like;
	private int dislike;
	private List<User> postLikedList;
	private List<User> postDislikedList;
	private String date;
	private String location;
	private List<Comments> commentList;
}
