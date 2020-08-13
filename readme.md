 api review
   
   1) 
   add todo item 
   - type : post 
   - api address:"http://localhost:5000/api/add_todo"

   2)
   get all todo
   - type : get 
   - api address:"http://localhost:5000/api/get_all"

   3)
    get one todo
   - type : get 
   - api address:"http://localhost:5000/api/get/:id"

   4)
   change todo name
   - type : put 
   - api address:"http://localhost:5000/api/change_todo_name"

   5) 
   change status
   - type : put 
   - api address:"http://localhost:5000/api/change_status"

     mysql 
      db name : demo
       table name : todo

      todo 
      |id| name | type|
      |1 | test | 0   |

      0 = unfinished
      1 = finished 


      step 1 
        git clone https://github.com/cleong98/express-simple-rest-api.git
      step 2 
        npm install / npm i 
      step3 
        npm run serve  // this step is for run server
        
