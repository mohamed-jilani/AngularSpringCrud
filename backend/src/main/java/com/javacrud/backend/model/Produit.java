package com.javacrud.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "produits")
public class Produit {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="prix")
	private float prix;
    
    @Column(name="description")
    private String description;
    
    @Column(name="categorieId")
	private long categorieId;
	

	public Produit(int id,float prix, String description, long categorieId) {
		super();
		this.id = id;
		this.prix = prix;
		this.description = description;
		this.categorieId = categorieId;
	}

	public Produit() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getCategorieId() {
		return categorieId;
	}

	public void setCategorieId(long categorieId) {
		this.categorieId = categorieId;
	}



}
