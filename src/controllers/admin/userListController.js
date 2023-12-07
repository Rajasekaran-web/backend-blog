const userSchema = require("../../module/userList");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ResponseContent } = require("../../utility/responseContent");
const responseCode = require("../../utility/responseCode");

// Login User
const loginUser = async (req, res) => {
  try {
    // bcrypt the password
    let username = req.body.userName;
    let password = req.body.passWord;
    const secretKey = "234b kqw%$##%UGjV&^*&";

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
        const payload = {
          username: req.body.userName,
        };

        // Generate a JWT
        const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

        console.log('User authenticated');
        res.status(200).json({ message: 'User authenticated', token });
      } else {
        console.log('Invalid password');
        res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      console.log('User not found');
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};


module.exports = { loginUser };
