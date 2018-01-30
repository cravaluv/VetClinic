package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Color;


public interface ColorRepository extends JpaRepository<Color, Integer> {

}
