import React, {Component} from "react"
import Wrapper from "../../Hoc/Wrapper";
import "./Product.css"
import AuthContext from "../../Context/AuthContext"


class Product extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    static contextType = AuthContext

componentDidMount(){
    this.inputRef.current.focus()
}

    render(){
        console.log("Product")
        return(
            <React.Fragment>
            {
            this.context.auth ? <p>Logged in!</p>
            : <p>Please login!</p>
          }
            <h1 onClick={this.props.click}>Price: {this.props.price}</h1>
            <h3>Size: {this.props.size}</h3>
            <h5 onClick={this.props.clkCount}>Use discount: {this.props.children}</h5>
            <p>{this.props.discountPrice}</p>
            <input 
            ref={this.inputRef}
            type="text" onChange={this.props.change} value={this.props.size} />
            </React.Fragment>
        
        )
    }
}
export default Wrapper(Product,"productClass");
