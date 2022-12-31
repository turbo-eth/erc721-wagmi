import { useContractWrite, erc721ABI, usePrepareContractWrite } from 'wagmi';

export function useERC721Write(
  address: string,
  method: string,
  args: any[],
  overrides?: any,
  configs?: any
): any {
  const { config } = usePrepareContractWrite({
    address: address,
    abi: erc721ABI,
    functionName: method,
    args: args,
    overrides: overrides,
    ...configs,
  });
  // @ts-ignore
  return useContractWrite(config);
}

export default useERC721Write;
