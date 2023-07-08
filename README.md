# unit-2-project
## Blog API

### Trello: https://trello.com/b/C65CvUqD/blog-api

Welcome to my blog API this API is the backend framework for allowing users to log in, update their account, post blog posts, and index/read blog posts.

# FOLLOW THESE STEPS TO RUN THE API ON YOUR LOCAL MACHINE

### Step 1: Global Installations and Set Up

#### Node.JS
Install Node.js by navigating to https://nodejs.org and install onto the machine you wish to run this API.

#### Postman
Install Postman from https://www.postman.com. We will be using this to send and recieve data from the API.

#### VS Code
Install VS Code from https://code.visualstudio.com/download. We will use this as our code editor to run our server.

#### Create a MongoDB Atlas account

### Step 2: Local API Set Up

#### Create a new directory on your local machine and navigate to that directory using the ```cd``` command

 Examples:

```
mkdir example_directory
```
<br>

```
cd example_directory
```

#### Clone this GitHub repository into the directory you just created by running this command in the command line inside your directory.

```
git clone git@github.com:petejacobs99/unit-2-project.git
```
#### cd into the directory created by the git clone

#### Open the API in VSCode by typing "code ." in your command line

```
code .
```

#### open the terminal in VS Code and run the the command "npm i" in your terminal to install all the dependencies
```
npm i
```

#### In order for this API to run you will have to connect it to MongoDB.
```
1. In VS Code create a new fil called .env
2. create a variable called MONGO_URI and set it equal to your mongo connection string
3. you will also need to create a secret variable set it equal to whatever you would like your jwt secret to be.
4. finally create a port variable and set it equal to your desired port
```
# example .env file

```
MONGO_URI=mongodb+srv://exampleuser:examplepassword@mydatabase.f2qsu8n.mongodb.net/your_project
SECRET=cookies
PORT=3000
```

# RUN THE API IN DEV MODE

You can now run the API in dev mode by typing "npm run dev" in the vs code terminal.
```
npm run dev
```

this will start the app and you will get two messages in your console
```
We in the building 3000
Mongo is showing love
```
the first one lets you know the server is running and listening on port 3000
the second one lets us know Mongo DB has been connected properly

# MAKING REQUESTS IN POSTMAN

the first thing we need to do it create a user to use the API

open Postman and make a new request.
set the request type to POST
enter the URL you wish to send the request to which would be
```
localhost:3000/users
```
navigate to the body tab, select raw, and set the type to JSON

#### Sending your first request:

In the text field type the follorwing:
```
{
    "name": "First Last",
    "email": "FirstLast@gmail.com",
    "password": "bubba123"
}
```
and hit send to send the request and data to your server!

Your response should look similar to this:

<img src="/screenshots/Screenshot%202023-07-06%20at%208.48.37%20PM.png">

# Login a User

to log in a user, change the URL to localhost:3000/users/login
and almost the same request, just remove the name field
your request would look like:
```
{
    "email": "FirstLast@gmail.com",
    "password": "bubba123"
}
```

and your response will look similar to:

<img src="/screenshots/Screenshot%202023-07-06%20at%208.48.37%20PM.png">

# To Update A User

change your request type to a put request in postman

change your URL to ocalhost:3000/users/<The ID of the user you wish to update>

and in your request body, make the changes you wish to make to your user. such as updating the email.

hit send to send the request

your response will look similar to the one below, with the updated email in body of the response.

<img src="/screenshots/Screenshot 2023-07-06 at 9.07.12 PM.png">

# To Delete A User

YOU MUST LOG A USER IN AGAIN TO DELETE ONE

When you log the user in, in your response there will be a token. copy the long string inside the token. Navigate to the authorization page in postman and change your type to Bearer. paste the string you copied into the field given.

you have succesfully logged in, recieved your token, and put your token in the Bearer slot to authorize your user to delete and account.

To continue deleting your user, in your request body put the email and password of the user you would like to delete:
```
{
    "email": "FirstMiddleLast@gmail.com",
    "password": "bubba123"
}
```

when you hit send you will get a response back that says user deleted and your user will be deleted.

# To Create A Blog Post
## You must have a Bearer token for every blog post action. Make sure you take the steps to log in and get your token and put the token in the correct spot in order to make posts.

Once logged in, change your URL to localhost:3000/posts/create and your request type to POST

In the body of the request create a title, body, and user field and input data to test. Example:

```
{
    "title": "My First Post",
    "body": "this is test text",
    "user": "649708603e95e9a47cbf4186"
}
```

your response should look like this:

<img src="/screenshots/Screenshot 2023-07-06 at 9.25.50 PM.png">

# To Update A Blog Post
change the URL you want to send the request to to localhost:3000/posts/<inster the ID of the post you wish to change here>
Example:
```
localhost:3000/posts/64a769465d2f2810e55b189a
```
Change your request type to a put request
Update your post in the body of the request
Example:
```
{
    "title": "My First Post",
    "body": "this is UPDATED test text",
    "user": "649708603e95e9a47cbf4186"
}
```
Hit send and you should recieve back your updated post

# To View A Single Post

Make a get request to localhost:3000/posts/<The ID of the post you wish to view>
Example:
```
localhost:3000/posts/64a769465d2f2810e55b189a
```
# To View All Posts

Make a get request to localhost:3000/posts/all

# To Delete a Post

Make a delete request to localhost:3000/posts/<The ID of the post you wish to view>
Example:
```
localhost:3000/posts/64a769465d2f2810e55b189a
```
you will recieve back a status code 204 letting you know the post has been deleted

# RUNNING TESTS 
This API has built-in tests to make sure it is operating properly
run these tests to make sure the API is working properly, or when you make changes to make sure you did not make breaking changes.

in order to run these test you will need to run your server in one terminal windown and open a second terminal window and type "npm run test"
```
npm run test
```
If all tests completed properly your console will look like this:

<img src="/screenshots/Screenshot 2023-07-07 at 11.50.40 AM.png">

# To Run The App Normally, not in dev mode:
type node server.js into your terminal
```
node server.js
```