import React from 'react'

const RecipeVideo = ({recipe}) => {
  return (
    <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-4 text-[#FF9F39]">Watch on YouTube</h2>
    <div className="w-full h-96  rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${recipe?.strYoutube.split('v=')[1]}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
  )
}

export default RecipeVideo
