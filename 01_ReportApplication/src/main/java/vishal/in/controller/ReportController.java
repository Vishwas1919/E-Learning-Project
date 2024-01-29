package vishal.in.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import vishal.in.service.ReportService;

@Controller
public class ReportController {

	@Autowired
	private ReportService service;
}
