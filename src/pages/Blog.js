import  React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import arrow from '../static/assets/images/arrow.png';


export default function ListDividers() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <>
    <h1 className='blog-heading'>BlOG</h1>
    <div className='parent-blog'>
    <List className="list-wrapper" component="nav" aria-label="mailbox folders">
      <a href="https://getbootstrap.com/docs/5.0/components/list-group/">
        <ListItem
          className="blog-item"
          button
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <ListItemText className="blog-child" primary="Dasturlashni o'rganish qoidasi" />
          {hoveredIndex === 0 && <img src={arrow} className="arrow" alt="img" />}
        </ListItem>
      </a>
      <Divider />
      <a href="https://getbootstrap.com/docs/5.0/components/list-group/">
        <ListItem
          className="blog-item"
          button
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <ListItemText className="blog-child" primary="Lazy Programmer" />
          {hoveredIndex === 1 && <img src={arrow} className="arrow" alt="img" />}
        </ListItem>
      </a>
      <Divider />
      <a href="https://getbootstrap.com/docs/5.0/components/list-group/">
        <ListItem
          className="blog-item"
          button
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <ListItemText className="blog-child" primary="Core nima?" />
          {hoveredIndex === 2 && <img src={arrow} className="arrow" alt="img" />}
        </ListItem>
      </a>
      <Divider light />
      <a href="https://getbootstrap.com/docs/5.0/components/list-group/">
        <ListItem
          className="blog-item"
          button
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <ListItemText className="blog-child" primary="C# nimaga kerak" />
          {hoveredIndex === 3 && <img src={arrow} className="arrow" alt="img" />}
        </ListItem>
      </a>
      <Divider />
    </List>
  </div>
    </>
  );
}
