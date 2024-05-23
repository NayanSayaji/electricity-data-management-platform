Problem Statement

Create a nodeJS based application with Postgres as database and sequelize ORM. 
The application is a middle man between the consumer and the electricity board people. 

Main goal is to collect all the data of the electricity consumption of consumer and generate the bills as per the data collected by the field workers.

There is a main controller of the whole application i.e., superadmin who can control everything.

In total there are 6 roles in the application.
ROLES
- superadmin - access to all the routes,
    - supervisor or support_staff - who will check the tickets raised by the consumer
    - field workers - take photos of meters, generate bill
    -board admin - restore deleted user if a user wishes to come back to the same board and everything (total bill, avg bill)
        - board member - register all the users, do read, update and delete per user.
           - user - check all the bills and raise a ticket if any issue has occured!

Also a user can have multiple meters, regular and industrial


In total there are 4 types of meters,
Household + solar
Household + regular
Industrial + solar
Industrial + regular

Just for example, 
if the meter is solar and household then X% discount on it, 
if the meter is solar and industrial then discount is Y%  

The discount is only available for solar meters.

There is a fixed base rate on the units consumption decided by the electricity board.

Also there is a field worker who works under the superadmin. He has to go to the every meter and collect readings of the units consumed in a month and upload the pictures of the meter as proof of the meter. 

Again for example, 
for household-regular : 5 photos to collect and upload
and for household-solar - 10 photos to collect and upload

And so on,
industrial-regular : 10 photos to collect and upload
industrial-solar : 20 photos to collect and upload

Formula to calculate the bill,
```
Base Rate * Units Consumed = Amount
Apply discount based on meter type
Total Amount = Amount - (Amount * Discount)
```
different boards have different base rates 


If meter is not reachable, or can't readable then field worker will revisit the meter mentioning the revisit in the form where he will be submitting the total units, images, meter id and some other details as well.

For each user, get bills, monthly usuage, photographs, bill generated, base rate, also if any mistake is there then report it. Staff will respond on the ticket

Once bill is generated, it should be sent as pdf to the email of consumer

Board will have their login for board_admin, board_member  and their own consumers

Some imp points:
When field worker clicks on submit after filling the data, the bill will be generated and sent to the user.

The base rate and discounts differs board to board.

User isn’t allowed to change board, update any meter, add meter, or delete his profile.

I want to build the project backend using nodejs typescript postgres sequelize.

For now don't provide the code, just provide with the tables schema requirements and the planning to implement this!

Consider that I want to create the migrations and need to seed some data prior starting the application. I want to use all type of associations here, belongsToMany, hasOne, hasMany, belongsTo. Where many users will have many meters.

So take this in consideration and help me in creating table routes, database design , migration and seeding using sequelize-cli. 

And remember to create tables who will have proper references to each other.