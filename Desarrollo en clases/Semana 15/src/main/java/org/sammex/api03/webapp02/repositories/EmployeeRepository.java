package org.sammex.api03.webapp02.repositories;

import org.sammex.api03.webapp02.models.EmployeModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository  <EmployeModel,Long>{

}
