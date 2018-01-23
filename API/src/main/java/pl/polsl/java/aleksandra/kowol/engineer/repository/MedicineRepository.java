package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Medicine;


public interface MedicineRepository extends JpaRepository<Medicine, Integer> {

}
