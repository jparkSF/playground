
### What is Barbel and what does it do?
### What are the methods for Redux Store?
> - getState()
> - dispatch(action)
> - subscribe(listener)
> - replaceReducer(nextReducer)


### What is React Hashrouter
> - A Router that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

### What is the purpose of Provider?
> - The provider pattern
Lots of React libraries need to make their data pass through all your component tree. For instance, Redux needs to pass its store and React Router needs to pass the current location.<br><br>
This could possibly seem to be handled using shared mutable state, but it only works on the client, when you have one state. If you prerender on the server, it’s just impossible to rely on such implementation. 
Fortunately, React provides a way to pass data from top to bottom: context. You can basically see it as the global object of your component tree. 
<br><br>
At the top of your app, you must therefore have a Provider. Its only role will basically be to add the data you want to the tree’s context, so that all its descendants can have access to it.