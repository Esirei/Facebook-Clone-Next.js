import { FC } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '~/lib/firebase';
import Post from './Post';

interface Props {
  posts: [];
}

const Posts: FC<Props> = ({ posts }) => {
  const query = db.collection('posts').orderBy('timestamp', 'desc');
  const [postsDoc, loading, error] = useCollection(query);
  const currentPosts = postsDoc?.docs.map(post => ({ id: post.id, ...post.data() })) || posts;
  return (
    <div>
      {currentPosts.map(post => (
        // @ts-ignore
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
