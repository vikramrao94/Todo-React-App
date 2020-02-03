import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: 'white',
    width: '50vw',
  }
});

const Textfield = (props) => {
  const {classes} = props;
  const [text, setText] = useState('');

  function handleText(e) {
    setText(
      e.target.value
    )
  }

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      props.handleStore(text);
      setText(
        ''
      );
    }
  }

  return (
      <div>
        <TextField
           id="outlined-search"
           type="search"
           label="Add to list"
           className={classes.textField}
           value={text}
           margin="dense"
           variant="outlined"
           onChange={handleText}
           onKeyPress={handleKeyPress}
       />
      </div>
  );
}


export default withStyles(styles)(Textfield);
