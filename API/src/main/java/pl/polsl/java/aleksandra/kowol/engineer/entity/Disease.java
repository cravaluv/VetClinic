package pl.polsl.java.aleksandra.kowol.engineer.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Disease {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idDisease;
    @Basic
    @Column(name = "description", nullable = false, length = 254)
    private String description;

//    @ManyToMany(mappedBy = "diseases")
//    private List<Visit> visits;


    public int getIdDisease() {
        return idDisease;
    }

    public void setIdDisease(int idDisease) {
        this.idDisease = idDisease;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//
//    public List<Visit> getVisits() {
//        return visits;
//    }
//
//    public void setVisits(List<Visit> visits) {
//        this.visits = visits;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Disease disease = (Disease) o;

        if (idDisease != disease.idDisease) return false;
        if (description != null ? !description.equals(disease.description) : disease.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idDisease;
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
