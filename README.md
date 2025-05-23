# 🪶 Blogguess

BlogGuess is a personal blogging platform built with Next.js and Firebase. It’s not about trends, SEO hacks, or hot takes. It’s for writing when you actually have something to say.

Posts are listed directly on the homepage, giving you immediate access to the latest thoughts. Each article also has its own dedicated page — clean, focused, and distraction-free.

A sidebar menu, visible on every screen, shows the most recent posts. This makes it easy for readers coming from other platforms to jump right into any article without hassle.

A minimalist blog structure with an opinionated tone — designed for readers who already care, not for converting new ones.

### 📦 installation

This blog isn’t a theme or a plug-and-play boilerplate. It’s a structure. If you want to start from it:

```bash
1.  git clone https://codeberg.org/OpenOrbit/blogguess.git
2. cd blogguess
3. npm install
```

It runs on Firebase for its simplicity and speed. You’ll need your Firebase credentials set in .env.local:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...

```

### 🥢 usage

There’s no CMS. You publish directly to Firestore.

Each article is stored as a document inside the Firestore collection /articles. Every document must follow a clear structure like this:

```bash
"article001": {
    "id": "article001",
    "slug": "my-slug",
    "title": "-",
    "description": "",
    "tags": [
        "-",
        "-",
    ],
    "author": "",
    "readTime": 4,
    "content": [
        "",
        ""
    ],
    "coverImage": {
        "url": "",
        "alt": ""
    },
    "publishedAt": "2025-05-20T14:00:00Z"
}

```

The document ID (like article001) is the Firestore document key inside /articles.

Each key matters:

-  slug: used in the URL (/article/[slug])
-  content: an array where each item represents a paragraph of the article — rendered as separate paragraphs in the post
-  coverImage: optional, but helps set tone
-  publishedAt: ISO timestamp — used for ordering

Posts are rendered with a custom React hook, and the reader just sees clean, readable text — no distractions.

### ✅ Notes

- No distractions. No "related articles". No “continue reading”.
- Clean BEM-based CSS. Or tailwind. Or nothing. You decide.
- SEO is basic. Just enough to be found.
- Posts load fast because Firebase caching does the heavy lifting.

### 💫 features

- Minimalist by design – Writing and reading only
- Firebase backend – No headless CMS needed
- Markdown-first – Write like it’s 2009
- Reader-focused – No analytics, no ads
- Opinionated setup – You’re not building for everyone

### 🪡 development

After clone, feel free to customize the package.

### 📕 updates

See the UPDATE.me file for changelogs and upcoming features.

### 📜 license
[MIT](https://choosealicense.com/licenses/mit/)

### 🧩 creator

@themandalorian

