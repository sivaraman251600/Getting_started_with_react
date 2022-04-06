import React, {Component} from 'react';

class Details extends Component {

    render() {

        var resultNames = this.props.lists
        var resultPosition = this.props.position

        console.log(resultNames);
        console.log(resultPosition);

        return (

       <div>
          
       </div>

        );

    }

}



class NamesList extends Component {

    render () {

        const names = {

            'id1': 'Esther',
        
            'id2': 'Lily',
        
            'id3': 'Candace',
        
            'id4': 'Edward',
        
            'id5': 'Sidney'
        
        };

        return(
            <div>
                <Details lists={names.value}/>
            </div>
        )


    }

}


export default NamesList
