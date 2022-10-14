
for (farm = 1; farm <= 10; farm++) {
  let bag = "";
  for (seed = 1; seed <= 10; seed++) {
    if (farm == 1 || farm == 10) {
      bag += "*";
    } else if (seed == 1 || seed == 10) {
      bag += "*";
    } else {
      bag += " ";
    }
  }
  console.log(bag);
}
