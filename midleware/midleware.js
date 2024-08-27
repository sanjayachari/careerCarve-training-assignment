// What is middleware in Express.js? Provide examples of built-in middleware.
// How do you create and use custom middleware in an Express.js application?
// What is the order of middleware execution in an Express.js application?


const auth = (req,res,next)=>{
    
  const isAuthenticated = true; 

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send('Forbidden: You are not authenticated.');
  }
}

module.exports = {auth}