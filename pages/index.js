import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './page.module.css'
const AnimalImages = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [animalImages, setAnimalImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (searchKeyword !== '') {
      const fetchAnimalImages = async () => {
        try {
          const response = await axios.get('https://pixabay.com/api/', {
            params: {
              key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
              q: searchKeyword,
              image_type: 'photo',
              per_page: 10
            }
          })
          setAnimalImages(response.data.hits)
        } catch (error) {
          console.error('Error fetching animal images:', error)
        }
      }

      fetchAnimalImages()
    }
  }, [searchKeyword])

  const handleSearchChange = event => {
    setSearchKeyword(event.target.value)
  }

  const handleSearchSubmit = event => {
    event.preventDefault()
    // 検索ボタンがクリックされたときに検索を実行
    if (searchKeyword !== '') {
      const fetchAnimalImages = async () => {
        try {
          const response = await axios.get('https://pixabay.com/api/', {
            params: {
              key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
              q: searchKeyword,
              image_type: 'photo',
              per_page: 10
            }
          })
          setAnimalImages(response.data.hits)
        } catch (error) {
          console.error('Error fetching animal images:', error)
        }
      }

      fetchAnimalImages()
    }
  }

  const handleImageClick = index => {
    setSelectedImage(animalImages[index])
  }

  return (
    <div className='container'>
      <h1 className='header'>Animal Images</h1>
      <form onSubmit={handleSearchSubmit} className='form'>
        <input
          type='text'
          value={searchKeyword}
          onChange={handleSearchChange}
          placeholder='Search for animals'
          className='input'
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
      <div className='grid-container'>
        {animalImages.map((image, index) => (
          <img
            key={index}
            src={image.webformatURL}
            alt={`Animal ${index}`}
            className='image'
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className='modal'>
          <img
            src={selectedImage.largeImageURL}
            alt='Selected Animal'
            className='modal-image'
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </div>
  )
}

export default AnimalImages
