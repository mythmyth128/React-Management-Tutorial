import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers =
[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '허창훈',
  'birthday' : '721228',
  'gender' : '남자',
  'job' : '직장인'
},

{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '821228',
  'gender' : '남자',
  'job' : '직장인'
},

{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '이순신',
  'birthday' : '921228',
  'gender' : '남자',
  'job' : '직장인'
}
]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
        )} )
      }
    </div>
  );
}

export default App;
