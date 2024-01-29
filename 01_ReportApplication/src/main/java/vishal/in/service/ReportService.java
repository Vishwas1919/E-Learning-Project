package vishal.in.service;

import java.util.List;

import vishal.in.entity.CitizenPlan;
import vishal.in.request.SearchRequest;

public interface ReportService {
	
	public List<String> getPlanNames();
	
	public List<String> getPlanStatuses();
	
	public List<CitizenPlan> search(SearchRequest request);
	
	public Boolean exportExcel();
	
	public Boolean exportPdf();

}
