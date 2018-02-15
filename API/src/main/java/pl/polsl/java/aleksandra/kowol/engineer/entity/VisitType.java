package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class VisitType {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVisitType;
    @Basic
    @NotNull
    @Column(name = "type", nullable = false, length = 45)
    private String type;

    @JsonIgnore
    @OneToMany(mappedBy = "visitType")
    private List<Visit> visits;


    public int getIdVisitType() {
        return idVisitType;
    }

    public void setIdVisitType(int idVisitType) {
        this.idVisitType = idVisitType;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        VisitType that = (VisitType) o;

        if (idVisitType != that.idVisitType) return false;
        if (type != null ? !type.equals(that.type) : that.type != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idVisitType;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        return result;
    }
}
