package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVisit;
    @Basic
    @NotNull
    @Column(name = "date", nullable = false)
    private Date date;
    @Basic
    @NotNull
    @Column(name = "description")
    private String description;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id.visit", cascade = CascadeType.ALL)
    private List<VisitMedicine> medicines;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="idAnimal")
    @JsonBackReference
    private Animal animal;

    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(name = "idVisitType")
    private VisitType visitType;

    public int getIdVisit() {
        return idVisit;
    }

    public void setIdVisit(int idVisit) {
        this.idVisit = idVisit;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Visit visit = (Visit) o;

        if (idVisit != visit.idVisit) return false;
        if (date != null ? !date.equals(visit.date) : visit.date != null) return false;
        if (description != null ? !description.equals(visit.description) : visit.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idVisit;
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    public void update(Visit visit) {
        this.date = visit.date;
        this.description = visit.description;
        this.visitType = visit.visitType;
    }

    public List<VisitMedicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(List<VisitMedicine> medicines) {
        this.medicines = medicines;
    }
//
//
//   public List<Disease> getDiseases() {
//        return diseases;
//    }
//
//    public void setDiseases(List<Disease> diseases) {
//        this.diseases = diseases;
//    }

   public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public VisitType getVisitType() {
        return visitType;
    }

    public void setVisitType(VisitType visitType) {
        this.visitType = visitType;
    }
}
