import './index.css'

const TabItem = props => {
  const {itemDetails, isActive, clickedTabItem} = props
  const {name} = itemDetails

  const clickedTab = () => {
    clickedTabItem(name)
  }

  const Styles7 = isActive ? 'style1' : 'style2'

  return (
    <button type="button" className={Styles7} onClick={clickedTab}>
      <p> {name} </p>
    </button>
  )
}
export default TabItem
