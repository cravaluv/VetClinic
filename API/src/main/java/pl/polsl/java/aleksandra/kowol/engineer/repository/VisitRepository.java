package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;

import java.util.List;


public interface VisitRepository extends JpaRepository<Visit, Integer> {

    @Query(value="SELECT * FROM veterinary_clinic.visit WHERE DATE(`date`) = ?1", nativeQuery=true)
    public List<Visit> findVisitByDate(String date);

    @Query(value="SELECT * FROM veterinary_clinic.visit WHERE DATE(`date`) = CURDATE()", nativeQuery=true)
    public List<Visit> findTodayVisit();

    @Query(value="SELECT * FROM veterinary_clinic.visit WHERE YEARWEEK(`date`, 1) = YEARWEEK(CURDATE(), 1)", nativeQuery=true)
    public List<Visit> getVisitsByCurrentWeek();
}
