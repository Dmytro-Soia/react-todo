export async function get_todo_from_api() {
  try {
    const fetchGet = await fetch(
      'https://api.todos.in.jt-lab.ch/todos?select=*,categories(*)',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return await fetchGet.json();
  } catch {
    throw new Error('Cannot get todos from API');
  }
}

export async function add_todo_to_api(title: string, due_date: string) {
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
    }),
  });
  if (fetchPost.ok) {
    return await fetchPost.json();
  } else {
    throw new Error('Cannot post this todo');
  }
}

export async function patch_todo_from_api(
  id: number,
  title: string,
  due_date: string,
  done: boolean,
) {
  const fetchPatch = await fetch(
    `https://api.todos.in.jt-lab.ch/todos?id=eq.${id}`,
    {
      method: 'PATCH',
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
    },
  );
  if (fetchPatch.ok) {
    return await fetchPatch.json();
  } else {
    throw new Error('Cannot edit this todo');
  }
}

export async function delete_todo_from_api(id: number) {
  const fetchDelete = await fetch(
    `https://api.todos.in.jt-lab.ch/todos?id=eq.${id}`,
    {
      method: 'DELETE',
    },
  );
  if (fetchDelete.ok) {
    return fetchDelete;
  } else {
    throw new Error('Cannot delete this todo');
  }
}
