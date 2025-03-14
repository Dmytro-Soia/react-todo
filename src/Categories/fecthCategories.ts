export async function get_category_from_api() {
  try {
    const fetchGet = await fetch('https://api.todos.in.jt-lab.ch/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await fetchGet.json();
  } catch {
    throw new Error('Cannot get categories from API');
  }
}

export async function delete_category_from_api(id: number) {
  const fetchDelete = await fetch(
    `https://api.todos.in.jt-lab.ch/categories?id=eq.${id}`,
    {
      method: 'DELETE',
    },
  );
  if (fetchDelete.ok) {
    return fetchDelete;
  } else {
    throw new Error('Cannot delete this category');
  }
}

export async function add_category_to_api(title: string, color: string) {
  const fetchPost = await fetch('https://api.todos.in.jt-lab.ch/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.pgrst.object+json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      title: title,
      color: color,
    }),
  });
  if (fetchPost.ok) {
    return await fetchPost.json();
  } else {
    throw new Error('Cannot post this categorie');
  }
}
