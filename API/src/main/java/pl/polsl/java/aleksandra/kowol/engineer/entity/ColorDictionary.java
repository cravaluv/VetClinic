package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class ColorDictionary {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idColorDictionary;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;

    public int getIdColorDictionary() {
        return idColorDictionary;
    }

    public void setIdColorDictionary(int ColorDictionary) {
        this.idColorDictionary = ColorDictionary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
