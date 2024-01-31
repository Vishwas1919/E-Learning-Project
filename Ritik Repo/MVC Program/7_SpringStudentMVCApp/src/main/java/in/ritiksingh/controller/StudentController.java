package in.ritiksingh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import in.ritiksingh.binding.Student;

@Controller
public class StudentController {
	@GetMapping("/")
	public String shoeIndex(Model model)
	{
		Student sobjt=new Student();
		model.addAttribute("student",sobjt);
		return "index";
	}

}
