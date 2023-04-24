const router = require('express').Router()
module.exports = router
const placesBll = require("../Bll/searchBll");
const usersBll = require('../Bll/usersBll')
const jwt = require("jsonwebtoken");

const accessTokensecret = "searchToken";
const refreshTokenSecret = "someRandomStringForRefresh";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accessTokensecret, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

router.get('/places/:text',authenticateJWT, async (req, res) => {
  const  searchText  =  req.params.text ;
  let data = await placesBll.get5Places(searchText);
  return res.json(data);
})


router.get('/places',authenticateJWT, async (req, res) => {
  let data = await placesBll.getPopulerSearch();
  return res.json(data);
})

router.get('/users',authenticateJWT, async (req, res) => {
  let data = await usersBll.getAll();
  return res.json(data);
})

router.post('/users', async (req, res) => {
  let User = req.body;
  let data = await usersBll.addUser(User);
  return res.json(data);
})
router.post('/login', async (req, res) => {
  let password= req.body.password;
  let name=req.body.name;
  let data = await usersBll.login(name,password).catch(
    err=>console.log(err)
    
  );
  return res.json(data);
})



