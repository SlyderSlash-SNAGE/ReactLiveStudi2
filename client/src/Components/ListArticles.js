import {CardArticle} from './CardArticle'
import {Grid} from '@mui/material'
import {coutState} from './../state/checkout'
import {useRecoilState} from 'recoil'

function ListArticles (props) {
    const [checkout, setCheckOut] = useRecoilState(coutState)
    if(!props){return <div><h1>Pas d'article</h1></div>}
    else {
        const articlesListing = props.articles.map((article)=> {
            if (article.price) return (
                <Grid item xs={7} md={3}>
                    <CardArticle name={article.name} price={article.price} img={article.img} />
                </Grid>
            )
            else return null
        })

        setCheckOut(['pizza à l\'ananas'])
        return (
            <Grid container 
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
                sx={{background: 'grey', color: 'white', height: '100%'}}
            >
                <Grid item xs={12} md={12}>
                    <h1>Les pizzas di Mario</h1>
                    <h2>Let's go !!!!!</h2>
                </Grid>
                {articlesListing}
                <Grid item xs={12} md={12}>
                    <h2>On en vendra plus {checkout[0]}que Luigi</h2>
                </Grid>
            </Grid>
        )
    }
}

export default ListArticles