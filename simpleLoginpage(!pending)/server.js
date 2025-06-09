import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3000;//active server PORT

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return []; // If file doesn't exist or empty
  }
}

async function saveUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

