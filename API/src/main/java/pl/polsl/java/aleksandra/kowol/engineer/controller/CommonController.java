package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pl.polsl.java.aleksandra.kowol.engineer.entity.*;
import pl.polsl.java.aleksandra.kowol.engineer.service.CommonService;

@RestController
@CrossOrigin(origins = "*")
public class CommonController  {

    private CommonService commonService;

    @Autowired
    public void setCommonService(CommonService commonService) {
        this.commonService = commonService;
    }

    // -------------------Get all medicines---------------------------------------------

    @RequestMapping(value = "/medicines/all", method = RequestMethod.GET)
    public ResponseEntity<List<Medicine>> listAllMedicines() {
        List<Medicine> medicines = commonService.findAllMedicines();
        return new ResponseEntity<>(medicines, HttpStatus.OK);
    }

    @RequestMapping(value = "/colors/all", method = RequestMethod.GET)
    public ResponseEntity<List<Color>> listAllColors() {
        List<Color> colors = commonService.findAllColors();
        return new ResponseEntity<>(colors, HttpStatus.OK);
    }

    @RequestMapping(value = "/colors/dupa", method = RequestMethod.GET)
    public ResponseEntity<List<Color>> dupa() {
        List<Color> colors = commonService.findAllColors();
        return new ResponseEntity<>(colors, HttpStatus.OK);
    }

    @RequestMapping(value = "/visit_types/all", method = RequestMethod.GET)
    public ResponseEntity<List<VisitType>> listAllVisitTypes() {
        List<VisitType> visitTypes = commonService.findAllVisitType();
        return new ResponseEntity<>(visitTypes, HttpStatus.OK);
    }

    @RequestMapping(value = "/animal_types/all", method = RequestMethod.GET)
    public ResponseEntity<List<AnimalType>> listAllAnimalTypes() {
        List<AnimalType> animalTypes = commonService.findAllAnimalTypes();
        return new ResponseEntity<>(animalTypes, HttpStatus.OK);
    }

    // UPDATE
    @RequestMapping(value = "/medicines/update", method = RequestMethod.POST)
    public ResponseEntity<?> updateMedicines(@RequestBody List<Medicine> medicines) {
        medicines.forEach(medicine -> {
//            Medicine medicineToUpdate = commonService.findMedicineById(medicine.getIdMedicines());
//            if (medicineToUpdate.getAmount() != medicine.getAmount()) {
                commonService.saveMedicine(medicine);
//            }
        });
        return new ResponseEntity<>(medicines, HttpStatus.OK);
    }

    @RequestMapping(value = "/colors/update", method = RequestMethod.POST)
    public ResponseEntity<?> updateColors(@RequestBody List<Color> colors) {
        colors.forEach(color -> commonService.saveColor(color));
        return new ResponseEntity<>(colors, HttpStatus.OK);
    }

    @RequestMapping(value = "/colors/add", method = RequestMethod.POST)
    public ResponseEntity<?> updateColors(@RequestBody Color color) {
        commonService.saveColor(color);
        return new ResponseEntity<>(color, HttpStatus.OK);
    }

    @RequestMapping(value = "/visit_types/update", method = RequestMethod.POST)
    public ResponseEntity<?> updateVisitType(@RequestBody List<VisitType> visitTypes) {
        visitTypes.forEach(visitType -> commonService.saveVisitType(visitType));
        return new ResponseEntity<>(visitTypes, HttpStatus.OK);
    }

    @RequestMapping(value = "/animal_types/update", method = RequestMethod.POST)
    public ResponseEntity<?> updateAnimalType(@RequestBody List<AnimalType> animalTypes) {
        animalTypes.forEach(animalType -> commonService.saveAnimalType(animalType));
        return new ResponseEntity<>(animalTypes, HttpStatus.OK);
    }

    // -------------------Create an animal-------------------------------------------
//    @RequestMapping(value = "/add", method = RequestMethod.POST)
//    public ResponseEntity<?> createUser(@RequestBody Animal animal) {
//        animal.setBirthDate(animal.getBirthDate());
//        animalService.saveAnimal(animal);
//        return new ResponseEntity<>(animal, HttpStatus.CREATED);
//    }

    //    // -------------------Get a User-------------------------------------------
//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public ResponseEntity<?> getOwner(@PathVariable("id") int id) {
//        Owner owner = ownerService.findOwnerById(id);
//        return new ResponseEntity<Owner>(owner, HttpStatus.OK);
//    }
//
    // UPDATE
//    @RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
//    public ResponseEntity<?> updateAnimal(@PathVariable("id") int id, @RequestBody Animal animal) {
//        Animal animalToUpdate = animalService.findAnimalById(id);
//        if (animalToUpdate != null ) {
//            animalToUpdate.update(animal);
//            animalService.saveAnimal(animalToUpdate);
//
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
