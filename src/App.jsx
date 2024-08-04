const styleAvailable = {
    color: 'green'
}
const styleNotAvailable = {
    color: 'red'
}

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
          <div style={ingredient.available ? styleAvailable : styleNotAvailable}>
          <li key={index}>
            {ingredient.item}
          </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;