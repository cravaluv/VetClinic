package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;
import pl.polsl.java.aleksandra.kowol.engineer.repository.VisitRepository;

import java.util.List;

@Service("visitService")
public class VisitServiceImpl implements VisitService {

    private VisitRepository visitRepository ;

    @Autowired
    public void setVisitRepository(VisitRepository visitRepository) {
        this.visitRepository = visitRepository;
    }


    @Override
    public void saveVisit(Visit visit) {
        visitRepository.save(visit);
    }

    @Override
    public List<Visit> getVisitByDate(String date) {
        return visitRepository.findVisitByDate(date);
    }

    @Override
    public Visit getVisitById(int id) {
        return visitRepository.findOne(id);
    }

    @Override
    public List<Visit> getVisitByCurrentWeek() {
        return visitRepository.getVisitsByCurrentWeek();
    }

    @Override
    public List<Visit> getTodayVisits() {
        return visitRepository.findTodayVisit();
    }

    @Override
    public List<Visit> findAllVisits() {
        return visitRepository.findAll();
    }

}
