import React from "react";
import ChefsTipsCard from "../../components/cards/ChefsTipsCard";

const ChefsTips = () => {
  const tips = [
    {
      id: 1,
      title: "5 Essential Spices Every Kitchen Needs",
      description:
        "Discover the must-have spices that will elevate any dish you cook.",
      imgSrc:
        "https://static01.nyt.com/images/2019/01/16/dining/16spice1/16spice1-superJumbo.jpg",
    },
    {
      id: 2,
      title: "How to Perfectly Cook Pasta Every Time",
      description:
        "Learn the secrets to cooking pasta to perfection, from boiling to serving.",
      imgSrc:
        "https://www.mashed.com/img/gallery/10-mistakes-everyone-makes-when-cooking-pasta/intro.jpg",
    },
    {
      id: 3,
      title: "The Art of Plating: Make Your Meals Instagram-Worthy",
      description:
        "Turn your meals into visual masterpieces with these simple plating tips.",
      imgSrc:
        "https://cookingenie.com/content/wp-content/uploads/2023/03/Elevating-Your-Dish-The-Latest-Trends-in-Food-Plating-1200x720.webp",
    },
  ];

  return (
    <section className="bg-[#E4D2BC]">
      <div className="py-16  max-w-6xl m-auto">
        <div className="container mx-auto px-4">
          {/* Heading for the section */}
          <h2 className="text-3xl font-semibold text-center text-[#FF9F39] mb-8">
            Chef's Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tipItem) => (
              <ChefsTipsCard key={tipItem.id} tipItem={tipItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsTips;
