interface ContractEventOptions {
  address: string;
  chainId?: number;
  abi?: any;
  eventName?: string;
  once?: boolean;
  listener?: (a: any, b: any, c: any) => boolean;
}

interface ContractReadOptions {
  address: string;
  abi?: any;
  functionName?: string;
  chainId?: number;
  args?: any[];
  cacheOnBlock?: boolean;
  watch?: boolean;
  cacheTime?: number;
  enabled?: boolean;
  isDataEqual?: (a: any, b: any) => boolean;
  structuralSharing?: (a: any, b: any) => boolean;
  scopeKey?: string;
  staleTime?: number;
  suspense?: boolean;
  select?: () => void;
  overrides?: {
    [key: string]: any;
  };
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

interface PrepareWriteOptions {
  address: string;
  abi?: any;
  functionName?: string;
  chainId?: number;
  args?: any[];
  cacheTime?: number;
  enabled?: boolean;
  scopeKey?: string;
  staleTime?: number;
  suspense?: boolean;
  overrides?: {
    [key: string]: any;
  };
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}
