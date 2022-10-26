//Component 1
const Header = (props) => {
  console.log(props.name)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )  
}

//Component 2
const Content = ({parts}) => {
  console.log(parts)
  return (
    <>
      <ol>
      <Info part={parts[0]}/>
      <Info part={parts[1]}/>
      <Info part={parts[2]}/>
      </ol>
    </>
  )
}

//Component 3
const Info = ({part}) => {
  
  return (
    <>
      <li>{part.name} ({part.exercises}). <br></br> <em>{part.intro()}</em></li>
    </>
  )
}

//Component 4
const Total = ({parts}) => {
  return (
    <>
      <h3>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h3>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        intro: function () {
          return('The course "' + this.name + '" has ' + this.exercises + ' exercises.'  )
        }
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        intro: function () {
          return ('The course "' + this.name + '" has ' + this.exercises + ' exercises.'  )
        }
      },
      {
        name: 'State of a component',
        exercises: 14,
        intro: function () {
          return ('The course "' + this.name + '" has ' + this.exercises + ' exercises.'  )
        }
      }
    ]
  }
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

export default App