export default class Team {
// class Team {
  constructor() {
    this.members = new Set();
  }

  add(nameCharacter) {
    if (this.members.has(nameCharacter)) {
      throw new Error('Персонаж записан в Set - контейнер');
    }
    this.members.add(nameCharacter);
  }

  addAll(...nameCharacters) {
    for (const item of nameCharacters) {
      this.members.add(item);
    }
    // console.log(this.members);
  }

  toArray() {
    return [...this.members];
  }
}
