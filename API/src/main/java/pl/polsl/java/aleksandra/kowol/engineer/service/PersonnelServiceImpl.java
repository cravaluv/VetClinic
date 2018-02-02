package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;
import pl.polsl.java.aleksandra.kowol.engineer.repository.OwnerRepository;
import pl.polsl.java.aleksandra.kowol.engineer.repository.PersonnelRepository;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service("personnelService")
public class PersonnelServiceImpl implements PersonnelService {

    private PersonnelRepository personnelRepository ;

    @Autowired
    public void setPersonnelRepository(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    @Override
    public List<Personnel> findAllPersonnel() {
        return personnelRepository.findAll();
    }

    @Override
    public Personnel findPersonById(Integer id) {
        return personnelRepository.findOne(id);
    }

    @Override
    public void savePerson(Personnel personnel) {
        personnelRepository.save(personnel);
    }


}
