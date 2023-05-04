import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/todoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoHeader } from '../../ui/TodoHeader'
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';

import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";

import { ChangeAlert } from '../../ui/ChangeAlert';


function HomePage() {

    const navigate = useNavigate();
    const {
        states, stateUpdaters
    } = useTodos();

    const {
        error,
        loading,
        searchedTodos,
        totalTodos,
        completedTodos,
        searchValue,
        //openModal,
    } = states;

    const {
        completeTodo,
        deleteTodo,
        // setOpenModal,
        setSearchValue,
        // addTodo,
        sincronizeTodos
    } = stateUpdaters;

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader >
            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={
                    (searchText) => <p className='p-li'>No hay resultados para {searchText}</p>
                }>
                {todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onEdit={() => navigate(
                            '/edit/' + todo.id,
                            {
                                state: { todo }
                            })}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                )}

            </TodoList >
            {/* {
                !!openModal && (
                    <Modal>
                        <TodoForm
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )
            } */}
            <CreateTodoButton
                onClick={() => navigate('/new')}
            // setOpenModal={setOpenModal}
            />
            <ChangeAlert
                sincronize={sincronizeTodos}
            />
        </React.Fragment >
    );
}

export { HomePage };
