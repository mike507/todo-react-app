package com.todo.todoapp;

import com.todo.todoapp.dao.ItemRepository;
import com.todo.todoapp.entity.Item;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodoApplication {

	private static final Logger log = LoggerFactory.getLogger(TodoApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(ItemRepository repository) {
		return (args) -> {
			// save a Todo items
			repository.save(new Item("Documentation", "Write documentation for TodoApplication"));
			repository.save(new Item("Email", "Answer customer emails"));
			repository.save(new Item("Cinema", "Buy tickets for Titanic"));

			// fetch all Todo Items
			log.info("Todo Items found with findAll():");
			log.info("-------------------------------");
			for (Item item : repository.findAll()) {
				log.info(item.toString());
			}
			log.info("");

			// fetch an individual item by ID
			Item item = repository.findById(1L);
			log.info("Item found with findById(1L):");
			log.info("--------------------------------");
			log.info(item.toString());
			log.info("");

			// fetch items by last name
			log.info("Item found with findByName('Cinema'):");
			log.info("--------------------------------------------");
			repository.findByName("Cinema").forEach(cinema -> {
				log.info(cinema.toString());
			});
		};
	}
}
