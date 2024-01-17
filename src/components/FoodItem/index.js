import './index.css'
import DishesItem from '../DishesItem'

const FoodItem = props => {
  const {foodDetails, plusclick, minusClick} = props
  const foodUpd = foodDetails.category_dishes
  const updatedFood = foodUpd.map(item => ({
    dishId: item.dish_id,
    dishName: item.dish_name,
    addonCat: item.addonCat,
    dishAvailability: item.dish_Availability,
    dishType: item.dish_Type,
    dishCalories: item.dish_calories,
    dishCurrency: item.dish_currency,
    dishDescription: item.dish_description,
    dishImage: item.dish_image,
    dishPrice: item.dish_price,
  }))

  return (
    <div>
      <div className="dishBox1">
        {updatedFood.map(item => (
          <DishesItem
            dishDetails={item}
            key={item.dishId}
            plusclick={plusclick}
            minusClick={minusClick}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodItem
