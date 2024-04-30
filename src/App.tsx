// JSX = JavaScript + XML (HTML)

import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
    avatar_url: "https://github.com/augustorf01.png",
    name: "Augusto Fonseca",
    role: "Web Developer",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-28 16:18:30'),
  },
  {
    id: 2,
    author: {
    avatar_url: "https://github.com/brenoalvesd.png",
    name: "Breno Alves",
    role: "Back-end Node Developer",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-25 20:18:30'),
  },
];

// iteração com map (const.map)
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

// Todo componente é um arquivo com ".jsx", e possui uma função que retorna html