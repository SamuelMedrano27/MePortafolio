package org.sammex.api03.webapp02.services;

import org.sammex.api03.webapp02.models.EmployeModel;
import org.sammex.api03.webapp02.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    public ArrayList<EmployeModel> obtenerEmpleados(){
        return (ArrayList<EmployeModel>) employeeRepository.findAll();
    }
    public Optional<EmployeModel> obtenerEmpleado(Long id){
        return employeeRepository.findById(id);

    }
    public EmployeModel guardarEmpleado(EmployeModel employeModel){
        return employeeRepository.save(employeModel);

    }
    public boolean eliminarEmpleado(Long id){
        try {
            employeeRepository.deleteById(id);
            return true;
        }catch (Exception error ){
            return false;
        }

    }
}


