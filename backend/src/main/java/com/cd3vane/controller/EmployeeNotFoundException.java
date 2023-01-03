package com.cd3vane.quickstart;

class EmployeeNotFoundException extends RuntimeException {

  EmployeeNotFoundException(Long id) {
    super("Could not find contact " + id);
  }
}