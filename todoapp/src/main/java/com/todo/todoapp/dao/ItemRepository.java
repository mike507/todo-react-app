package com.todo.todoapp.dao;

import com.todo.todoapp.entity.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:3000")
public interface ItemRepository extends CrudRepository<Item, Long> {

    List<Item> findByName(@Param("name") String name);

    Item findById(@Param("id") long id);

    List<Item> findByStatusDone(@Param("done") Boolean done);

}