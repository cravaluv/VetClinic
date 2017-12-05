package pl.polsl.java.aleksandra.kowol.engineer.entity;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnimal;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;
    @Basic
    @Column(name = "birthDate", nullable = false)
    private Timestamp birthDate;
    @Basic
    @Column(name = "active", nullable = false)
    private byte active;

    @ManyToOne
    @JoinColumn(referencedColumnName = "idOwner")
	private Owner owner;
    @ManyToOne
    @JoinColumn(referencedColumnName = "idAnimalType")
    private AnimalType animalType;
    @ManyToOne
    @JoinColumn(referencedColumnName = "idColor")
    private Color color;
    @ManyToOne
    @JoinColumn(referencedColumnName = "idAnimalRace")
    private AnimalRace animalRace;
    @OneToMany(mappedBy = "animal")
    private List<Visit> visits;


    public int getIdAnimal() {
        return idAnimal;
    }

    public void setIdAnimal(int idAnimal) {
        this.idAnimal = idAnimal;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Timestamp getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Timestamp birthDate) {
        this.birthDate = birthDate;
    }


    public byte getActive() {
        return active;
    }

    public void setActive(byte active) {
        this.active = active;
    }



    public AnimalType getAnimalType() {
        return animalType;
    }

    public void ListAnimalType(AnimalType animalType) {
        this.animalType = animalType;
    }


    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }


    public AnimalRace getAnimalRace() {
        return animalRace;
    }

    public void setAnimalRace(AnimalRace animalRace) {
        this.animalRace = animalRace;
    }


    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }


    public List<Visit> getVisits() {
        return visits;
    }

    public void setVisits(List<Visit> visits) {
        this.visits = visits;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Animal animal = (Animal) o;

        if (idAnimal != animal.idAnimal) return false;
        if (active != animal.active) return false;
        if (name != null ? !name.equals(animal.name) : animal.name != null) return false;
        if (birthDate != null ? !birthDate.equals(animal.birthDate) : animal.birthDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idAnimal;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (birthDate != null ? birthDate.hashCode() : 0);
        result = 31 * result + (int) active;
        return result;
    }
}
