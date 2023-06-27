import { ImageListItem } from '@mui/material';


export const ImageListContainer = ({item}) => {
    return (
        <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                width={'45px'}
                height={'45px'}
           
            />
        </ImageListItem>
    );
}