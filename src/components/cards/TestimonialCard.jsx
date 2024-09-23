import React from 'react'

const TestimonialCard = ({testimonial}) => {
  return (
    <div className="bg-[#EFE3D3] p-8 rounded-lg h-[200px]">
    {/* User Info */}
    <div className="flex items-center mb-4">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full "
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
        <div className="text-[#FF9B39] text-sm">
          {'★'.repeat(testimonial.rating)}
          {'☆'.repeat(5 - testimonial.rating)}
        </div>
      </div>
    </div>
    {/* User Message */}
    <p className="text-gray-700">{testimonial.message}</p>
  </div>
  )
}

export default TestimonialCard
