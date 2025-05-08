import { Cloudinary } from "@cloudinary/url-gen";


// Create a Cloudinary instance and set your cloud name.
export const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.EXPO_PUBLIC_CLOUD_NAME,
        apiKey: process.env.EXPO_PUBLIC_CLOUD_API_KEY
    },
    url: {
        secure: true 
      }
});


export const options = {
    upload_preset: 'campus_guru',
    tag: 'sample',
    unsigned: true
}