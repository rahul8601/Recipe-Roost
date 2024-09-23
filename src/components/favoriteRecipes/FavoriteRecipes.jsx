import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeRecipe } from '../../redux/slices/AddFavorites';
import LazyImg from '../lazyLoadImg/LazyImg';
// import { FaTimes } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router';



const FavoriteRecipes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const FavrateItemsData = useSelector(state => state?.favorite);
  const dispatch = useDispatch()
  
//  const detailsdata = FavrateItemsData.filter((e) => e) 
  const navigate = useNavigate()

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRemove = (recipe) => {
    dispatch(removeRecipe(recipe))
  
   
  }

 

  return (
    <div className="absolute z-50">
      
      <button
        onClick={handleToggle}
        className="fixed right-0 top-[90%] p-2 bg-gradient-to-r from-[#FFB93A] to-[#FF9B39] text-white rounded-l-lg "
      >
        Favorites
      </button>

    
      <div
        className={`fixed top-0 right-0 h-full w-64  bg-[#EFE3D3] shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
       
       <div className='p-3 border-b flex justify-between items-center border-[#FFB13A]'>
        <h2 className="text-xl font-bold ">Favorite Recipes</h2>
        <button
        onClick={handleToggle}
        className=" w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#FFB93A] to-[#FF9B39] text-white flex items-center justify-center text-xl hover:scale-105 transition-transform duration-300"
      > <IoClose/></button>
       </div>


     

      {FavrateItemsData?.map((recipe) => (
       <div  key={recipe.strMeal} className="flex items-center justify-between h-12 bg-[#EFE3D3] my-2 mx-4 rounded-full p-2 shadow-md cursor-pointer">
      {/* Left Side - Image */}
      <div onClick={()=>  navigate(`/details/${recipe.idMeal}`)} className='flex items-center justify-center'>
      <LazyImg
         src={recipe.strMealThumb}
         alt={recipe.strMeal}
        css={`h-10 w-10 rounded-full object-cover`}
      />

      {/* Middle - Item Name and Rating */}
      <div className="flex-1 mx-4">
        <h3 className="text-sm font-semibold">{recipe?.strMeal?.slice(0, 12)}{recipe?.strMeal?.length >= 12? "..." : null}</h3>
        <span className="text-[#FF9C39]">★★★★★</span>
      </div>

      </div> 

      {/* Right Side - Close Button */}
      <button
        onClick={() => handleRemove(recipe)}
        className="h-8 w-8  flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFB93A] to-[#FF9B39] text-red-500 hover:scale-105 transition-transform duration-300"
      >
        <MdDelete />
      </button>
    </div>
    ))}



    </div>

        </div>
      
    
  );
};

export default FavoriteRecipes;
