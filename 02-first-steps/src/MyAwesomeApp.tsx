import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {

    const firstName = 'Danier'
    const lastName = 'Vanegas'

    const favoriteGames = ['Elden Ring', 'Smash']

    const isActive = false

    const address = {
        zipcode: '200001',
        country: 'Canadá'
    }

    const myStyles: CSSProperties = {
            backgroundColor: 'red',
            borderRadius: 20,
            padding: 10,
            marginTop: 30,
        }

    return <>
        
        <h3 className="mi-clase-favorita">{lastName}</h3>
        <h1 data-testid="first-name-title">{firstName}</h1>

        <p>{favoriteGames.join(', ')}</p>

        <h1>{isActive ? 'activo' : 'no activo'}</h1>

        <p style={myStyles}>{JSON.stringify(address)}</p>

    </>
}