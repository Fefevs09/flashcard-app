import Feather from '@expo/vector-icons/Feather';

interface HeaderIconProps {
  size?: number;
}

export function HeaderIcon({ size = 30 }: HeaderIconProps) {
  return <Feather name="zap" size={size} color={'#2E82DB'} />;
}
