import React, { Component } from 'react'
import Note from './note'

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [
                {
                    ID: 0,
                    note: 'Call Bob'
                },
                {
                    ID: 1,
                    note: 'Take over the world'
                },
                {
                    ID: 2,
                    note: 'Succum to the Dark Side'
                }
            ]
        }

        this.eachNote = this.eachNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
    }

    updateNote(newText, i){
        console.log('updating item:', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.ID !== i) ? note : {...note, note: newText}
            )
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i}
            onChange={this.updateNote}>
                { note.note }
            </Note>
        )
    }

/***
 * the eachNote function and using the map below are what i need to do to itterate 
 * over the arrays to get stuff on the screen. 
 * 
 * Map looks like it is similar to *ngFor
 */

    render(){
        return (
            <div className="board"> 
                {this.state.notes.map(this.eachNote)} 
            </div>
        )
    }
}



export default Board