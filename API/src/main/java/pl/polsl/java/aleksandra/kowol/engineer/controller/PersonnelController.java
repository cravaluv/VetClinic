package pl.polsl.java.aleksandra.kowol.engineer.controller;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;
import pl.polsl.java.aleksandra.kowol.engineer.service.AuthService;
import pl.polsl.java.aleksandra.kowol.engineer.service.OwnerService;
import pl.polsl.java.aleksandra.kowol.engineer.service.PersonnelService;

import java.util.List;

@RestController
@RequestMapping("/personnel")
public class PersonnelController {

    private PersonnelService personnelService;
    private AuthService authService;

    @Autowired
    public void setPersonnelService(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }
    @Autowired
    public void setAuthService(AuthService authService) {
        this.authService = authService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Personnel>> listAllPersonnel() {
        List<Personnel> personnel = personnelService.findAllPersonnel();
        return new ResponseEntity<>(personnel, HttpStatus.OK);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody Personnel personnel) {
            if (!this.authService.isUniqueLogin(personnel.getLogin())) {
                return new ResponseEntity<>("Change login.", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            String password = personnel.getName().substring(0, Math.min(personnel.getName().length(), 3)) +
                    personnel.getSurname().substring(0, Math.min(personnel.getName().length(), 3));
            String hashed = DigestUtils.sha256Hex(password);
        personnel.setPassword(hashed);
        personnelService.savePerson(personnel);
        return new ResponseEntity<>(personnel, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOwnerById(@PathVariable("id") int id) {
        Personnel personnel = personnelService.findPersonById(id);
        return new ResponseEntity<>(personnel, HttpStatus.OK);
    }
}
