package com.javacrud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.javacrud.backend.model.Produit;

@Repository
public interface ProduitRepository  extends JpaRepository<Produit,Long> {

}
