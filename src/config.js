const common = {
  IMAGES_URL: 'http://res.cloudinary.com/stagounet/image/upload/',
  IMG_MED_SCALE: 'c_scale,h_320,w_500',
  JPG: '.jpg'
}

const dev = {
  API: 'http://stag.local:1338'
}

const prod = {
  API: 'http://stag.local:1338'
  // API: 'http://stag.ninja:1338'
}

export const config = Object.assign(common, prod)
