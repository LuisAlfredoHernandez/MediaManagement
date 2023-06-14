import { ImageList, ImageListItemBar, IconButton, ImageListItem } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const ImagesGrid = ({ itemData }) => {
    return (
        <ImageList sx={{ width: 1000, height: 400 }} cols={3} >
            {itemData.map((item) => (
                <ImageListItem key={item.id} cols={1}>
                    <img
                        src={`${item.src.small}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.title}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.alt}
                        loading="lazy"
                
                    />
                    <ImageListItemBar
                        title={item.alt}
                        key={item.id}
                        subtitle={item.photographer}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.alt}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ImagesGrid;