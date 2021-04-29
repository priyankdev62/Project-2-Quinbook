package com.quinbook.notifications;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class NotificationsApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificationsApplication.class, args);
	}

}
