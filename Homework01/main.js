const input = document.getElementById('todo-input');
const todo_item_list = [];
var todo_cnt = 0;
//inserting new Todos
input.addEventListener('keyup', event => 
{
	if (event.keyCode === 13 && event.target.value !== '')  
	{
		console.log(event.target.value);
		const newItem = CreateNewTodo(event.target.value);
		const todolist = document.getElementById('todo-list');
		todolist.appendChild(newItem);
		todo_item_list.push(newItem);
		update_todo_number(1);
		event.target.value = "";
	}
} );
function update_todo_number(indicator)
{
	const cnt_text = document.getElementById("todo-total");
	todo_cnt += indicator;
	if(todo_cnt >= 0)
		cnt_text.innerText = todo_cnt + " left";
	else
		todo_cnt = 0;
}
function CreateNewTodo(description)
{
	const itemNode = document.createElement("LI");
	itemNode.setAttribute("class", "todo-app__item");
	const wrapper = document.createElement("DIV");
	wrapper.setAttribute("class", "todo-app__checkbox");
	const checkbox = document.createElement("INPUT");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("onClick", check_box_switch());
	const status_label = document.createElement("LABEL");
	status_label.setAttribute("for", "0");
	const todo_content = document.createElement("H1");
	todo_content.setAttribute("class", "todo-app__item-detail");
	todo_content.innerText = description;
	const delete_icon = document.createElement("IMG");
	delete_icon.setAttribute("class", "todo-app__item-x");
	delete_icon.src = "./img/x.png";
	wrapper.appendChild(checkbox);
	wrapper.appendChild(status_label);
	itemNode.appendChild(wrapper);
	itemNode.appendChild(todo_content);
	itemNode.appendChild(delete_icon);
	return itemNode;
}
function check_box_switch()
{
	
}

