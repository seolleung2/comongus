// ! going to help us manage users and manage users joining in signing out
// ! removing users getting users adding users everything that has to do with users

// ! In summary =>>>>> Helper function

const users = [];

const addUser = ({ id, name, room }) => {
  // Dotori ComongUs = dotoricomongus

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUsers) {
    return { error: "Same Username exists" };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0]; // splice 까지만 하면 지워진 요소를 배열로 리턴하니까 [0] 으로 콕찝어서 지워진 요소를 리턴!
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
