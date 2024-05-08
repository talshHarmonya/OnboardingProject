import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Product } from '../../../models/product';
import './productListItem.scss';

type productListItemProps = {
    product: Product;
}

export function ProductListItem(props: productListItemProps) {
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItem(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const nodeRef = useRef(null);
  
  return (
    <div className='items'>
      <CSSTransition in={showItem} nodeRef={nodeRef} timeout={300} classNames={"item"} unmountOnExit>
        <div ref={nodeRef}>
            {props.product.name}
        </div>
      </CSSTransition>
    </div>
  );
}
