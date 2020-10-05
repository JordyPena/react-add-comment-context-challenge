import React, { Component } from 'react'
import CommentsContext from "./CommentsContext"

export default class CommentForm extends Component {
  // static contextType = CommentsContext
  static contextType = CommentsContext

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { author, comment } = ev.target

    /* change code */
   

    const data = {
      author: author.value,
      comment: comment.value
    }

    author.value = ''
    comment.value = ''

   
    console.log(this.context)
    this.context.addComment(data)
     
  }

  render() {
    return (
      <CommentsContext.Consumer>
        {context => ( 
           <div className='CommentForm'>
           <h3>Add a comment</h3>
           <form onSubmit={this.handleSubmit}>
             <div>
               <label htmlFor='author'>Author:</label>
               <input type='text' name="author"  />
             </div>
             <div>
               <label htmlFor='comment'>Comment:</label>
               <input type="text" name="comment" />
               
             </div>
             <button type='submit'>
               Post comment
             </button>
           </form>
         </div>
        )}
        
      </CommentsContext.Consumer>
     
    )
  }
}
