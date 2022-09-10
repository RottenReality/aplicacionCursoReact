import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './itemCount.css';

export const ItemCount = ({stock, initial, onAdd, count, setCount}) => {

  const sum = () => {
		if(count < stock){
      setCount(count + 1);
    }
  };

  const res = () => {
    if(count > initial){
      setCount(count - 1);
    }
	};

  return (
    <div className='itemCountGc'>
      <div className='itemCount-container'>
        <Button onClick={res}>
            <RemoveIcon fontSize="small" />
        </Button>
        <p>{count}</p>
        <Button onClick={sum}>
            <AddIcon fontSize="small" />
        </Button>
      </div>
      <Button onClick={onAdd}>
        Agregar al carrito
      </Button>
    </div>
  )
}