import { useContract, erc721ABI } from 'wagmi';

export function useERC721Contract(address: string): any {
  return useContract({
    address: address,
    abi: erc721ABI,
  });
}

export default useERC721Contract;
