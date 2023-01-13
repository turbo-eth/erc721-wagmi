import {
  erc721ABI,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
} from 'wagmi';

export function useERC721Write({
  address,
  abi,
  functionName,
  args,
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
}: PrepareWriteOptions): ReturnType<typeof useContractWrite> {
  const { chain } = useNetwork();
  const { config } = usePrepareContractWrite({
    address: address,
    abi: abi || erc721ABI,
    // @ts-ignore
    functionName: functionName,
    // @ts-ignore
    args: args,
    chainId: chainId || chain?.id || 1,
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
  // @ts-ignore
  return useContractWrite(config);
}

export default useERC721Write;
