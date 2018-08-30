import React, { Component } from 'react'
import Note from './note'
import { FaPlus } from 'react-icons/fa'

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }

        this.eachNote = this.eachNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.addNote = this.addNote.bind(this)
        this.nextID = this.nextID.bind(this)
    }

    addNote(noteText){
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    ID: this.nextID(),
                    note: noteText
                }
            ]
        }))
    }

    nextID(){
        this.uniqueId = this.uniqueId || 0
       return this.uniqueId++
    }

    updateNote(newText, i){
        console.log('updating item:', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.ID !== i) ? note : {...note, note: newText}
            )
        }))
    }

    removeNote(ID) {
        console.log(`removing item at index ${ID}`)
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.ID !== ID)
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i}
            onChange={this.updateNote}
            onRemove={this.removeNote}>
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
                <button onClick={this.addNote.bind(null, "New Note")} id='add'>
                <FaPlus /></button>
            </div>
        )
    }
}



export default Board