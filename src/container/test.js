import React from "react"
import ReactDOM from "react-dom"
import "./index.less"

export default class Test extends React.Component {
    render(){
        return  <div>
            <div>123</div>
        </div>
    }
}

ReactDOM.render(<Test/>,window.root)
