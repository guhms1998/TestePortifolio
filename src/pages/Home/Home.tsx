
import React from 'react';
import { Typography, Box, Grid, Button, IconButton, Link } from '@material-ui/core';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader;
import LinkedIn from '@material-ui/icons/LinkedIn';
import Main from './Home'
import { Fingerprint } from '@mui/icons-material';
import SobreMim from '../SobreMim/SobreMim';
import { useState } from "react";
import { initialTabs as tabs } from './Ingredients';
import { motion, AnimatePresence } from "framer-motion";




function Home() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
        <>
            <Grid container xs={12}
                className='tam'
                justifyContent="flex-start"
            >
                <Grid container className='pt1' xs={12} justifyContent="flex-start">
                    <Grid xs={5} >
                        <Box>

                            <Typography className='texto1'> Oi, Bem vindo ao meu site de</Typography>
                            <Typography className='texto1'>  Portifolio, Meu nome é</Typography>
                            <Typography className='text2'>Gustavo Henrique</Typography>
                            <Box className="icon">
                                <IconButton aria-label="fingerprint" color="secondary" className='linkpdf'>
                                    <Link href="https://drive.google.com/file/d/1y8dP9sXd_HFDBjxGVKcYH62ZcHOSOa__/view?usp=sharing" color="secondary">
                                        <Fingerprint />
                                        <Typography>Meu Curriculo</Typography>
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="fingerprint" color="primary" className='linkpdf'>
                                    <Link href="https://www.linkedin.com/in/gustavohms1998/">
                                        <LinkedIn />
                                        <Typography>Meu Linkedin</Typography>
                                    </Link>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={1} />
                    <Grid xs={5}>
                        <img src='.\src\pages\Home\img\How-to-student-ID-card.png' width={'100%'} height={'600vh'} />
                    </Grid>
                </Grid>

                <Grid container className='pt2' xs={12}>
                    <SobreMim />
                </Grid>


                <Grid className='pt3' xs={12}>

                    

                 <Grid container justifyContent='center' alignItems='stretch' direction='row' xs={12}>   
                    <Grid className="window" xs={6}>
                        <nav>
                            <ul>
                                {tabs.map((item) => (
                                    <li
                                        key={item.label}
                                        className={item === selectedTab ? "selected" : ""}
                                        onClick={() => setSelectedTab(item)}
                                    >
                                        {`${item.icon} ${item.label}`}
                                        {item === selectedTab ? (
                                            <motion.div className="underline" layoutId="underline" />
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <main>
                            <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    key={selectedTab ? selectedTab.label : "empty"}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {selectedTab ? selectedTab.icon : "😋"}
                                </motion.div>
                            </AnimatePresence>
                        </main>
                    </Grid>
                    </Grid>
                    


                </Grid>
                <Grid className='pt4' xs={12}>

                </Grid>
            </Grid>
        </>
    )

}











export default Home;