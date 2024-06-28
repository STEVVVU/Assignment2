document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerMatchingForm');
    const volunteerSelect = document.getElementById('volunteerSelect');
    const eventSelect = document.getElementById('eventSelect');
    const volunteerName = document.getElementById('volunteerName');
    const matchedEvent = document.getElementById('matchedEvent');

    // Simulated data - in a real application, this would come from a database
    const volunteers = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" }
    ];
    const events = [
        { id: 1, name: "Community Cleanup" },
        { id: 2, name: "Food Drive" }
    ];

    // Populate volunteer select
    volunteers.forEach(volunteer => {
        const option = document.createElement('option');
        option.value = volunteer.id;
        option.textContent = volunteer.name;
        volunteerSelect.appendChild(option);
    });

    // Populate event select
    events.forEach(event => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = event.name;
        eventSelect.appendChild(option);
    });

    // Update volunteer name and matched event when selections change
    volunteerSelect.addEventListener('change', function() {
        const selectedVolunteer = volunteers.find(v => v.id == this.value);
        volunteerName.value = selectedVolunteer ? selectedVolunteer.name : '';
    });

    eventSelect.addEventListener('change', function() {
        const selectedEvent = events.find(e => e.id == this.value);
        matchedEvent.value = selectedEvent ? selectedEvent.name : '';
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Volunteer matched to event:', {
            volunteerId: volunteerSelect.value,
            eventId: eventSelect.value
        });
        alert('Volunteer matched to event successfully!');
    });
});