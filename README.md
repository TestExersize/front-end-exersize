#Test assignment application for front-end developer vacancy.

You have simple angular application, source you can find in src, js and style folders. You should integrate you component to this application. Place your component into index.html file in the div with class `component-container`

  ```html
  <div class="component-container">
            ...
  </div>
```

### Your task is create one of presented ``components`` for this template app:
1. Create `comments block` component. Component represents scrollable area with user comments, each list item showing user name, comment created date and text of comment. At the bottom of component place comment input form with two fields, user name and user comment text and button 'Send'. Pressing button send will add new comment to existing list of comments. By demand from parent component should send JSON data with comments. Also parent component can send data to the component and it should parse and show this data properly.
  
      JSON data structure, that this component should parse and output by demand
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

2. Create form with 25 fields, registration form. It should contain: 
      * 3 input with type - text
      * 2 input with type password(password and confirm password fields).
      * 4 select elements
      * 2 date and time pickers. First start date and second - end data. End date can't be less, than start date
      * 4 radio button elements
      * 4 checkbox grouped together
      * 3 readonly input text fields
      * 1 email input field with validation
      * 1 textarea element. Restrict input to 300 elements
      
      Provide form validation by demand from parent. All form fields except readonly input fields should have required attribute. By demand validate form and if form is valid send entered user data out of component in JSON format, otherwise hint user incorrect input. Date should be converted to milliseconds in result JSON. Also component should input data from outside and properly fill all form fields.

3. Create `user education` component. Component consist of three input fields, name, start date and end date. Near this at the right presented plus button. Optionally appearing minus button. Press plus button user can add new education place. Press minus button - user can remove added education element. There is no any restrictions for count of educational elements, user can input any count. Provide validation for this element, all text fields is required.By demand from parent component should send JSON data with added educational items. Also component should get data from outside and properly show it. Simply put, component should has input parameter and output parameter. The component can receive data from outside, user can modify it and by demand return new modified data
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
4. Create component that showing result of numbers sum in number, that is the exponentiation for number 2. User can choose degree in input number element. Min value is 10, max value - 250. Update all values by user input. For example, user entered 10. First line showing  2 <sup>10</sup>. Second line - 1024. Third line - 7
 ```
 2 __________________
 Digit: <number>
 Sum: <number>    
```      

5. Create Pascal triangle component. Each digit in triangle should be one common component, that input only position indexes. User can set the height of triangle from 2 to 50. Component should be looks like triangle, like on the picture below. Triangle should be centered in the component.
   
  ```
Triangle height:           ______
   
                1
              1   1
            1   2   1
          1   3   3   1
```
     
#### Additional items, better to have it: 
* Instruction how to build/start application
* Tests
* Use any js bundler
* Fix build scripts(comments in gulpfile.js file)
* Use ES2015

<sub>Component means angular special type of directive(https://docs.angularjs.org/guide/component).</sub>
