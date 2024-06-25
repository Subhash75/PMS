function TaskIDRendererer({ data, handleChecklistDialog }: any) {
  const { taskId } = data;

  return <p className="cursor-pointer font-Montserrat font-bold" onClick={handleChecklistDialog}>{taskId}</p>;
}

export default TaskIDRendererer;
