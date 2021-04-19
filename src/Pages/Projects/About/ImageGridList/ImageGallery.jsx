import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Photos } from '../../../../assets/arrayForGallary'

import { Gallery } from 'react-photoswipe-gallery'
import ItemG from "./ItemG";

const MyGallery = () => (
    <Gallery>
        {Photos.map((photo,i) => (
            <ItemG full={photo.f} thumb={photo.t} key ={i}/>
        ))}

    </Gallery>
)

export default MyGallery;