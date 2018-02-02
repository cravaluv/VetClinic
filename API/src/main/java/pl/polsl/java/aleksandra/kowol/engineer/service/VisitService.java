package pl.polsl.java.aleksandra.kowol.engineer.service;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;
import pl.polsl.java.aleksandra.kowol.engineer.entity.VisitMedicine;

import java.util.Date;
import java.util.List;

public interface VisitService {


    List<Visit> findAllVisits();

    void saveVisit(Visit visit);

    List<Visit> getVisitByDate(String date);

    Visit getVisitById(int id);

    List<Visit> getVisitByCurrentWeek();

    List<Visit> getTodayVisits();

//    void saveVisitMedicine(VisitMedicine visitMedicine);
//
//    void deleteVisitMedicine(VisitMedicine visitMedicine);


    //    boolean isOwnerExist(Owner owner)

}
