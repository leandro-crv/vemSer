import PropTypes from 'prop-types';
function Item ({menu,url}){
  return(
    <>
      <li> {url}, {menu} </li>
    </>
  );
}

Item.propTypes = {
  menu: PropTypes.string.isRequired,
  url:PropTypes.number
}

// Item.defaultProps = {
//   url: 0
// }

export default Item;