pass = 0;
fail = 0;
no = 1;

function AddStudent(){
	var table = document.getElementById("st_table");
	var id = document.getElementById("st_id").value;
	var name = document.getElementById("st_name").value;
	var option = document.getElementById("st_option").value;
	s = table.innerHTML;
	y = "<tr><td>"+no+"</td><td>"+id+"</td><td>"+name+"</td><td>"+option+"</td></tr>";
	table.innerHTML = s+y;
	no += 1;

	if (option == "F")
		fail+=1;
	else
		pass += 1;
	document.getElementById("totalPass").innerHTML = pass;
	document.getElementById("totalFail").innerHTML = fail;
}

function ClearForm(){
	var table = document.getElementById("st_table");
	var y = "<thead><td>S.No.</td><td>Student ID</td><td>Sudent Name</td><td>Grade</td></thead>";
	table.innerHTML = y;
	no = 1;
	pass = 0;
	fail = 0;
	document.getElementById("totalPass").innerHTML = pass;
	document.getElementById("totalFail").innerHTML = fail;
}
