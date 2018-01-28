package pl.polsl.java.aleksandra.kowol.engineer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.polsl.java.aleksandra.kowol.engineer.entity.*;
import pl.polsl.java.aleksandra.kowol.engineer.repository.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service("commonService")
public class CommonServiceImpl implements CommonService {

    private AnimalTypeDictionaryRepository animalTypeDictionaryRepository;
    private ColorDictionaryRepository colorDictionaryRepository;
    private MedicineRepository medicineRepository;
    private RoleRepository roleRepository;
    private VisitTypeDictionaryRepository visitTypeDictionaryRepository;

    @Autowired
    public void setAnimalRepository(AnimalTypeDictionaryRepository animalTypeDictionaryRepository) {
        this.animalTypeDictionaryRepository = animalTypeDictionaryRepository;
    }

    @Autowired
    public void setColorRepository(ColorDictionaryRepository colorDictionaryRepository) {
        this.colorDictionaryRepository = colorDictionaryRepository;
    }

    @Autowired
    public void setMedicineRepository(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Autowired
    public void setVisitTypeRepository(VisitTypeDictionaryRepository visitTypeDictionaryRepository) {
        this.visitTypeDictionaryRepository = visitTypeDictionaryRepository;
    }


    @Override
    public List<ColorDictionary> findAllColors() {
        return colorDictionaryRepository.findAll();
    }

    @Override
    public void saveColor(ColorDictionary color) {
        colorDictionaryRepository.save(color);
    }

    @Override
    public List<Role> findAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public List<AnimalTypeDictionary> findAllAnimalTypes() {
        return animalTypeDictionaryRepository.findAll();
    }

    @Override
    public void saveAnimalType(AnimalTypeDictionary animalType) {
        animalTypeDictionaryRepository.save(animalType);
    }

    @Override
    public List<Medicine> findAllMedicines() {
        return medicineRepository.findAll();
    }

    @Override
    public Medicine findMedicineById(int id) {
        return medicineRepository.findOne(id);
    }

    @Override
    public void saveMedicine(Medicine medicine) {
        medicineRepository.save(medicine);
    }

    @Override
    public List<VisitTypeDictionary> findAllVisitType() {
        return visitTypeDictionaryRepository.findAll();
    }

    @Override
    public void saveVisitType(VisitTypeDictionary visitType) {
        visitTypeDictionaryRepository.save(visitType);
    }
}
