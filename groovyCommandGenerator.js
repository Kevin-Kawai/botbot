const YOUTUBE_BASE_URL = 'https://www.youtube.com'

const YoutubeUrlGenerator = (resouceId) => {
  return YOUTUBE_BASE_URL + '/watch?v=' + resouceId
}

const groovyCommandGenerator = function(youtubeData) {
  return youtubeData.items.reduce((acc, curVal) => {
    return acc + `-q ${YoutubeUrlGenerator(curVal.snippet.resourceId.videoId)}\n`
  }, '')
}

module.exports = groovyCommandGenerator;
