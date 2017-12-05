package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.repository.OwnerRepository;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service("ownerService")
public class OwnerServiceImpl implements OwnerService {

    private OwnerRepository ownerRepository ;

    @Autowired
    public void setOwnerRepository(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    @Override
    public void saveOwner(Owner owner) {
        ownerRepository.save(owner);
    }

    @Override
    public List<Owner> findAllOwners() {
        return ownerRepository.findAll();
    }

    @Override
    public Owner findOwnerById(Integer id) {
        return ownerRepository.findOne(id);
    }

}
