export type Product = {
  id: number,
    vendorCode: string,
    reserveType: any,
    name: string,
    shortName: string,
    averageRatingScore: any,
    price: number,
    grape: string,
    isDecantation: boolean,
    wineType: string,
    strengthFrom: number,
    strengthTo: number,
    wineColor: string,
    colorDescribing: string,
    taste: string,
    aroma: string,
    gastronomy: string,
    description: string,
    pictureLink: string | null,
    pictureLink2: string | null,
}

export type ProductDetailsType = {
  id: number;
  vendorCode: string;
  reserveType: string;
  name: string;
  shortName: string;
  averageRatingScore: number;
  price: number;
  grape: string;
  isDecantation: boolean;
  wineType: string;
  strengthFrom: number;
  strengthTo: number;
  wineColor: string;
  colorDescribing: string;
  taste: string;
  aroma: string;
  gastronomy: string;
  description: string;
  picture: ArrayBuffer;
  pictureLink: string;
};
