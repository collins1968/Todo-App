import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';
 import { login, register, loginRequired } from '../controllers/userController.js';


const todoRoutes = (app) => {
    app.route('/todos')
        .get(loginRequired, getTodos)
        .post(loginRequired, createTodo);

    app.route('/todo/:id')
        .put(updateTodo)
        .get(getTodo)
        .delete(deleteTodo);

     app.route('/auth/login')
        .post(login);

    app.route('/auth/register')
        .post(register);
}



export default todoRoutes;