import React from 'react'
import { Container, LinearProgress, Table,  TableBody,  TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { createTheme, Pagination } from '@mui/material';
import axios from 'axios'
import { useState } from 'react'
import {useEffect} from 'react'
import { ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {CoinList} from '../config/api';
import './CoinTable.css'

const CoinsTable = () => {
    const [coins,setCoins] = useState([])
    const [loading,setLoading] = useState(false)
    const [search,setSearch] = useState()
    const [page , setPage] = useState(1);
    const navigate = useNavigate();

    const currency = 'usd'
    const symbol = "$"
    const fetchCoins = async () => {
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))
        setCoins(data)
        setLoading(false)
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        fetchCoins()
    }, [currency])

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:"#fff",
            },
            type: "dark"
        },
    });
    

    const handleSearch = () => {
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search) 
        )
    }

  return (
    <div className='coinTableContainer'>
            <ThemeProvider theme={darkTheme}>
            <Container style={{textAlign:"center"}}>
                <Typography
                    variant='h4'
                    style={{margin:18,fontFamily: "Arial" }}
                >
                Cryptocurrency Prices by Market Cap
                </Typography>
                <TextField 
                    label="Search for a crypto currency..."
                    variant="filled"
                    style={{marginBottom:20,width:"100%",backgroundColor:'white'}}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <TableContainer>
                    {
                        loading?(
                            <LinearProgress style={{backgroundColor:"gold"}} />
                        ): (
                            <Table>
                                <TableHead
                                    style={{backgroundColor:"#EEBC1D"}}
                                >
                                    <TableRow>
                                        {["Coin","Price","24h Change","Market Cap"].map((head)=>(
                                            <TableCell
                                                style={{
                                                    color:"black",
                                                    fontWeight:"700",
                                                    fontFamily:"Arial",
                                                }}
                                                key={head}
                                                align={head === "Coin" ? "" : "right"}
                                            >
                                                {head}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {handleSearch()
                                    .slice((page-1)*4,(page-1)*4+4)
                                    .map((row)=>{
                                        const profit = row.price_change_percentaje_24h > 0
                                        return (
                                            <TableRow
                                                onClick={()=>navigate(`/coins/${row.id}`)}
                                                className="row"
                                                key={row.name}
                                            >
                                                <TableCell 
                                                    component="th" 
                                                    scope="row"
                                                    styles={{
                                                        display:"flex",
                                                        gap:15,
                                                    }}
                                                >
                                                    <img
                                                        src={row?.image}
                                                        alt={row.name}
                                                        height="50"
                                                        style={{marginBottom:10}}
                                                    />
                                                    <div
                                                        style={{ display: "flex", flexDirection: "column",color:"white" }}
                                                        >
                                                        <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontSize: 22,
                                                        }}
                                                        >
                                                        {row.symbol}
                                                        </span>
                                                        <span style={{ color: "darkgrey" }}>
                                                        {row.name}
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell 
                                                    align="right"
                                                    style={{
                                                        color:"white"
                                                    }}
                                                >
                                                    {symbol}{" "}
                                                    {numberWithCommas(row.current_price.toFixed(2))}
                                                    </TableCell>
                                                <TableCell
                                                    align="right"
                                                    style={{
                                                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                        fontWeight: 500,
                                                    }}
                                                    >
                                                    {profit && "+"}
                                                    {row.price_change_percentage_24h.toFixed(2)}%
                                                </TableCell>
                                                <TableCell 
                                                    align="right"
                                                    style={{
                                                        color:"white"
                                                    }}
                                                >
                                                    {symbol}{" "}
                                                    {numberWithCommas(
                                                        row.market_cap.toString().slice(0, -6)
                                                    )}
                                                    M
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}                  
                                </TableBody>
                            </Table>
                        )
                    }
                </TableContainer>
                <Pagination
                    style={{
                        padding:20,
                        width:"100%",
                        display:"flex",
                        justifyContent: "center",
                        backgroundColor:"#16171a",
                        color:"white"
                    }}
                    variant="outlined" 
                    color="secondary"
                    className='pagination'
                    count={(handleSearch()?.length/4).toFixed(0)}
                    onChange={(_, value) => {
                        setPage(value);
                        window.scroll(0, 450);
                      }}
                />
            </Container>
        </ThemeProvider>
    </div>
  )
}

export default CoinsTable