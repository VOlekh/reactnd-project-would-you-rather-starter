# Would You Rather Project
Would You Rather is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

User is able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

# Why this project?
This project solidify understanding of React and Redux. Practice:
- improves the predictability of application’s state; 
- establishes strict rules for getting, listening, and updating the store; 
- identify what state should live inside of Redux and what state should live inside of React components.

## Design
![image](src/img/WouldYouRather.gif)

# Starter code and Student's code 

Project has starter code:
https://github.com/udacity/reactnd-project-would-you-rather-starter

For this application, most of the application’s state are managed by Redux.
There are no direct API calls in components’ lifecycle methods, and updates are triggered by dispatching action creators. Student use component state to handle form input fields and controlled components.The rest of the state for application is controlled by reducers.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing was edited in the ` _DATA.js` file is the value of `avatarURL`. Each user have an avatar, need to add the path to each user’s avatar.


## Install and Start

To install project dependencies run:

    npm install

In the project directory run npm start to run the app in development mode.

    npm start
   

App will open automatically in browser under http://localhost:3000.

_______________________________
Builds the app in production mode, go to the build folder, run:

    npm run build
   


## Views we need in our app
- Home
    1. unanswered
        - View Poll
        - View Details
    2. answered
        - View Details

- New Questions
- Leader Board
- Login
- Logout

## View Into a Hierarchy of Components

- Login view

First, users needs to login, using one of the user profiles available, drop-down on search. Suppose user was allready registered.

    Fields:
    -- username (drop-down)


    Components:
 



- Home view.

 Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The name of the logged in user should be visible on the page. The application should show a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.)

Unanswered questions:

This includes all not answered question by the logged in user. The unanswered questions should be shown by default. By clicking on one of these question, user is asked to select option A or B. After submit card with question moves to answered questions tab.

    Fields:
    -- Text “Would You Rather”
    -- username
    -- avatar
    -- question
    -- answer A
    -- answer B
    -- ViewPoll button

Answered questions:

This page has questions that were answered by the logged in user. Answers are blocked to changes.Each polling question should link to the details of that poll. The details of each poll should be available at questions/:question_id.

    Fields/View Poll:
     
    -- Text “Would You Rather”
    -- username
    -- avatar
    -- question
    -- answer A
    -- answer B
    -- View Details button


     Fields/View Details: 
    -- Text “Would You Rather”
    -- username
    -- avatar
    -- answer text
    -- The number of people who voted for that option
    -- The percentage of people who voted for that option
    -- progress bar


Components for Unanswered/Answered questions. 

    Components:




- New question view.

 User is provided with a form to create a question. Upon submitting a question, the user is carried to Unanswered questions page.

    Fields:
    -- Text “Would You Rather”
    -- create new question header
    -- answer A
    -- answer B
    -- submit button

    Components:



- Leaderboard view.
/leaderboard route

Represents a list of all users with theis score - total number of answers. Cards are sorted by top score.

    Fields:
    -- username
    -- avatar
    -- answered questions
    -- number of aq
    -- created questions
    -- number of cq
    -- score (total aq+cq)

    Components:
  

- Logout view.

 User logout of the app and is brought to login page.
 
    Fields:
    -- logout button
  


## Designing Actions

Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.*
https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

- login
- Toggle between Question Pools
- Add question
- Answer question
- Show details of the question
- logout

Once you defined actions you need to get information from db.
Define one main action - shared.js write thunk action creator.
Import data from db or api and all the actions .
Dispatch initial data to functions
           
# Reducers
A Reducer describes how an application's state changes, a reducer must return a new object.
For example the result of a questions action going through its questions reducers.

1. For every reducer initialize the state inside the store: include a default state parameter as the first argument inside a particular reducer function.

For example:
function tweets (state = {}, action) { }

2. All reducers should be combined in to one root reducer in index.js which will combine the results of calling the questions reducer, users reducer, and authedUser reducer into a single state object. Remember, we need to do this because the createStore function only accepts a single reducer.
Initialize the state inside the store: pass the initial state (or a part of the initial state) as preloadedState to the createStore function.

For example:
const store = createStore (
  rootReducer,
  { tweets: {} }
);


# Store
3. Now that all of our reducers are set up, we need to actually create the store and provide it to our application. To actually use any of the code that we've written up to this point, we need to install the redux package. Then, to provide the store to our application, we'll also need to install the react-redux package.

So install these packages and then restart your terminal:

yarn add react-redux redux
is the same as 2 comands
npm add react-redux
npm add redux

then import in main index.js 
import {createStore} from 'redux'
import {Provider} from 'react-redux'

# Middleware
add redux-thunk

All middleware follows this currying pattern:

const logger = (store) => (next) => (action) => {
 // ...
}

Hook up our redux-thunk middleware, so our thunk action creators actually work. We’ll also put in logger middleware to make debugging easier

# Initialize the App's Data
Whan we created all different actions that need to be dispatched and set up reducers which will handle this dispatches nexst step is to invoke handleInitialData from  actions/shared.js whan app loads

# Build ui

# Connect components to the store

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|



## Requirements

Application Setup


| CRITERIA | MEETS SPECIFICATIONS |
|-----------------|------------------|
| Is the application easy to install and start? | The application requires only npm install and npm start to install and launch. |
|Does the application include README with clear installation and launch instructions?| A README is included with the project. The README includes a description and clear instructions for installing and launching the project. 


Login Flow

| CRITERIA | MEETS SPECIFICATIONS |
|-----------------|------------------|
|Does the application have a way to log in and log out? |1. There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.) 
||2. The application works correctly regardless of which user is selected.
||3. The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
|Does the application work correctly regardless of which person the user impersonates?|4. Once the user logs in, the home page is shown.
||5. Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

Application Functionality
| CRITERIA | MEETS SPECIFICATIONS |
|-----------------|------------------|
|Does the home page have the desired functionality?|1. The answered and unanswered polls are both available at the root.|
||2. The user can alternate between viewing answered and unanswered polls.|
||3. The unanswered questions are shown by default.|
||4. The name of the logged in user is visible on the page.|
||5. The user can navigate to the leaderboard.|
||6. The user can navigate to the form that allows the user to create a new poll.|
|Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?|1. Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.|
||2. A polling question links to details of that poll.|
||3. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).|
|Are the details of each poll displayed with all of the relevant information?|
||The details of the poll are available at questions/:question_id.|
||When a poll is clicked on the home page, the following is shown:
||- the text “Would You Rather”;
||- the picture of the user who posted the polling question; and
||- the two options.
||For answered polls, each of the two options contains the following:
||- the text of the option;
||- the number of people who voted for that option;
||- the percentage of people who voted for that option.
||The option selected by the logged in user should be clearly marked.
||When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
||The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)|
|Does the voting mechanism work correctly?|1. Upon voting in a poll, all of the information of the answered poll is displayed.
||2. The user’s response is recorded and is clearly visible on the poll details page.
||3. When the user comes back to the home page, the polling question appears in the “Answered” column.
||4. The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
|Can users add new polls?
||1. The form is available at/add.
||2. The application shows the text “Would You Rather” and has a form for creating two options.
||3.Upon submitting the form, a new poll is created and the user is taken to the home page.
||4. The new polling question appears in the correct category on the home page.
|Does the leaderboard work correctly and have the desired functionality?|The Leaderboard is available at/leaderboard.Each entry on the leaderboard contains the following: - the user’s name; - the user’s picture; - the number of questions the user asked; -  and the number of questions the user answered. Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.|
|Is the application navigable?|The app contains a navigation bar that is visible on all of the pages. The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.|
|Does the application interact with the backend correctly?|The data that’s initially displayed is populated correctly from the backend. Each user’s answer and each new poll is correctly recorded on the backend.|
Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?|The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

Architecture

| CRITERIA | MEETS SPECIFICATIONS |
|-----------------|------------------|
|Does the store serve as the application’s single source of truth?|The store is the application’s source of truth. Components read the necessary state from the store; they do not have their own versions of the same state. There are no direct API calls in the components' lifecycle methods.|
|Is application state managed by Redux?|Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state. Form inputs and controlled components may have some state handled by the component.|
|Does application state update correctly?|Updates are triggered by dispatching action creators to reducers. Reducers and actions are written properly and correctly return updated state to the store.|
|Does the architecture of the application make sense?|The code is structured and organized in a logical way. Components are modular and reusable.|
## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
