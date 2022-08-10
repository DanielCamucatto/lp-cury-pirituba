import { FC, ImgHTMLAttributes } from 'react';


interface IImage<T> extends ImgHTMLAttributes<T> {
    layout?: any;
}

const Image:FC<IImage<HTMLImageElement>> = ( props ) => 
<>
    <img {...props} />
</>

export default Image;