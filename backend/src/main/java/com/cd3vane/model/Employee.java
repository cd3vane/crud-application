package com.cd3vane.quickstart;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import lombok.Data;

@Data
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

}

