import { isAlive } from './gol.js';

export class Visualizer {
    viewport_size = 0

    constructor(viewport_size = 20) {
        this.viewport_size = viewport_size
    }

    clearScreen() {
        console.clear();
    }

    show(world) {
        this.clearScreen()
        for (let y = this.viewport_size * -1; y < this.viewport_size; y++) {
            let row = ''
            for (let x = this.viewport_size * -1; x < this.viewport_size; x++) {
                row += isAlive( x, y , world) ? 'O' : '-'
            }
            console.log(row)
        }
    }
}
