package com.api.ecommerce.repository;

import com.api.ecommerce.model.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountyRepository extends CrudRepository<Country, Long> {
}
