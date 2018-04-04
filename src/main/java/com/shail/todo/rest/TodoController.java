package com.shail.todo.rest;

import com.shail.todo.domain.Todo;
import com.shail.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todo")
public class TodoController {

    @Autowired
    private TodoService service;

    @RequestMapping(value="",method = RequestMethod.GET)
    ResponseEntity<List<Todo>> getTodos(){
        return new ResponseEntity<>(service.findAll(),HttpStatus.OK);
    }

    @RequestMapping(value="",method = RequestMethod.POST)
    ResponseEntity<?> createTodo(@RequestBody Todo todo){
        if(todo.getId()!=null)
            return new ResponseEntity<>("Use PUT method to update",HttpStatus.METHOD_NOT_ALLOWED);
        return new ResponseEntity<>(service.save(todo),HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.PUT)
    ResponseEntity<?> createTodo(@PathVariable String id, @RequestBody Todo todo){
        if(todo.getId()==null)
            return new ResponseEntity<>("Use POST method to create",HttpStatus.METHOD_NOT_ALLOWED);
        else if(todo.getId().equals(id))
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        else return new ResponseEntity<>(service.save(todo),HttpStatus.ACCEPTED);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    ResponseEntity<Todo> deleteTodo(@PathVariable String id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
