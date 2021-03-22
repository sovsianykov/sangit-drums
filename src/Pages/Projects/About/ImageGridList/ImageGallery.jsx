import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import img1 from '../../../../assets/forGallery/sergDrum1.jpg'
import img1T from '../../../../assets/forGallery/sergDrumThumb1.jpg'

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery>
        <Item
        original= {img1}
        thumbnail= {img1T}
        width="1024"
        height="768"
    >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={img1T} alt='im' />
            )}
    </Item>
            <Item
                original= {img1}
                thumbnail= {img1T}
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={img1T} alt='im' />
                    )}
            </Item>
            <Item
                original= {img1}
                thumbnail= {img1T}
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={img1T} alt='im' />
                    )}
            </Item>

    </Gallery>
)

export default MyGallery;