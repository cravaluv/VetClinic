package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idColor;
    @Basic
    @NotNull
    @Column(name = "color", nullable = false, length = 45)
    private String color;

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
        return color;
    }

    public void setColor(String color) {
        this.color = color;
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
        if (color != null ? !color.equals(color1.color) : color1.color != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idColor;
        result = 31 * result + (color != null ? color.hashCode() : 0);
        return result;
    }
}
