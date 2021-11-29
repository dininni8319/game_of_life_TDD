import {
  isAlive,
  neighbours,
  countAliveNeighbours,
 buildWorldFrom,
 gol
}  from '../src/gol';
// Soluzione con stile functional programming
// - uso solo funzioni
// - uso solo funzioni pure
//        - risultato deterministico rispetto ai dati in input
//        - non ci ono side-effect
// - strutture dati -> F -> struttura dati

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

// 1. come rappresentare il mondo infinito
// lavoriamo sul dato, sulla  struttura del dato

// idee
// - array di array
// - oggetti che contengono x e y
// map ...k x:1 , y:1-> vivo,
// infinte world
// world ==> ?

// una cella si identifica con x e y valori numerici
// non è necessario memorizzare tutto ma solo le celle vive, quindi posso usare un Set oppure un semplice array.
// La struttura scelta è un array di Oggetti che rappresentano solo le celle vive

//  infinite wolrd
// solo le celle vive
// world => [
//   { x: 5, y: 5 },
//   { x: 3, y: 5 2},
//   { x: 34, y: 54 },
// ]
// tick ===> ?


describe('isAlive', () => {
  it('should return true if cell exists in the world', () => {
    const world = [
      {x: 0, y: 0},
    ];

const result = isAlive(0,0, world);

expect(result).toBe(true);
  });
});

describe('countAliveNeighbours', () => {
  it('should return all the  neighbours cells of a cell', () => {

    let  result = neighbours(0, 0);
    expect(result.length).toBe(8);
    expect(result).toEqual(
      expect.arrayContaining([
        { x: -1, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: 1 },
        { x: 1, y: -1 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
      ]),
    )
  });
});

describe('isAlive', () => {
  it('should return false if cell not  exists in the world', () => {
    const world = [
      { x: 0, y: 0 },
      { x: 2, y: 2 },
    ];
    const result = isAlive(1, 1, world);

    expect(result).toBe(false);
  });
});

describe('countAliveNeighbours', () => {
  it('should count alive neighbours', () => {
    const world = [
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 88, y: 99 },
    ];

    let result = countAliveNeighbours(0, 0, world);
    expect(result).toBe(3);
  });
});

describe('isAlive', () => {
  it('should return false if cell not  exists in the world', () => {
    const world = [
      { x: 0, y: 0 },
      { x: 2, y: 2 },
    ];
    const result = isAlive(1, 1, world);

    expect(result).toBe(false);
  });
});

describe('buildWorldFrom', () => {
  it('should return a world from array of array', () => {
    const world = buildWorldFrom([
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ]);
    expect(world.length).toBe(3);
    expect(world).toEqual(
      expect.arrayContaining([
        { x: 2, y: 0 },
        { x: 1, y: 1 },
       {x: 1, y : 1}
      ]),
    );
  });
});

describe('gol', () => {
  it('Any live cell with more than three live neighbours dies, as if by overpopulation', () => {
    const oldWorld = buildWorldFrom([
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ]);
    const newWorld = gol(oldWorld);
    expect(isAlive(1, 1, newWorld)).toBe(false);
  });

  it('Any live cell with two or  three live neighbours on the next generation.', () => {
    const oldWorld = buildWorldFrom([
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ]);
    const newWorld = gol(oldWorld);
    expect(isAlive(1, 1, newWorld)).toBe(false);
  });

  it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
    const oldWorld = buildWorldFrom([
      [1, 0, 0],
      [0, 0, 0],
      [1, 0, 1],
    ]);
    const newWorld = gol(oldWorld);
    expect(isAlive(1, 1, newWorld)).toBe(true);
  });
});

describe('acceptance test', () => {
  it('Blinker', () => {
    const oldWorld = buildWorldFrom([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ]);
    const newWorld = gol(oldWorld);
    expect(isAlive(0, 0, newWorld)).toBe(false);
    expect(isAlive(1, 0, newWorld)).toBe(false);
    expect(isAlive(2, 0, newWorld)).toBe(false);

    expect(isAlive(0, 2, newWorld)).toBe(false);
    expect(isAlive(1, 2, newWorld)).toBe(false);
    expect(isAlive(2, 2, newWorld)).toBe(false);

    expect(isAlive(0, 1, newWorld)).toBe(true);
    expect(isAlive(1, 1, newWorld)).toBe(true);
    expect(isAlive(2, 1, newWorld)).toBe(true);
  })
});
