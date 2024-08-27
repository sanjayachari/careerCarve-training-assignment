const EventEmmit = require("events");
const event = new EventEmmit();
const db = require("../db/db");
// What is the EventEmitter class in Node.js?
// How do you create and emit custom events?

event.on("myEventEmmit", () => {
  console.log("event emmiter clicked");
});

const getFunction = async (req, res) => {
  try {
    event.emit("myEventEmmit");
    res.status(200).json("test working");
  } catch (error) {
    res.status(403).json(error);
  }
};
const aboutFunction = async (req, res) => {
  try {
    res.status(200).json("About route");
  } catch (error) {
    res.status(403).json(error);
  }
};

const postFunction = async (req, res) => {
  // console.log(req.body)
  try {
    res.status(200).json(req.body);
  } catch (error) {
    res.status(403).json(error);
  }
};

const putFunction = async (req, res) => {
  const { id } = req.params;
  // console.log(req.params)
  try {
    res.status(200).json(`PUT ROUTE ID FROM PARAMS : ${id}`);
  } catch (error) {
    res.status(403).json(error);
  }
};

const deleteFunction = async (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json(`DELETE ROUTE ID FROM PARAMS : ${id}`);
  } catch (error) {
    res.status(403).json(error);
  }
};

// Explain the use of route parameters and query strings in Express.js routing.
const patchFunction = async (req, res) => {
  // query string param
  const id = req.params.id;

  try {
    res.status(200).json(`PATCH ROUTE ID FROM PARAMS : ${id}`);
  } catch (error) {
    res.status(403).json(error);
  }
};

// What are the differences between synchronous and asynchronous programming?
// synchronous execute the code line by line and asynchronous doesnt wait for another code to excecute its a independent

// Explain how the event loop works in Node.js.

const eventLoopSetTimeout = () => {
  setTimeout(() => {
    console.log("setTimeout : 200");
  }, 200);
};
// eventLoopSetTimeout();

const eventLoopSetsetInterval = () => {
  setInterval(() => {
    console.log("setTimeout : 200");
  }, 200);
};
// eventLoopSetsetInterval();

// What is a promise in JavaScript? How does it differ from a callback?
// promise Defination : it refers to the data may not be available right now, Yet data will be avalable in future

// Explain the states of a promise
// promise state : success, reject, pending

// error handling using try catch
const promiseResolve = async (req, res) => {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    // console.log("data", data.ok);
    if (data.ok) {
      //   console.log("rendered!");

      data = await data.json();
      //   console.log("data", data);
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(403).json(error);
  }

  // error handling using .then
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     res.status(200).json(data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error.message);
  //     res.status(500).json({ error: error.message });
  //   });
};

// What is a callback function? Provide an example of its use in Node.js.
// passing function as a params

const myFunction = (fun) => {
  console.log("hello world");
  fun();
};

const myFunction1 = () => {
  console.log("myFunction1");
};

// myFunction(myFunction1)

// Challenge 4: Promises
// Create a function that returns a promise that is resolved after a delay. Use .then() to handle the resolved value.
const myPromise = () => {
  const isSucc = true;

  const newPromis = new Promise((response, reject) => {
    if (isSucc) {
      response("Promise Resolved");
    } else {
      reject("Promise Rejected");
    }
  })
    .then((e) => console.log(e))
    .catch((err) => console.log(err));
};

// myPromise();

const getData = async (req, res) => {
  console.log("rendered");

  try {
    db.query("SELECT * FROM users", (error, results) => {
      if (error) {
        console.error("Error executing query:", error);
        return res.status(500).send("An error occurred while fetching data.");
      }

      console.log("Results:", results);
      res.status(200).json(results);
    });
  } catch (error) {
    console.log("Unexpected error:", error);
    res.status(500).send("An unexpected error occurred.");
  }
};

const postUser = async (req, res) => {
    const {id,age,name} = req.body;
    console.log(req.body, age)
  try {
    // Execute the INSERT query
    db.query(
      `INSERT INTO users (id, name, age) VALUES (?,?,?)`,[id,name,age],
      (error, result) => {
        if (error) {
          console.log("Error:", error);
          return res
            .status(500)
            .json({
              error: "An error occurred while inserting the user",
              details: error,
            });
        }

        // Send a success response with a simple message or some relevant data
        console.log("Result:", result);
        res.status(200).json("User inserted successfully");
      }
    );
  } catch (error) {
    console.log("Unexpected error:", error);
    res
      .status(500)
      .json({ error: "An unexpected error occurred", details: error });
  }
};

module.exports = {
  getFunction,
  aboutFunction,
  patchFunction,
  putFunction,
  deleteFunction,
  postFunction,
  promiseResolve,
  getData,
  postUser,
};
