package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "visit_medicine")
@AssociationOverrides({
        @AssociationOverride(name = "id.medicine", joinColumns = @JoinColumn(name = "medicine_id")),
        @AssociationOverride(name = "id.visit", joinColumns = @JoinColumn(name = "visit_id")) })
public class VisitMedicine {

    @EmbeddedId
    private VisitMedicinePK id = new VisitMedicinePK();

    @Basic
    @NotNull
    @Min(0)
    @Column(name = "amount")
    private int amount;

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }


    public Medicine getMedicine() {
        return getId().getMedicine();
    }

    public void setMedicine(Medicine medicine) {
        getId().setMedicine(medicine);
    }

    public Visit getVisit() {
        return getId().getVisit();
    }

    public void setVisit(Visit visit) {
        getId().setVisit(visit);
    }

    public VisitMedicinePK getId() {
        return id;
    }

    public void setId(VisitMedicinePK id) {
        this.id = id;
    }
}
