import Products from './components/Products'
import JobApplicationForm from './components/useIdExample/JobApplicationForm'
import Users from './components/Users'
import useLocalStorage from './hooks/useLocalStorage'


function App() {
  const [fName, setFname] = useLocalStorage('John', "firstName")
  const [jwt, setJwt] = useLocalStorage("233243240821fewr32", "jwt")

  return (
    <div>
      <h1>App component</h1>
      
     
     <Products />
     <Users />
     {setFname()}
     {setJwt()}
    <p>Name: {fName}</p>
    <JobApplicationForm />
    </div>
  )
}

export default App
