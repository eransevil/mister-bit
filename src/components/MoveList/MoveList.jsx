
import { Component } from 'react'

import './MoveList.scss'

export class MoveList extends Component {

    render() {
        return (
            <div className="move-list">
            <span className="move-list-title">{ this.props.title}  </span>
           {this.props.Moves.map(move =>
               <div className="move-list-item" key={move.at}>
                   <span className="to-move-list"> to: {move.to}</span> 
                   <span> at:  {new Date(move.at).toString().substr(4, 11) }</span> 
                   <span> Amount: { move.amount} coins</span> 
               </div>
               
                
            )}
            </div>
        )
    }
}
