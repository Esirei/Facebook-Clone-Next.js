import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import firebase, { db, storage } from '~/lib/firebase';

const Input = () => {
  const [session] = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(null);

  const placeHolderName = session?.user.name.split(' ')[0];

  const post: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    const message = inputRef.current.value;
    if (!message) return;

    db.collection('posts')
      .add({
        ...session.user,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(post => {
        if (image) {
          const upload = storage
            .ref(`posts/${post.id}`)
            .putString(image, firebase.storage.StringFormat.DATA_URL);

          removeImage();
          upload.on(firebase.storage.TaskEvent.STATE_CHANGED, null, console.error, async () => {
            const url = await storage.ref(`posts`).child(post.id).getDownloadURL();
            console.log('upload - listener', url);
            db.collection('posts').doc(post.id).set({ postImage: url }, { merge: true });
          });
          upload.then(null, console.error).finally(async () => {
            const url = await storage.ref(`posts`).child(post.id).getDownloadURL();
            console.log('upload - promise', url);
          });
        }
      });

    inputRef.current.value = '';
  };

  const processImage: ChangeEventHandler<HTMLInputElement> = e => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      reader.addEventListener('load', ev => {
        setImage(ev.target.result as string);
      });
    }
  };

  const removeImage = () => setImage(null);

  return (
    <div className="bg-white py-3 px-4 rounded-2xl shadow-md text-gray-500 mt-6">
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

        {image && (
          <button
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform
            hover:scale-105">
            <img src={image} alt="Post" className="h-10 w-10 object-cover" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </button>
        )}
      </div>

      <div className="flex justify-evenly pt-2 border-t">
        <button className="input-button">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </button>

        <button onClick={() => fileInputRef.current.click()} className="input-button">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*, video/*"
            onChange={processImage}
          />
        </button>

        <button className="input-button">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Felling/Activity</p>
        </button>
      </div>
    </div>
  );
};

export default Input;
