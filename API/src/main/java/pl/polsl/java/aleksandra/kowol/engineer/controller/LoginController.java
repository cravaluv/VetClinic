package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;
import pl.polsl.java.aleksandra.kowol.engineer.model.AuthModel;
import pl.polsl.java.aleksandra.kowol.engineer.service.AuthService;
import pl.polsl.java.aleksandra.kowol.engineer.service.CommonService;
import pl.polsl.java.aleksandra.kowol.engineer.service.OwnerService;
import pl.polsl.java.aleksandra.kowol.engineer.service.PersonnelService;

@RestController
@RequestMapping("/auth")
public class LoginController  {

    private AuthService authService;
    private OwnerService ownerService;
    private PersonnelService personnelService;

    @Autowired
    public void setAuthService(AuthService authService) {
        this.authService = authService;
    }

    @Autowired
    public void setOwnerService(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @Autowired
    public void setPersonnelService(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }


    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody AuthModel authModel) {
        Owner owner = authService.findOwnerByLogin(authModel.getLogin());
        Personnel person = authService.findPersonByLogin(authModel.getLogin());
        String hashed = DigestUtils.sha256Hex(authModel.getPassword());
        if (owner != null) {
            if (hashed.compareTo(owner.getPassword()) == 0) {
                if (authModel.getNewPassword() != null) {
                    String newPasswordHashed = DigestUtils.sha256Hex(authModel.getNewPassword());
                    owner.setPassword(newPasswordHashed);
                    ownerService.saveOwner(owner);
                }
                return new ResponseEntity<>(owner, HttpStatus.OK);
            }
            else
                return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } else if (person != null) {
            if (hashed.compareTo(person.getPassword()) == 0) {
                if (authModel.getNewPassword() != null) {
                    String newPasswordHashed = DigestUtils.sha256Hex(authModel.getNewPassword());
                    person.setPassword(newPasswordHashed);
                    personnelService.savePerson(person);
                }
                return new ResponseEntity<>(person, HttpStatus.OK);
            }
            else
                return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

}
