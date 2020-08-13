const pool= require('../db/index');

module.exports = (express)=> {
    const router = express.Router();

    router.post('/add_todo',async (req,res)=> {

        try {
            //get data value
            const {id,name} = req.body;
            //sql query
            const sql = "INSERT INTO todo(id,name) VALUES (?,?)";
            //await must has promise 
            await new Promise((res,rej)=> {
                // connect db to something ...  
                pool.query(sql,[id,name],(err,row)=> { 
                    //if error         
                    if(err)
                    return rej(err)
                    else 
                    //no error
                    res(row)
                })
            })
            //return success respond 
             res.status(200).json({
                msg:"add success"   
                })
            
        } catch (error) {
            //return unsuccess data
            res.status(500).json({
               "msg":"insert failed",
               "error_message":error
           })
            
        }
    })

    router.get('/get_all',async (req,res)=> {
      try {
         const sql = "SELECT name FROM todo";
         const data =await new Promise((res,rej)=> {
            pool.query(sql,(err,row)=> {
                if(err) 
                   return rej(err);
                else
                    res(row)
            })
         });
          res.status(200).json({
            "message":"get success",
            "list":[
                ...data 
            ],
            
        })
          
      } catch (error) {
            res.status(500).json({
              "message":"error",
              "error_message":error
             })
          
      } 
    })

    router.get('/get/:id',async (req,res)=> {
        try {
            const {id} = req.params;
            console.log(id);
            const sql = "SELECT * FROM todo WHERE id=? ";
            const result = await new Promise((res,rej)=> {
                pool.query(sql,[id],(err,row)=> {
                    if(err) return rej(err)
                    res(row)
                })
            })
            res.status(200).json({
                "message":"get success",
                "list":[
                    ...result 
                ],
            })
            
        } catch (error) {
               res.status(500).json({
                "message":"error",
                "error_message":error
               })
            
         
        }
    })

    router.put('/change_todo_name',async (req,res) => {
        try {
            const {id, name} = req.body;
            console.log(id,name);
            const sql = "UPDATE todo SET name=? WHERE id=?";
            await new Promise((res,rej)=> {
                pool.query(sql,[name,id],(err,row)=> {
                    if(err) return rej(err);
                    res(row)
                })
            })
            res.status(200).json({
                "message":"update success"
            })
            
        } catch (error) {
            res.status(500).json({
                "message":"update failed",
                "error_mesagge":error
            })
        } 
    })
    router.put('/change_status', async (req,res) => {
        try {
            const {id, status} = req.body;
            console.log(id,status);
            const sql = "UPDATE todo SET type=? WHERE id=?";
            await new Promise((res,rej)=> {
                pool.query(sql,[status,id],(err,row)=> {
                    if(err) return rej(err);
                    res(row)
                })
            })
            res.status(200).json({
                "message":"change status success"
            })
            
        } catch (error) {
            res.status(500).json({
                "message":"change status failed",
                "error_mesagge":error
            })
        } 
    })

    return router;
}