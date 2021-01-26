import { data, url } from './videoData.js';

function getVideoData () {
  return data;
}

function getVideoUrl () {
  return url;
}

export {
  getVideoUrl,
  getVideoData,
}
