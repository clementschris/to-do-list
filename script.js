let input = prompt("What would you like to do?")
const todos = ['Collect eggs', 'Clean cat litter box']

while(input !== 'quit' && input !== 'q') {
  if(input === 'list') {
    console.log('***************')
    for(let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('***************')
  } else if(input === 'new') {
    const newTodo = prompt('Okay, what is the new To-Do?');
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`)
  } else if(input === 'delete') {
    const index = parseInt(prompt('Okay, enter an index to delete:'));
    if(!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Okay, ${deleted[0]} has been removed from your list!`)
    } else {
      console.log('Sorry, that index is unknown')
    }
  }
  input = prompt("What would you like to do?");
}
console.log("Okay, you've quit the app");