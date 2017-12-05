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
    @Basic
    @Column(name = "description", nullable = false, length = 254)
    private String description;
    @Basic
    @Column(name = "amount", nullable = false)
    private int amount;

    @ManyToMany(mappedBy = "medicines")
    private List<Visit> visits;


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


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Medicine medicines = (Medicine) o;

        if (idMedicine != medicines.idMedicine) return false;
        if (amount != medicines.amount) return false;
        if (name != null ? !name.equals(medicines.name) : medicines.name != null) return false;
        if (description != null ? !description.equals(medicines.description) : medicines.description != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idMedicine;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + amount;
        return result;
    }


    public List<Visit> getVisits() {
        return visits;
    }

    public void setVisits(List<Visit> visits) {
        this.visits = visits;
    }

}
