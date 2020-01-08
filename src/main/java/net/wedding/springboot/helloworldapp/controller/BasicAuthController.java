package net.wedding.springboot.helloworldapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.wedding.springboot.helloworldapp.bean.AuthenticationBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/")
public class BasicAuthController {
	@GetMapping(path = "/auth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated");
	}	
}
