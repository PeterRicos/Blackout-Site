export type Category = 'sneakers' | 'clothing' | 'random-shit';

export type Brand = 'ADIDAS' | 'JORDAN' | 'NIKE' | 'SUPREME' | 'NEW BALANCE' | 'BEARBRICK' | 'MEDICOM' | 'TNF / KAWS';

export interface VaultItem {
  id: string;
  sku: string;
  title: string;
  brand: Brand;
  category: Category;
  tag: string;
  tagType?: 'verified' | 'electric' | 'neutral';
  imageUrl: string;
  imageAlt: string;
  priceNote: string;
  estimatedValue?: string;
  year?: string;
  condition: string;
  sizesAvailable: string[];
  description: string;
  provenance: {
    origin: string;
    inspectionDate: string;
    inspector: string;
    uvCheck: boolean;
    insoleStitchCheck: boolean;
    boxLabelMatch: boolean;
  };
  isTrending?: boolean;
  isRecent?: boolean;
}

export type ActivePage = 'home' | 'shop-sneakers' | 'shop-clothing' | 'random-shit' | 'about';
