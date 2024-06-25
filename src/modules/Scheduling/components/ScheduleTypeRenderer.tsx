function ScheduleTypeRenderer({ data }: any) {
  const { scheduleType } = data;

  if(scheduleType.toLowerCase() === 'on demand') {
    return <p className="font-Montserrat font-bold text-primary  underline">{scheduleType}</p>
  } else {
    return <p>{scheduleType}</p>;
  }

}

export default ScheduleTypeRenderer;
