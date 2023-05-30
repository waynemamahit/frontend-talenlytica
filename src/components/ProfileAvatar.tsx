import { memo } from 'react';

export class ProfileAvatarProps {
  name = '';
  photo = '';
}
export function ProfileAvatar({ name, photo }: ProfileAvatarProps) {
  return photo.length > 0 ? (
    <img className="flex-col w-10 h-10 rounded-full" src={photo} alt={name} />
  ) : (
    <div
      className="flex-col relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full"
      title={name}
    >
      <svg
        className="absolute w-10 h-10 text-gray-300 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

export const MemoProfileAvatar = memo(ProfileAvatar);
