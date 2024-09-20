const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// get all todos and user name
router.get("/", authorization, async (req,res) => {
    try {
        // const user_id = req.user.user;
        // res.json(req.user);
        const user = await pool.query("SELECT account.user_name, todo.todo_id, todo.description FROM account LEFT JOIN \
             todo on account.user_id = todo.user_id WHERE account.user_id = $1;",[req.user]);
        res.json(user.rows)
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
});

// create new todo
router.post("/todos", authorization, async (req, res) => {
    try {
        // console.log(req.body);
        
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (user_id, description) VALUES ($1,$2) RETURNING *", [req.user,description]
        );
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }

});

// update todo description
router.put("/todos/:id", authorization, async (req,res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *", [description, id, req.user]
        );

        if(updateTodo.length === 0){
            return res.json("This todo is not yours");
        }
        
        res.json(updateTodo.rows[0])
    } catch (error) {
        console.error(error.message);
        
    }
});


// delete a todo
router.delete("/todos/:id", authorization, async (req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 AND user_id = $2 RETURNING *",
            [id,req.user]
        );

        if(deleteTodo.rows.length === 0) {
            return res.json("This Todo is not yours");
        }
        res.json("Todo was deleted.")
    } catch (error) {
        console.error(error.message);
        
    }
});


module.exports = router;