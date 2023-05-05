import Routes from './application/Router';
import Provider from './application/Provider';

function App() {

  return (
    <Provider>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;

