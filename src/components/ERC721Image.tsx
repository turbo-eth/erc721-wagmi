import * as React from 'react';

import classNames from 'classnames';

import { useERC721Metadata } from '../hooks/useERC721Metadata';

interface ERC721ImageProps {
  className?: string;
  address: string;
  tokenId: string;
}

export const ERC721Image = ({
  className,
  address,
  tokenId,
}: ERC721ImageProps) => {
  const classes = classNames(className);
  const tokenData = useERC721Metadata({
    address,
    tokenId,
  });
  const [imgSrc, setImgSrc] = React.useState<string>();
  React.useEffect(() => {
    if (tokenData?.image.startsWith('ipfs://')) {
      setImgSrc(
        `https://cloudflare-ipfs.com/ipfs/${
          tokenData?.image.split('ipfs://')[1]
        }`
      );
    } else {
      setImgSrc(tokenData?.image);
    }
  }, [tokenData?.image]);
  if (!tokenData) return null;

  return <img className={classes} src={imgSrc} />;
};

export default ERC721Image;
