# InfiStackAssigTask

## About Project
- Bacically in this project have to do CRUD operation with item.
- First user will signup/ create account.
- If user is authenticate then he/she can create/update/edit/delete the item.
- 


## Used express for creating server 
- Followed MVC pattern, In models folder there is collection files,
- In connection folder used for create connection with database, controller folder logic is there. 
- Routes folder hold all the routes
- Database is mongodb

### To install Dependencies  :--
- express :-- npm install express
- JWT :-- npm install jsonwebtoken
- bcrypt :-- npm install bcrypt
- joi :-- npm install joi
- multer :-- npm install multer

### To install mongoose command :--
- npm i mongoose 

### To run server :--- npm start
- To run signup api :--- localhost:8080/signup
- To run login api :--- localhost:8080/login
- To run items api :--- localhost:8080/items
- Run editItem api :--- localhost:8080/edit
- Run itemlist api :--- localhost:8080/itemlist
- To run remomve api :--- localhost:8080/itemremove