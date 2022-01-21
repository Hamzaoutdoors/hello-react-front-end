import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);

  return (
    <div>
      <h1>Greetings</h1>
      <Link to="/" className="btn btn-dark">Go Back home</Link>
      <button type="button" onClick={() => dispatch(fetchGreetings())}>Get Greetings</button>
      <ul>
        {
         greetings.map((greeting) => <li key={greeting.id}>{greeting.name}</li>)
                }
      </ul>
    </div>
  );
};

export default Greeting;
