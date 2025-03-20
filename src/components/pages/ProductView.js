import { useParams } from 'react-router-dom';
import products from './Products';

export default function ProductView() {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id)); // Find the product by ID

    if (!product) {
        return <div><p>Product not found!</p></div>; // Handle invalid IDs
    }

    return (
        <div className='DetailsPage'>
            <div className='display-image'>
                <img src={product.image} alt={product.title} className='img'/>
            </div>
            <div className='description'>
                <h1>{product.description}</h1>
                <p>{product.content}</p>
                <br/><br/>
                <button className='take-action'>Buy Product</button>
            </div>
        </div>
    );
}