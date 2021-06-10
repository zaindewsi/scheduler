export function getAppointmentsForDay(state, day) {
  const findDay = state.days.find(dayInfo => dayInfo.name === day);

  if (findDay) return findDay.appointments.map(id => state.appointments[id]);
  else return [];
}

export function getInterview(state, interview) {
  return (
    interview && {
      student: interview.student,
      interviewer: { ...state.interviewers[interview.interviewer] },
    }
  );
}

export function getInterviewersForDay(state, day) {
  const findDay = state.days.find(dayInfo => dayInfo.name === day);

  if (findDay) return findDay.appointments.map(id => state.appointments[id]);
  else return [];
}
