
import { Button, Form } from 'semantic-ui-react'


function FormSearch (props){

  function handleClick() {
      console.log(props);

  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${props.userInput}`)
    .then(result => result.json())
        .then(data => {
          console.log(data)
          props.setData(data)
        });
  }

  const handleSearch = (event) => {
    props.setter.setUserInput(event.target.value)
   }

  
  return (
        <Form onSubmit={handleSubmit}>
           <Form.Group>
                <input placeholder='Last Name' onChange={handleSearch} />
                <Button content="Rechercher" onClick={()=>handleClick()}/>
           </Form.Group>
       </Form>
  )
}

export default FormSearch;