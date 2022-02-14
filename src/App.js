import React, { useEffect, useState } from 'react'
import Tmdb from './tmdb'
import MovieRow from './components/movieRow'
import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      console.log(list);
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}