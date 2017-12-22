package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;

import java.util.List;


public interface AnimalRepository extends JpaRepository<Animal, Integer> {
//
//    @Query( "select a from Animal a where a.idOwner = :id" )
//    List<Animal> findByOwnerId(@Param("id") Integer ownerId);
}
