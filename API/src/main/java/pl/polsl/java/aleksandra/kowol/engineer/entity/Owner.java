package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

import javax.persistence.*;

@Entity
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idOwner;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;
    @Basic
    @Column(name = "surname", nullable = false, length = 45)
    private String surname;
    @Basic
    @Column(name = "tel", nullable = false, length = 45)
    private String tel;
    @Basic
    @Column(name = "onlineReg")
    private boolean onlineReg;
    @Basic
    @Column(name = "login", length = 45)
    private String login;
    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "owner", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Animal> animals;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "idAddress")
    private Address address;

    public Owner() {

    }

    public Owner(String name, String surname, String tel, boolean onlineReg, Address address) {
        this.name = name;
        this.surname = surname;
        this.tel = tel;
        this.onlineReg = onlineReg;
        this.login = login;
        this.password = password;
        this.address = address;
    }

    public int getIdOwner() {
        return idOwner;
    }

    public void setIdOwner(int idOwner) {
        this.idOwner = idOwner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }


    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }


    public boolean getOnlineReg() {
        return onlineReg;
    }

    public void setOnlineReg(boolean onlineReg) {
        this.onlineReg = onlineReg;
    }


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Owner owner = (Owner) o;

        if (idOwner != owner.idOwner) return false;
        if (onlineReg != owner.onlineReg) return false;
        if (name != null ? !name.equals(owner.name) : owner.name != null) return false;
        if (surname != null ? !surname.equals(owner.surname) : owner.surname != null) return false;
        if (tel != null ? !tel.equals(owner.tel) : owner.tel != null) return false;
        if (login != null ? !login.equals(owner.login) : owner.login != null) return false;
        if (password != null ? !password.equals(owner.password) : owner.password != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idOwner;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + (tel != null ? tel.hashCode() : 0);
        result = 31 * result + (login != null ? login.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }


    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }


    public List<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(List<Animal> animals) {
        this.animals = animals;
    }
}
