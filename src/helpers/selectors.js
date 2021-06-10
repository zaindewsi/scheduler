export function getAppointmentsForDay(state, day) {
  const findDay = state.days.find(dayInfo => dayInfo.name === day);

  return findDay ? findDay.appointments.map(id => state.appointments[id]) : [];
}

export function getInterviewersForDay(state, day) {
  const findDay = state.days.find(dayInfo => dayInfo.name === day);

  return findDay ? findDay.interviewers.map(id => state.interviewers[id]) : [];
}

export function getInterview(state, interview) {
  return (
    interview && {
      student: interview.student,
      interviewer: { ...state.interviewers[interview.interviewer] },
    }
  );
}
