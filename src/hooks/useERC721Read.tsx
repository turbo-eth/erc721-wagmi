import { useContractRead, erc721ABI } from 'wagmi';

export function useERC721Read(
  address: string,
  method:
    | 'symbol'
    | 'name'
    | 'balanceOf'
    | 'getApproved'
    | 'isApprovedForAll'
    | 'ownerOf'
    | 'tokenByIndex'
    | 'tokenURI'
    | 'totalSupply'
    | undefined,
  args: any[]
): any {
  useContractRead({
    address: address,
    abi: erc721ABI,
    // @ts-ignore
    functionName: method,
    // @ts-ignore
    args: args,
  });
}

export default useERC721Read;
