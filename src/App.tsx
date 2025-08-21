
// import { Link } from 'lucide-react';
import { Link } from "react-router-dom";
import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className='flex min-h-svh flex-col items-center justify-center'>
        <Button variant="default">Click me</Button>
        <Button variant="outline">Click me</Button>

        <Button variant="success">Success Button</Button>
      </div>
    </>
  )
}

export default App
