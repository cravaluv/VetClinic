package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.repository.AnimalRepository;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service("animalService")
public class AnimalServiceImpl implements AnimalService {

    private AnimalRepository animalRepository ;

    @Autowired
    public void setAnimalRepository(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    @Override
    public void saveAnimal(Animal animal) {
        animalRepository.save(animal);
    }

    @Override
    public List<Animal> findAllAnimals() {
        return animalRepository.findAll();
    }

    @Override
    public Animal findAnimalById(Integer id) {
        return animalRepository.findOne(id);
    }

}
