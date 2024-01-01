package com.javacrud.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "categories")
public class Categorie {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="description")
	private String description;
    
    public Categorie() {
		super();
	}
	
	
	public Categorie(long id, String description) {
		super();
		this.id = id;
		this.description = description;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}

}
