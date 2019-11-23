import express from "express";

const app = express();
app.use("/", (req, res, next) => {
  const obj = {
    foo: {
      bar: {
        baz() {
          return 42;
        }
      }
    }
  };
  const baz = obj?.foo?.as?.baz();
  res.json({
    message: baz
  });
});
app.listen(3000, () => {
  console.log("server is running on 3000");
});
