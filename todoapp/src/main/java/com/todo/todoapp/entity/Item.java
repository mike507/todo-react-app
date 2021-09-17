package com.todo.todoapp.entity;

//import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    @CreationTimestamp
    private Date dateCreated;

    @CreationTimestamp
    private Date dateExpired;

    private Boolean statusDone;

    protected Item() {}

    public Item(String name, String description) {
        this.name = name;
        this.description = description;
        this.statusDone = false;
    }

    @Override
    public String toString() {
        return String.format(
                "Item [id=%d, name='%s', description='%s']",
                id, name, description);
    }

    //
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Date getDateExpired() {
        return dateExpired;
    }

    public void setDateExpired(Date dateExpired) {
        this.dateExpired = dateExpired;
    }

    public Boolean getStatusDone() {
        return statusDone;
    }

    public void setStatusDone(Boolean statusDone) {
        this.statusDone = statusDone;
    }
}
