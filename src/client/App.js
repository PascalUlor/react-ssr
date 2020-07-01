import React, { useState } from  'react';
import { Helmet } from 'react-helmet';


const App = ({ initialText }) => {
    const [text, setText] = useState(initialText);
  
    const handleClick = () => {
      setText('changed in the browser!');
      console.log('>>> FIRED >>>')
    };

    const metaHeader = ()=>{
      return (
        <Helmet>
          <title>My Page Title</title>
        </Helmet>
      )
    }
  
    return (
      <div>
      {metaHeader()}
        <p>{text}</p>
        <button onClick={handleClick}>change text!</button>
      </div>
    );
  };
  
  export default App;