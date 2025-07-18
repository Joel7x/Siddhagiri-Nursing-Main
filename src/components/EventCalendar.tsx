import React, { useState } from 'react';

const events = [
  {
    title: 'Admission Deadline',
    date: '2024-07-15',
    description: 'Last date to apply for B.Sc Nursing program.'
  },
  {
    title: 'Orientation Seminar',
    date: '2024-07-20',
    description: 'Welcome seminar for new students and parents.'
  },
  {
    title: 'Annual Health Camp',
    date: '2024-07-25',
    description: 'Free health checkup camp for the community.'
  }
];

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }
  return days;
}

const EventCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const monthDays = getMonthDays(currentYear, currentMonth);
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const eventDates = events.map(e => e.date);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  return (
    <section id="events" className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Event Calendar</h2>
      {/* Calendar Grid */}
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-2xl shadow-lg p-6 mb-8 border border-blue-100">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="text-blue-600 font-bold text-lg px-2 hover:bg-blue-100 rounded transition">&#8592;</button>
          <span className="font-semibold text-lg text-blue-700">{monthNames[currentMonth]} {currentYear}</span>
          <button onClick={nextMonth} className="text-blue-600 font-bold text-lg px-2 hover:bg-blue-100 rounded transition">&#8594;</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-blue-400 mb-1">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array(firstDayOfWeek).fill('').map((_, i) => <div key={i}></div>)}
          {monthDays.map((date, i) => {
            const dateStr = date.toISOString().slice(0,10);
            const isEvent = eventDates.includes(dateStr);
            const isToday = date.toDateString() === today.toDateString();
            return (
              <div
                key={dateStr}
                className={`rounded-full w-8 h-8 flex items-center justify-center mx-auto font-semibold
                  ${isEvent ? 'bg-gradient-to-br from-blue-400 to-purple-400 text-white shadow-lg' : 'text-blue-700'}
                  ${isToday && !isEvent ? 'border-2 border-blue-400 bg-white' : ''}
                  hover:bg-blue-200 transition-colors cursor-pointer`}
                title={isEvent ? events.find(e => e.date === dateStr)?.title : ''}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
      {/* Event Card List */}
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.date} className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 border border-blue-100 rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <div className="text-lg font-bold text-blue-700">{event.title}</div>
              <div className="text-blue-500 text-sm mb-1">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div className="text-blue-900 text-sm">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar; 