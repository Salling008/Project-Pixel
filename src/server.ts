import express from 'express';
const app = express()
const PORT: string | number = process.env.PORT || 5000;

app.use("*", (req: any, res: any) => {
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));