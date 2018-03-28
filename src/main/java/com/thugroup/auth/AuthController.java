package com.thugroup.auth;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(path="/auth")
public class AuthController {


    @RequestMapping("/login")
    public String toLogin(Model model) {

        return "login";

    }

    @RequestMapping("/prof")
    public String loginRes(Model model) {

        return "profile";

    }

    @RequestMapping("/test2")
    public String test(Model model) {

        return "test2";

    }

}
