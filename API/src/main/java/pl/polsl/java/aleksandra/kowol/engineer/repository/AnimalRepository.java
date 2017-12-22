package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;


public interface AnimalRepository extends JpaRepository<Animal, Integer> {


}
