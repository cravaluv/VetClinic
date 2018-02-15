package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class AnimalType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnimalType;
    @Basic
    @NotNull
    @Column(name = "type", nullable = false, length = 45)
    private String type;

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
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
        if (type != null ? !type.equals(that.type) : that.type != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idAnimalType;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        return result;
    }
}
