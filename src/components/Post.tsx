import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import firebase from 'firebase';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  message: string;
  email: string;
  image: string;
  postImage: string;
  timestamp: firebase.firestore.Timestamp;
}

const Post: FC<Props> = ({ name, message, image, postImage, timestamp }) => {
  return (
    <div className="flex flex-col bg-white mt-5 rounded-lg shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center space-x-2">
          <Image src={image} alt={name} height={40} width={40} className="rounded-full" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{timestamp?.toDate().toLocaleString()}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-gray-100">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center text-gray-400 border-t mx-4 p-1">
        <button className="input-button rounded-md p-1">
          <ThumbUpIcon className="h-5" />
          <p className="text-sm sm:text-base">Like</p>
        </button>

        <button className="input-button rounded-md p-1">
          <ChatAltIcon className="h-5" />
          <p className="text-sm sm:text-base">Comment</p>
        </button>

        <button className="input-button rounded-md p-1">
          <ShareIcon className="h-5" />
          <p className="text-sm sm:text-base">Share</p>
        </button>
      </div>
    </div>
  );
};

export default Post;
