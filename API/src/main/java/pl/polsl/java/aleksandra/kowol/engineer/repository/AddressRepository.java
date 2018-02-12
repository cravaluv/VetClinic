package pl.polsl.java.aleksandra.kowol.engineer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.polsl.java.aleksandra.kowol.engineer.entity.Address;


public interface AddressRepository extends JpaRepository<Address, Integer> {

}
