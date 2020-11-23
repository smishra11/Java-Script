//Write a JavaScript program to remove a character at the specified position of a given
// string and return the new string

function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1);
  console.log(part1 + part2);
}

remove_character('Python', 3);
