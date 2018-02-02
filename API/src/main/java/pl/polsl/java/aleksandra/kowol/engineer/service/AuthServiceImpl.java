package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;
import pl.polsl.java.aleksandra.kowol.engineer.repository.OwnerRepository;
import pl.polsl.java.aleksandra.kowol.engineer.repository.PersonnelRepository;

@Service("authService")
public class AuthServiceImpl implements AuthService {

    private PersonnelRepository personnelRepository ;
    private OwnerRepository ownerRepository ;

    @Autowired
    public void setOwnerRepository(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    @Autowired
    public void setPersonnelRepository(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    @Override
    public Boolean isUniqueLogin(String login) {
        return ownerRepository.findOwnerByLogin(login) == null && personnelRepository.findPersonnelByLogin(login) == null;
    }

    @Override
    public Personnel findPersonByLogin(String login) {
        return personnelRepository.findPersonnelByLogin(login);
    }

    @Override
    public Owner findOwnerByLogin(String login) {
        return ownerRepository.findOwnerByLogin(login);
    }
}
