package pl.polsl.java.aleksandra.kowol.engineer.service;


import pl.polsl.java.aleksandra.kowol.engineer.entity.*;

import java.util.List;

public interface CommonService {

    List<Color> findAllColors();

    void saveColor(Color color);

    List<Role> findAllRoles();

    List<AnimalType> findAllAnimalTypes();

    void saveAnimalType(AnimalType animalType);

    List<Medicine> findAllMedicines();

    Medicine findMedicineById(int id);

    void saveMedicine(Medicine medicine);

    List<VisitType> findAllVisitType();

    void saveVisitType(VisitType visitType);
}
