import axios from 'axios'
import { Typography } from "@material-ui/core";
import React, { useState,useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from 'react-router-dom'
import ReactHtmlParser from "react-html-parser";
import {SingleCoin} from '../config/api';
import CoinInfo from '../CoinInfo/CoinInfo';
<<<<<<< HEAD
import './index.css'
=======
import './CoinPage.css'
>>>>>>> suscription

const CoinPage = () => {

  const {id} = useParams()
  const [coin,setCoin] = useState()
  const symbol = "$"
  const currency = 'usd'
  const fetchCoin = async() => {
    const {data} = await axios.get(SingleCoin(id));
    setCoin(data);
   }

   useEffect(() => {
     fetchCoin();
   }, [])
   
   const useStyles = makeStyles((theme)=>({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      marginRight: 25,
      borderRight: "2px solid grey",
      color:"white"
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Arial",
      color:"white"
    },
    description: {
      width: "100%",
      fontFamily: "Arial",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
      color:"white"
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      color:"white",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      }
    },
   }))
   
   const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography> 
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Arial",
                }}
              >
                {(coin?.market_cap_rank)}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage