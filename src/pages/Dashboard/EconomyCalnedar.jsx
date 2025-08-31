import React, { useState, useEffect } from 'react';
import './EconomyCalender.scss'

import EconomySidebar from '../../components/economy-calender/Sidebar';
import EconomyHeader from '../../components/economy-calender/Header';
import EventsTable from '../../components/economy-calender/EventsTable';
import { mockEconomicData ,getEventsByDateRange,getEventsByDate} from '../../components/data/mockData';
import dayjs from 'dayjs';


function EconomyCalendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedView, setSelectedView] = useState('this-week');
  const [filteredEvents, setFilteredEvents] = useState(mockEconomicData);

  useEffect(() => {
    let events = mockEconomicData;

    switch (selectedView) {
      case 'today':
        events = getEventsByDate(selectedDate.format('YYYY-MM-DD'));
        break;
      case 'tomorrow':
        events = getEventsByDate(selectedDate.add(1, 'day').format('YYYY-MM-DD'));
        break;
      case 'yesterday':
        events = getEventsByDate(selectedDate.subtract(1, 'day').format('YYYY-MM-DD'));
        break;
      case 'this-week':
        events = getEventsByDateRange(
          selectedDate.startOf('week').format('YYYY-MM-DD'),
          selectedDate.endOf('week').format('YYYY-MM-DD')
        );
        break;
      case 'next-week':
        events = getEventsByDateRange(
          selectedDate.add(1, 'week').startOf('week').format('YYYY-MM-DD'),
          selectedDate.add(1, 'week').endOf('week').format('YYYY-MM-DD')
        );
        break;
      case 'last-week':
        events = getEventsByDateRange(
          selectedDate.subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
          selectedDate.subtract(1, 'week').endOf('week').format('YYYY-MM-DD')
        );
        break;
      case 'this-month':
        events = getEventsByDateRange(
          selectedDate.startOf('month').format('YYYY-MM-DD'),
          selectedDate.endOf('month').format('YYYY-MM-DD')
        );
        break;
      case 'next-month':
        events = getEventsByDateRange(
          selectedDate.add(1, 'month').startOf('month').format('YYYY-MM-DD'),
          selectedDate.add(1, 'month').endOf('month').format('YYYY-MM-DD')
        );
        break;
      case 'last-month':
        events = getEventsByDateRange(
          selectedDate.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
          selectedDate.subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
        );
        break;
      default:
        events = mockEconomicData;
    }

    setFilteredEvents(events);
  }, [selectedDate, selectedView]);

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  const handlePrevWeek = () => {
    setSelectedDate(selectedDate.subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setSelectedDate(selectedDate.add(1, 'week'));
  };

  return (
    <>
      <div className="app-container">
        <EconomySidebar
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          selectedView={selectedView}
          onViewChange={handleViewChange}
        />
        <div className="main-content">
          <EconomyHeader
            selectedDate={selectedDate}
            selectedView={selectedView}
            onPrevWeek={handlePrevWeek}
            onNextWeek={handleNextWeek}
          />
          <EventsTable events={filteredEvents} />
        </div>
      </div>
      </>
  );
}

export default EconomyCalendar;
