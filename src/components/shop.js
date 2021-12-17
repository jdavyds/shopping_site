import React, {useEffect} from "react";
import Cart from "./cart";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { ShoppingCart, LocalMall } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
      position: 'fixed',
      bottom: '100px',
      right: '100px',
      background: 'grey',
      color: 'white',
      height: 75,
      width: 70,
      zIndex: 0,
      padding: '30px 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  });
const lists = [
    {name: 'Iphone 12 Pro Max', img: 'https://cnet.co/2XhwLAt', price: '1099', id: 1},
    {name: 'Samsung Galaxy S21', img: 'https://cnet.co/3Ecg35Z', price: '999', id: 2},
    {name: 'Google Pixel 5A 5G', img: 'https://cnet.co/3ElLHyi', price: '899', id: 3},
    {name: 'OnePlus 9', img: 'https://cnet.co/2XjhJtZ', price: '799', id: 4},
    {name: 'Motorola Edge Plus', img: 'https://cnet.co/3k4VAYX', price: '699', id: 5},
    {name: 'Apple iPhone SE', img: 'https://cnet.co/3AadeAi', price: '599', id: 6},
    {name: 'Samsung Galaxy S21 Ultra', img: 'https://cnet.co/3A8rRnp', price: '499', id: 7},
    {name: 'Google Pixel 4A', img: 'https://cnet.co/3noAyqb', price: '399', id: 8},
    {name: 'Samsung Galaxy S20 FE', img: 'https://cnet.co/3lhQM1L', price: '299', id: 9},
    {name: 'Samsung Galaxy Z Fold 3', img: 'https://cnet.co/2YGGqAQ', price: '199', id: 10},
    {name: 'Samsung Galaxy Tab S6', img: 'https://cnet.co/38ZCDRd', price: '99', id: 11},
    {name: 'Amazon Fire HD', img: 'https://cnet.co/3tCfmhz', price: '9', id: 12}
]

function Shop(props) {
    const classes = useStyles()
    return(
        <div className='shop'>
        {
            lists.map(list => {
                return(
                    <div className="card" key={list.id}>
                        <img src={list.img} alt="phone" className='card-image' />
                        <div>
                            <p>{list.name}</p>
                            <i> ${list.price} </i>
                        </div>
                        <div className='order'>
                            <button className='add' 
                            onClick={props.setter}
                            name={list.name}
                            value={list.price}
                            > <LocalMall style={ {marginRight: 10 }}/>  Add to Cart</button>
                        </div>
                    </div>
                    )
            })
        }
        <Fab  className='fab' classes={{
                    root: classes.root, 
                    label: classes.label,
        }} 
            onClick={props.toggler}
        >
                    <ShoppingCart style={{ fontSize: 40 }} /> {props.total}
            </Fab>
        </div>
    )
}
export default Shop;