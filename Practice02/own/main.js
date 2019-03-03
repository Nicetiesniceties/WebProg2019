var images_index = 0;
function back()
{
	if(images_index == 0)
		alert("This is the first image!");
	else
	{
		document.getElementById("display").src = "images/loading.gif";
		images_index = images_index - 1;
		document.getElementById("display").src = images_list[images_index];
		document.getElementById("source").innerText = "Source: " + images_list[images_index];
	}
	if(images_index == 0)
		document.getElementById("back_button").classList.add("disabled");
	else
		document.getElementById("next_button").classList.remove("disabled");
}
function next()
{
	if(images_index == images_list.length - 1)
		alert("This is the last images!");
	else
	{
		document.getElementById("display").src = "images/loading.gif";
		images_index = images_index + 1;
		document.getElementById("display").src = images_list[images_index];
		document.getElementById("source").innerText = "Source: " + images_list[images_index];
	}
	if(images_index == images_list.length - 1)
		document.getElementById("next_button").classList.add("disabled");
	else
		document.getElementById("back_button").classList.remove("disabled");
}
