import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Container, Box, Link, Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        padding: theme.spacing(3, 0, 4),
    },
    cardGrid: {
        padding: '20px 0',

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1'
    },
}));


const Discover = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const paginate = (event, value) => setCurrentPage(value);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const classes = useStyles();

    return (
        <div>
            {/* <CssBaseline /> */}
            <Container className={classes.cardGrid} maxWidth="md" >
                <Grid container spacing={3}>
                    {currentPosts.map((post) => (
                        <Grid item key={post.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title" />
                                <CardContent className={classes.cardMedia}>
                                    <Typography variant="h5">{post.title}</Typography>
                                    <Typography  >{post.body}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={totalPages} className={classes.paginationContainer} onChange={paginate} />
            </Container>
        </div>
    )
}

export default Discover
