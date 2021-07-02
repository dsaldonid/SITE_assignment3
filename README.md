# Week 3 Assignment: Life Tracker

Submitted by: Diego Saldonid

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button. 
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [x] The detailed activity page should display a feed of all previous tracked activities.
- [x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [x] The activity tracked should be given a unique id for easy lookup.
  * [Table Schema](https://github.com/dsaldonid/SITE_assignment3/blob/main/api/fitness-app-schema.sql) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.
- [x] Created custom hooks to have a global app state
- [x] Created context to share app state and setter throughout component without prop drilling

### Walkthrough Video
 Frontend
https://www.loom.com/share/5afb48bdc4964a77b7746b3253277ec0

Backend Authentication
https://www.loom.com/share/b31e628bb76d46a381682591d40e590d

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

[The labs were incredibly helpful once again in helping my find direction when I felt lost. I started building the app without a clear idea of what security measures I was implement and it caused a good deal of frustration. It wasn't until I decided to go back to the authentication lab that I got a proper idea of what was going on]

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
[If I had more time I would have finished up the activity page to show aggregate stats for all the acitivity pages. I decided to refactor my code and modularized my code futher in order to centralize my app state. If I could go back in time, I'd try to find out where my knowledge gap is and immediately gain that certain knowledge before spending too much time trying to debug simple problems.]

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

[Overall, everything went great! I was able to find some bugs with how specific components render and was able to fix those once my demo was finished. Next demo I want to implement more testing throughout my code to ensure that most bugs are caught before doing a demo.]

### Open-source libraries used

- https://material-ui.com/.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

[I want to give a huge shout out to Paige, Matt and Kordell. They were incredibly helpful in questioning my approach and exposing gaps in my knowledge. Because of them I feel very confident in my full stack knowledge. I feel even more excited to learn more!]
