document.addEventListener('DOMContentLoaded', function() {
    const visitorsList = JSON.parse(localStorage.getItem('visitorsList')) || [];
    const workersListContainer = document.getElementById('workers-list');
    const visitorsListContainer = document.getElementById('visitors-list');

    if (workersListContainer) {
        displayWorkersList(workersListContainer);
    }

    if (visitorsListContainer) {
        displayVisitorsList(visitorsListContainer, visitorsList);
    }
});

function displayVisitorsList(container, visitorsList) {
    container.innerHTML = '';

    visitorsList.forEach(visitor => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>זמן כניסה: ${visitor.timeOfEntrance}</p>
            <p>שם: ${visitor.name}</p>
            <p>ת"ז: ${visitor.id}</p>
            <p>רכב: ${visitor.vehicle ? 'כן' : 'לא'}</p>
        `;
        container.appendChild(li);
    });
}

function displayWorkersList(container) {
    const workers = [
        { FirstName: 'יוסי', LastName: 'כהן', CompanyName: 'חברה א', ID: '123456789' },
        { FirstName: 'משה', LastName: 'לוי', CompanyName: 'חברה ב', ID: '987654321' },
        // Add more workers as needed
    ];

    container.innerHTML = '';

    workers.forEach(worker => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>שם פרטי: ${worker.FirstName}</p>
            <p>שם משפחה: ${worker.LastName}</p>
            <p>חברה: ${worker.CompanyName}</p>
            <p>ת"ז: ${worker.ID}</p>
        `;
        container.appendChild(li);
    });
}
