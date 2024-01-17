import {Component} from 'react'

import './index.css'
import TabItem from '../TabItem'
import FoodItem from '../FoodItem'

const tabs = [
  {id: 1, name: 'Salads and Soup'},
  {id: 2, name: 'From The Barnyard'},
  {id: 3, name: 'From the Hen House'},
  {id: 4, name: 'Fresh From The Sea'},
  {id: 5, name: 'Biryani'},
  {id: 6, name: 'Fast Food'},
]

class Home extends Component {
  state = {
    tabsList: tabs,
    activeTab: 'Salads and Soup',
    list: [],
    restaurantName: '',
    cartCount: 0,
  }

  componentDidMount() {
    this.getFoodItems()
  }

  getFoodItems = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )
    const data = await response.json()
    console.log(data)

    this.setState({
      list: data[0].table_menu_list,
      restaurantName: data[0].restaurant_name,
    })
  }

  clickedTabItem = name => {
    this.setState({activeTab: name})
  }

  plusclick = () => {
    this.setState(prevState => ({cartCount: prevState.cartCount + 1}))
  }

  minusClick = () => {
    const {cartCount} = this.state
    if (cartCount > 0) {
      this.setState(prevState => ({cartCount: prevState.cartCount - 1}))
    }
  }

  render() {
    const {tabsList, activeTab, list, restaurantName, cartCount} = this.state

    const filteredList = list.filter(item => item.menu_category === activeTab)

    return (
      <div className="mainBox">
        <div className="headerBox">
          <h1> {restaurantName} </h1>
          <p> My orders </p>
          <p> {cartCount} </p>
        </div>
        <hr />

        <div className="tabsBox">
          {tabsList.map(item => (
            <TabItem
              itemDetails={item}
              key={item.id}
              isActive={item.name === activeTab}
              clickedTabItem={this.clickedTabItem}
            />
          ))}
        </div>

        <div className="foodItemsBox">
          {filteredList.map(item => (
            <FoodItem
              foodDetails={item}
              key={item.menu_category}
              plusclick={this.plusclick}
              minusClick={this.minusClick}
            />
          ))}
        </div>
        <hr />
      </div>
    )
  }
}
export default Home
