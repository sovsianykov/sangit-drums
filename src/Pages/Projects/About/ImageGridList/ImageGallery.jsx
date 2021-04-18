import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import img1 from '../../../../assets/forGallery/a400.jpg'
import img2 from '../../../../assets/forGallery/b400.jpg'
// import img3 from '../../../../assets/forGallery/c.jpg'
// import img4 from '../../../../assets/forGallery/d.jpg'
// import img5 from '../../../../assets/forGallery/e.jpg'
// import img6 from '../../../../assets/forGallery/f.jpg'
// import img7 from '../../../../assets/forGallery/07.jpg'
// import img8 from '../../../../assets/forGallery/08.jpg'
// import img9 from '../../../../assets/forGallery/09.jpg'
// import img10 from '../../../../assets/forGallery/10.jpg'
// import img11 from '../../../../assets/forGallery/11.jpg'
// import img12 from '../../../../assets/forGallery/12.jpg'
// import img13 from '../../../../assets/forGallery/13.jpg'
// import img14 from '../../../../assets/forGallery/14.jpg'
// import img15 from '../../../../assets/forGallery/15.jpg'
import img1T from '../../../../assets/forGallery/at400.jpg'
import img2T from '../../../../assets/forGallery/bt200.jpg'
// import img3T from '../../../../assets/forGallery/ct.jpg'
// import img4T from '../../../../assets/forGallery/dt.jpg'
// import img5T from '../../../../assets/forGallery/et.jpg'
// import img6T from '../../../../assets/forGallery/ft.jpg'
// import img8T from '../../../../assets/forGallery/08.jpg'
// import img9T from '../../../../assets/forGallery/09.jpg'
// import img10T from '../../../../assets/forGallery/10.jpg'
// import img11T from '../../../../assets/forGallery/11.jpg'
// import img12T from '../../../../assets/forGallery/12.jpg'
// import img13T from '../../../../assets/forGallery/13.jpg'
// import img14T from '../../../../assets/forGallery/14.jpg'
// import img15T from '../../../../assets/forGallery/15.jpg'

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery>
        <Item
        original= {img1}
        thumbnail= {img1T}
        width="800"
        height="560"
    >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={img1T} alt='im' style={{margin:' 0 3px  1px 3px'}} />
            )}
    </Item>
            <Item
                original= {img2}
                thumbnail= {img2T}
                width="800"
                height="560"
            >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={img2T}  style={{margin:' 0 3px  1px 3px',height : '140px'}} alt='im' />
                    )}
            </Item>
        {/*    <Item*/}
        {/*        original= {img3}*/}
        {/*        thumbnail= {img3T}*/}
        {/*        width="1024"*/}
        {/*        height="683"*/}
        {/*    >*/}
        {/*            {({ ref, open }) => (*/}
        {/*                <img ref={ref} onClick={open} src={img3T}  style={{margin:' 0 3px 1px 3px'}} alt='im' />*/}
        {/*            )}*/}
        {/*    </Item>*/}
        {/*<Item*/}
        {/*    original= {img4}*/}
        {/*    thumbnail= {img4T}*/}
        {/*    width="1024"*/}
        {/*    height="683"*/}
        {/*>*/}
        {/*    {({ ref, open }) => (*/}
        {/*        <img ref={ref} onClick={open} src={img4T}  style={{margin:' 0 3px 1px 3px'}} alt='im' />*/}
        {/*    )}*/}
        {/*</Item>*/}
        {/*<Item*/}
        {/*    original= {img5}*/}
        {/*    thumbnail= {img5T}*/}
        {/*    width="1024"*/}
        {/*    height="683"*/}
        {/*>*/}
        {/*    {({ ref, open }) => (*/}
        {/*        <img ref={ref} onClick={open} src={img5T}  style={{margin:' 0 3px 1px 3px'}} alt='im' />*/}
        {/*    )}*/}
        {/*</Item>*/}
        {/*<Item*/}
        {/*    original= {img6}*/}
        {/*    thumbnail= {img6T}*/}
        {/*    width="1024"*/}
        {/*    height="683"*/}
        {/*>*/}
        {/*    {({ ref, open }) => (*/}
        {/*        <img ref={ref} onClick={open} src={img6T}  style={{margin:' 0 3px 1px 3px'}} alt='im' />*/}
        {/*    )}*/}
        {/*</Item>*/}


    </Gallery>
)

export default MyGallery;