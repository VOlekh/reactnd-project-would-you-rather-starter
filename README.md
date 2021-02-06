# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.


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

After logged in, users are brought to home page with a number of options available.

Unanswered questions:

This includes all not answered question by the logged in user. By clicking on one of these question, user is asked to select option A or B. After submit card with question moves to answered questions tab.

    Fields:
    -- username
    -- avatar
    -- question
    -- answer A
    -- answer B
    -- submit button

Answered questions:

This page has questions that were answered by the logged in user. Answers are blocked to changes.

    Fields:
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

Components for Unanswered/Answered questions

    Components:
    -- app
    -- nav
    -- Answered/Unanswered quetions
    -- user/question card
    -- user/question list (sorted by number of answers)



- New question view.

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
