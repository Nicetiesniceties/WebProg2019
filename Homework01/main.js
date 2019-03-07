const input = document.getElementById('todo-input');
const todo_item_list = [];
var todo_cnt = 0;
var todo_id = 0;
//inserting new Todos
function display()
{
	
}
input.addEventListener('keyup', event => 
{
	if (event.keyCode === 13 && event.target.value !== '')  
	{
		console.log(event.target.value);
		const newItem = CreateNewTodo(event.target.value);
		const todolist = document.getElementById('todo-list');
		//console.log(newItem.children[2].onclick);
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
	checkbox.setAttribute("id", todo_id);
	//checkbox.setAttribute("onClick", check_box_switch());
	const status_label = document.createElement("LABEL");
	status_label.setAttribute("for", todo_id);
	todo_id++;
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
	delete_icon.onclick = function(){
		var par = this.parentElement;
		//console.log(par);
		par.style["display"] = "none";
		console.log(this.parentElement.children[0].children[0]);
		var checkbox = this.parentElement.children[0].children[0]
		if(!checkbox.checked)
			update_todo_number(-1);
	};
	checkbox.onclick = function()
	{
		console.log(this.checked);
		var node = this.parentElement.parentElement;
		console.log(node);
		if(!this.checked)
		{
			node.style["textDecoration"] = "";
			node.style["opacity"] = 1;
			update_todo_number(1);
		}
		else
		{
			node.style["textDecoration"] = "line-through";
			node.style["opacity"] = 0.5;
			update_todo_number(-1);
		}
	}
	return itemNode;
}
function check_box_switch()
{
	var checked_status;
}

