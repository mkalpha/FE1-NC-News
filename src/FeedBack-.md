# Checklist for Northcoders News - Front End

**Set up prettier! I can give you a hand :)**

## README

- [ ] See the post in slack from yesterday and write your own one

## UX

- [ ] Basic styling added **could do with a little more styling of the articles, comments and forms**
- [ ] Responsive design **Nice Mobile layout, feels a bit empty on a full screen**
- [ ] Items aligned **Feels a bit strange having the text all centered in the single article view**
- [x] Content legible (not too wide, obstructed, etc)
- [ ] Refreshing doesn’t cause an issue on sub-pages **use localStorage to store logged in user**
- [ ] No errors in the console **see error handling section below**
- [x] Login / Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

- [x] Some way to log in (should be very obvious to hiring partners)
- [x] Some indication of who is logged in
- [x] A way to log out
- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Individual articles are served with comments
- [x] Can vote on comments
- [x] New comments are persistent
- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [x] Can post an article

## Error Handling - try to "break" your app:

- Navigation:
  - [ ] Bad url
  - [ ] Bad topic slug in url
  - [ ] Bad article id in url
  - [ ] Bad username in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)
- [ ] Post article: (No text in article body / No title / No topic selected / Non existent topic / Can you post without logging in?)

## Code

- [x] Well named components **As we discussed, could further extract logic to separate components. e.g. an ArticleList component**
- [ ] Functional components used where possible **Refactor from being a class if it doesnt need to be one, e.g. Comment**
- [ ] Components reused where possible (`Articles` / `Voter`...) **Generic reusable voter componenet for comments and article(s)**
- [ ] Functions are DRY (`handleChange` for controlled components / api calls) **updateToggleTopic and updateSortBy could be refactored to a single handleChange function similar to your other forms**
- [ ] Uses object destructuring where possible **I recommend destructing from state and props in the render method to tidy up the jsx in the return statement**
- [ ] No `console.log`s / comments **get rid!**
- **App.js can just invoke fetchAllTopics in componentDidMount**
- **ALL Api functions to the api.js file**

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Stuff to do if you get all the above done, as well as the extra section of the readme:

- [ ] Add integration tests with `cypress`
- [ ] Make sure any code that can be extracted from components is extracted and tested with `Jest`
- [ ] Use `aXe` extension to check for a11y issues
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Add search functionality
