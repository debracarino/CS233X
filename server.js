/** server.js
 *  demonstration of simple, custom web server using Express.js
 * 
 *  Debra Carino
 *  9/29/2025
 */

//import desired frameworks
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});