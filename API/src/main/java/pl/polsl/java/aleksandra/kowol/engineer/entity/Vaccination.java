package pl.polsl.java.aleksandra.kowol.engineer.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Vaccination {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVaccination;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;
    @Basic
    @Column(name = "amount", nullable = false)
    private int amount;


    @ManyToMany(mappedBy = "vaccinations")
    private List<Visit> visits;

    public int getIdVaccination() {
        return idVaccination;
    }

    public void setIdVaccination(int idVaccination) {
        this.idVaccination = idVaccination;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Vaccination that = (Vaccination) o;

        if (idVaccination != that.idVaccination) return false;
        if (amount != that.amount) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idVaccination;
        result = 31 * result + (name != null ? name.hashCode() : 0);
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
