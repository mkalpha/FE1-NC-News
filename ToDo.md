# to Do

1. extract axios request to a separate api.js file 

2. fix sort by bug with utils function and testing - SortTopicsForm.jsx

3. extract votes Patch to a utils function as I will be using it again in comments

4. sort out the date formatting on articles and comments

5. extract topics select function from SortTopicsForm will need it for the add Article Form

6. rename SortTopicsForm

5. Finish add new Article form

## Check with Paul 

1. in both Nav with the appearing form and Article with the votes I am not calling componentDidUpdate, am I causing more rendering than I need to - Also there is a delay with the votes sometimes (usually on the first click)? event.preventDefaut()???

2. Am I over compartmentalising things? 

3. Am I using too many class based components?