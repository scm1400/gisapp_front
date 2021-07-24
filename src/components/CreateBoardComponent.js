import React, { Component } from 'react';
import BoardService from '../services/BoardService';
import { Editor } from '@tinymce/tinymce-react';
// import TinyMCE from 'react-tinymce';

class CreateBoardComponent extends Component {
    
    constructor(props) {
        super(props);

        
        this.state = {
            type: '',
            title: '',
            contents: '',
            memberNo: ''
        }

        
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeMemberNoHandler = this.changeMemberNoHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    
    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }
    
    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }
    
    changeContentsHandler = (event) => {
        this.setState({contents: event.target.value});
    }
    
    changeMemberNoHandler = (event) => {
        this.setState({memberNo: event.target.value});
    }
    handleEditorChange(content) {
        this.setState({ content });
    }

    
    createBoard = (event) => {
        event.preventDefault();
        let board = {
            type: this.state.type,
            title: this.state.title,
            contents: this.state.content,
            memberNo: "1",
            
            
        };
        console.log("board => "+ JSON.stringify(board));
        BoardService.createBoard(board).then(res => {
            this.props.history.push('/board');
        });
    }

    
    cancel() {
        this.props.history.push('/board');
    }


    render() {
        return (
            <div>
                
                <form>
                    <div className = "form-group">
                        <label> Type </label>
                            <select placeholder="type" name="type" className="form-control" 
                            value={this.state.type} onChange={this.changeTypeHandler}>
                            <option value="1">자유게시판</option>
                            <option value="2">질문과 답변</option>
                            </select>
                    </div>
                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                    </div>
                    <div className = "form-group">
                        <label> Contents  </label>
                        

                        <Editor
                            value={this.state.content}
                            onEditorChange={this.handleEditorChange}
                            apiKey='ojap6fhuj6aoqa6zyv0w56warbf5qmyvrpuc17oy42z812u7'
                            init={{}}
                        />
                        
                        
                    </div>

                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default CreateBoardComponent;