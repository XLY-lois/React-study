import React,{Component} from 'react'
/*解构赋值 相当于
import React from 'react'
const Component = React.Component
*/ 
class App extends Component{
    render(){
        return(
            //jsx 在js里写html
            <div>
                hello lois
            </div>
        )
    }
}

export default App