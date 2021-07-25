import Cover from './components/Cover';
import Cards from './components/Cards';
import ReportsGroup from './components/ReportsGroup';
import './App.css';

function App() {
  return (
    <div>
      <Cover
        src='./images/heroImage.jpg'
        category='AVIATION, TRAVEL AND TOURISM'
        heading='What 6 aviation executives say about an EU sustainable aviation fuel blending mandate'
        description="A sustainable aviation fuel (SAF) blending mandate in the European Union can help decarbonize the aviation sector. Here's how we can make it a success."
      />
      <div className='news-cards-container'>
        <Cards
          src='./images/card1.jpg'
          category='AGRICULTURE, FOOD AND BEVERAGE'
          heading='6 ways we can take action on malnutrition, according to the UN'
        />
        <Cards
          src='./images/card2.jpg'
          category='AUTOMOTIVE INDUSTRY'
          heading="Robots can help Japan solve its 'last-mile’ crisis in logistics. Here's how"
        />
        <Cards
          src='./images/card3.jpg'
          category='MENTAL HEALTH'
          heading='How to stop doomscrolling and get the sleep you need: Radio Davos'
        />
        <Cards
          src='./images/card4.jpg'
          category='EUROPEAN UNION'
          heading='What you need to know about the European Green Deal - and what comes next'
        />
      </div>
      <ReportsGroup />
    </div>
  );
}

export default App;
