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

    private AnimalTypeRepository animalTypeRepository;
    private ColorRepository colorRepository;
    private MedicineRepository medicineRepository;
    private RoleRepository roleRepository;
    private VisitTypeRepository visitTypeRepository;

    @Autowired
    public void setAnimalRepository(AnimalTypeRepository animalTypeRepository) {
        this.animalTypeRepository = animalTypeRepository;
    }

    @Autowired
    public void setColorRepository(ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
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
    public void setVisitTypeRepository(VisitTypeRepository visitTypeRepository) {
        this.visitTypeRepository = visitTypeRepository;
    }


    @Override
    public List<Color> findAllColors() {
        return colorRepository.findAll();
    }

    @Override
    public void saveColor(Color color) {
        colorRepository.save(color);
    }

    @Override
    public List<Role> findAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public List<AnimalType> findAllAnimalTypes() {
        return animalTypeRepository.findAll();
    }

    @Override
    public void saveAnimalType(AnimalType animalType) {
        animalTypeRepository.save(animalType);
    }

    @Override
    public List<Medicine> findAllMedicines() {
        return medicineRepository.findAll();
    }

    @Override
    public void saveMedicine(Medicine medicine) {
        medicineRepository.save(medicine);
    }

    @Override
    public List<VisitType> findAllVisitType() {
        return visitTypeRepository.findAll();
    }

    @Override
    public void saveVisitType(VisitType visitType) {
        visitTypeRepository.save(visitType);
    }
}
