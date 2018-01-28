package pl.polsl.java.aleksandra.kowol.engineer.controller;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.service.CommonService;
import pl.polsl.java.aleksandra.kowol.engineer.service.OwnerService;

@RestController
@CrossOrigin(origins = "*")
public class LoginController  {

    private OwnerService ownerService;
//    private PersonnelService personnelService;

    @Autowired
    public void setOwnerService(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

//    @Autowired
//    public void setPersonnelService(PersonnelService personnelService) {
//        this.personnelService = personnelService;
//    }

    @RequestMapping(value = "/all", method = RequestMethod.POST)
    public ResponseEntity<List<Owner>> login(@RequestParam String login, @RequestParam String password) {
        Owner owner = ownerService.findOwnerByLogin(login);
//        Personnel personnel = personnelService.findPersonnelByLogin(login);
        if (owner != null) {
            if (BCrypt.checkpw(password, owner.getPassword()))
                return new ResponseEntity<>(HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
//        if (personnel != null) {
//            if (BCrypt.checkpw(password, owner.getPassword()))
//                System.out.println("It matches");
//            else
//                System.out.println("It does not match");
//        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

}
