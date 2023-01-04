package com.cd3vane.quickstart;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(EmployeeRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Employee("Charles", "Devane", "devane@mail.com", "burglar")));
      log.info("Preloading " + repository.save(new Employee("Bob", "Jones", "bob@jones.dev", "sprinkler")));
    };
  }
}
