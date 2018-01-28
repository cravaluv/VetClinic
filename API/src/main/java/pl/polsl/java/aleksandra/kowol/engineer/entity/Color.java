package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idColor;
    @Basic
    @Column(name = "color", nullable = false, length = 45)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "color")
    private List<Animal> animals;


    public int getIdColor() {
        return idColor;
    }

    public void setIdColor(int idColor) {
        this.idColor = idColor;
    }


    public String getColor() {
        return name;
    }

    public void setColor(String color) {
        this.name = color;
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

        Color color1 = (Color) o;

        if (idColor != color1.idColor) return false;
        if (name != null ? !name.equals(color1.name) : color1.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idColor;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
