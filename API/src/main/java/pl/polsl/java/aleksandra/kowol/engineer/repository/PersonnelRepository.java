package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;


public interface PersonnelRepository extends JpaRepository<Personnel, Integer> {

    @Query("select p from Personnel p where p.login = :login")
    public Personnel findPersonnelByLogin(@Param("login") String login);

}
