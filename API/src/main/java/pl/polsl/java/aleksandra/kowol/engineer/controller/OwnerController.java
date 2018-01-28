package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.service.OwnerService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/owners")
public class OwnerController  {

    private OwnerService ownerService;

    @Autowired
    public void setOwnerService(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    // -------------------Retrieve All Users---------------------------------------------

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Owner>> listAllOwners() {
        List<Owner> owners = ownerService.findAllOwners();
        return new ResponseEntity<>(owners, HttpStatus.OK);
    }

    // -------------------Create a User-------------------------------------------
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody Owner owner) {
        if (owner.getOnlineReg()) {
            String hashed = BCrypt.hashpw(owner.getPassword(), BCrypt.gensalt());
            owner.setPassword(hashed);
        }
        ownerService.saveOwner(owner);
        return new ResponseEntity<>(owner, HttpStatus.CREATED);
    }

    // -------------------Get a User-------------------------------------------
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOwner(@PathVariable("id") int id) {
        Owner owner = ownerService.findOwnerById(id);
        return new ResponseEntity<>(owner, HttpStatus.OK);
    }

    // UPDATE
    @RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
    public ResponseEntity<?> createAnimal(@PathVariable("id") int id, @RequestBody Owner owner, UriComponentsBuilder ucBuilder) {
        if (ownerService.findOwnerById(id) != null ) {
            ownerService.saveOwner(owner);

            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(ucBuilder.path("/owners/{id}").buildAndExpand(owner.getIdOwner()).toUri());
            return new ResponseEntity<String>(headers, HttpStatus.OK);
        } else return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/{id}/animals", method = RequestMethod.GET)
    public ResponseEntity<?> getOwnerAnimals(@PathVariable("id") int id) {
//        logger.info("Fetching User with id {}", id);
        Owner owner = ownerService.findOwnerById(id);
        List<Animal> animals = owner.getAnimals();
        return new ResponseEntity<>(animals, HttpStatus.OK);
    }
}
