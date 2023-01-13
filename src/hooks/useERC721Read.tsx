import { erc721ABI, useContractRead } from 'wagmi';

export function useERC721Read({
  functionName,
  abi,
  args,
  address,
  chainId,
  cacheTime,
  enabled,
  scopeKey,
  staleTime,
  suspense,
  overrides,
  onSuccess,
  onError,
  onSettled,
}: ContractReadOptions): ReturnType<typeof useContractRead> {
  return useContractRead({
    chainId: chainId,
    address: address,
    abi: abi || erc721ABI,
    functionName: functionName,
    // @ts-ignore
    args: args,
    cacheTime: cacheTime,
    enabled: enabled,
    scopeKey: scopeKey,
    staleTime: staleTime,
    suspense: suspense,
    overrides: overrides,
    onSuccess: onSuccess,
    onError: onError,
    onSettled: onSettled,
  });
}

export default useERC721Read;
