import session from "express-session";
import dotenv from 'dotenv';

dotenv.config();

export const store = new session.MemoryStore();

const sessionAgeMinutes = 5;
const secretArray = <string[]> [
  process.env.Session_secret_1,
  process.env.Session_secret_2,
  process.env.Session_secret_3,
  process.env.Session_secret_4
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