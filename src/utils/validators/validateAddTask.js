export function validateAddTask(task) {
  const { title, description, target_date, subtasks } = task;
  const errors = {};

  if (title.length === 0 || title === null) {
    errors.title = "Title should not be empty";
  }
  if (description.length === 0 || description === null) {
    errors.description = "Description should not be empty";
  }
  if (target_date.length === 0 || target_date === null) {
    errors.target_date = "Due Date should not be empty";
  }

  if (subtasks.length > 0) {
    subtasks.forEach(({ title }) => {
      if (title.length === 0 || title === null) {
        errors.subtasks = "SubTask title should not be zero";
      }
    });
  }

  return errors;
}
