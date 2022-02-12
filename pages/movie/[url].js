import Head from 'next/head';

export default function FilmDetay({ movie }) {
	return (
		<div className="movie-selected">
			<Head>
				<title>{movie.title}</title>
			</Head>
			<div className="cover">
				<h3>{movie.title}</h3>
				<p>{movie.overview}</p>
			</div>
			<style jsx>{`
                .movie-selected{
					position:relative;
					width:100%;
					height:calc(100vh - 100px);
					background-image:url(https://www.themoviedb.org/t/p/original${movie.poster_path});
					background-repeat: no-repeat;
					background-position: center;
					background-size:100%;
					z-index:10;
				}
				.movie-selected::before {
                    content: '';
                    background: linear-gradient(to bottom, transparent, #999);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
				}
				h3{
					font-size:40px;
					width:100%;
					position:absolute;
					bottom: 100px;
					text-align:center;
				}
				p{
					font-size:20px;
					width:100%;
					position:absolute;
					bottom: 0px;
					text-align:center;
					padding: 0 100px;
				}
            `}</style>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=cb97c1282d2e158e0c8377b5e65dd209&language=tr-TR`)
	const movie = await request.json()

	return {
		props: {
			movie,
		},
	}

}