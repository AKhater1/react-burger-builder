import React, {Component} from 'react'
import Model from '../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary'

const withErrorHandler = (WrapedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req=> {
                this.setState({error:null})
                return req
            })
            axios.interceptors.response.use(res => res, error=> {
                this.setState({error:error})
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render() {
            return(
                <Auxiliary>
                    <Model show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrapedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler