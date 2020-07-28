import React from 'react';
import {Box, Typography, BoxProps, Theme} from '@material-ui/core'
import {makeStyles,createStyles} from '@material-ui/styles'
export const CardWidth = 150
export const CardHeight = 230

const useStyles = makeStyles((theme: Theme) => createStyles({
    card:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        width:CardWidth,
        height:CardHeight,
        borderRadius:"10px",
        backgroundColor:"#ffefde",
    }
}))

export type CardType = {
    title: string
    suit: "Char"|"Wild"|"Len"
}

type Props = {
    card: CardType
} & BoxProps

const Card: React.FC<Props> = function({card, ...props} : Props){
    const classes = useStyles()
    return (
        <Box {...props}>
        <Box boxShadow="2" className={classes.card}>
            <Typography variant="h6" style={{userSelect:"none"}}>
                {card.title} 
            </Typography>
            <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h5" style={{textAlign:"center", userSelect:"none"}}>
                {card.title} 
            </Typography>
            </Box>
            <Typography variant="h6" style={{textAlign:"right", userSelect:"none"}}>
                {card.title} 
            </Typography>
        </Box>
        </Box>
    )
}

export default Card