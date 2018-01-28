package pl.polsl.java.aleksandra.kowol.engineer.service;


import pl.polsl.java.aleksandra.kowol.engineer.entity.*;

import java.util.List;

public interface CommonService {

    List<ColorDictionary> findAllColors();

    void saveColor(ColorDictionary color);

    List<Role> findAllRoles();

    List<AnimalTypeDictionary> findAllAnimalTypes();

    void saveAnimalType(AnimalTypeDictionary animalType);

    List<Medicine> findAllMedicines();

    Medicine findMedicineById(int id);

    void saveMedicine(Medicine medicine);

    List<VisitTypeDictionary> findAllVisitType();

    void saveVisitType(VisitTypeDictionary visitType);
}
