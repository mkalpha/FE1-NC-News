# to Do

1. extract axios request to a separate api.js file 

2. Nav is a mess need to extract stuff out to new components

3. extract votes Patch to a utils function as I will be using it again in comments

4. sort out the date formatting on articles and comments

5. extract topics select function from SortTopicsForm will need it for the add Article Form

6. rename SortTopicsForm

5. Move Post article from Nav into its own component 



8. I am holding topicList in state in two different places, this is not good, i am going to have to move topicsList to state in app and perform insane props surgery on everything

9. Login functionality

## Bug list

2. fix sort by bug with utils function and testing - SortTopicsForm.jsx

3. adding text to post then deleting doesn't remove from state in add article form 

4. When deleteing comments if you delete the only comment it won't disapear - this is probably because i am trying to map on nothing at this point - i need to tidy up the map functions across the app

5. Voting down on a comment clear the articles comment count for some reason

6. after creating a new topic you cannot post an article to that topic straight away