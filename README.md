# Shoppy
Simple React project - product catalog with password-protected price
(password: "WELCOME")

## Use case
A shop wanted to showcase their products, but only willing to display prices to serious potential customers/member only.

## Process
1. Create mockup in Figma  
  ![image](https://user-images.githubusercontent.com/22455712/112935904-96f6ed00-90d9-11eb-9105-5133bbf4caa9.png)

from here I decided to create 4 components to make up the app:
- `Header` (includes logo, search bar, unlock button)
- `CardItem` (individual card item, shows product image and price)
- `CardsList` (container for CardItem, displays CardItems in 3-column grid)
- `SearchBar` (to include in header. For user to look up item that includes the word in search query)
- `PasswordPopUp` (user clicks the Unlock Button, the pop up page shows up)

2. Create Mock db using  https://my-json-server.typicode.com/   
Data can be found in db.json file  
To include list of products (id, name, price, imageUrl, description, stock)  
images from unsplash.com  

3. Start the React App using npx create-react-app  
Will be using hooks.
- App is small enough to use hooks as state management. 
- Less clutter with hooks (vs functional component) - doesn't need to define many functions in the App/root component to set state.

Figuring out data flow  
States:
- items (to show using cardList)
- password (show/unshow price)
- searchQuery (filter the items to include earchQuery)
- hidden (show/unshow popUp)  

Components      |   Props
----------------| -------------
Header          |   hidden & toggleHidden (for unlock button to toggle popup), searchQuery (pass in to SearchBar component), password (to show/unshow unlock button)  
SearchBar       |   searchQuery & setSearchQuery  
CardList        |   items, searchQuery (to filter items), password (to show/unshow price), hidden & setHidden (just to add nice UI/UX - use hidden to blur out item display, use setHidden so when the password pop up page is shown, user can click area outside the pop up to close it)  
CardItem        |   items
Password Pop Up |   hidden & setHidden (once user submit the correct password, pop up is gone), password & setPassword  



Based on this, all states are put in App.  

Since the app is small, all styles are put in App.css

4. Notes for improvement
- Password is vulnerable
- Not mobile friendly
- Individual item page using router, ItemPage component
