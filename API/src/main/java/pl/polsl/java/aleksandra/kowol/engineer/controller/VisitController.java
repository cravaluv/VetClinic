package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pl.polsl.java.aleksandra.kowol.engineer.entity.*;
import pl.polsl.java.aleksandra.kowol.engineer.service.AnimalService;
import pl.polsl.java.aleksandra.kowol.engineer.service.CommonService;
import pl.polsl.java.aleksandra.kowol.engineer.service.VisitService;

import javax.validation.Valid;

@RestController
@RequestMapping("/visits")
public class VisitController  {

    private VisitService visitService;

    private AnimalService animalService;

    private CommonService commonService;

    @Autowired
    public void setVisitService(VisitService visitService) {
        this.visitService = visitService;
    }

    @Autowired
    public void setAnimalService(AnimalService animalService) {
        this.animalService = animalService;
    }

    @Autowired
    public void setCommonService(CommonService commonService) {
        this.commonService = commonService;
    }


    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Visit>> listAllVisits() {
        List<Visit> visits = visitService.findAllVisits();
        return new ResponseEntity<>(visits, HttpStatus.OK);
    }

    @RequestMapping(value = "/add/{animalId}", method = RequestMethod.POST)
    public ResponseEntity<?> addVisit(@PathVariable("animalId") int animalId, @RequestBody @Valid Visit visit) {
        Animal animal = animalService.findAnimalById(animalId);
        visit.setAnimal(animal);
        animal.getVisits().add(visit);
        visitService.saveVisit(visit);
        return new ResponseEntity<>(visit, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/day/{date}", method = RequestMethod.GET)
    public ResponseEntity<List<Visit>> listDayVisit(@PathVariable("date") String date) {
        List<Visit> visits = visitService.getVisitByDate(date);
        return new ResponseEntity<>(visits, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/animal", method = RequestMethod.GET)
    public ResponseEntity<Animal> listAnimalByVisitId(@PathVariable("id") int id) {
        Visit visit = visitService.getVisitById(id);
        return new ResponseEntity<>(visit.getAnimal(), HttpStatus.OK);
    }

    @RequestMapping(value = "/current_week", method = RequestMethod.GET)
    public ResponseEntity<List<Visit>> listVisitsByCurrentWeek() {
        List<Visit> visits = visitService.getVisitByCurrentWeek();
        return new ResponseEntity<>(visits, HttpStatus.OK);
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateVisit(@PathVariable("id") int id, @RequestBody @Valid Visit visit) {
            Visit visitToUpdate = visitService.getVisitById(id);
            if (visitToUpdate != null) {
                visitToUpdate.update(visit);
                visitService.saveVisit(visitToUpdate);
            }
            return new ResponseEntity<>(visit, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/medicines", method = RequestMethod.GET)
    public ResponseEntity<?> listMedicinesByVisitId(@PathVariable("id") int id) {
        Visit visit = visitService.getVisitById(id);
        return new ResponseEntity<>(visit.getMedicines(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{idVisit}/add/medicine/{idMedicine}", method = RequestMethod.POST)
    public ResponseEntity<?> addMedicineToVisit(@PathVariable("idVisit") int idVisit, @PathVariable("idMedicine") int idMedicine, @RequestBody int amount) {
        Visit visit = visitService.getVisitById(idVisit);
        Medicine medicine = commonService.findMedicineById(idMedicine);
        VisitMedicine visitMedicine = new VisitMedicine();
        visitMedicine.setVisit(visit);
        visitMedicine.setMedicine(medicine);
        visitMedicine.setAmount(amount);
        medicine.setAmount(medicine.getAmount() - amount);
        visit.getMedicines().add(visitMedicine);
        visitService.saveVisit(visit);
        commonService.saveMedicine(medicine);

        return new ResponseEntity<>(visitMedicine, HttpStatus.OK);
    }

    @RequestMapping(value = "/medicine/delete", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteVisitMedicine(@RequestBody VisitMedicine visitMedicine) {
        Visit visit = visitMedicine.getVisit();
        Medicine medicine = visitMedicine.getMedicine();
        medicine.setAmount(medicine.getAmount() + visitMedicine.getAmount());
        visit.getMedicines().remove(visitMedicine);
        commonService.saveMedicine(medicine);
        return new ResponseEntity<>(visit, HttpStatus.OK);
    }

    @RequestMapping(value = "/today", method = RequestMethod.GET)
    public ResponseEntity<?> listTodayVisit() {
        List<Visit> todayVisits = visitService.getTodayVisits();
        return new ResponseEntity<>(todayVisits, HttpStatus.OK);
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
