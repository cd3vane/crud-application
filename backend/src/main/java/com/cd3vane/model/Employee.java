package com.cd3vane.quickstart;

import jakarta.persistence.Entity;
import java.util.Objects;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Employee {
    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String role;

    private Employee() {}

    public Employee(String firstName, String lastName, String emailAddress, String role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.role = role;
    }

    public Long getId() {
        return this.id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public void setFirstName(String first){
        firstName = first;
    }

    public void setLastName(String last){
        lastName = last;
    }

    public void setEmail(String email){
        emailAddress = email;
    }

    public void setRole(String role){
        this.role = role;
    }

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
       return emailAddress;
    }

    public String getRole(){
        return role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Employee))
            return false;
        Employee employee = (Employee) o;

        return Objects.equals(this.id, employee.id) && Objects.equals(this.firstName, employee.firstName)
            && Objects.equals(this.emailAddress, employee.emailAddress) && Objects.equals(this.role, employee.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.firstName, this.lastName, this.emailAddress, this.role);
    }

    @Override
    public String toString() {
        return "Employee{" + "id=" + this.id + ", name='" + this.firstName + " " + this.lastName + 
            '\'' + ", role='" + this.role + '\'' + '}';
    }
}


