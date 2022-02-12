import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

const movieList = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cb97c1282d2e158e0c8377b5e65dd209&language=en-US&page=1%C2%B4%29%3B`)
            .then((response) => {
                const movieData = response.data.results
                setMovies(movieData)
                console.log(response.data.results)

            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div className='movie-content-box'>
            {
                movies.map((item, index) => (
                    <Link href={`/movie/${item.id}`}>
                        <div key={index} className='movie-card'>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="movieposter" />
                            <h6>{item.title}</h6>
                        </div>
                    </Link>
                ))
            }
            <style jsx>{`
                .movie-content-box{
                    position:relative;
                    width: 100%;
                    height:auto;
                    display:flex;
                    align-items:center;
                    justify-content:space-around;
                    flex-wrap:wrap;
                    margin: 30px  0 30px 0;
                }
                .movie-card{
                    position:relative;
                    width:calc(20% - 20px);
                    background-color:blue;
                    margin: 20px 0;
                    cursor:pointer;
                }
                .movie-card:hover h6{
                    color:#fff;
                }
                img{
                    position:relative;
                    width:100%;
                }
                h6{
                    position:absolute;
                    bottom:0;
                    width:100%;
                    text-align:center;
                    color:#999;
                    font-size:16px;
                    z-index:3;
                }
                .movie-card::before{
                    content:"";
                    position:absolute;
                    bottom:0;
                    left:0;
                    width:100%;
                    height: 100%;
                    background-image: linear-gradient(transparent, #000);
                    z-index:2;
                }
            `}</style>
        </div>
    )
}

export default movieList