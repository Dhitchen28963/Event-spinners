from django.shortcuts import render

# Sample placeholder events list
EVENTS = [
    {
        'id': 1,
        'title': 'Wedding Party',
        'date': '12 Oct 2025',
        'location': 'Plymouth Town Hall',
        'description': 'A beautiful wedding celebration with premium sound and lighting.',
    },
    {
        'id': 2,
        'title': 'Corporate Gala',
        'date': '20 Oct 2025',
        'location': 'City Conference Center',
        'description': 'An elegant corporate gala with bespoke music and immersive visuals.',
    },
]

def list(request):
    context = {'events': EVENTS}
    return render(request, 'events/list.html', context)

def detail(request, event_id):
    # Find the event by id
    event = next((e for e in EVENTS if e['id'] == event_id), None)
    if not event:
        return render(request, 'events/detail.html', {'event': {'title': 'Event Not Found', 'date': '', 'location': '', 'description': ''}})
    return render(request, 'events/detail.html', {'event': event})
