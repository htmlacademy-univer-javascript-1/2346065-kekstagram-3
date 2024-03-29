import { getRandomInt } from './util.js';

function getPhotosData() {
  const photos = [];
  for (let i = 0; i < 25; i ++) {
    photos.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Фотокарточка c id = ${i + 1}`,
      likes: getRandomInt(15, 200),
      comments: getRandomInt(0, 200)
    });
  }
  return photos;
}

export {getPhotosData};
