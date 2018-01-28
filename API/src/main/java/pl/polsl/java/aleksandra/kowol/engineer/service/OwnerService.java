package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;

import java.util.List;

public interface OwnerService {

    List<Owner> findAllOwners();

    Owner findOwnerById(Integer id);

    void saveOwner(Owner owner);

    Owner findOwnerByLogin(String login);

}
