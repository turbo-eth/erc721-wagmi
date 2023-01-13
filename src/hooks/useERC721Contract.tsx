import { Signer, providers } from 'ethers';
import { erc721ABI, useContract } from 'wagmi';

export function useERC721Contract(
  address: string,
  signerOrProvider?: Signer | providers.Provider
): ReturnType<typeof useContract> {
  return useContract({
    address: address,
    abi: erc721ABI,
    signerOrProvider: signerOrProvider,
  });
}

export default useERC721Contract;
