# Weather forecast

Test project.

# Tasks:

1. Static list of trips. The list should be scrollable. ✔
2. There should be a possibility to search for a trip ✔
3. The app should include a button for adding a new trip. When the user clicks on "Add trip," a modal window should appear. Inside the modal, the user should have the ability to: ✔
a. Choose a city from a predefined list (you should have a mock list of cities that the API supports, with images). ✔
b. Enter the start date of the trip (the start date should be within the next 15 days). ✔
c. Enter the end date of the trip (the end date should be within the next 15 days). ✔
4. On the right side of the page: ✔
a. When user selects a trip, today's weather forecast for that city should be displayed. ✔
b. There should be a countdown timer from the current date to the start date of the trip. ✔
5. Implement next and previous buttons for the list to handle scrolling better ✔
6. Sort trips by start trip date ✔
7. Implement login through third-party providers (Gmail, Facebook, etc.) - at least one of ✔
8. Implement store data (trips) after reloading page ✔

# Main functionality
- viewing the weather of cities from the list
- Adding new trips from the list
- Viewing the time before the start of the trip (timer)
- Possibility of authorization through Google
- Search
  
# Front-end 
The front-end of the application is built using:
- Vite
- React.js framework
- TypeScript
- Axios: for connecting with the back-end.
- React Query: Powerful asynchronous state management
- React Router v6: An implementation of modular routing approach, which helps to navigate between different pages of the application.
- React-hook-forms: Performant, flexible and extensible forms with easy-to-use validation.
- Date-fns: JavaScript date utility library.
- React-icons: SVG React icons
- SASS for styling
- Firebase: for authorization
- notistack: to display notifications 

 Deployment - https://weather-forecast-virid.vercel.app/
