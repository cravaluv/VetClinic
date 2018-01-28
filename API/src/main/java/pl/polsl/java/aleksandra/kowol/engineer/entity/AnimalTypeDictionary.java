package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class AnimalTypeDictionary {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnimalTypeDictionary;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;

    public int getIdAnimalType() {
        return idAnimalTypeDictionary;
    }

    public void setIdAnimalType(int idAnimalType) {
        this.idAnimalTypeDictionary = idAnimalType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
