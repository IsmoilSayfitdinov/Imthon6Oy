import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import "../carusleCard/SwiperCard.scss"


const CardCarusel = () => {

     const [ iscardCarusel  , setCardCarusel] = useState(null)
     const [ iscardCarusel2 , setCardCarusel2] = useState(null)
     const [ iscardCarusel3 , setCardCarusel3] = useState(null)
     const [ iscardCarusel4 , setCardCarusel4] = useState(null)
     const [ iscardCarusel5 , setCardCarusel5] = useState(null)

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/tv", {
            headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
            }
        })
        .then(response => response.json())
        .then(data => setCardCarusel(data?.results))
    },[])


    useEffect(()=>{
      fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28",{
        headers:{
          'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
      }
      })
      .then(responsecard => responsecard.json())
      .then(dataCard => setCardCarusel2(dataCard?.results))
      
    },[])

    useEffect(()=>{
       fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12",{
        headers:{
          'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
      }
       })
       .then(responseCard3 => responseCard3.json())
       .then(data3 => setCardCarusel3(data3?.results))
    },[])

    useEffect(()=>{
      fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=35" , {
        headers:{
          'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
      }
      })
      .then(responseCard4 => responseCard4.json())
      .then(data4 => setCardCarusel4(data4?.results))
    },[])

    useEffect(()=>{
      fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16",{
        headers:{
          'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
      }
      })
      .then(responsecard5 => responsecard5.json())
      .then(data5 => setCardCarusel5(data5?.results))
    },[])

    console.log(iscardCarusel);

  return (
    <>
    <div className='swiper__sliders'>
        <h2 className='swiper__card-title1'>{iscardCarusel?.[0].name}</h2>
          <Swiper
               key={iscardCarusel?.id}
               loop={true}
               autoplay={{delay: 2100}}
               modules={[Autoplay]}
               slidesPerView={10}
              spaceBetween={10}
          className="mysSwipera">
            {iscardCarusel?.map(itemsCard=>
                <div>
        
               <SwiperSlide style={{background:"#0A0909"}} key={itemsCard?.id} className='swiperSlider'>
                 <Link to={`/cardview/${itemsCard?.id}`}><img style={{width:"150px", height:"200px", objectFit:"cover"}} src={"https://image.tmdb.org/t/p/original/"+itemsCard?.poster_path} alt="" /></Link>
                </SwiperSlide>
               
               </div>
            )}
      </Swiper>
    </div>
    <div className="swiper__card2">
    <h2 className='swiper__card-title2'>{iscardCarusel2?.[0].title}</h2>
          <Swiper
          key={iscardCarusel2?.id}
               loop={true}
               autoplay={{delay: 2200}}
               modules={[Autoplay]}
               slidesPerView={3.5}
               spaceBetween={30}

          className="mysSwiper">
            {iscardCarusel2?.map(itemsCard=>
                <SwiperSlide key={itemsCard?.id} className='swiperSliders'>
                  <div className='itesmCarusel2'><Link to={`/cardview/${itemsCard?.id}`}><img style={{width:"394px", height:"212px", objectFit:"cover"}} src={"https://image.tmdb.org/t/p/original/"+itemsCard?.backdrop_path} alt="" /></Link></div>
                </SwiperSlide>
            )}
      </Swiper>
    </div>
    <div className="swiper__card3">
    <h2 className='swiper__card-title3'>{iscardCarusel3?.[6].title}</h2>
          <Swiper
               loop={true}
               key={iscardCarusel3?.id}
               autoplay={{delay: 2300}}
               modules={[Autoplay]}
               slidesPerView={3.5}
               spaceBetween={30}

          className="mysSwiper">
            {iscardCarusel3?.map(itemsCard=>
                <SwiperSlide key={itemsCard?.id} className='swiperSliders'><Link to={`/cardview/${itemsCard?.id}`}><img style={{width:"394px", height:"212px", objectFit:"cover"}} src={"https://image.tmdb.org/t/p/original/"+itemsCard?.backdrop_path} alt="" /></Link></SwiperSlide>
            )}
      </Swiper>
    </div>
    <div className="swiper__card4">
    <h2 className='swiper__card-title3'>{iscardCarusel4?.[3].title}</h2>
          <Swiper
               key={iscardCarusel4?.id}
               loop={true}
               autoplay={{delay: 2400}}
               modules={[Autoplay]}
               slidesPerView={3.5}
               spaceBetween={30}

          className="mysSwiper">
            {iscardCarusel4?.map(itemsCard=>
                <SwiperSlide key={itemsCard?.id} className='swiperSliders'><Link to={`/cardview/${itemsCard?.id}`}><img style={{width:"394px", height:"212px", objectFit:"cover"}} src={"https://image.tmdb.org/t/p/original/"+itemsCard?.backdrop_path} alt="" /></Link></SwiperSlide>
            )}
      </Swiper>
    </div>
    <div className="swiper__card4">
    <h2 className='swiper__card-title3'>{iscardCarusel5?.[5].title}</h2>
          <Swiper
          style={{height:"400px"}}
              key={iscardCarusel5?.id}
               loop={true}
               autoplay={{delay: 2400}}
               modules={[Autoplay]}
               slidesPerView={3.5}
              spaceBetween={30}
          className="mysSwiper">
            {iscardCarusel5?.map(itemsCard=>
                <SwiperSlide key={itemsCard?.id} className='swiperSliders'><Link  to={`/cardview/${itemsCard?.id}`}><img style={{width:"394px", height:"212px", objectFit:"cover"}} src={"https://image.tmdb.org/t/p/original/"+itemsCard?.backdrop_path} alt="" /></Link></SwiperSlide>
            )}
      </Swiper>
    </div>
    </>
  )
}

export default CardCarusel