const recipeIngredients = [
  "225g softened butter",
  "225g golden caster sugar",
  "4 large eggs",
  "lemon, zested",
  "1 tsp vanilla extract",
  "225g self-raising flour",
  "splash of milk",
  "optional fillings of lemon curd, jam, lightly whipped cream",
  "icing sugar for dusting",
];

class DisplayIngredient extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.name.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class Recipe extends React.Component {
  render() {
    return (
      <div>
        <DisplayIngredient name={recipeIngredients} />
      </div>
    );
  }
}

const domContainer = document.querySelector("#recipeContainer");
const root = ReactDOM.createRoot(domContainer);
root.render(<Recipe />);