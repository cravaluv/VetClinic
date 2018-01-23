package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;

import java.util.Date;
import java.util.List;


public interface VisitRepository extends JpaRepository<Visit, Integer> {

    /**
     * Finds persons by using the last name as a search criteria.
     * @param lastName
     * @return  A list of persons which last name is an exact match with the given last name.
     *          If no persons is found, this method returns an empty list.
     */
    @Query("select v from Visit v where v.date like ?1")
    public List<Visit> findVisitByDate(String date);

}
