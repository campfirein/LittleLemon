import PropTypes from 'prop-types';
import { useMemo } from "react";
function DessertsList({ data }) {
  const filteredDesserts = useMemo(() => {
    return data
      .filter(dessert => dessert.calories < 500)
      .sort((a, b) => a.calories - b.calories);
  }, [data]);

    return (
      <ul>
        {filteredDesserts.map(dessert => (
          <li key={dessert.name}>
            {dessert.name} - {dessert.calories} cal
          </li>
        ))}
      </ul>
    );
}

DessertsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Corrected: Use .isRequired
      calories: PropTypes.number.isRequired, // Corrected: Use .isRequired
      createdAt: PropTypes.string.isRequired, // Corrected: Use .isRequired
    })
  ).isRequired,
};

export default DessertsList;
