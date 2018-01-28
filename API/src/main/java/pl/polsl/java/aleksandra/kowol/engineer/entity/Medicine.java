package pl.polsl.java.aleksandra.kowol.engineer.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idMedicine")
    private int idMedicine;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;
//    @Basic
//    @Column(name = "description", nullable = false, length = 254)
//    private String description;
    @Basic
    @Column(name = "amount", nullable = false)
    private int amount;
    @Basic
    @Column(name = "minAmount", nullable = false)
    private int minAmount;
//
//    @ManyToMany(mappedBy = "medicines")
//    private List<Visit> visits;


    public int getIdMedicines() {
        return idMedicine;
    }

    public void setIdMedicines(int idMedicines) {
        this.idMedicine = idMedicines;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }


    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getMinAmount() {
        return minAmount;
    }

    public void setMinAmount(int minAmout) {
        this.minAmount = minAmount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Medicine medicine = (Medicine) o;

        if (idMedicine != medicine.idMedicine) return false;
        if (amount != medicine.amount) return false;
        if (minAmount != medicine.minAmount) return false;
        if (name != null ? !name.equals(medicine.name) : medicine.name != null) return false;
        return true;
    }

    @Override
    public int hashCode() {
        int result = idMedicine;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + amount;
        result = 31 * result + minAmount;
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
