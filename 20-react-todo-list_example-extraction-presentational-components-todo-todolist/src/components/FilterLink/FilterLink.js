import { Component } from 'react';

class FilterLink extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {store, filter, children} = this.props;
  
    return (
      <a href='#' 
          onClick={
            e => {
              e.preventDefault();
              store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
              })
            }
          }
      >{children}</a>
    )
  }
}

export default FilterLink;