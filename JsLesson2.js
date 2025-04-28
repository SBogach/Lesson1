function isEmpty(obj) {
  for (let i in obj) {
    return false;
  }
  return true;
}

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

alert(isEmpty(user) ? "Пусто" : "Не пусто");
