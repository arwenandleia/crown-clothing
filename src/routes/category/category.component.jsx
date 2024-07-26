import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss'



const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    // const product = categoriesMap[category]; this will happen every time the component renders
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]) // This way if re-rending takes place then product doesnt update unless category or categories map changes

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
    

}

export default Category;