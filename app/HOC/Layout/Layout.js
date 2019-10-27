/**
 * Created by kanamars on 21/10/19.
 */
import React from 'react';

class Layout extends React.Component{
    render(){
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

export default Layout;