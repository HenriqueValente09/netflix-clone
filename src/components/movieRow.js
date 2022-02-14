import REACT from 'react'
import './movieRow.css'

export default ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className='movieRow--listArea'>
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                ))}
            </div>
        </div>
    )
}