# Xpress-Files

Use your new found EXPRESS skills to add some much needed clarity to your code from last night. Your task is to implement a real html interface from Agent Mulder, as he's getting tired of typing in the browser URL bar. You will do that in Express. Use the `sightings.json` file from the previous homework.

## HTML Forms

The HTML form tag can be used to automatically send http requests. Forms can have many input fields. When a special submit button is clicked the browser grabs all the values for the input fields and generates query parameters, which it appends to the url and then sends as an http request. Here is a sample form which you should start with:

```javascript
<!DOCTYPE html>
<html>
  <head>
    <title>The Xpress Files</title>
  </head>

  <body>
    <h1>X-Finder</h1>
    <form action="/search" method="get">
      <label for="city">City</label>
      <input type="text" name="city"/>
      <button type="submit">Search</button>
    </form>
  </body>
</html>
```

When you click on the submit button this will send a `GET` request to the path `/search?city=<whatever-you-put-in-the-text-field>`. 

## The X-Finder

1. Initialize a new Express app
2. Create an `index.html.ejs` view which will be our index page. Use the starter html provided.
3. Use Express to serve that view when the user goes to the root path `/`. (Note: The root route is often referred to as the index page)
4. Create a view which can show the information for a collection (array) of sightings.
5. Create an express route `/search` which can handle the query for a city coming from the form.
6. Your route should render all the matched sightings.
7. Add more fields to your search form so you can query by state, date, duration.


**BONUS**

1. Explore the javascript `Date` object and the HTML input field `type="date"`. Implement a range date search.
2. Explore the html input field `type="select"` and allow for the user to select a state from a list.
3. Use client side javascript to generate a list of cities to select from, based on the state.
4. Make it pretty! How do you include css!



