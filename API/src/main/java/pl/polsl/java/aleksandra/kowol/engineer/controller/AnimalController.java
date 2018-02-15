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
import pl.polsl.java.aleksandra.kowol.engineer.service.OwnerService;

import javax.transaction.Transactional;
import javax.validation.Valid;

@RestController
@RequestMapping("/animals")
public class AnimalController  {

    private AnimalService animalService;
    private OwnerService ownerService;

    @Autowired
    public void setAnimalService(AnimalService animalService) {
        this.animalService = animalService;
    }
    @Autowired
    public void setOwnerService(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Animal>> listAllAnimals() {
        List<Animal> animals = animalService.findAllAnimals();
        return new ResponseEntity<>(animals, HttpStatus.OK);
    }

    @RequestMapping(value = "/add/{idOwner}", method = RequestMethod.POST)
    public ResponseEntity<?> addAnimal(@PathVariable("idOwner") int idOwner, @RequestBody @Valid Animal animal) {
        Owner owner = ownerService.findOwnerById(idOwner);
        animal.setOwner(owner);
        owner.getAnimals().add(animal);
        animalService.saveAnimal(animal);
        return new ResponseEntity<>(animal, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/visits/{idAnimal}", method = RequestMethod.GET)
    public ResponseEntity<?> listAnimalVisits(@PathVariable("idAnimal") int idAnimal) {
        Animal animal = animalService.findAnimalById(idAnimal);
        return new ResponseEntity<>(animal.getVisits(), HttpStatus.OK);
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateAnimal(@PathVariable("id") int id, @RequestBody @Valid Animal animal) {
        Animal animalToUpdate = animalService.findAnimalById(id);
        if (animalToUpdate != null ) {
            animalToUpdate.update(animal);
            animalService.saveAnimal(animalToUpdate);
            return new ResponseEntity<>(animal, HttpStatus.OK);
        } else return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
