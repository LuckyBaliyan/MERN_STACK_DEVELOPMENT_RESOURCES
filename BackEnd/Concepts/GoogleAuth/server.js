import express from "express";
import morgan from "morgan";
import { config } from "dotenv";

import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import jwt from "jsonwebtoken";


config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());

//using the passport stratergy
app.use(passport.initialize());

//passport google startegy
passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, (_, __, profile, done) => {
      return done(null, profile);
}));

//fetch the user dets from google servers and handle cases and redirect's on failure and sucess
app.get("/auth/google/callback",
      passport.authenticate('google', {
            session: false,
            failureRedirect: '/'
      }),
      (req, res) => {
            console.log(req.user);

            //source of truth that the res from our backend
            const token = jwt.sign(req.user, process.env.JWT_SECRET, {expiresIn:"1day"});
            res.json({message: "Google Authenticated Sucessfully!", token});
      }
);


//get specific data from overall data
app.get("/auth/google",
      passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/", (req, res) => { return res.send("hello world") });

app.listen(3000, () => {
      console.log("server is sucessfully running!");
});

