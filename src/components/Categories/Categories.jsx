import { Link } from "react-router-dom"; 
import categories from "../../data/categories"; 
import "./Categories.css";

const Categories = () => {

  return (
    <section className="categories">

      <div className="categories-header">

        <div>
          <span>EXPLORE COLLECTIONS</span>

          <h2>
            FIND YOUR
            <br />
            EVERYDAY STYLE.
          </h2>
        </div>

        <p>
          Discover thoughtfully designed pieces
          <br />
          for every part of your everyday.
        </p>

      </div>

      <div className="categories-grid">

        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/collections/${category.slug}`}
            className="category-card"
          >

            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">

              <div className="category-info">
                <span>COLLECTION</span>

                <h3>{category.name}</h3>
              </div>

              <span className="category-arrow">
                EXPLORE →
              </span>

            </div>

          </Link>
        ))}

      </div>

      <div className="categories-footer">
        <Link to="/collections">
          VIEW ALL COLLECTIONS →
        </Link>
      </div>

    </section>
  );
};

export default Categories;