import React, {Component} from "react"
import Product from "../Product/Product"

class ProductList extends Component{
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("SnapShot")
        return null
    }
    componentDidUpdate(){
        console.log("DidUpdate")
    }

    componentWillUnmount(){
        console.log("willUnMount")
    }

    render(){
        console.log("ProductList")
        return(
            this.props.myList.map((item,index) => {
                return <Product key={item.id}
                 price={item.price}
                  size={item.size}
                  //myAuth={this.props.isAuth}
                   discountPrice={item.discountPrice} children={item.children}
                    click={() => this.props.myDel(index)} clkCount={() => this.props.disc(index)} change={(event) => this.props.changeSub(event,item.id)}/>
            })
        )
    }
}

export default ProductList