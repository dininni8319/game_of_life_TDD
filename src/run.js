import { buildWorldFrom, gol, } from './gol.js';
import { Visualizer } from './vis.js';

// function buildRandomWorld() {
//     const size = 20;
//     const result = [];
//    for (let x = 0; x < size; x++) {
//        for (let y = 0; y < size; y++) {
//            if (Math.round(Math.random()) === 1) {
//              result.push({x, y})
//          }
//        }
//    }
//     return result
// }
async function run(){
    let world = buildWorldFrom([
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    ])
    // let world = buildWorldFrom([
    //     [1, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    //     [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    //     [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    //     [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    // ])
// let world =  buildRandomWorld()
    let v = new Visualizer()

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    while (true) {
        v.show(world);
        world = gol(world);
        await sleep(500);
    }
}

run()
