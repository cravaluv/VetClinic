package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
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
//        if (owners.isEmpty()) {
//            return new ResponseEntity(HttpStatus.NO_CONTENT);
//            // You many decide to return HttpStatus.NOT_FOUND
//        }
        return new ResponseEntity<>(owners, HttpStatus.OK);
    }

    // -------------------Create a User-------------------------------------------
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody Owner owner, UriComponentsBuilder ucBuilder) {
//        logger.info("Creating User : {}", owner);
//
//        if (ownerService.isUserExist(owner)) {
//            logger.error("Unable to create. A User with name {} already exist", user.getName());
//            return new ResponseEntity(new CustomErrorType("Unable to create. A User with name " +
//                    user.getName() + " already exist."),HttpStatus.CONFLICT);
//        }
        ownerService.saveOwner(owner);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/owners/{id}").buildAndExpand(owner.getIdOwner()).toUri());
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }

    // -------------------Get a User-------------------------------------------
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOwner(@PathVariable("id") int id) {
//        logger.info("Fetching User with id {}", id);
        Owner owner = ownerService.findOwnerById(id);
//        if (user == null) {
//            logger.error("User with id {} not found.", id);
//            return new ResponseEntity(new CustomErrorType("User with id " + id
//                    + " not found"), HttpStatus.NOT_FOUND);
//        }
        return new ResponseEntity<Owner>(owner, HttpStatus.OK);
    }
}
