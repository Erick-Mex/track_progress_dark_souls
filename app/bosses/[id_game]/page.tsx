interface pageProps {
    params: { id_game: string }
}


export default function BossesList({ params }: pageProps) {
    const id = params.id_game

    return ( 
        <h1>{id}</h1>
    )
}