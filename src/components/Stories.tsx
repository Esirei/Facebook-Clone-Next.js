import Story from './Story';

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story => (
        <Story {...story} key={story.name} />
      ))}
    </div>
  );
};

export default Stories;

const stories = [
  {
    name: 'Akpesiri Okorigba',
    src: '/images/my-story.jpg',
    profile: '/images/me.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    src: '/images/zuckerberg-story.jpg',
    profile: '/images/zuckerberg.jpg',
  },
  {
    name: 'Elon Musk',
    src: '/images/elon-story.jpg',
    profile: '/images/elon.jpg',
  },
  {
    name: 'Bill Gates',
    src: '/images/gates-story.jpg',
    profile: '/images/gates.jpg',
  },
  {
    name: 'Jeff Bezoz',
    src: '/images/bezoz-story.jpg',
    profile: '/images/bezoz.jpg',
  },
];
