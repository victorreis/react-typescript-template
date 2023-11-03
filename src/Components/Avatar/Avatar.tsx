import { useState } from 'react';

import { TestProps } from '../../Config/Tests/Test.types';
import { AvatarContainer, AvatarImage, AvatarInitials } from './Avatar.styles';
import { AvatarProps, DefaultAvatarProps } from './Avatar.types';

export const avatarDefaults: Required<DefaultAvatarProps> &
  Required<TestProps> = {
  testID: 'Avatar',
  size: 'MD',
};

export const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  const {
    testID = avatarDefaults.testID,
    size = avatarDefaults.size,
    thumbnailUrl,
    name,
    nickname,
    isAvatarClickable,
    onClickAvatar,
    style,
    ...others
  } = props;

  const [imageLoadingError, setImageLoadingError] = useState<boolean>(false);

  const handleImageLoadingError = () => {
    setImageLoadingError(true);
  };

  const handleClick = () => {
    if (onClickAvatar) {
      onClickAvatar(nickname);
    }
  };

  const extractInitials = () => {
    const splittedName = name.split(' ');
    let initials = splittedName[0]?.charAt(0) || '';
    if (splittedName.length > 1) {
      initials += splittedName[1]?.charAt(0) || '';
    }
    return initials;
  };

  const description = `${name}'s avatar photo.`;

  const renderImage = () => {
    if (!imageLoadingError) {
      return (
        <AvatarImage
          $size={size}
          alt={description}
          data-testid={`${testID}_image`}
          onError={handleImageLoadingError}
          src={thumbnailUrl}
          title={description}
          {...others}
        />
      );
    }
    return null;
  };

  const renderInitials = () => {
    const initials = extractInitials();
    if (imageLoadingError) {
      return (
        <AvatarInitials
          $size={size}
          data-testid={`${testID}_initials`}
          variant="body1"
          {...others}
        >
          {initials}
        </AvatarInitials>
      );
    }
    return null;
  };

  return (
    <AvatarContainer
      $isAvatarClickable={Boolean(isAvatarClickable)}
      $size={size}
      data-testid={testID}
      onClick={handleClick}
      style={style}
    >
      {renderImage()}
      {renderInitials()}
    </AvatarContainer>
  );
};
