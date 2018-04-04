package com.shail.todo.service.impl;

import com.shail.todo.domain.Todo;
import com.shail.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private com.shail.todo.repository.TodoRepository repository;

    @Override
    public List<Todo> findAll() {
        return repository.findAll();
    }

    @Override
    public Todo save(Todo todo) {
        return repository.save(todo);
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }
}
