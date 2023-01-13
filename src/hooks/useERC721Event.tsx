import { erc721ABI, useContractEvent, useNetwork } from 'wagmi';

interface ERC20EventOptions extends ContractEventOptions {
  eventName?: 'Approval' | 'Transfer' | undefined;
}

export function useERC721Event({
  address,
  chainId,
  abi,
  eventName,
  once,
  listener,
}: ERC20EventOptions): ReturnType<typeof useContractEvent> {
  const { chain } = useNetwork();
  return useContractEvent({
    address: address,
    abi: abi || erc721ABI,
    chainId: chainId || chain?.id || 1,
    eventName: eventName,
    once: once,
    // @ts-ignore
    listener: listener,
  });
}

export default useERC721Event;
