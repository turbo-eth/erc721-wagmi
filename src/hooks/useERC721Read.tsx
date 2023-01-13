import { erc721ABI, useContractRead, useNetwork } from 'wagmi';

export function useERC721Read({
  functionName,
  abi,
  args,
  address,
  chainId,
  cacheTime,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  overrides,
  onSuccess,
  onError,
  onSettled,
}: ContractReadOptions): ReturnType<typeof useContractRead> {
  const { chain } = useNetwork();
  return useContractRead({
    chainId: chainId || chain?.id || 1,
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
