import './App.css';

const App = () => {
  const recipe = [
    { item: 'Milk', available: false },
    { item: 'Bread', available: false },
    { item: 'Eggs', available: true },
  ];

  return (
    <>
      <h1>Recipe Ingredients Checker</h1>
      <ul>
        {recipe.map((ingredient, index) => (
          <li key={index} className={ingredient.available ? 'available' : 'not-available'}>
            {ingredient.item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;