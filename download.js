import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

// fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers')
//   .then(response => response.json())
//   .then(data => {
//     fsPromises.writeFile('./museumInfo.json', JSON.stringify(data))
//   })
//   .catch(error => console.error(error))

async function createArtwork() {

  let ourArtwork = []

  for (let i = 1; i < 31; i++) {
      ourArtwork.push(
          await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
          .then(item => item.json())  
      )
  }

  const artworkData = await Promise.all(ourArtwork);
  const createFile = await fsPromises.writeFile('./museumInfo.json', JSON.stringify(ourArtwork))

  return artworkData
}


createArtwork().then(result => console.log(result))