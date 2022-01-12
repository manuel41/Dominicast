import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card, Button, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import Link from '@mui/material/Link';

function FeaturedPost(props) {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {post.description}
                    </Typography>

                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={post.image}
                    alt={post.imageLabel}
                />
            </Card>

        </Grid>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageLabel: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default FeaturedPost;