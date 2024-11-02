import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className="section">
        <div className="products">
          {products?.map((product) => {
            return (
              <article key={product.id}>
                <h4>{product.name}</h4>
                <Link to={`/products/${product.id}`}>more info</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
