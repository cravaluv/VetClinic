package pl.polsl.java.aleksandra.kowol.engineer.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVisit;
    @Basic
    @Column(name = "date", nullable = false)
    private Timestamp date;
    @Basic
    @Column(name = "type", nullable = false, length = 45)
    private String type;
    @Basic
    @Column(name = "description", nullable = false, length = 254)
    private String description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "visit_medicine", joinColumns = @JoinColumn(name = "visit_id", referencedColumnName = "idVisit"), inverseJoinColumns = @JoinColumn(name = "medicine_id", referencedColumnName = "idMedicine"))
    private List<Medicine> medicines;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "visit_disease", joinColumns = @JoinColumn(name = "visit_id", referencedColumnName = "idVisit"), inverseJoinColumns = @JoinColumn(name = "disease_id", referencedColumnName = "idDisease"))
    private List<Disease> diseases;

    @ManyToOne
    @JoinColumn(name = "idAnimal", referencedColumnName = "idAnimal", nullable = false)
    private Animal animal;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(referencedColumnName = "idVisitType")
    private VisitType visitType;


    public int getIdVisit() {
        return idVisit;
    }

    public void setIdVisit(int idVisit) {
        this.idVisit = idVisit;
    }


    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
        if (type != null ? !type.equals(visit.type) : visit.type != null) return false;
        if (description != null ? !description.equals(visit.description) : visit.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idVisit;
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    public List<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(List<Medicine> medicines) {
        this.medicines = medicines;
    }


   public List<Disease> getDiseases() {
        return diseases;
    }

    public void setDiseases(List<Disease> diseases) {
        this.diseases = diseases;
    }

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
