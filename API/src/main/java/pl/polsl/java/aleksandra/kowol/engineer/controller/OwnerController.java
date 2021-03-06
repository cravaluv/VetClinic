package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.service.AuthService;
import pl.polsl.java.aleksandra.kowol.engineer.service.CommonService;
import pl.polsl.java.aleksandra.kowol.engineer.service.OwnerService;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/owners")
public class OwnerController  {

    private OwnerService ownerService;
    private AuthService authService;
    private CommonService commonService;

    @Autowired
    public void setOwnerService(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @Autowired
    public void setPersonnelService(AuthService authService) {
        this.authService = authService;
    }

    @Autowired
    public void setCommonService(CommonService commonService) {
        this.commonService = commonService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Owner>> listAllOwners() {
        List<Owner> owners = ownerService.findAllOwners();
        return new ResponseEntity<>(owners, HttpStatus.OK);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody @Valid Owner owner) {
        if (owner.getOnlineReg()) {
            if (!this.authService.isUniqueLogin(owner.getLogin())) {
                return new ResponseEntity<>("Change login.", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            String password = owner.getName().substring(0, Math.min(owner.getName().length(), 3)) +
                    owner.getSurname().substring(0, Math.min(owner.getName().length(), 3));
            String hashed = DigestUtils.sha256Hex(password);
            owner.setPassword(hashed);
        }
        ownerService.saveOwner(owner);
        return new ResponseEntity<>(owner, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOwnerById(@PathVariable("id") int id) {
        Owner owner = ownerService.findOwnerById(id);
        return new ResponseEntity<>(owner, HttpStatus.OK);
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateOwner(@PathVariable("id") int id, @RequestBody @Valid Owner owner) {
        Owner ownerToUpdate = ownerService.findOwnerById(id);
        if (ownerToUpdate != null ) {
            if (owner.getOnlineReg() && !ownerToUpdate.getOnlineReg()) {
                if (!this.authService.isUniqueLogin(owner.getLogin())) {
                    return new ResponseEntity<>("Change login.", HttpStatus.INTERNAL_SERVER_ERROR);
                }
                String password = owner.getName().substring(0, Math.min(owner.getName().length(), 3)) +
                        owner.getSurname().substring(0, Math.min(owner.getName().length(), 3));
                String hashed = DigestUtils.sha256Hex(password);
                owner.setPassword(hashed);
            }
            ownerToUpdate.update(owner);
            ownerService.saveOwner(ownerToUpdate);
            return new ResponseEntity<>(ownerToUpdate, HttpStatus.OK);
        } else return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/{id}/animals", method = RequestMethod.GET)
    public ResponseEntity<?> getOwnerAnimals(@PathVariable("id") int id) {
        Owner owner = ownerService.findOwnerById(id);
        return new ResponseEntity<>(owner.getAnimals(), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteOwner(@PathVariable("id") int id) {
        Owner owner = ownerService.findOwnerById(id);
        if (owner.getAddress().getOwners().size() + owner.getAddress().getPersonnel().size() == 1)
            commonService.deleteAddress(owner.getAddress().getIdAddress());
        ownerService.deleteOwner(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
