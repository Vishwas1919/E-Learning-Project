package vishal.in.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vishal.in.entity.CitizenPlan;
import vishal.in.repo.CitizenPlanRepo;
import vishal.in.request.SearchRequest;

@Service
public class ReportServiceImpl implements ReportService{

	@Autowired
	private CitizenPlanRepo repo;
	
	@Override
	public List<String> getPlanNames() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> getPlanStatuses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CitizenPlan> search(SearchRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean exportExcel() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean exportPdf() {
		// TODO Auto-generated method stub
		return null;
	}

}
