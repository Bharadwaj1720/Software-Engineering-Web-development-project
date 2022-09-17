# Schemas

## Library:

A book is defined as an abstract type while a book_obj is the concrete implementation. Each book is recognized by its unique ISBN. Each book_obj contains the book it describes.

schema:

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

there are two collections: __books__ and __accounts__
all book_objs are found in __books__ and all accounts are found in __accounts__
books are not stored anywhere, they are implicit

