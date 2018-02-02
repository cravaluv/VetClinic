package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;

import java.util.List;

public interface PersonnelService {

    List<Personnel> findAllPersonnel();

    Personnel findPersonById(Integer id);

    void savePerson(Personnel personnel);

}
