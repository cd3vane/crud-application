package com.cd3vane.quickstart;

import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeesController {
    
    @Autowired
    private EmployeeRepository repository;

    public EmployeesController(EmployeeRepository employeeRepository) {
        repository = employeeRepository;
    }

    
    @GetMapping(value = "/")
    Collection<Employee> getEmployees(){
        return repository.findAll();
    }

    @GetMapping(value = "/{id}")
    Employee getEmployeeById(@PathVariable Long id){
        return repository.findById(id)
            .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    
    @PostMapping(value = "/")
    Employee addEmployee(@Validated @RequestBody Employee employee) throws URISyntaxException{
        return repository.save(employee);
    }
}
