package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.service.AnimalService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/animals")
public class AnimalController  {

    private AnimalService animalService;

    @Autowired
    public void setOwnerService(AnimalService animalService) {
        this.animalService = animalService;
    }

    // -------------------Get all animals---------------------------------------------

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Animal>> listAllAnimals() {
        List<Animal> animals = animalService.findAllAnimals();
        return new ResponseEntity<>(animals, HttpStatus.OK);
    }

    // -------------------Create an animal-------------------------------------------
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody Animal animal) {
        animal.setBirthDate(animal.getBirthDate());
        animalService.saveAnimal(animal);
        return new ResponseEntity<>(animal, HttpStatus.CREATED);
    }

//    // -------------------Get a User-------------------------------------------
//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public ResponseEntity<?> getOwner(@PathVariable("id") int id) {
//        Owner owner = ownerService.findOwnerById(id);
//        return new ResponseEntity<Owner>(owner, HttpStatus.OK);
//    }
//
    // UPDATE
    @RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
    public ResponseEntity<?> updateAnimal(@PathVariable("id") int id, @RequestBody Animal animal) {
        Animal animalToUpdate = animalService.findAnimalById(id);
        if (animalToUpdate != null ) {
            animalToUpdate.update(animal);
            animalService.saveAnimal(animalToUpdate);

            return new ResponseEntity<>(animal, HttpStatus.OK);
        } else return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
//
//    @RequestMapping(value = "/{id}/animals", method = RequestMethod.GET)
//    public ResponseEntity<?> getOwnerAnimals(@PathVariable("id") int id) {
////        logger.info("Fetching User with id {}", id);
//        Owner owner = ownerService.findOwnerById(id);
////        if (user == null) {
////            logger.error("User with id {} not found.", id);
////            return new ResponseEntity(new CustomErrorType("User with id " + id
////                    + " not found"), HttpStatus.NOT_FOUND);
////        }
//        return new ResponseEntity<>(owner.getAnimals(), HttpStatus.OK);
//    }
}
