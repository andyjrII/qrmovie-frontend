import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const MOVIELIST_URL = `/movies/${id}`;

    const getMovieList = async () => {
        try {
            const response = await axios.get(MOVIELIST_URL, {
                withCredentials: true
            });
            setMovies(response.data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <>
            <h1>Movies</h1>
            {movies.map((movie) => {
                return (<div>
                    <h3>{movie.Title}</h3>
                    {
                        movie.Images.map((image) => {
                            return <img src={image} alt={movie.Title} className='movie-poster' />
                        })
                    }

                </div>)
            })}
        </>
    )
}

export default Movies