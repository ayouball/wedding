package net.wedding.springboot.helloworldapp.controller;

import java.util.concurrent.atomic.AtomicLong;

import net.wedding.springboot.helloworldapp.bean.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class UserController {
	private static final String template = "Wedding, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/user")
	public User greeting(@RequestParam(value = "name", defaultValue = "Packs") String name) {
		return new User(counter.incrementAndGet(), String.format(template, name));
	}
}