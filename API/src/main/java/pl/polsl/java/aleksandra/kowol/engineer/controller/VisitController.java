package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Animal;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Visit;
import pl.polsl.java.aleksandra.kowol.engineer.service.AnimalService;
import pl.polsl.java.aleksandra.kowol.engineer.service.VisitService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/visits")
public class VisitController  {

    private VisitService visitService;

    @Autowired
    public void setVisitService(VisitService visitService) {
        this.visitService = visitService;
    }

    // -------------------Get all visits---------------------------------------------

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Visit>> listAllVisits() {
        List<Visit> visits = visitService.findAllVisits();
        return new ResponseEntity<>(visits, HttpStatus.OK);
    }

    // -------------------Create an visit-------------------------------------------
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> addVisit(@RequestBody Visit visit) {
        visit.setDate(visit.getDate());
        visitService.saveVisit(visit);
        return new ResponseEntity<>(visit, HttpStatus.CREATED);
    }

    // -------------------Get daily visits-------------------------------------------
    @RequestMapping(value = "/day/{date}", method = RequestMethod.GET)
    public ResponseEntity<List<Visit>> listDayVisit(@PathVariable("date") Date date) {
        List<Visit> visits = visitService.getVisitByDate(date);
        return new ResponseEntity<>(visits, HttpStatus.OK);
    }

    //    // -------------------Get a User-------------------------------------------
//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public ResponseEntity<?> getOwner(@PathVariable("id") int id) {
//        Owner owner = ownerService.findOwnerById(id);
//        return new ResponseEntity<Owner>(owner, HttpStatus.OK);
//    }
//
//    // UPDATE
//    @RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
//    public ResponseEntity<?> updateVisit(@PathVariable("id") int id, @RequestBody Visit visit) {
//        Animal animalToUpdate = visit.findAnimalById(id);
//        if (animalToUpdate != null ) {
//            animalToUpdate.update(animal);
//            animalService.saveAnimal(animalToUpdate);
//            return new ResponseEntity<>(animal, HttpStatus.OK);
//        } else return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
//    }
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
