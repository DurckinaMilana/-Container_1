import Team from '../app';

test(('добавление персонажа в команду-проверка метода  add'), () => {
  const bowman = {
    name: 'Jho',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const characterSet = new Team();
  characterSet.add(bowman);
  const daemon = {
    name: 'Max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  characterSet.add(daemon);

  const { size } = characterSet.members;

  const expected = 2;
  expect(size).toBe(expected);
});

test(('добавление персонажа в команду-проверка на ошибку'), () => {
  const bowman = {
    name: 'Jho',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const characterSet = new Team();

  characterSet.add(bowman);

  const daemon = {
    name: 'Max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  characterSet.add(daemon);
  expect(() => {
    characterSet.add(bowman);
  }).toThrowError('Персонаж записан в Set - контейнер');
});

test(('добавление персонажей в команду-проверка метода  addAll'), () => {
  const bowman = {
    name: 'Jho',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const daemon = {
    name: 'Max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const magican = {
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const characterSet = new Team();
  characterSet.addAll(bowman, daemon, magican, bowman);

  const { size } = characterSet.members;

  const expected = 3;
  expect(size).toBe(expected);
});

test(('преобразование в массив-проверка метода toArray'), () => {
  const bowman = {
    name: 'Jho',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const daemon = {
    name: 'Max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const magican = {
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const characterSet = new Team();

  characterSet.addAll(bowman, daemon, magican, bowman);
  characterSet.toArray();

  const expected = [
    {
      name: 'Jho',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Max',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Nick',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(characterSet.toArray()).toEqual(expected);
});
