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
import pl.polsl.java.aleksandra.kowol.engineer.service.VisitService;

@RestController
public class CommonController  {

    private CommonService commonService;

    private VisitService visitService;

    @Autowired
    public void setCommonService(CommonService commonService) {
        this.commonService = commonService;
    }

    @Autowired
    public void setVisitService(VisitService visitService) {
        this.visitService = visitService;
    }

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

    @RequestMapping(value = "/roles/all", method = RequestMethod.GET)
    public ResponseEntity<List<Role>> listAllRoles() {
        List<Role> roles = commonService.findAllRoles();
        return new ResponseEntity<>(roles, HttpStatus.OK);
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

    @RequestMapping(value = "/medicines/add", method = RequestMethod.POST)
    public ResponseEntity<?> addMedicine(@RequestBody Medicine medicine) {
        commonService.saveMedicine(medicine);
        return new ResponseEntity<>(medicine, HttpStatus.OK);
    }

    @RequestMapping(value = "/colors/add", method = RequestMethod.POST)
    public ResponseEntity<?> addColor(@RequestBody Color color) {
        commonService.saveColor(color);
        return new ResponseEntity<>(color, HttpStatus.OK);
    }


    @RequestMapping(value = "/visit_types/add", method = RequestMethod.POST)
    public ResponseEntity<?> addVisitType(@RequestBody VisitType visitType) {
        commonService.saveVisitType(visitType);
        return new ResponseEntity<>(visitType, HttpStatus.OK);
    }

    @RequestMapping(value = "/animal_types/add", method = RequestMethod.POST)
    public ResponseEntity<?> addAnimalType(@RequestBody AnimalType animalType) {
        commonService.saveAnimalType(animalType);
        return new ResponseEntity<>(animalType, HttpStatus.OK);
    }
}
