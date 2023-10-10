require("../src/db/mongoose");
const Task = require("../src/models/task");
e
const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments();
  return count;
};

deleteTaskAndCount("650b2649bef648c40648aa7d")
  .then((count) => {
    console.log("count", count);
  })
  .catch((e) => {
    console.log("error", e);
  });
