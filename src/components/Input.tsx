import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { MouseEventHandler, useRef } from 'react';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import firebase, { db } from '~/lib/firebase';

const Input = () => {
  const [session] = useSession();
  const inputRef = useRef<HTMLInputElement>(null);

  const placeHolderName = session?.user.name.split(' ')[0];

  const post: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    const message = inputRef.current.value;
    if (!message) return;

    db.collection('posts').add({
      ...session.user,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = '';
  };

  return (
    <div className="bg-white py-3 px-4 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 pb-3 items-center">
        <Image
          src={session.user.image}
          className="rounded-full"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${placeHolderName}?`}
            className="rounded-full h-10 bg-gray-100 flex-1 px-5 outline-none"
          />
          <button hidden type="submit" onClick={post}>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly pt-2 border-t">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-1 justify-center p-2 rounded-xl cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-1 justify-center p-2 rounded-xl cursor-pointer">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-1 justify-center p-2 rounded-xl cursor-pointer">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Felling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Input;
