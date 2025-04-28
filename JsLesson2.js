function isEmpty(obj) {
  for (let i in obj) {
    return true;
  }
  return false;
}

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

alert(isEmpty(user) ? "Не пусто" : "Пусто");
