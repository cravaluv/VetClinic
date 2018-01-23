package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.polsl.java.aleksandra.kowol.engineer.entity.AnimalType;


public interface AnimalTypeRepository extends JpaRepository<AnimalType, Integer> {

}
