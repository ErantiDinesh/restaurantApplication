import {Component} from 'react'

import './index.css'

class DishesItem extends Component {
  state = {quantity: 0}

  clickedPlus = () => {
    const {plusclick} = this.props
    plusclick()

    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  clickedMinus = () => {
    const {quantity} = this.state

    const {minusClick} = this.props
    minusClick()

    if (quantity > 0) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  render() {
    const {quantity} = this.state
    const {dishDetails} = this.props
    const {
      dishName,
      addonCat,
      dishAvailability,
      dishCalories,
      dishCurrency,
      dishDescription,
      dishImage,
      dishPrice,
    } = dishDetails
    const text1 = addonCat.length > 0 ? 'Customizations Available' : ''
    const text2 = dishAvailability === false ? 'Not available' : ''

    return (
      <>
        <div className="disBox1">
          <div>
            <h1> {dishName} </h1>

            <p>
              {dishCurrency} {dishPrice}
            </p>

            <p> {dishDescription} </p>

            <div>
              <button type="button" onClick={this.clickedPlus}>
                +
              </button>
              <p> {quantity} </p>
              <button type="button" onClick={this.clickedMinus}>
                -
              </button>
            </div>

            <p> {text2} </p>
            <p> {text1} </p>
          </div>

          <div>
            <p> {dishCalories} calories </p>
          </div>

          <div>
            <img src={dishImage} alt={dishName} className="dishImage" />
          </div>
        </div>
        <hr />
      </>
    )
  }
}

export default DishesItem
