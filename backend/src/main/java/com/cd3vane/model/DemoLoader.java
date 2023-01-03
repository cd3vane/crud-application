package com.cd3vane.quickstart;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner {
    private final EmployeeRepository employeeRepo;

   
    public DemoLoader(EmployeeRepository employeeRepo){
        this.employeeRepo = employeeRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Employee charles = new Employee("Charles", 
        "DeVane", "test@gmail.com", "Java Developer");
        this.employeeRepo.save(charles);
    }
    
}
