package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;
import pl.polsl.java.aleksandra.kowol.engineer.repository.OwnerRepository;
import pl.polsl.java.aleksandra.kowol.engineer.repository.VisitRepository;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

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
    public List<Visit> getVisitByDate(Date date) {
        DateFormat outputFormatter = new SimpleDateFormat("yyyy-MM-dd");
        return visitRepository.findVisitByDate(outputFormatter.format(date)+'%');
    }

    @Override
    public Animal getAnimalByVisitId(int id) {
        return visitRepository.getAnimalByVisitId(id);
    }

//    @Override
//    public List<Visit> getVisitByAnimalId(int id) {
//        return visitRepository.getVisitByAnimal(id);
//    }

    @Override
    public List<Visit> findAllVisits() {
        return visitRepository.findAll();
    }

}
