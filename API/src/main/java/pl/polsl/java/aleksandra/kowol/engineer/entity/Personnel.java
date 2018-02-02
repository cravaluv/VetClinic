package pl.polsl.java.aleksandra.kowol.engineer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.List;

import javax.persistence.*;

@Entity
public class Personnel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPersonnel;
    @Basic
    @Column(name = "name", nullable = false, length = 45)
    private String name;
    @Basic
    @Column(name = "surname", nullable = false, length = 45)
    private String surname;
    @Basic
    @Column(name = "login", nullable = true)
    private String login;
    @JsonIgnore
    @Basic
    @Column(name = "password", nullable = true)
    private String password;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "idAddress")
    private Address address;

    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(referencedColumnName = "idRole")
    private Role role;

    public Personnel() {};

    public Personnel(String name, String surname, String login, String password, Address address, Role role) {

        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.address = address;
        this.role = role;
    }

    public int getIdPersonnel() {
        return idPersonnel;
    }

    public void setIdPersonnel(int idPersonnel) {
        this.idPersonnel = idPersonnel;
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


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }
    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Personnel personnel = (Personnel) o;

        if (idPersonnel != personnel.idPersonnel) return false;
        if (name != null ? !name.equals(personnel.name) : personnel.name != null) return false;
        if (surname != null ? !surname.equals(personnel.surname) : personnel.surname != null) return false;
        if (login != null ? !login.equals(personnel.login) : personnel.login != null) return false;
        if (password != null ? !password.equals(personnel.password) : personnel.password != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idPersonnel;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

}
