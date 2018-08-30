import React, { Component } from 'react'
import { FaPencilAlt, FaTrash, FaSave} from 'react-icons/fa/'

//ref is reference to whatever content is (like ($event) in angular?)

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

    save(e){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })

       // alert(this._newText.value) //Event binding, like interpolation
    }

    remove(){
        this.props.onRemove(this.props.index)
    }

    renderForm(){
        return (
            <div className='note'>
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input}/>
                    <button id='save'><FaSave /></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return (
            <div className='note'>
                <p>{this.props.children}</p>
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