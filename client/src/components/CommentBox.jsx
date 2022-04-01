
const checkBox = createClass({  
    // Setup initial state of function
      getInitialState: function(){ 
        return{checked: false}
      },
      handleChecked: function(){
        this.setState({checked: !this.state.checked})
      },
      // Render checked or unchecked function
    render: function(){
               var msg;
                   if(this.state.checked){
                      msg = 'checked';
                    }
                   else{
                      msg = 'unchecked';
                    }
                  return(
                    <div>
                        <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
                        <h3>Checkbox is {msg}</h3>
                    </div>
                  );
            }
    });
    
      
    // Comment Component
    var Comment = React.createClass({  
      getInitialState: function(){
        return{editing:false}
      },
    edit: function(){
      this.setState({editing:true});
    },
      remove: function(){
      this.props.deleteFromBoard(this.props.index)
    },
     save: function(){
      this.props.updateCommentText(this.refs.newText.value, this.props.index);
       this.setState({editing:false});
     },
    
    // Render Normal
    renderNormal: function(){
       return( 
         <div className="commentContainer">
                    <div className="commentText">{this.props.children}</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
    
                 </div>
            );
    },
    
    //Render Form
    renderForm: function(){
       return( 
                  <div>
                  <textarea ref="newText" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="button-success">Save</button>
           </div>
            );
    },
    render: function(){
            if(this.state.editing){
              return this.renderForm();
            }
            else{
              return this.renderNormal();
            }
        }
    });
    
    // Board Component
    var Board = React.createClass({
        getInitialState: function(){
          return {
              comments: [
                'bacon', 'comment 2', 'another one'
              ] 
          }
        },
      removeComment: function(i){
        console.log('Removing comment: ' + i);
        var array = this.state.comments;
        array.splice(i, 1);
        this.setState({comments:array})
      },
      updateComment: function(newText, i){
           console.log('Updating comment');
            var array = this.state.comments;
            array[i] = newText;
            this.setState({comments:array})
      },
        eachComment: function(text, i){
           return(<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}</Comment>);
        },
      render: function(){
        return(
             <div className="board">
                  {  this.state.comments.map(this.eachComment)}
             </div>
        );
    }
    });
    
    //Render the above component into the div#root
    React.render(<Board />, document.getElementById('root'));