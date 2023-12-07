const userSchema = require("../../module/userList");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ResponseContent } = require("../../utility/responseContent");
const responseCode = require("../../utility/responseCode");

// Login User
const loginUser = async (req, res) => {
  try {
    //bcrypt the password
    let username = req.body.userName;
    let password = req.body.passWord;
    const hashedPassword = await bcrypt.hash(req.body.passWord, 10);
    const secretKey = "234b kqw%$##%UGjV&^*&";

    // Example payload (information you want to include in the token)
    const payload = {
      username: req.body.userName,
    };

    // Generate a JWT
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    console.log("Generated JWT:", token);
    // let data = new userSchema({
    //   userName: req.body.userName,
    //   passWord: hashedPassword,
    // });
    const users = await userSchema.aggregate([
      {
        $match: {
          userName: username
        }
      },
      {
        $project: {
          _id: 0,
          userName: 1,
          passWord: 1
        }
      }
    ]);
    
    if (users.length > 0) {
      const user = users[0];
      const passwordMatch = await bcrypt.compare(password, user.passWord);
    
      if (passwordMatch) {
        console.log('User authenticated');
        res.status(200).json("User authenticated" );
      } else {
        res.json("Invalid password" );
        console.log('Invalid password');
      }406
    } else {
      res.json("Invalid password" );
      console.log('User not found');
    }
    console.log('login--->',login);
    // let saveData = await data.save();
    // res.json(saveData);
  } catch (error) {
    res.json({ error: "Error creating user" });
  }
};

module.exports = { loginUser };
