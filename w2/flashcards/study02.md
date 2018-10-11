
### What is Barbel and what does it do?
### What are the methods for Redux Store?
> - getState()
> - dispatch(action)
> - subscribe(listener)
> - replaceReducer(nextReducer)


### What is React Hashrouter
> - A Router that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

### What is the purpose of Provider?
> - The `Provider` pattern
Lots of React libraries need to make their data pass through all your component tree. For instance, Redux needs to pass its store and React Router needs to pass the current location.<br><br>
This could possibly seem to be handled using shared mutable state, but it only works on the client, when you have one state. If you prerender on the server, it’s just impossible to rely on such implementation. 
Fortunately, React provides a way to pass data from top to bottom: context. You can basically see it as the global object of your component tree. 
<br><br>
At the top of your app, you must therefore have a Provider. Its only role will basically be to add the data you want to the tree’s context, so that all its descendants can have access to it.


### What is Switch in React Router Dom 
> - The `Switch` will iterate over its children elements (the routes) and only render the first one that matches the current pathname.

### What is withRouter?
> - You can get access to the history object's properties and the closest Router's match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

### What happens when you click a button with action?

> - Scenario: Clicking on the “Click Me” button, increments the text “Clicked 0 times”<br>
> 1. User clicks on the button in a “presentational” component
> 2. This event is handled in the “container” component
> 3. “Container” component then calls “Action Created” to get the action (JSON object)
> 4. “Container” Component then dispatches the “action” to Redux, which passes the action to reducer
> 5. “Reducer” takes the action object and current state(clickCount = 0) and returns new state(clickCount++)
> 6. Redux asks React to serenader the component based on new state.
