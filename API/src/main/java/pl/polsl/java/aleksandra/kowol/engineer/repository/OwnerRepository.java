package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;


public interface OwnerRepository extends JpaRepository<Owner, Integer> {

    @Query("select o from Owner o where o.login = :login")
    public Owner findOwnerByLogin(@Param("login") String login);

}
