#Test assignment application for front-end developer

There is a simple web application, sources can be found in src, js and style folders. You have to create a component which should be integrated into this application. Component - separate piece of code. 

Note: Place your component into index.html file in the div with class `component-container`.

  ```html
  <div class="component-container">
            ...
  </div>
```

#### Nice to have items for the task: 
* Instruction how to build/start application
* Tests
* Use any js bundler
* Fix build scripts(comments in gulpfile.js file)
* Use ES6, VanillaJS


### Your task is to create a ``component`` for this template app described by the appropriate item below:
1. Create `comments block` component. Component represents scrollable area with user comments, each list item shows user name, comment creation date and text of the comment. At the bottom of the component place comment input form with two fields, user name and user comment text and button 'Send'. Pressing 'Send' button will add new comment to the existing list of comments. Upon request from parent, component should send JSON data with comments. Also parent component can send data to the component and it should be able to parse and show the data properly.
  
      JSON data structure, which this component should parse and output upon request
  ```json
  {
    "data" : [
      {
        "message": "<string>",
        "userName": "<string>",
        "date": "<number>"
      }
    ]
  }
```   
   ```
   _______________________________________________
    User1  15.12.1995
    
    This is my first comment!! Hello, guys.
    _______________________________________________
    User2  16.12.1995
        
    Nice to see you, man
    
    
    
   ________________________________________________
   name:     ______________________________________ 
   comment:  ______________________________________
   ________________________________________________
    

                                        SEND BUTTON 
```

2. Create a registration form with 25 fields. It should contain: 
      * 3 input with type - text
      * 2 input with type password(password and confirm password fields).
      * 4 select elements
      * 2 date and time pickers. First start date and second - end data. End date can't be less, than start date
      * 4 radio button elements
      * 4 checkbox grouped together
      * 3 readonly input text fields
      * 1 email input field with validation
      * 1 textarea element. Restrict input to 300 characters
      
      Please provide form validation upon request from parent. All form fields except readonly input fields should have required attribute. Upon request the form should be validated and if the data is valid send entered user data out of component in JSON format, otherwise hint user about incorrect input. Date should be converted to milliseconds in result JSON. Also component should input data from outside and properly fill all form fields.

3. Create `user education` component. Component consist of three input fields, name, start date and end date.On the right side should be the plus (+) button. Minus (-) button should appear near the added component after addition (in order to remove it if necessary) except the first one. By pressing plus button user can add new education place. By press minus button - user can remove added education element. There are no other restrictions for count of educational elements, user can input any count. Provide validation for the element, all text fields are required. Upon request from the parent, component should send JSON data with added educational items. Also component should get data from outside and properly show it. Simply put, component should has input parameter and output parameter. The component can receive data from outside, user can modify it and upon request return the modified data
 ```
 {
    "data": [
        {
            "name": "<string>",
            "startDate": "<number>",
            "endDate": "<number>"
        }
    ]
 }
```  
   
 ```
     name: ___________________________         - 
     
     start date: ______ end date:__________  
               
     name: ___________________________         - + 
          
     start date: ______ end date:__________
```               
4. Create a component to show sum of digits in the number, that is exponent of 2. User can choose the degree in input number element. Min value is 10, max value - 250. Update all values by user input. For example, user entered 10. First line shows  2 <sup>10</sup>. Second line - 1024. Third line - 7
 ```
 2 __________________
 Digit: <number>
 Sum: <number>    
```      

5. Create a Pascal triangle component. Each digit inside triangle component should also be component, which gets its position index and calculates its value. User can set the height of triangle from 2 to 50. Component should look like triangle (like on the picture below). Triangle should be centered in the component.
   
  ```
Triangle height:           ______
   
                1
              1   1
            1   2   1
          1   3   3   1
```
