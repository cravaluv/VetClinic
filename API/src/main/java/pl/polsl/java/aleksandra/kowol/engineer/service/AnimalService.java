package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;

import java.util.List;

public interface AnimalService {

    List<Animal> findAllAnimals();

    Animal findAnimalById(Integer id);

    void saveAnimal(Animal animal);

    //    boolean isOwnerExist(Owner owner)

}
