package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class VisitTypeDictionary {
    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVisitTypeDicrtionary;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;

    public int getIdColorDictionary() {
        return idVisitTypeDicrtionary;
    }

    public void setIdColorDictionary(int ColorDictionary) {
        this.idVisitTypeDicrtionary = ColorDictionary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
