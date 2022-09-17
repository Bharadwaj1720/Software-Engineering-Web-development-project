# Schemas

(uid) is provided by MongoDB. It is not accessible to frontend.
All collections are stored in the same database.

## Library:

A book is defined as an abstract type while a book_obj is the concrete implementation. Each book is recognized by its unique ISBN. Each book_obj contains the book it describes.

### schema:  

book:  
(uid)   
name  
author  
ISBN  

book_obj:  
(uid)  
book  
is_available  
due_date        // will be null string if not checked out  
uid_of_account  // will be null string if not checked out  

account:  
(uid)  
name  
ID_no          // will be roll_no for students, something else for others    

There are two collections: __books__ and __accounts__.
All book_objs are found in __books__ and all accounts are found in __accounts__.
Books are not stored anywhere, they are implicit.

## Health Centre

### schemas:
For appointment:
ID:(auto generated)
date:(date of the appointment)
doctor:(name of the doctor assigned or selected)
time:(time of the visit)
visit:(purpose of the visit)

For student medical record:
Roll no:(Roll number of the student )
medical record: it contains blood group,height,weight,gender,preexisting health issues fields

For drug details:
drug : (contain name and iso id)
expiary date: contains expairy date
number : number of capsules left

For doctor details:
name : name of the doctor
id: id of the doctor 
 we can derive the year of joining and wheather that person will do check up or operation or drug prescriber using that id
 
For doctor timings:
doctor : doctor details
in time: From when the doctor will be avilable
out time: up to when the doctor will be avilable


## vehicle management

### schemas:
For guest:
Name:Name of the guest 
Transport: it wll contain mode of transport to the campus and the cost of the transport
reason  : The reason guest is visiting the campus
stay    : duration of the stay from when to when
Approved by : Name of the faculty member approved the visit
Guest house : Name of the guest house he is currently residing in
count :     No.of people accomponing him
Guest vehicle : Vehicle that was assigned to guest

For institute vehicle details(which will given to the guests):
id: id of the car
car number : number of the car issued by the governament
condition : condition of the car
available : Wheather the car is vailable or not

For institute guest house management
Room number:no.of the room
Capacity:capacity of the room
working: Status of all the electrical appliances
is available : Status of the  room availability
clean : Status of the sanitation work in the room completed


