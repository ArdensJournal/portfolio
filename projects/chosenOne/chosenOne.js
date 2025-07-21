let names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        updateNamesList();
        nameInput.value = '';
    }
}

function updateNamesList() {
    const namesList = document.getElementById('namesList');
    namesList.innerHTML = '';
    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = name;
        
        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeName(index);
        li.appendChild(removeButton);
        
        namesList.appendChild(li);
    });
}

function removeName(index) {
    names.splice(index, 1);
    updateNamesList();
}

function whosDoingTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim() || 'paying';
    
    if (names.length === 0) {
        alert('Please add at least one name.');
        return;
    }
    
    const randomPersonPosition = Math.floor(Math.random() * names.length);
    const randomPerson = names[randomPersonPosition];
    const result = `${randomPerson} is ${task}!`;
    document.getElementById('result').textContent = result;
    
    const keanuGif = document.getElementById('keanuGif');
    keanuGif.src = 'https://media.tenor.com/onnmKSXLCvkAAAAe/the-one-he-is-the-one.png'; // Example GIF URL
    keanuGif.style.display = 'block';
}

function resetPage() {
    names = [];
    updateNamesList();
    document.getElementById('result').textContent = '';
    document.getElementById('keanuGif').style.display = 'none';
    document.getElementById('taskInput').value = '';
    
    const taskButton = document.getElementById('taskButton');
    taskButton.textContent = "Who's Paying?";
    taskButton.onclick = whosDoingTask;
}

// Update the task button text dynamically based on the task input
document.getElementById('taskInput').addEventListener('input', function() {
    const task = this.value.trim() || 'paying';
    const taskButton = document.getElementById('taskButton');
    taskButton.textContent = `Who's ${task}?`;
});
