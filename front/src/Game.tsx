import React, {useState, useEffect} from 'react';
import Card, {CardHeight,CardWidth, CardType} from './Card'
import {makeStyles,createStyles} from '@material-ui/styles'
import {Box, Theme} from '@material-ui/core'

const CardMargin = 8

const useStyles = makeStyles((theme: Theme) => createStyles({
    centerCard: {
        position:"absolute",
        top:"calc(35% - " + CardHeight / 2 + "px)",
        left:"calc(50% - " + CardWidth / 2 + "px)"
    },
    hands: {
        position:"absolute",
        top:"calc(100% - " + (16+CardHeight) + "px)",
        width:"100%"
    },
    hand:{
        position:"absolute",
        margin:`${CardMargin}px`,
        cursor:"grab",
        zIndex:1,
        '&:hover':{
            zIndex:1000
        }
    }
  }));

type Props = {
    
}

const Game: React.FC<Props> = function({} : Props){
    const classes = useStyles()

    const [centerCard,setCenterCard] = useState<CardType>({title:"あ", suit:"Char"})
    const [isOver, setIsOver] = useState<boolean[]>([])
    const [hands, setHands] = useState<CardType[]>([
        {title:"あ", suit:"Char"},
        {title:"ば", suit:"Char"},
        {title:"7+", suit:"Len"},
        {title:"あ", suit:"Char"},
        {title:"ば", suit:"Char"},
        {title:"7+", suit:"Len"},
        {title:"あ", suit:"Char"},
        {title:"ば", suit:"Char"},
        {title:"7+", suit:"Len"},
        {title:"あ", suit:"Char"},
        {title:"ば", suit:"Char"},
        {title:"7+", suit:"Len"}
    ])

    useEffect(()=>{
        setIsOver(hands.map(_=>false))
    }, [hands])

    return (
        <>
        <Card card={centerCard} className={classes.centerCard}/>
        
        <Box className={classes.hands}>
            {hands.map((hand,idx)=>
                <Card card={hand} className={classes.hand} 
                    left={`calc(${idx} * ((100% - ${CardWidth+CardMargin*2}px) / ${hands.length-1}))`}
                    onMouseOver={()=>{

                    }}
                />
            )}
        </Box>
        </>
    )
}

export default Game