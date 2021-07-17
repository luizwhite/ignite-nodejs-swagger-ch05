## Ignite NodeJS - Challenge 04

### Model
- [ ] Should be able to create an user with all props

### Repository
- [ ] Should be able to create new users
- [ ] Should be able to list all users
- [ ] Should be able to find user by ID
- [ ] Should be able to find user by e-mail address
- [ ] Should be able to turn an user as admin

### UseCases
- [ ] Should be able to create new users
- [ ] Should not be able to create new users when email is already taken
- [ ] Should be able to turn an user as admin
- [ ] Should not be able to turn a non existing user as admin
- [ ] Should be able to get user profile by ID
- [ ] Should not be able to show profile of a non existing user
- [ ] Should be able to list all users
- [ ] Should not be able to a non admin user get list of all users
- [ ] Should not be able to a non existing user get list of all users

### Routes
- [ ] GET "/users" - Should be able to list all users
- [ ] GET "/users" - Should not be able to a non admin user get list of all users
- [ ] POST "/users" - Should be able to create new users
- [ ] POST "/users" - Should not be able to create new users when email is already taken
- [ ] PATCH "/users/:user_id/admin - Should be able to turn an user as admin
- [ ] PATCH "/users/:user_id/admin - Should not be able to turn a non existing user as admin