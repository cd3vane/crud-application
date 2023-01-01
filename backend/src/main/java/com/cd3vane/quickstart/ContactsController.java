package com.cd3vane.quickstart;

import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContactsController {
    
    @Autowired
    private ContactRepository contactsRepository;

    public ContactsController(ContactRepository contactRepository) {
        this.contactsRepository = contactRepository;
    }

    
    @GetMapping(value = "/")
    Collection<Contact> getContacts(){
        return contactsRepository.findAll();
    }

    
    @PostMapping(value = "/")
    ResponseEntity<Contact> addContact(@Validated @RequestBody Contact contact) throws URISyntaxException{
        Contact result = contactsRepository.save(contact);
        return ResponseEntity.ok().body(result);
    }
}
