package pl.polsl.java.aleksandra.kowol.engineer.service;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;

import java.util.List;

public interface OwnerService {

    List<Owner> findAllOwners();

    Owner findOwnerById(Integer id);

    void saveOwner(Owner owner);

    //    boolean isOwnerExist(Owner owner)

}
