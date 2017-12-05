package pl.polsl.java.aleksandra.kowol.engineer.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class AnimalRace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnimalRace;
    @Basic
    @Column(name = "description", nullable = true, length = 254)
    private String description;

    @OneToMany(mappedBy = "animalRace")
    private List<Animal> animals;


    public int getIdAnimalRace() {
        return idAnimalRace;
    }

    public void setIdAnimalRace(int idAnimalRace) {
        this.idAnimalRace = idAnimalRace;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

        AnimalRace that = (AnimalRace) o;

        if (idAnimalRace != that.idAnimalRace) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idAnimalRace;
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
