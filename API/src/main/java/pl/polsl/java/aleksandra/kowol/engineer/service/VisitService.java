package pl.polsl.java.aleksandra.kowol.engineer.service;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;

import java.util.Date;
import java.util.List;

public interface VisitService {


    List<Visit> findAllVisits();

    void saveVisit(Visit visit);

    List<Visit> getVisitByDate(Date date);

    Animal getAnimalByVisitId(int id);


    //    boolean isOwnerExist(Owner owner)

}
