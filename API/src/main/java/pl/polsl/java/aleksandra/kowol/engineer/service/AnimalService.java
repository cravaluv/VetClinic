package pl.polsl.java.aleksandra.kowol.engineer.service;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;

import java.util.List;

public interface AnimalService {

    List<Owner> findAllAnimals();

    Owner findAnimalById(Integer id);

    void saveAnimal(Animal animal, Owner owner);

    //    boolean isOwnerExist(Owner owner)

}
