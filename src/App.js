import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/home';
import Shop from './components/shop';
import Cart from './components/cart';
import Navs from './components/nav';
function App() {
    const [total, setTotal ] = useState(0)
    const [toggle, setToggle] = useState(false) ;
    const [detail, setDetail] = useState([])
    const [names, setNames] = useState([])
    const [idx, setIdx] =useState(0)
    const [subtotal, setSubtotal] = useState(0)
    function setter(e) {
        e.preventDefault()
        setIdx(idx => idx + 1)
        if(toggle === false) {
          if(names.includes(e.target.name)){
            let posi = names.indexOf(e.target.name)
            detail[posi].quantity = detail[posi].quantity + 1
          } else{
            setNames(names.concat(e.target.name))
            setDetail(detail.concat({name: e.target.name, price: +e.target.value, idx: idx, quantity: 1}))
          }
          setSubtotal(subtotal => +subtotal + +e.target.value)
          setTotal(total => total + 1)
          toggler()
        }
    }
    function toggler() {
      setToggle((prev) => !prev)
    }
    function handleIncrease(e) {
      e.preventDefault()
      let lim = e.target.value
      setTotal(total => total + 1)
      if(lim == detail[lim].idx) {
        detail[lim].quantity = detail[lim].quantity + 1
      }
      setSubtotal(subtotal => +subtotal + +detail[lim].price)
    }
    function handleDecrease(e) {
      e.preventDefault()
      let lim = e.target.value
      if(detail[lim].quantity !== 1) {
        setTotal(total => total - 1)
        if(lim == detail[lim].idx) {
          detail[lim].quantity = detail[lim].quantity - 1
        }
        setSubtotal(subtotal => +subtotal - +detail[lim].price)
      }
    }
    function handleCheckOut() {
      if(subtotal !== 0) {
        alert('Congratulations, Your Order has been taken')
      }
    }
  return (
    <div className="App">
       <BrowserRouter>
        <Navs total={total} toggler={toggler}/>
        <Cart show={toggle ? 'cart' : 'hide'} 
        toggler={toggler} 
        details={detail} 
        total={total}
        sub={subtotal}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleCheckOut={handleCheckOut}
         />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop"
        render={() => <Shop 
          total={total} 
          toggler={toggler}
          setter={setter} 
           />}
        />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
