export async function get_todo_from_api() {
  const fetchGet = await fetch('https://api.todos.in.jt-lab.ch/todos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await fetchGet.json();
}

export async function add_todo_to_api(
  title: string,
  due_date: string,
  done: boolean,
) {
  const fetchPost = await fetch('https://api.todos.in.jt-lab.ch/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.pgrst.object+json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      title: title,
      due_date: due_date,
      done: done,
    }),
  });
  return await fetchPost.json();
}
