package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnimal;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;
    @Basic
    @Column(name = "birthDate", nullable = true)
    private Date birthDate;
    @Basic
    @Column(name = "active", nullable = false)
    private boolean active;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name="idOwner")
//    @JoinColumn(referencedColumnName = "idOwner")
	private Owner owner;
    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(referencedColumnName = "idAnimalType")
    private AnimalType animalType;
    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(referencedColumnName = "idColor")
    private Color color;
    @OneToMany(mappedBy = "animal", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Visit> visits;

//    public Animal(Animal animal) {
//        SimpleDateFormat formatter = new SimpleDateFormat("EE MMM d y H:m:s ZZZ");
//        this.visits = animal.visits;
//        this.name = animal.name;
//        this.color = animal.color;
//        this.birthDate =
//        String dateString = formatter.format(new Date());
//    }


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


    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }


    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
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

    public void update(Animal animal) {
        this.active = animal.active;
        this.animalType = animal.animalType;
        this.birthDate = animal.birthDate;
        this.color = animal.color;
        this.name = animal.name;
//        this.visits = animal.visits;
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
        return result;
    }
}
