package com.javacrud.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javacrud.backend.exception.RessourceNotFoundException;
import com.javacrud.backend.model.Produit;
import com.javacrud.backend.repository.ProduitRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProduitController {

	
    @Autowired
    private ProduitRepository produitRepository;


    
    @GetMapping("/produits")
    public List<Produit> getAllproduits(){
        return produitRepository.findAll();
    }

    
    @GetMapping("/produits/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable long id) {
        Produit Produit = produitRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("Produit not found with id: " + id));
        return ResponseEntity.ok(Produit);
    }

    @PostMapping("/produits")
    public Produit createProduit(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @PutMapping("/produits/{id}")
    public Produit updateProduit(@PathVariable long id, @RequestBody Produit produit) {
        Produit produitToUpdate = produitRepository.findById(id).orElse(null);
        produitToUpdate.setPrix(produit.getPrix());
        produitToUpdate.setDescription(produit.getDescription());
        produitToUpdate.setCategorieId(produit.getCategorieId());

        return produitRepository.save(produitToUpdate);
    }

    @DeleteMapping("/produits/{id}")
    public ResponseEntity<?> deleteProduit(@PathVariable long id) {
        Produit produitToDelete = produitRepository.findById(id)
                .orElseThrow(() -> new RessourceNotFoundException("Produit not found with id: " + id));
        produitRepository.delete(produitToDelete);
        Map<String, Boolean> response = Map.of("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

	
}
