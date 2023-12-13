import { Preview } from './preview';

const App = () => {
  return (
    <Preview
      parts={[
        "Hood",
        "Back right bumper"
      ]}
      images={[
        {
          image: 'car_0.png',
          partsCoordinates: [
            [480, 290],
            [426, 144]
          ]
        },
        {
          image: 'car_30.png',
          partsCoordinates: [
            [595, 282],
            [337, 172]
          ]
        },
        {
          image: 'car_60.png',
          partsCoordinates: [
            [671, 252],
            [271, 211]
          ]
        },
        {
          image: 'car_90.png',
          partsCoordinates: [
            [673, 204],
            [245, 255]
          ]
        },
        {
          image: 'car_120.png',
          partsCoordinates: [
            [633, 167],
            [300, 311]
          ]
        },
        {
          image: 'car_150.png',
          partsCoordinates: [
            [560, 146],
            [420, 344]
          ]
        },
        {
          image: 'car_180.png',
          partsCoordinates: [
            [481, 139],
            [561, 339]
          ]
        },
        {
          image: 'car_210.png',
          partsCoordinates: [
            [400, 148],
            [664, 309]
          ]
        },
        {
          image: 'car_240.png',
          partsCoordinates: [
            [330, 166],
            [711, 276]
          ]
        },
        {
          image: 'car_270.png',
          partsCoordinates: [
            [278, 203],
            [705, 235]
          ]
        },
        {
          image: 'car_300.png',
          partsCoordinates: [
            [295, 245],
            [640, 184]
          ]
        },
        {
          image: 'car_330.png',
          partsCoordinates: [
            [364, 284],
            [529,163]
          ]
        },
      ]}
    />
  );
}

export default App;
