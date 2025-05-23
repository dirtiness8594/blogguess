import { API_BASE_URL } from "./constants";

function formatPost(post) {
  return {
    id: post.id,
    title: post.title || 'Sem título',
    author: post.author || 'Redação',
    readTime: post.readTime || '5',
    image: post.coverImage?.url || '',
    date: post.publishedAt
      ? new Date(post.publishedAt).toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'long'
      })
      : '',
    content: Array.isArray(post.content) ? post.content : []
  };
}

function formatPostForMenu(post) {
  return {
    id: post.id,
    title: post.title || 'Sem título',
    slug: post.slug,
    image: post.coverImage?.url || ''
  };
}

export async function fetchPostBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/articles.json`);
  const data = await res.json();
  const articles = Object.values(data);
  const post = articles.find(article => article.slug === slug);

  if (!post) throw new Error("Post não encontrado");

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: post.author,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    tags: post.tags || [],
    content: post.content,
    coverImage: post.coverImage
  };
}

export async function fetchPosts() {
  try {
    const res = await fetch(`${API_BASE_URL}/articles.json`);
    if (!res.ok) throw new Error(`Erro ao buscar artigos: ${res.status}`);
    const data = await res.json();
    return Object.entries(data).map(([id, post]) => formatPost({ ...post, id }));
  } catch (error) {
    console.error(`[fetchPosts] ${error.message}`);
    throw error;
  }
}

export async function fetchPostsForMenu() {
  try {
    const res = await fetch(`${API_BASE_URL}/articles.json`);
    if (!res.ok) throw new Error(`Erro ao buscar artigos: ${res.status}`);
    const data = await res.json();
    return Object.entries(data).map(([id, post]) =>
      formatPostForMenu({ ...post, id })
    );
  } catch (error) {
    console.error(`[fetchPostsForMenu] ${error.message}`);
    throw error;
  }
}

