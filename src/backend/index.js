import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "public", "index.html"));
    console.log("sending stuff");
});

app.listen(8080, () => console.log(`listening on localhost:${port}`));
