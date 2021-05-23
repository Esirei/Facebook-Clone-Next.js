import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '~/lib/firebase';
import Post from './Post';

const Posts = () => {
  const query = db.collection('posts').orderBy('timestamp', 'desc');
  const [postsDoc, loading, error] = useCollection(query);
  return (
    <div>
      {postsDoc?.docs.map(post => (
        // @ts-ignore
        <Post key={post.id} {...post.data()} />
      ))}
    </div>
  );
};

export default Posts;
