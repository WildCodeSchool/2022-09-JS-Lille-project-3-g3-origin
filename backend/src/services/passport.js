const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const argon2 = require("argon2");
const models = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (formName, formPassword, done) => {
      try {
        const [result] = await models.user.getUserFromUsername(formName);
        if (!result.length)
          return done(null, false, { msg: "Wrong username!" });
        const user = result[0];
        const isPasswordOK = await argon2.verify(
          user.hashedpassword,
          formPassword
        );
        if (!isPasswordOK) return done(null, false, { msg: "Wrong password!" });

        delete user.hashedpassword;
        return done(null, user);
      } catch (err) {
        console.warn(err);
        return done(err);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
