package com.javacrud.backend.controller;

import com.javacrud.backend.exception.RessourceNotFoundException;
import com.javacrud.backend.repository.CategorieRepository;
import com.javacrud.backend.model.Categorie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class CategorieController {

	@Autowired
    private CategorieRepository categorieRepository;


    @GetMapping("/categories")
    public List<Categorie> getAllCategories(){
        return categorieRepository.findAll();
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable long id) {
    	Categorie categorie = categorieRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("Categorie not found with id: " + id));
        return ResponseEntity.ok(categorie);
    }

    @PostMapping("/categories")
    public Categorie createCategorie(@RequestBody Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @PutMapping("/categories/{id}")
    public Categorie updateCategorie(@PathVariable long id, @RequestBody Categorie categorie) {
    	Categorie categorieToUpdate = categorieRepository.findById(id).orElse(null);
    	categorieToUpdate.setDescription(categorie.getDescription());
        
    	return categorieRepository.save(categorieToUpdate);
    }


    @DeleteMapping("/categories/{id}")
    public ResponseEntity<?> deleteCategorie(@PathVariable long id) {
    	Categorie categorieToDelete = categorieRepository.findById(id)
                .orElseThrow(() -> new RessourceNotFoundException("Categorie not found with id: " + id));
    	categorieRepository.delete(categorieToDelete);
        Map<String, Boolean> response = Map.of("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

	
	
}
