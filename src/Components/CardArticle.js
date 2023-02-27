import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import defaultimg from './../img/pizzadefault.jpeg'

//sonarlint
function CardArticle (props) {
    return (
        <Card sx={{ maxWidth: 345, opacity: '0.8' }}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height="200"
                        image={props.img ?props.img :defaultimg}
                        alt={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pizza {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Prix : {props.price}€
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Ajouter au panier
                        </Button>
                    </CardActions>
        </Card>
    )
}

export {CardArticle}