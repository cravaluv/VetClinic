package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
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

//    @Id
//    @ManyToOne
//    @JoinColumn(name = "medicine_id")
//    private Medicine medicine;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "visit_id")
//    private Visit visit;
//
//    public VisitMedicine() {}
//
//    public VisitMedicine(Visit visit, Medicine medicine, int amount) {
//        this.visit = visit;
//        this.medicine = medicine;
//        this.amount = amount;
//    }

    @Basic
    @Column(name = "amount")
    private int amount;

//    public Medicine getMedicine() {
//        return medicine;
//    }
//
//    public void setMedicine(Medicine medicine) {
//        this.medicine = medicine;
//    }
//
//    public Visit getVisit() {
//        return visit;
//    }
//
//    public void setVisit(Visit visit) {
//        this.visit = visit;
   // }

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
