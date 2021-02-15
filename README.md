# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

For this application, most of the application’s state should be managed by Redux.
There should be no direct API calls in components’ lifecycle methods, and updates should be triggered by dispatching action creators. You may use component state to handle form input fields and controlled components. Otherwise, the rest of the state for your application should be controlled by your reducers.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

use source to plan project 
https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

## Views we need in our app
- Home
- New Questions
- Leader Board
- Registration
- Login

## View Into a Hierarchy of Components

- Login view

First, users needs to login, using one of the user profiles available, drop-down on search. Suppose user was allready registered.

    Fields:
    -- username (drop-down)
    -- password

    Components:
    -- app
    -- nav
    -- login card    



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
    -- submit button

Answered questions:

This page has questions that were answered by the logged in user. Answers are blocked to changes.Each polling question should link to the details of that poll. The details of each poll should be available at questions/:question_id.

    Fields:
    -- Text “Would You Rather”
    -- username
    -- avatar
    -- question
    -- answer A
    -- percent
    -- number of users answered out of total 
    -- answer B
    -- percent
    -- number of users answered out of total
    -- details button

Components for Unanswered/Answered questions. 

    Components:
    -- app
    -- nav
    -- Answered/Unanswered quetions
    -- user/question card
    -- user/question list (sorted by date)

- Question details view.
TBD

- New question view.
 /add route

 User is provided with a form to create a question. Upon submitting a question, the user is carried to Unanswered questions page.

    Fields:
    -- create new question header
    -- question
    -- answer A
    -- answer B
    -- submit button

    Components:
    -- app
    -- nav
    -- user/new question card


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
    -- score

    Components:
    -- app
    -- nav
    -- user rating card list (sorted by number of answers)
    -- user/rating question card

- Logout view.

 User logout of the app and is brought to login page.

## Designing Actions

Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.*
https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

login
Toggle between Question Pools
Add question
Answer question
Show details of the question
logout

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

# build ui
Dashboard

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

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
