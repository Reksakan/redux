import { Component } from 'react';

const FilterLink =({filter, currentFilter, children, onClick}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a  href='#' 
        onClick={
          e => {
            e.preventDefault();
            onClick(filter);
          }
        }
    >{children}</a>
  )
}

export default FilterLink;

// class FilterLink extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const {store, filter, children} = this.props;
  
//     return (
//       <a href='#' 
//           onClick={
//             e => {
//               e.preventDefault();
//               store.dispatch({
//                 type: 'SET_VISIBILITY_FILTER',
//                 filter
//               })
//             }
//           }
//       >{children}</a>
//     )
//   }
// }