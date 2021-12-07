import { Typography, Container, Grid, Box, Paper, Link, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import FeaturedPost from './components/FeaturedPost';
import Main from './components/Main';
import post1 from './assests/blog-post.1.md';
import post2 from './assests/blog-post.2.md';
import post3 from './assests/blog-post.3.md';


const featuredPosts = [
  {
    title: 'Dominicast en version alpha',
    date: 'Nov 12',
    description:
      'Actualmente el proyecto se encuentra en fase de pruebas.',
    image: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'Para el talento',
    date: 'Nov 11',
    description:
      'Dominicast un vinculo directo entre la industria del cine y el talento dominicano.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80',
    imageLabel: 'Image Text',
  },
];

//const posts = [ post2, post3];
//console.log(posts)

const Home = () => {

  const file_name = 'blog-post.1.md';
  const [post1, setPost1] = useState('');

  useEffect(() => {
    import(`./assests/${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost1(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });

  const posts = [post1]

  return (
    <div>
      <Container maxWidth="lg">
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url("https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")`,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography variant="subtitle1" color="inherit" paragraph>
                  UNA PLATAFORMA PARA EL TALENTO
                </Typography>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  El cine Dominicano está creciendo
                </Typography>

                <Typography variant="h5" color="inherit" paragraph>
                  Deja que te encuentren
                </Typography>
                <Button variant="contained" size="large" href="/create-profile">
                  Regístrate
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Main title="Mensajes del equipo" posts={posts} />


      </Container>
    </div>
  )
}

export default Home
