interface Student {
	firstName: String;
	lastName: String;
	age: Number;
	location: String;
}

const std1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 21,
	location: "Addis Ababa, Ethiopia",
};

const std2: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 20,
	location: "Dire Dawa, Ethiopia",
};

const studentsList: Array<Student> = [std1, std2];

const table = document.createElement("table");
let content = `
	<thead>
	<th> First Name </th>
	<th> Location </th>
	</thead>
	<tbody>
`;
studentsList.forEach((std, index) => {
	content += `
	<tr>
	<td>
	${std.firstName}
	</td>
	<td>
	${std.location}
	</td>
	</tr>
	${index === studentsList.length - 1 ? "</tbody>" : ""}
	`;
});

table.innerHTML = content;
document.body.appendChild(table);
