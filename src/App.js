import React,{useMemo, useState} from 'react';
import PostForm from './components/PostForm';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "language"},
    {id: 2, title: "React", body: "library"},
    {id: 3, title: "NodeJS", body: "frameworks"},
    {id: 4, title: "CSS", body: "styles"}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  
  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort);
    

  }

  return (
    <div className="App">``

      <PostForm create={createPost}/> 
      <hr style={{margin: '20px 0'}} /> 
           
      <div>
        <MyInput
        value= {searchQuery}
        onChange= {e => setSearchQuery(e.target.value)}
        placeholder = 'Search...'
        />
        <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue='Sorting by'
        options={[
          {value: 'title', name: 'name'},
          {value: 'body', name: 'description'},
        ]}
        />
        </div>   
      <PostList remove={removePost} posts={sortedPosts} title= "List post Javascript" />
        
            
    </div>
  );
}

export default App;
