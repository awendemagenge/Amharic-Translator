CONTENTS OF THIS FILE
---------------------

 # Introduction
 # Requirements
 # Dependencies Used 
 # Installation
 # Maintainers



 * INTRODUCTION

During the pandemic COVID-19, farmers are no longer able to sell their products and customers are no longer able to buy fresh
local food. In fact this project provides an online order that interacts farmers and customers. 
It includes the option for customers to see multiple farmers and their products, and farmers are able to see the orders placed by the customers. 

The design includes:- 

A Web application (React Application) to add products, browse orders, shop products, and contact customers when
orders are ready for pickup.
Backend REST API (NodeJS, MongoDB) to support the application above

* REQUIREMENTS 

1) Both farmer and customer need to sign in / sign up 
2) Farmers can add, delete, update, get products. Are also able to change the status of product by sending 
   a notification email to the customer ("Pending,Ready,Complete")
3) Customers are able to see all the farmers, add products from one farmer to the shopping cart.
   After the transaction is complete customer can leave an optional rating and feedback ("Excellent, Good, Bad")

4) Farmers excellent reputation will provide 1 point, bad will deduct 1 point, while good doesn't affect 
   the reputation.

5) Super User account are able to see list of farmers and customers account, activate deactivate account, 
  reset password, list all transactions and filter them by date, list all request in the log file. This


  * DEPENDENCIES USED 

  "dependencies": {
    "bson": "^4.5.2",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.1.2",
    "nodemailer": "^6.6.3",
    "nodemon": "^2.0.12"
  }


* INSTALLATION 

1) A Web application (React Application). 
2) Backend REST API (NodeJS, MongoDB)

* MAINTAINERS 

Current maintainers: 

* Amanuel Wendemagenge :    awendemagenge@miu.edu
* Daniel Haile :            dhaile@miu.edu
* Kisanet Tekie:            ktekie@miu.edu
