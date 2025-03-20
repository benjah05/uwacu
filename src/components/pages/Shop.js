import { Link } from 'react-router-dom';
import products from './Products';
import './pages.css';

export default function Shop() {
    return(
        <>
        <div className='search'>
            <input type="text" placeholder='Search...'/>
            {/*<span className="search-icon">&#128269;</span>*/}
        </div>
        <div className='explore'><h1>Explore Products</h1></div>
        <div className='items'>
            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/shop/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                    </Link>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
        </>
    );
}