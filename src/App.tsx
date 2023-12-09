import { Preview } from './preview';
import front from './assets/sedan.png';
import back from './assets/sedan-rear.png';

const App = () => {
  return (
    <Preview
      images={{ front, back }}
      parts={[
        {
          title: "Front-right Bumper",
          front: [1160, 540],
          back: [340, 250]
        },
        {
          title: "Rear Bumper",
          front: [100, 300],
          back: [1350, 500]
        },
        {
          title: "Front Bonnet",
          front: [1180, 370],
          back: [320, 230]
        }
      ]} />
  );
}

export default App;
