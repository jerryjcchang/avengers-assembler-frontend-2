import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import '../stylesheets/zone.css'
import Team from '../components/Team'

class Zone extends React.Component {

    parseName(name){
        // let t=this
        // debugger
        let split = name.split("-")
        let capitalized = split.map(word => word[0].toUpperCase()+word.slice(1))
        return capitalized.join(" ")
    }

    totalPoints = (team) => {
        let t = this
        return (
        this.props[team].length > 0 ?
        this.props[team].map(unit => unit.points).reduce((a,b) => a+b)
        :
        0)
    }

    comparePoints = () => {
        if(this.state.active){
            if(this.totalPoints("units") > this.totalPoints("enemies")){
                this.setState({
                    win: true
                })
            }
            else {
                this.setState({
                    win: false
                })
            }
        }
    }

    setResultDiv = () => {
        let t = this
        if(this.props.gamePhase === "result"){
            let t=this
            let result
            if(this.props.result === true){
                result = <div className="result">WIN</div>
            } else {
                result = <div className="result">LOSS</div>
            }
            // debugger
            return result
        }
    }

    render(){
        // debugger
        return(
            <Droppable droppableId={`zone${this.props.index+1}`} direction="horizontal">
            {(provided,snapshot) => (
            <div className="zone"
            id={this.props.name}
            ref={provided.innerRef}
            {...provided.droppableProps}
            // isDraggingOver={snapshot.isDraggingOver}
            >
                <div className="zone-header">{`${this.parseName(this.props.name).toUpperCase()}\xa0\xa0\xa0\xa0\xa0\xa0${this.totalPoints("units")} PTS`}</div>
                <p className="team-header">Avengers</p>
                <Team team="hero"  zone={this.props.index+1} units={this.props.units}/>
                <p className="team-header">Thanos Army</p>
                <Team team="enemy" units={this.props.enemies}/>
                {this.setResultDiv()}
                {provided.placeholder}
            </div>
            )}
            </Droppable>
        )
    }

}

export default Zone
