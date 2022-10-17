import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import style from '../styles/css/Home.module.css'

export const Home: FC = () => {
    const [movies, setMovies] = useState<{ title: string, description: string }[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/movies").then(res => setMovies(res.data));
    }, []);
    return (
        <>
            <h1 className={style.title}>Movies</h1>
            <div className={style.main}>
                {/* LIST */}

                <div className={style.card}>
                    <img src="data:image/jpeg;base64,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"></img>
                    <div className={style.details}>
                        <h2>Title</h2>
                        <p>director</p>
                    </div>
                    <div className={style.rating}>
                        <p>7/10</p>
                        <svg width={20} height={20} viewBox="0 0 24 24" >
                            <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                        </svg>
                    </div>
                </div>

                <div className={style.card}>
                    <img src="data:image/jpeg;base64,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"></img>
                    <div className={style.details}>
                        <h2>Title</h2>
                        <p>director</p>
                    </div>
                    <div className={style.rating}>
                        <p>7/10</p>
                        <svg width={20} height={20} viewBox="0 0 24 24" >
                            <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                        </svg>
                    </div>
                </div>

                <div className={style.card}>
                    <img src="data:image/jpeg;base64,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"></img>
                    <div className={style.details}>
                        <h2>Title</h2>
                        <p>director</p>
                    </div>
                    <div className={style.rating}>
                        <p>7/10</p>
                        <svg width={20} height={20} viewBox="0 0 24 24" >
                            <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                        </svg>
                    </div>
                </div>

                {/* LIST */}
            </div>
        </>
    );
}








                    // <h1>tytul</h1>
                    // <h1>{(movies.length !== 0) ? movies[0].title : 'loading'}</h1>
                    // <h1>description</h1>
                    // <h1>{(movies.length !== 0) ? movies[0].description : 'loading'}</h1>