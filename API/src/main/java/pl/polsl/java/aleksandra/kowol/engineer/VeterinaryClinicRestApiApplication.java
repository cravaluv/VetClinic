package pl.polsl.java.aleksandra.kowol.engineer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Address;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Personnel;
import pl.polsl.java.aleksandra.kowol.engineer.entity.Role;
import pl.polsl.java.aleksandra.kowol.engineer.repository.PersonnelRepository;
import pl.polsl.java.aleksandra.kowol.engineer.repository.RoleRepository;

import javax.transaction.Transactional;

@SpringBootApplication
public class VeterinaryClinicRestApiApplication implements CommandLineRunner {

	@Autowired
	private PersonnelRepository personnelRepository;

	@Autowired
	private RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(VeterinaryClinicRestApiApplication.class, args);
	}

	@Override
	@Transactional
	public void run(String... strings) throws Exception {
		// save a couple of categories
		Role roleAdmin = new Role("admin");
		roleRepository.save(roleAdmin);
		Role roleEmployee = new Role("employee");
		roleRepository.save(roleEmployee);

		Address address = new Address("Nad potokiem 5", "Rybnik", "44-200");

		Personnel admin = new Personnel("Aleksandra", "Kowol", "admin", "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", address, roleAdmin);
		Personnel employee = new Personnel("Zenon", "Lekarz", "zenek", "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", address, roleEmployee);

		personnelRepository.save(admin);
		personnelRepository.save(employee);
	}
}
