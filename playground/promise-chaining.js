require("../src/db/mongoose");
const User = require("../src/models/user");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("650b1efdab451381fee49424", 3)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
