import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import coursesRoutes from "./routes/courses.js";
import majorsRoutes from "./routes/majors.js";

//middlewares - redoslijed je bitan!
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use(cookieParser());

// Test ruta
app.get("/", (req, res) => {
  res.json({ message: "API je dostupan" });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/majors", majorsRoutes);

// Error handler za nepoznate rute
app.use((req, res) => {
  res.status(404).json({ message: "Ruta nije pronađena", path: req.path });
});

app.listen(8800, ()=>{
    console.log("API working!");
});