import session from "express-session";
import dotenv from 'dotenv';

dotenv.config();

export const store = new session.MemoryStore();

const sessionAgeMinutes = 5;
const secretArray = <string[]> [
  process.env.SESSION_SECRET_1,
  process.env.SESSION_SECRET_2,
  process.env.SESSION_SECRET_3,
  process.env.SESSION_SECRET_4,
  process.env.SESSION_SECRET_5,
  process.env.SESSION_SECRET_6,
  process.env.SESSION_SECRET_7
];

export const rotateSession = () => {
  secretArray.push(secretArray[0]);
  secretArray.shift();
}

export const sessionSettings = {
  secret: secretArray,
  cookie: {
    maxAge: 60000 * sessionAgeMinutes
  },
  resave: false,
  saveUninitialized: false,
  store
}

export const corsOptions = {
  origin: '*',
  credentials: true
}