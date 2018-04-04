package com.shail.todo.service;

import com.shail.todo.domain.Todo;

import java.util.List;

public interface TodoService {

    List<Todo> findAll();
    Todo save(Todo todo);
    void delete(String id);
}
