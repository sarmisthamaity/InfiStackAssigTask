# InfiStackAssigTask 

## About Project 
- Bacically in this project have to do CRUD operation with item.
- First user will signup/ create account.
- If user is authenticate then he/she can create/get/edit/delete the item.
- Used joi for datavalidation, jsonwebtoken for authorization, bcrypt for password hash,
    multer for upload any kind of file.
- Followed MVC pattern, In models folder there is collection files,
- In connection folder used for create connection with database, controller folder logic is there. 
- Routes folder hold all the routes.
- Used Database is mongodb.

## SignUp :: 
- username, profile picture, password, email, date of birth, Qualification, mobile number these           credentials are required  for sign up. 
- email/ phone number should be unique.

## Login :: 
- credentials are email, password.
- email and password are exists and equal then he/she can logged in.
- applied bcrypt for compare password.
- used jsonwebtoken for creating token.

## create item :: 
- user should have authenticate for create/post item.
- item has itemname, price, quantity and it should store userId of user.

## edit item ::
- Is user authenticate he/she can edit the item.
- only item price and quantity, can't edit itemname.

## delet item ::
- If user authenticate he/she can delete item.

### To install Dependencies  :-- 
- express :-- npm install express
- JWT :-- npm install jsonwebtoken
- bcrypt :-- npm install bcrypt
- joi :-- npm install joi
- multer :-- npm install multer 

### To install mongoose :-- 
- npm install mongoose 

### To start server :--- npm start 

- Run signup api :--- localhost:8080/signup 
- Run login api  :--- localhost:8080/login 
- Run items api  :--- localhost:8080/items 
- Run editItem api  :--- localhost:8080/edit 
- Run itemlist api  :--- localhost:8080/itemlist 
- Run remomve api   :--- localhost:8080/itemremove  