package org.sammex.api03.webapp02.controllers;

import org.sammex.api03.webapp02.models.EmployeModel;
import org.sammex.api03.webapp02.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/empleados")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping()
    public ArrayList <EmployeModel> obtenerEmpleados(){
        return employeeService.obtenerEmpleados();
    }
    @GetMapping(path="/{id}")
    public Optional<EmployeModel>ObtenerEmpleado(@PathVariable("id") Long id){
        return employeeService.obtenerEmpleado(id);
    }

    @PostMapping()
    public EmployeModel guardarEmpleado(@RequestBody EmployeModel employeModel){
        return employeeService.guardarEmpleado(employeModel);
    }
    @DeleteMapping(path="/{id}")
    public  String eliminarEmpleado(@PathVariable("id") Long id){
        boolean eliminado=employeeService.eliminarEmpleado(id);
        if (eliminado){
            return "Eliminado correctamente";
        }else{
            return "No se pudo eliminar";
        }
    }

}
