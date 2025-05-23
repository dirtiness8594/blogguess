// src/lib/api.js
import { API_BASE_URL } from "./constants";

function formatPost(post) {
  return {
    id: post.id,
    title: post.title || 'Sem título',
    image: post.coverImage?.url || '',
    date: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString('pt-BR')
      : '',
    content: Array.isArray(post.content) ? post.content : []
  };
}

export async function fetchPost(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/articles/${id}.json`);
    if (!res.ok) throw new Error(`Erro ao buscar artigo: ${res.status}`);
    const post = await res.json();
    if (!post) throw new Error('Artigo não encontrado');
    post.id = id;
    return formatPost(post);
  } catch (error) {
    console.error(`[fetchPost] ${error.message}`);
    throw error;
  }
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
