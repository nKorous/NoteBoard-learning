import React, { Component } from 'react'
import { FaPencilAlt, FaTrash, FaSave} from 'react-icons/fa/'



class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
    }
    
    edit(){
        this.setState({
            editing: true
        })
    }

    save(){
        alert('saved')
    }

    remove(){
        alert('remove note')
    }

    renderForm(){
        return (
            <div class='note'>
                <form>
                    <textarea />
                    <button onClick={this.save}><FaSave /></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return (
            <div className='note'>
                <p>Learning React</p>
                <span>
                    <button id='edit' onClick={this.edit}> <FaPencilAlt /> </button>
                    <button id='remove' onClick={this.remove}> <FaTrash /> </button>
                </span>
            </div>
        )
    }

    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay() //'?' is 'IF', ':' is 'ELSE'
    }
}

export default Note