document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      buildToDoList(e.target.new_task_description.value, e.target.new_task_due_date.value);
      form.reset();
  });
});

function buildToDoList(task, due) {
  let li = document.createElement('li');
  let delBtn = document.createElement('button');
  const dropDown = document.querySelector('#new_task_importance');
  delBtn.textContent = ' X ';
  delBtn.contentEditable = false;
  delBtn.addEventListener('click', e => e.target.parentNode.remove())
  if(dropDown.value === 'high')
    li.style.color = 'red';
  else if(dropDown.value ==='medium')
    li.style.color = 'orange';
  else if(dropDown.value === 'low')
    li.style.color = 'green';
  li.textContent = `${task} - Due: ${due}  `;
  li.contentEditable = true;
  li.appendChild(delBtn);
  document.querySelector('#tasks').appendChild(li)
}