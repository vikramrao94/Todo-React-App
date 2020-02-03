import React  from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export const TodoItem = (props) => {

  function handleClick() {
    props.handleDelete(props.index);
  }

  return (
    <ListItem key = {props.index}>
      <ListItemText
        primary={props.item}
      />
      <ListItemSecondaryAction onClick = {handleClick}>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
