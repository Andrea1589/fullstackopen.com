//Component 1
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )  
}

//Component 2
const Content = (props) => {
  return (
    <>
      <ol>
        <Info part={props.part1} exercises={props.exercises1}/>
        <Info part={props.part2} exercises={props.exercises2}/>
        <Info part={props.part3} exercises={props.exercises3}/>
      </ol>
    </>
  )
}

//Component 3
const Info = (props) => {
  return (
    <>
      <li>{props.part} {props.exercises}</li>
    </>
  )
}

//Component 4
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )

}

export default App