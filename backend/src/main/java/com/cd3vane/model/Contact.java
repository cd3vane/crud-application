package com.cd3vane.quickstart;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Contact {
    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String emailAddress;

    private Contact() {}

    public Contact(String firstName, String lastName, String emailAddress){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }

}

