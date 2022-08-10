export interface GaEvent {
  event: string;
};

export const createGaEvent = (info:GaEvent) => {
  return {
    ...info
  };
}

interface DataLayer {
  push: (data:GaEvent) => {}
}

export const createAndPushGaEvent  = (info:GaEvent) => {
  const dataLayer = ((window as any).dataLayer || {push:() => {}}) as DataLayer;
  dataLayer.push(info);
}