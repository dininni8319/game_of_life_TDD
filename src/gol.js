export function isAlive(x, y, world) {
    return world.some((cell) => {
        return cell.x == x && cell.y == y
    })
 }

export function neighbours(x, y) {
     const offsets = [ -1, 0 , 1];
     let result = [];
     offsets.forEach((ox) => {
         offsets.forEach((oy) => {
             if (ox == 0 && oy == 0) {
                 //sono la mia cella
             } else {
                  result.push({
                  x: x + ox,
                  y: y + oy
                 });
             }
         })
    })
      return result
}

export function countAliveNeighbours(x, y, world) {
    // let neighbours2 = neighbours(x, y)
    return neighbours(x, y).reduce((acc, cell) => {
        const step = isAlive(cell.x, cell.y, world) ? 1 : 0
        return acc + step
    }, 0)
//     let count = 0;
//    neighbours2.forEach(cell => {
//        if (isAlive(cell.x, cell.y, world)) {
//                 count = count + 1
//        }
//    })
    // return count
}

export function buildWorldFrom(aa) {
    return aa.reduce((acc, row, y) => {
        return acc.concat(
            row.reduce((acc, cell, x) => {
                if (cell == 1 ) {
                    acc.push({  x: x,  y: y })
                }
                    return acc;
            }, [])
        )
    }, [])
    // const result = [];
    // for (let y = 0; y < aa.length; y++) {
    //     const row = aa[y];
    //     for (let x = 0; x < row.length; x++) {
    //         const element = row[x];
    //         if (element == 1) {
    //             result.push({
    //                 x:  x,
    //                 y: y
    //             })
    //         }
    //     }
    // }
    // return result
}
 export function gol(world) {
   const newWorld = [];
   world.forEach(cell => {
       const aliveNeighbours = countAliveNeighbours(cell.x, cell.y, world)
       if (aliveNeighbours < 2 || aliveNeighbours > 3) {
       } else {
           newWorld.push(cell)
       }
       // New Born Rule
    const deadCells = neighbours(cell.x, cell.y).filter( cell => {
           return (!isAlive(cell.x, cell.y, world))
       })
    deadCells.forEach(dead => {
             const aliveNeighbours = countAliveNeighbours(dead.x, dead.y, world)
             //fix per problema di saturazione di memoria
             if (aliveNeighbours === 3) {
                 if (!isAlive(dead.x, dead.y, newWorld))
                      newWorld.push(dead)
             }
    });
   });
    return newWorld;
}
