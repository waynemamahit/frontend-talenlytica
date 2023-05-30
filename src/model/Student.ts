import { ProfileAvatarProps } from '../components/ProfileAvatar';

export interface Student extends ProfileAvatarProps {
  aspectAssessment: [number, number, number, number];
}