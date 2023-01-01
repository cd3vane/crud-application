package com.cd3vane.quickstart;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner {
    private final ContactRepository contactRepo;

   
    public DemoLoader(ContactRepository contactRepo){
        this.contactRepo = contactRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Contact charles = new Contact("Charles", 
        "DeVane", "test@gmail.com");
        this.contactRepo.save(charles);
    }
    
}
