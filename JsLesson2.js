let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

function isEmpty(obj) {
  for (let i in obj) {
    return true;
  }
  return false;
}
