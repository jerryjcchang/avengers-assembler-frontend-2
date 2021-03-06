import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

class Unit extends React.Component{

    render(){
        console.log(this.props);
        return(
            <Draggable
                draggableId={this.props.unit.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    // isDragging={snapshot.isDragging}
                    >
                    {/* <h3>Unit</h3> */}
                    <div className="unit-icon">
                        <img className={this.props.div} src={`icons/${this.props.unit.img_path}.png`}></img>
                        <div className={this.props.ptsDiv}>{this.props.unit.points}</div>
                    </div>
                    </div>
                )}
            </Draggable>
        )
    }

}

export default Unit
