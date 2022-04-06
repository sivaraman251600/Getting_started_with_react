import React from 'react';

class FirestExcercise extends React.Component{

    render(){
        return(
            <div>
                <h2>First Assignment</h2>
                <p>Position In IT</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

class Supplier extends React.Component{
    render(){
        return(
            <div>
                <FirestExcercise job={"Software Developer"} />
            </div>
        )
    }
}

export default Supplier