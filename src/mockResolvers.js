import * as data from './data'

function getMotorcycles() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomError = Math.floor(Math.random() * 11) < 1

      if (randomError) {
        reject('There was a problem loading the data')
      }

      resolve(data.motorcycles.bikes)
    }, 1000)
  })
}

export { getMotorcycles }
