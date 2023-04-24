const users = require('./Users')
const jwt = require("jsonwebtoken");


const getAll = () => {
  return users.users;
};

const addUser=(user)=>{
 users.users.push(user);
 return users.users;
}

const login = (name, password) => {
    return new Promise(async (resolve, reject) => {
      
      let users =  getAll();
  
      const user = users.find((u) => {
        return u.name == name && u.password == password;
      });
      if (user) {
        const accessTokensecret = "searchToken";
        const refreshTokenSecret = "someRandomStringForRefresh";
        let refreshTokens = [];
  
        const accessToken = jwt.sign(
          { name: user.name, role: user.role },
          accessTokensecret
        );
        const refreshToken = jwt.sign(
          { name: user.name, role: user.role },
          refreshTokenSecret
        );
  
        refreshTokens.push(refreshToken);
        resolve({accessToken, refreshToken});
      }
      else 
      reject("email or password incorrect")
    });
  };
  module.exports = {
    getAll,addUser,login
  }