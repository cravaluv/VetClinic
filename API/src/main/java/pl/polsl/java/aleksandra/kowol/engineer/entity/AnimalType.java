package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class AnimalType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnimalType;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "animalType")
    private List<Animal> animals;


    public int getIdAnimalType() {
        return idAnimalType;
    }

    public void setIdAnimalType(int idAnimalType) {
        this.idAnimalType = idAnimalType;
    }


    public String getType() {
        return name;
    }

    public void setType(String type) {
        this.name = type;
    }


    public List<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(List<Animal> animals) {
        this.animals = animals;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AnimalType that = (AnimalType) o;

        if (idAnimalType != that.idAnimalType) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idAnimalType;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
