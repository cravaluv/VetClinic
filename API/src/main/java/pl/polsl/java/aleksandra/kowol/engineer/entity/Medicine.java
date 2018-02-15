package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idMedicine")
    private int idMedicines;
    @Basic
    @NotNull
    @Column(name = "name", nullable = false, length = 45)
    private String name;
    @Basic
    @NotNull
    @Min(0)
    @Column(nullable = false)
    private int amount;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id.medicine")
    private List<VisitMedicine> visits;

    @Basic
    @NotNull
    @Min(0)
    @Column(name = "min_amount")
    private int minNumber;


    public int getIdMedicines() {
        return idMedicines;
    }

    public void setIdMedicines(int idMedicines) {
        this.idMedicines = idMedicines;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getMinNumber() {
        return minNumber;
    }

    public void setMinNumber(int minNumber) {
        this.minNumber = minNumber;
    }

    public List<VisitMedicine> getVisits() {
        return visits;
    }

    public void setVisits(List<VisitMedicine> visits) {
        this.visits = visits;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Medicine medicine = (Medicine) o;

        if (idMedicines != medicine.idMedicines) return false;
        if (amount != medicine.amount) return false;
        if (minNumber != medicine.minNumber) return false;
        if (name != null ? !name.equals(medicine.name) : medicine.name != null) return false;
        return true;
    }

    @Override
    public int hashCode() {
        int result = idMedicines;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + amount;
        result = 31 * result + minNumber;
        return result;
    }


//    public List<Visit> getVisits() {
//        return visits;
//    }
//
//    public void setVisits(List<Visit> visits) {
//        this.visits = visits;
//    }

}
