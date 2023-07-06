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
MONGO_URI=mongodb+srv://exampleuser:examplepassword@mygadatabase.f2qsu8n.mongodb.net/Unit_2_Project
SECRET=cookies
PORT=3000
```