import React from "react"
import "./App.css"
import ProductList from "./Components/ProductList/ProductList"
import Main from "./Components/Main/Main"
import Wrapper from "./Hoc/Wrapper"
import Combiner from "./Hoc/Combiner"
import AuthContext from "./Context/AuthContext"




class App extends React.Component{
  constructor(props){
    super(props)
    console.log("constructor")
  }

  state = {
    products: [
      {id: 1, price:400, size:"Big", discountPrice:"",children: 50},
      {id: 2, price:300, size:"Small", discountPrice:"",children: 25},
      {id: 3, price:200, size:"Medium", discountPrice:"",children: 80},
      {id: 4, price:100, size:"Normal", discountPrice:"",children: 65}
    ],
    showProductStatus: false,
    showMain: true,
    auth: false
  }

  // changeTitleHandler(event,indexPro){
  //   const copProduct = [...this.state.products]
  //   copProduct[indexPro].size = event.target.vlaue
  //   this.setState({product: copProduct})
  // }
  changeTitleHandler(event,id){
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id
    })

    const myProduct = {
      ...this.state.products[productIndex]
    }
    myProduct.size = event.target.value
    const copProduct = [...this.state.products]

    copProduct[productIndex] = myProduct
    this.setState({products : copProduct})
  }

  deleteProductHandler(indexPro){
    const copProduct = [...this.state.products]
    copProduct.splice(indexPro,1)
    this.setState({products: copProduct})
  }
  discountHandler(indexPro){
    const copProduct1 = [...this.state.products]
    let newPrice = copProduct1[indexPro].price
    let takhfif = copProduct1[indexPro].children
    copProduct1[indexPro].discountPrice = "Price after discount is: "+((100-takhfif)/100)*newPrice
    this.setState({products: copProduct1})
  }
  toggleHandler(){
    const show = this.state.showProductStatus
    this.setState({showProductStatus: !show})
  }

  componentDidMount(){
    console.log("DidMount")
  }
  shouldComponentUpdate(){
    console.log("shouldUpdate in app.js")
    return true
  }
  componentDidUpdate(){
    console.log("DidUpdate in my Appppppp.js")
  }
  loginHandler(){
    this.setState({auth: true})
  }

  render(){
    console.log("render")
  let myProduct = null
  if(this.state.showProductStatus){
    myProduct=(
      <div>
        <ProductList 
          myList={this.state.products}
          myDel={this.deleteProductHandler.bind(this)}
          disc={this.discountHandler.bind(this)}
          changeSub={this.changeTitleHandler.bind(this)}
          isAuth={this.state.auth}
        />
      </div>

    )
  }

  return(
    <Combiner>
      <button onClick={() => {this.setState({showMain: false})}}>Remove Main</button>
      <AuthContext.Provider value={ {auth : this.state.auth , login: this.loginHandler.bind(this)}}>
      {this.state.showMain ?
      <Main 
        product = {this.state}
        myClick = {this.toggleHandler.bind(this)}
      /> : null}
      {myProduct}
      </AuthContext.Provider>
    </Combiner>
  )

  }
}

export default Wrapper(App,"center")

