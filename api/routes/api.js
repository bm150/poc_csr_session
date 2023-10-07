var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/create-session',(req,res,next)=>{

  console.log(req.session.tests);
  if(req.session.tests){
    console.log('exists')
  }else{
    req.session.tests = 1;
  }
  req.session.save(function(err){
    console.log('err'+err);
    if(err)
      res.status(500);
  });
  res.end();
});
router.get('/exists-session',(req,res,next)=>{
  if(req.session){
    console.log(req.sessionID,req.session)
    res.status(200);
  }else{
    res.status(404);
  }
  res.end();
});
router.post('/test-data',(req,res,next)=>{
  console.log(req.body);
  if(req.session){
    console.log(req.sessionID,req.session.tests)
    res.status(200);
  }else{
    res.status(404);
  }
  res.end();
});

module.exports = router;
