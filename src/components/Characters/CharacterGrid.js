import React from 'react'
import Spiner from '../ui/Spiner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? ( <Spiner /> ) : (
        
        <section className="cards">
            {
                items.map(item => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
    )
}

export default CharacterGrid
