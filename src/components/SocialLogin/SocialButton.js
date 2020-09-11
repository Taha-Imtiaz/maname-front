import React,{Component} from 'react'
import SocialLogin from 'react-social-login'

class SocialButton extends Component{


    render() {    
    return (
        <div>
             <span {...this.props}>
              { this.props.children }
            </span>
        </div>
    )
}
}
export default SocialLogin(SocialButton)
