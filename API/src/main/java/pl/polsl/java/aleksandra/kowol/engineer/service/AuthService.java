package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Owner;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;

import java.util.List;

public interface AuthService {

    Boolean isUniqueLogin(String login);

    Personnel findPersonByLogin(String login);

    Owner findOwnerByLogin(String login);

}
