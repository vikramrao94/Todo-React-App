import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../redux/actions.js';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import Textfield from './Textfield';
import {TodoItem} from './TodoItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }

  componentDidMount = () => {
    this.handleFetch();
  }

  handleFetch = () => {
    this.setState({
      list:this.props.list
    });
  }

  handleStore = (item) => {
    this.props.insert(item);
    this.handleFetch();
  }

  handleDelete = (index) => {
    this.props.delete(index);
    this.handleFetch();
  }

  renderList = () => {
    const results = this.state.list;
    const list = results.map((value, index) => {
      return (
        <TodoItem
          item = {value}
          index = {index}
          handleDelete = {this.handleDelete}
          />
      );
    })
    return list;
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Textfield
          handleStore = {this.handleStore}
          />
          {
            this.state.list.length !== 0 ?
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '10vh' }}
            >
              <List component="nav"  className ={classes.root}>
                {this.renderList()}
              </List>
            </Grid>
          :
          null
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  list: state.todo.toDo
})

const mapDispatchToProps = dispatch => ({
  insert: (item) => dispatch(actions.addItem(item)),
  delete: (index) => dispatch(actions.deleteItem(index)),
})

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(withStyles(styles)(TodoList))
