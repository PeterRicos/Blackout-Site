import { VaultItem } from '../types';
import { resolveAssetPaths } from '../utils/asset';

const HERO_ITEM_RAW: VaultItem = {
  "id": "air-jordan-1-retro-high-og-555088-404",
  "sku": "555088-404",
  "title": "Air Jordan 1 Retro High OG",
  "brand": "JORDAN",
  "category": "sneakers",
  "tag": "VAULT GRAIL / IN HAND",
  "tagType": "electric",
  "imageUrl": "/sneaker_images/square/Sheet2_Air_Jordan_1_Retro_High_OG_555088_404.jpg",
  "imageAlt": "Air Jordan 1 Retro High OG authentic sneaker vault inspection",
  "priceNote": "CONFIRM ON CLAIM",
  "condition": "Deadstock (10/10) with Original Box",
  "sizesAvailable": [
    "US 8"
  ],
  "description": "Air Jordan 1 Retro High OG verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
  "provenance": {
    "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
    "inspectionDate": "OCTOBER 2024",
    "inspector": "VAULT LEAD [TECH-01]",
    "uvCheck": true,
    "insoleStitchCheck": true,
    "boxLabelMatch": true
  },
  "isTrending": true,
  "isRecent": false
};

const TRAVIS_SCOTT_ITEM_RAW: VaultItem = {
  "id": "air-jordan-6-retro-travis-scott-british-khaki-dh0690-200",
  "sku": "DH0690-200",
  "title": "Air Jordan 6 Retro Travis Scott British Khaki",
  "brand": "JORDAN",
  "category": "sneakers",
  "tag": "NEW / HAND-CHECKED",
  "tagType": "verified",
  "imageUrl": "/sneaker_images/square/Sheet2_Air_Jordan_6_Retro_Travis_Scott_British_Khaki_DH0690_200.jpg",
  "imageAlt": "Air Jordan 6 Retro Travis Scott British Khaki authentic sneaker vault inspection",
  "priceNote": "CONFIRM ON CLAIM",
  "condition": "Deadstock (10/10) with Original Box",
  "sizesAvailable": [
    "US 8",
    "US 13"
  ],
  "description": "Air Jordan 6 Retro Travis Scott British Khaki verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
  "provenance": {
    "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
    "inspectionDate": "OCTOBER 2024",
    "inspector": "VAULT LEAD [TECH-01]",
    "uvCheck": true,
    "insoleStitchCheck": true,
    "boxLabelMatch": true
  },
  "isTrending": true,
  "isRecent": false
};

const VAULT_ITEMS_RAW: VaultItem[] = [
  {
    "id": "yeezy-boost-360-v2-cinder-fy2903",
    "sku": "FY2903",
    "title": "Yeezy Boost 360 V2 Cinder",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_360_Cinder_FY2903.jpg",
    "imageAlt": "Yeezy Boost 360 V2 Cinder authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 9.5"
    ],
    "description": "Yeezy Boost 360 V2 Cinder verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-dazzling-blue-gy7164",
    "sku": "GY7164",
    "title": "Yeezy Boost 350 V2 Dazzling Blue",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Dazzling_Blue_GY7164.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Dazzling Blue authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Yeezy Boost 350 V2 Dazzling Blue verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-beluga-reflective-gw1229",
    "sku": "GW1229",
    "title": "Yeezy Boost 350 V2 Beluga Reflective",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Beluga_Reflective_GW1229.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Beluga Reflective authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 5.5",
      "US 6",
      "US 8"
    ],
    "description": "Yeezy Boost 350 V2 Beluga Reflective verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "adidas-yeezy-boost-350-v2-asriel-fz5000",
    "sku": "FZ5000",
    "title": "adidas Yeezy Boost 350 V2 Asriel",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Asriel_FZ5000.jpg",
    "imageAlt": "adidas Yeezy Boost 350 V2 Asriel authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 5.5",
      "US 7",
      "US 8",
      "US 13"
    ],
    "description": "adidas Yeezy Boost 350 V2 Asriel verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-onyx-hq4540",
    "sku": "HQ4540",
    "title": "Yeezy Boost 350 V2 Onyx",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Onyx_HQ4540.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Onyx authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Boost 350 V2 Onyx verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "yeezy-boost-350-v2-light-gy3438",
    "sku": "GY3438",
    "title": "Yeezy Boost 350 V2 Light",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Light_GY3438.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Light authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6.5",
      "US 12.5"
    ],
    "description": "Yeezy Boost 350 V2 Light verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-carbon-beluga-hq7045",
    "sku": "HQ7045",
    "title": "Yeezy Boost 350 V2 Carbon Beluga",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Carbon_Beluga_HQ7045.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Carbon Beluga authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Yeezy Boost 350 V2 Carbon Beluga verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-natural-fz5246",
    "sku": "FZ5246",
    "title": "Yeezy Boost 350 V2 Natural",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Natural_FZ5246.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Natural authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7.5"
    ],
    "description": "Yeezy Boost 350 V2 Natural verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "adidas-yeezy-boost-360-v2-zyon-fz1267",
    "sku": "FZ1267",
    "title": "adidas Yeezy Boost 360 V2 Zyon",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_360_Zyon_FZ1267.jpg",
    "imageAlt": "adidas Yeezy Boost 360 V2 Zyon authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "adidas Yeezy Boost 360 V2 Zyon verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-infant-black-bb6372",
    "sku": "BB6372",
    "title": "Yeezy Boost 350 V2 Infant Black",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Infant_Black_BB6372.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Infant Black authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6K"
    ],
    "description": "Yeezy Boost 350 V2 Infant Black verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-450-dark-slate-gy5368",
    "sku": "GY5368",
    "title": "Yeezy Boost 450 Dark Slate",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_450_Dark_Slate_GY5368.jpg",
    "imageAlt": "Yeezy Boost 450 Dark Slate authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 11.5"
    ],
    "description": "Yeezy Boost 450 Dark Slate verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-slide-onyx-hq6448",
    "sku": "HQ6448",
    "title": "Yeezy Slide Onyx",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_Slide_Onyx_HQ6448.jpg",
    "imageAlt": "Yeezy Slide Onyx authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Slide Onyx verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "yeezy-slide-resin-gz5551",
    "sku": "GZ5551",
    "title": "Yeezy Slide Resin",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Yeezys_Slide_Resin_GZ5551.jpg",
    "imageAlt": "Yeezy Slide Resin authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10"
    ],
    "description": "Yeezy Slide Resin verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-slide-core-gw5350",
    "sku": "GW5350",
    "title": "Yeezy Slide Core",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Yeezys_Slide_Core_GW5350.jpg",
    "imageAlt": "Yeezy Slide Core authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4",
      "US 10"
    ],
    "description": "Yeezy Slide Core verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-slide-pure-gw1934",
    "sku": "GW1934",
    "title": "Yeezy Slide Pure",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_Slide_Pure_GW1934.jpg",
    "imageAlt": "Yeezy Slide Pure authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 12",
      "US 14"
    ],
    "description": "Yeezy Slide Pure verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-slide-ochre-gw1931",
    "sku": "GW1931",
    "title": "Yeezy Slide Ochre",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_Slide_Ochre_GW1931.jpg",
    "imageAlt": "Yeezy Slide Ochre authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 13",
      "US 14"
    ],
    "description": "Yeezy Slide Ochre verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-alvah-h67799",
    "sku": "H67799",
    "title": "Yeezy Boost 700 Alvah",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_700_Alvah_H67799.jpg",
    "imageAlt": "Yeezy Boost 700 Alvah authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6",
      "US 6.5"
    ],
    "description": "Yeezy Boost 700 Alvah verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-clay-brown-gy0189",
    "sku": "GY0189",
    "title": "Yeezy Boost 700 Clay Brown",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_700_Clay_Brown_GY0189.jpg",
    "imageAlt": "Yeezy Boost 700 Clay Brown authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10",
      "US 10.5"
    ],
    "description": "Yeezy Boost 700 Clay Brown verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-wave-runner-b75571",
    "sku": "B75571",
    "title": "Yeezy Boost 700 Wave Runner",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_700_Wave_Runner_B75571.jpg",
    "imageAlt": "Yeezy Boost 700 Wave Runner authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7",
      "US 11"
    ],
    "description": "Yeezy Boost 700 Wave Runner verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-mnvn-bone-fy3729",
    "sku": "FY3729",
    "title": "Yeezy Boost 700 MNVN Bone",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_700_MNVN_Bone_FY3729.jpg",
    "imageAlt": "Yeezy Boost 700 MNVN Bone authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4.5",
      "US 7.5"
    ],
    "description": "Yeezy Boost 700 MNVN Bone verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-tephra-fu7914",
    "sku": "FU7914",
    "title": "Yeezy Boost 700 Tephra",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_700_Tephra_FU7914.jpg",
    "imageAlt": "Yeezy Boost 700 Tephra authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Boost 700 Tephra verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-dark-glow-gx6144",
    "sku": "GX6144",
    "title": "Yeezy Boost 700 Dark Glow",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_700_Dark_Glow_GX6144.jpg",
    "imageAlt": "Yeezy Boost 700 Dark Glow authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 11"
    ],
    "description": "Yeezy Boost 700 Dark Glow verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-700-arzareth-g54850",
    "sku": "G54850",
    "title": "Yeezy Boost 700 Arzareth",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_700_Arzareth_G54850.jpg",
    "imageAlt": "Yeezy Boost 700 Arzareth authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Boost 700 Arzareth verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-foam-mx-cinder-id4126",
    "sku": "ID4126",
    "title": "Yeezy Foam MX Cinder",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_Foam_MX_Cinder_ID4126.jpg",
    "imageAlt": "Yeezy Foam MX Cinder authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7"
    ],
    "description": "Yeezy Foam MX Cinder verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "yeezy-foam-mtx-moon-grey-gv7904",
    "sku": "GV7904",
    "title": "Yeezy Foam MTX Moon Grey",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_Foam_MTX_Moon_Grey_GV7904.jpg",
    "imageAlt": "Yeezy Foam MTX Moon Grey authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 5"
    ],
    "description": "Yeezy Foam MTX Moon Grey verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-foam-kids-mx-sand-grey-gy3970",
    "sku": "GY3970",
    "title": "Yeezy Foam Kids MX Sand Grey",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_Foam_Kids_MX_Sand_Grey_GY3970.jpg",
    "imageAlt": "Yeezy Foam Kids MX Sand Grey authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 13K"
    ],
    "description": "Yeezy Foam Kids MX Sand Grey verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-foam-onyx-hp8739",
    "sku": "HP8739",
    "title": "Yeezy Foam Onyx",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_Foam_Onyx_HP8739.jpg",
    "imageAlt": "Yeezy Foam Onyx authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Yeezy Foam Onyx verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-desert-boot-taupe-blue-gy0374",
    "sku": "GY0374",
    "title": "Yeezy Desert Boot Taupe Blue",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_Desert_Boot_Taupe_Blue_GY0374.jpg",
    "imageAlt": "Yeezy Desert Boot Taupe Blue authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 5.5"
    ],
    "description": "Yeezy Desert Boot Taupe Blue verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-500-high-slate-fw4968",
    "sku": "FW4968",
    "title": "Yeezy Boost 500 High Slate",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_500_High_Slate_FW4968.jpg",
    "imageAlt": "Yeezy Boost 500 High Slate authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Boost 500 High Slate verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-450-cloud-white-h68038",
    "sku": "H68038",
    "title": "Yeezy Boost 450 Cloud White",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_450_Cloud_White_H68038.jpg",
    "imageAlt": "Yeezy Boost 450 Cloud White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 12"
    ],
    "description": "Yeezy Boost 450 Cloud White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-mono-ice-gw2869",
    "sku": "GW2869",
    "title": "Yeezy Boost 350 V2 Mono Ice",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Mono_Ice_GW2869.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Mono Ice authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6",
      "US 8"
    ],
    "description": "Yeezy Boost 350 V2 Mono Ice verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-israfil-fz5421",
    "sku": "FZ5421",
    "title": "Yeezy Boost 350 V2 Israfil",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Israfil_FZ5421.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Israfil authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Boost 350 V2 Israfil verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "yeezy-boost-350-v2-bone-hq6316",
    "sku": "HQ6316",
    "title": "Yeezy Boost 350 V2 Bone",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Yeezys_350_Bone_HQ6316.jpg",
    "imageAlt": "Yeezy Boost 350 V2 Bone authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "Yeezy Boost 350 V2 Bone verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "wmns-air-jordan-1-low-dc0774-114",
    "sku": "DC0774-114",
    "title": "WMNS Air Jordan 1 Low",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_WMNS_Air_Jordan_1_Low_DC0774_114.jpg",
    "imageAlt": "WMNS Air Jordan 1 Low authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6"
    ],
    "description": "WMNS Air Jordan 1 Low verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-5-retroraging-bull-red-2021-gs-440888-600",
    "sku": "440888-600",
    "title": "Jordan 5 RetroRaging Bull Red (2021) (GS)",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_5_RetroRaging_Bull_Red_2021_GS_440888_600.jpg",
    "imageAlt": "Jordan 5 RetroRaging Bull Red (2021) (GS) authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 3.5",
      "US 4",
      "US 4.5",
      "US 6.5"
    ],
    "description": "Jordan 5 RetroRaging Bull Red (2021) (GS) verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-retro-high-og-555088-404",
    "sku": "555088-404",
    "title": "Air Jordan 1 Retro High OG",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Jordan_1_Retro_High_OG_555088_404.jpg",
    "imageAlt": "Air Jordan 1 Retro High OG authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Air Jordan 1 Retro High OG verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "hyper-royal-light-smoke-grey-white-575441-402",
    "sku": "575441-402",
    "title": "Hyper Royal/Light Smoke Grey-White",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Hyper_Royal_Light_Smoke_Grey_White_575441_402.jpg",
    "imageAlt": "Hyper Royal/Light Smoke Grey-White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4.5"
    ],
    "description": "Hyper Royal/Light Smoke Grey-White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-6-unc-university-blue-white-ct8529-410",
    "sku": "CT8529-410",
    "title": "Jordan 6 UNC University Blue White",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_6_UNC_University_Blue_White_CT8529_410.jpg",
    "imageAlt": "Jordan 6 UNC University Blue White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Jordan 6 UNC University Blue White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-1-lucky-green-white-sail-black-db4612-300",
    "sku": "DB4612-300",
    "title": "Jordan 1 Lucky Green/White-Sail-Black",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_1_Lucky_Green_White_Sail_Black_DB4612_300.jpg",
    "imageAlt": "Jordan 1 Lucky Green/White-Sail-Black authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7",
      "US 12"
    ],
    "description": "Jordan 1 Lucky Green/White-Sail-Black verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-1-mid-black-medium-grey-white-554725-073",
    "sku": "554725-073",
    "title": "Jordan 1 Mid Black/Medium Grey-White",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_1_Mid_Black_Medium_Grey_White_554725_073.jpg",
    "imageAlt": "Jordan 1 Mid Black/Medium Grey-White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7Y"
    ],
    "description": "Jordan 1 Mid Black/Medium Grey-White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "wmns-travis-scott-air-force-1-white-white-dd8959-100",
    "sku": "DD8959-100",
    "title": "WMNS Travis Scott Air Force 1 White/White",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/Sheet2_WMNS_Travis_Scott_Air_Force_1_White_White_DD8959_100.jpg",
    "imageAlt": "WMNS Travis Scott Air Force 1 White/White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 9",
      "US 9.5",
      "US W"
    ],
    "description": "WMNS Travis Scott Air Force 1 White/White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "jordan-11-retro-jubilee-25th-anniversary-ct8012-011",
    "sku": "CT8012-011",
    "title": "Jordan 11 Retro Jubilee 25th Anniversary",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_11_Retro_Jubilee_25th_Anniversary_CT8012_011.jpg",
    "imageAlt": "Jordan 11 Retro Jubilee 25th Anniversary authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7.5",
      "US 8",
      "US 9",
      "US 13"
    ],
    "description": "Jordan 11 Retro Jubilee 25th Anniversary verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-max-97-undefeated-militia-green-orange-blaze-white-black-dc4830-300",
    "sku": "DC4830-300",
    "title": "Air Max 97 Undefeated Militia Green/Orange Blaze/White/Black",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Max_97_Undefeated_Militia_Green_Orange_Blaze_White_Black_DC4830_300.jpg",
    "imageAlt": "Air Max 97 Undefeated Militia Green/Orange Blaze/White/Black authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 9.5"
    ],
    "description": "Air Max 97 Undefeated Militia Green/Orange Blaze/White/Black verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-max-97-undefeated-black-volt-militia-green-dc4830-001",
    "sku": "DC4830-001",
    "title": "Air Max 97 Undefeated Black/Volt/Militia Green",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Max_97_Undefeated_Black_Volt_Militia_Green_DC4830_001.jpg",
    "imageAlt": "Air Max 97 Undefeated Black/Volt/Militia Green authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 9.5"
    ],
    "description": "Air Max 97 Undefeated Black/Volt/Militia Green verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "wmns-jordan-1-high-og-black-metalic-cd0461-001",
    "sku": "CD0461-001",
    "title": "WMNS Jordan 1 High OG Black/Metalic",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_WMNS_Jordan_1_High_OG_Black_Metalic_CD0461_001.jpg",
    "imageAlt": "WMNS Jordan 1 High OG Black/Metalic authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 5W"
    ],
    "description": "WMNS Jordan 1 High OG Black/Metalic verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "wmns-jordan-3-retro-sp-a-ma-maniere-dh3434-110",
    "sku": "DH3434-110",
    "title": "WMNS Jordan 3 Retro SP A Ma Maniere",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_WMNS_Jordan_3_Retro_SP_A_Ma_Maniere_DH3434_110.jpg",
    "imageAlt": "WMNS Jordan 3 Retro SP A Ma Maniere authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 5.5W"
    ],
    "description": "WMNS Jordan 3 Retro SP A Ma Maniere verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-5-retro-a-ma-mani-re-dusk-fd1330-001",
    "sku": "FD1330-001",
    "title": "Jordan 5 Retro A Ma Maniére Dusk",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_5_Retro_A_Ma_Mani_re_Dusk_FD1330_001.jpg",
    "imageAlt": "Jordan 5 Retro A Ma Maniére Dusk authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Jordan 5 Retro A Ma Maniére Dusk verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "jordan-6-retro-hare-ct8529-062",
    "sku": "CT8529-062",
    "title": "Jordan 6 Retro Hare",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Jordan_6_Retro_Hare_CT8529_062.jpg",
    "imageAlt": "Jordan 6 Retro Hare authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8",
      "US 10"
    ],
    "description": "Jordan 6 Retro Hare verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-max-90-st-patrick-s-day-2021-dd8555-300",
    "sku": "DD8555-300",
    "title": "Air Max 90 St Patrick's Day (2021)",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Max_90_St_Patrick_s_Day_2021_DD8555_300.jpg",
    "imageAlt": "Air Max 90 St Patrick's Day (2021) authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 11.5"
    ],
    "description": "Air Max 90 St Patrick's Day (2021) verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-5-bel-air-white-court-purple-racer-pink-ghost-green-db3335-100",
    "sku": "DB3335-100",
    "title": "Jordan 5 Bel-Air White/Court Purple-Racer Pink-Ghost Green",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_5_Bel_Air_White_Court_Purple_Racer_Pink_Ghost_Green_DB3335_100.jpg",
    "imageAlt": "Jordan 5 Bel-Air White/Court Purple-Racer Pink-Ghost Green authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7.5"
    ],
    "description": "Jordan 5 Bel-Air White/Court Purple-Racer Pink-Ghost Green verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "adidas-forum-buckle-low-bad-bunny-last-forum-hq2153",
    "sku": "HQ2153",
    "title": "Adidas Forum Buckle Low Bad Bunny Last Forum",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Adidas_Forum_Buckle_Low_Bad_Bunny_Last_Forum_HQ2153.jpg",
    "imageAlt": "Adidas Forum Buckle Low Bad Bunny Last Forum authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 11"
    ],
    "description": "Adidas Forum Buckle Low Bad Bunny Last Forum verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "adidas-forum-84-bape-low-green-camo-id4771",
    "sku": "ID4771",
    "title": "Adidas Forum 84 Bape Low Green Camo",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Adidas_Forum_84_Bape_Low_Green_Camo_ID4771.jpg",
    "imageAlt": "Adidas Forum 84 Bape Low Green Camo authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7"
    ],
    "description": "Adidas Forum 84 Bape Low Green Camo verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-5-retro-ps-travis-scott-british-khaki-dh0693-200",
    "sku": "DH0693-200",
    "title": "Jordan 5 Retro (PS) Travis Scott British Khaki",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_5_Retro_PS_Travis_Scott_British_Khaki_DH0693_200.jpg",
    "imageAlt": "Jordan 5 Retro (PS) Travis Scott British Khaki authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 2.5Y"
    ],
    "description": "Jordan 5 Retro (PS) Travis Scott British Khaki verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-6-retro-travis-scott-british-khaki-dh0690-200",
    "sku": "DH0690-200",
    "title": "Air Jordan 6 Retro Travis Scott British Khaki",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Jordan_6_Retro_Travis_Scott_British_Khaki_DH0690_200.jpg",
    "imageAlt": "Air Jordan 6 Retro Travis Scott British Khaki authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8",
      "US 13"
    ],
    "description": "Air Jordan 6 Retro Travis Scott British Khaki verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-mid-se-red-black-toe-852542-100",
    "sku": "852542-100",
    "title": "Air Jordan 1 Mid SE Red Black Toe",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Jordan_1_Mid_SE_Red_Black_Toe_852542_100.jpg",
    "imageAlt": "Air Jordan 1 Mid SE Red Black Toe authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10"
    ],
    "description": "Air Jordan 1 Mid SE Red Black Toe verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-1-retro-high-og-patent-bred-555088-063",
    "sku": "555088-063",
    "title": "Jordan 1 Retro High OG Patent Bred",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_1_Retro_High_OG_Patent_Bred_555088_063.jpg",
    "imageAlt": "Jordan 1 Retro High OG Patent Bred authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Jordan 1 Retro High OG Patent Bred verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "nike-air-trainer-3-viotech-cz6393-500",
    "sku": "CZ6393-500",
    "title": "Nike Air Trainer 3 Viotech",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Nike_Air_Trainer_3_Viotech_CZ6393_500.jpg",
    "imageAlt": "Nike Air Trainer 3 Viotech authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 7.5"
    ],
    "description": "Nike Air Trainer 3 Viotech verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-1-retro-high-light-smoke-grey-555088-126",
    "sku": "555088-126",
    "title": "Jordan 1 Retro High Light Smoke Grey",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_1_Retro_High_Light_Smoke_Grey_555088_126.jpg",
    "imageAlt": "Jordan 1 Retro High Light Smoke Grey authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10.5"
    ],
    "description": "Jordan 1 Retro High Light Smoke Grey verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-4-retro-gs-white-cement-dj4699-100",
    "sku": "DJ4699-100",
    "title": "Jordan 4 Retro (GS) White Cement",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_4_Retro_GS_White_Cement_DJ4699_100.jpg",
    "imageAlt": "Jordan 4 Retro (GS) White Cement authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6.5"
    ],
    "description": "Jordan 4 Retro (GS) White Cement verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-4-white-cement-ct8527-100",
    "sku": "CT8527-100",
    "title": "Jordan 4 White Cement",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_4_White_Cement_CT8527_100.jpg",
    "imageAlt": "Jordan 4 White Cement authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Jordan 4 White Cement verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "jordan-6-carmine-ct8529-106",
    "sku": "CT8529-106",
    "title": "Jordan 6 Carmine",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_6_Carmine_CT8529_106.jpg",
    "imageAlt": "Jordan 6 Carmine authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10",
      "US 10.5"
    ],
    "description": "Jordan 6 Carmine verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "nike-dunk-low-university-blue-dd1391-102",
    "sku": "DD1391-102",
    "title": "Nike Dunk Low University Blue",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Nike_Dunk_Low_University_Blue_DD1391_102.jpg",
    "imageAlt": "Nike Dunk Low University Blue authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10"
    ],
    "description": "Nike Dunk Low University Blue verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "jordan-4-university-blue-ct8527-400",
    "sku": "CT8527-400",
    "title": "Jordan 4 University Blue",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_4_University_Blue_CT8527_400.jpg",
    "imageAlt": "Jordan 4 University Blue authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8",
      "US 10.5"
    ],
    "description": "Jordan 4 University Blue verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "nike-blazer-low-sacai-dd1877-002",
    "sku": "DD1877-002",
    "title": "Nike Blazer Low / Sacai",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Nike_Blazer_Low_Sacai_DD1877_002.jpg",
    "imageAlt": "Nike Blazer Low / Sacai authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Nike Blazer Low / Sacai verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-4-tour-yellow-ct8527-700",
    "sku": "CT8527-700",
    "title": "Jordan 4 Tour Yellow",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_4_Tour_Yellow_CT8527_700.jpg",
    "imageAlt": "Jordan 4 Tour Yellow authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Jordan 4 Tour Yellow verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-14-low-clot-terra-blush-dc9857-200",
    "sku": "DC9857-200",
    "title": "Jordan 14 Low CLOT Terra Blush",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_14_Low_CLOT_Terra_Blush_DC9857_200.jpg",
    "imageAlt": "Jordan 14 Low CLOT Terra Blush authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6.5",
      "US 10.5"
    ],
    "description": "Jordan 14 Low CLOT Terra Blush verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "nike-lebron-vii-media-day-cw2300-500",
    "sku": "CW2300-500",
    "title": "Nike Lebron VII Media Day",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Nike_Lebron_VII_Media_Day_CW2300_500.jpg",
    "imageAlt": "Nike Lebron VII Media Day authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 9"
    ],
    "description": "Nike Lebron VII Media Day verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-max-90-cw6018-001",
    "sku": "CW6018-001",
    "title": "Air Max 90",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Air_Max_90_CW6018_001.jpg",
    "imageAlt": "Air Max 90 authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 11"
    ],
    "description": "Air Max 90 verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-1-mid-black-red-white-554724-066",
    "sku": "554724-066",
    "title": "Jordan 1 Mid Black/Red/White",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_1_Mid_Black_Red_White_554724_066.jpg",
    "imageAlt": "Jordan 1 Mid Black/Red/White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 12"
    ],
    "description": "Jordan 1 Mid Black/Red/White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "nike-dunk-high-ps-black-yellow-dc9053-002",
    "sku": "DC9053-002",
    "title": "Nike Dunk High (PS) Black/Yellow",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Nike_Dunk_High_PS_Black_Yellow_DC9053_002.jpg",
    "imageAlt": "Nike Dunk High (PS) Black/Yellow authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 2Y"
    ],
    "description": "Nike Dunk High (PS) Black/Yellow verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "adidas-forum-powerphase-bad-bunny-benito-gz2009",
    "sku": "GZ2009",
    "title": "Adidas Forum Powerphase Bad Bunny Benito",
    "brand": "ADIDAS",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Adidas_Forum_Powerphase_Bad_Bunny_Benito_GZ2009.jpg",
    "imageAlt": "Adidas Forum Powerphase Bad Bunny Benito authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Adidas Forum Powerphase Bad Bunny Benito verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-5-sail-off-white-cv4827-100",
    "sku": "CV4827-100",
    "title": "Jordan 5 Sail Off White",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_5_Sail_Off_White_CV4827_100.jpg",
    "imageAlt": "Jordan 5 Sail Off White authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 2Y"
    ],
    "description": "Jordan 5 Sail Off White verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-4-white-black-grey-army-dh6927-111",
    "sku": "DH6927-111",
    "title": "Jordan 4 White/Black/Grey Army",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_4_White_Black_Grey_Army_DH6927_111.jpg",
    "imageAlt": "Jordan 4 White/Black/Grey Army authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8"
    ],
    "description": "Jordan 4 White/Black/Grey Army verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "jordan-1-spider-man-dv1748-601",
    "sku": "DV1748-601",
    "title": "Jordan 1 Spider Man",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_1_Spider_Man_DV1748_601.jpg",
    "imageAlt": "Jordan 1 Spider Man authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 12"
    ],
    "description": "Jordan 1 Spider Man verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "jordan-4-craft-photon-dust-patch-works-dv3742-021",
    "sku": "DV3742-021",
    "title": "Jordan 4 Craft Photon Dust / Patch Works",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/square/Sheet2_Jordan_4_Craft_Photon_Dust_Patch_Works_DV3742_021.jpg",
    "imageAlt": "Jordan 4 Craft Photon Dust / Patch Works authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 10",
      "US 12.5"
    ],
    "description": "Jordan 4 Craft Photon Dust / Patch Works verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": true
  },
  {
    "id": "nike-air-max-1-clot-dd1870-100",
    "sku": "DD1870-100",
    "title": "Nike Air Max 1 Clot",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/square/Sheet2_Nike_Air_Max_1_Clot_DD1870_100.jpg",
    "imageAlt": "Nike Air Max 1 Clot authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4.5"
    ],
    "description": "Nike Air Max 1 Clot verified authentic and deadstock in our Manhattan vault. Includes original box, factory laces, and passes 100% UV strobel and stitch authentication inspection.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT LEAD [TECH-01]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-12-retro-gs-barons-153265-070",
    "sku": "153265-070",
    "title": "Air Jordan 12 Retro (GS) \"Barons\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_12_Retro_Grade_School_153265_070.jpg",
    "imageAlt": "Air Jordan 12 Retro (GS) \"Barons\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 3.5Y",
      "US 4Y",
      "US 4.5Y",
      "US 5Y",
      "US 6Y",
      "US 6.5Y"
    ],
    "description": "Air Jordan 12 Retro (GS) \"Barons\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-12-retro-royalty-gs-dh0905-005",
    "sku": "DH0905-005",
    "title": "Air Jordan 12 Retro Royalty (GS)",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_12_Retro_Grade_School_DH0905_005.jpg",
    "imageAlt": "Air Jordan 12 Retro Royalty (GS) authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4Y",
      "US 4.5Y",
      "US 5Y",
      "US 5.5Y",
      "US 6Y",
      "US 6.5Y",
      "US 7Y"
    ],
    "description": "Air Jordan 12 Retro Royalty (GS) verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-low-gs-gym-red-553560-606",
    "sku": "553560-606",
    "title": "Air Jordan 1 Low (GS) \"Gym Red\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_1_Low_Grade_School_553560_606.jpg",
    "imageAlt": "Air Jordan 1 Low (GS) \"Gym Red\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4Y",
      "US 4.5Y",
      "US 5Y",
      "US 5.5Y",
      "US 6Y",
      "US 6.5Y"
    ],
    "description": "Air Jordan 1 Low (GS) \"Gym Red\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-retro-high-og-black-metallic-gold-555088-032",
    "sku": "555088-032",
    "title": "Air Jordan 1 Retro High OG \"Black Metallic Gold\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_1_Retro_High_OG_555088_032.jpg",
    "imageAlt": "Air Jordan 1 Retro High OG \"Black Metallic Gold\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 12"
    ],
    "description": "Air Jordan 1 Retro High OG \"Black Metallic Gold\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-retro-high-og-prototype-555088-033",
    "sku": "555088-033",
    "title": "Air Jordan 1 Retro High OG \"Prototype\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_1_Retro_High_OG_555088_033.jpg",
    "imageAlt": "Air Jordan 1 Retro High OG \"Prototype\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12"
    ],
    "description": "Air Jordan 1 Retro High OG \"Prototype\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-5-retro-gs-anthracite-cz2989-001",
    "sku": "CZ2989-001",
    "title": "Air Jordan 5 Retro (GS) \"Anthracite\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_5_Retro_GradeSchool_CZ2989_001.jpg",
    "imageAlt": "Air Jordan 5 Retro (GS) \"Anthracite\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4.5Y",
      "US 5Y",
      "US 5.5Y",
      "US 6Y",
      "US 6.5Y",
      "US 7Y"
    ],
    "description": "Air Jordan 5 Retro (GS) \"Anthracite\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-5-retro-gs-stealth-2-0-db3024-100",
    "sku": "DB3024-100",
    "title": "Air Jordan 5 Retro (GS) \"Stealth 2.0\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/Sheet2_Air_Jordan_5_Retro_GradeSchool_Whiteghost_DB3024_100.jpg",
    "imageAlt": "Air Jordan 5 Retro (GS) \"Stealth 2.0\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4Y",
      "US 4.5Y",
      "US 5Y",
      "US 5.5Y",
      "US 6Y",
      "US 6.5Y",
      "US 7Y"
    ],
    "description": "Air Jordan 5 Retro (GS) \"Stealth 2.0\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-high-og-ps-lucky-green-cu0449-300",
    "sku": "CU0449-300",
    "title": "Air Jordan 1 High OG (PS) \"Lucky Green\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Jordan_1_High_OG_PreSchool_CU0449_300.jpg",
    "imageAlt": "Air Jordan 1 High OG (PS) \"Lucky Green\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 11C",
      "US 12C",
      "US 13C",
      "US 1Y",
      "US 2Y",
      "US 3Y"
    ],
    "description": "Air Jordan 1 High OG (PS) \"Lucky Green\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-high-og-td-lucky-green-cu0450-300",
    "sku": "CU0450-300",
    "title": "Air Jordan 1 High OG (TD) \"Lucky Green\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Jordan_1_High_OG_Toddler_CU0450_300.jpg",
    "imageAlt": "Air Jordan 1 High OG (TD) \"Lucky Green\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4C",
      "US 5C",
      "US 6C",
      "US 7C",
      "US 8C",
      "US 9C",
      "US 10C"
    ],
    "description": "Air Jordan 1 High OG (TD) \"Lucky Green\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "air-jordan-1-retro-high-og-td-patent-bred-aq2665-063",
    "sku": "AQ2665-063",
    "title": "Air Jordan 1 Retro High OG (TD) \"Patent Bred\"",
    "brand": "JORDAN",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/Sheet2_Jordan_1_Retro_High_OG_Toddler_AQ2665_063.jpg",
    "imageAlt": "Air Jordan 1 Retro High OG (TD) \"Patent Bred\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 4C",
      "US 5C",
      "US 6C",
      "US 7C",
      "US 8C",
      "US 9C",
      "US 10C"
    ],
    "description": "Air Jordan 1 Retro High OG (TD) \"Patent Bred\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "new-balance-990v3-bodega-here-to-stay-m990bd3",
    "sku": "M990BD3",
    "title": "New Balance 990v3 \"Bodega Here to Stay\"",
    "brand": "NEW BALANCE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_New_Balance_Bodega_M990BD3.jpg",
    "imageAlt": "New Balance 990v3 \"Bodega Here to Stay\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 12"
    ],
    "description": "New Balance 990v3 \"Bodega Here to Stay\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": true,
    "isRecent": false
  },
  {
    "id": "women-s-nike-dunk-low-yellow-strike-dm9467-700",
    "sku": "DM9467-700",
    "title": "Women's Nike Dunk Low \"Yellow Strike\"",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "NEW / HAND-CHECKED",
    "tagType": "verified",
    "imageUrl": "/sneaker_images/Sheet2_Womans_Nike_Dunk_Low_OG_Yellow_Strike_DM9467_700.jpg",
    "imageAlt": "Women's Nike Dunk Low \"Yellow Strike\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6W",
      "US 6.5W",
      "US 7W",
      "US 7.5W",
      "US 8W",
      "US 8.5W",
      "US 9W"
    ],
    "description": "Women's Nike Dunk Low \"Yellow Strike\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  },
  {
    "id": "women-s-nike-dunk-low-rose-whisper-dd1503-118",
    "sku": "DD1503-118",
    "title": "Women's Nike Dunk Low \"Rose Whisper\"",
    "brand": "NIKE",
    "category": "sneakers",
    "tag": "VAULT GRAIL / IN HAND",
    "tagType": "electric",
    "imageUrl": "/sneaker_images/Sheet2_Womans_Nike_Dunk_Low_White_Rose_Whisper_DD1503_118.jpg",
    "imageAlt": "Women's Nike Dunk Low \"Rose Whisper\" authentic sneaker vault inspection",
    "priceNote": "CONFIRM ON CLAIM",
    "condition": "Deadstock (10/10) with Original Box",
    "sizesAvailable": [
      "US 6W",
      "US 6.5W",
      "US 7W",
      "US 7.5W",
      "US 8W",
      "US 8.5W",
      "US 9W"
    ],
    "description": "Women's Nike Dunk Low \"Rose Whisper\" verified authentic and deadstock in our Manhattan vault. Includes original packaging, factory tags, and passes 100% authentication verification.",
    "provenance": {
      "origin": "Authorized Retail Tier-0 Drop / Private Collector Lockbox",
      "inspectionDate": "OCTOBER 2024",
      "inspector": "VAULT IN-HOUSE [TECH-04]",
      "uvCheck": true,
      "insoleStitchCheck": true,
      "boxLabelMatch": true
    },
    "isTrending": false,
    "isRecent": false
  }
];

const CATEGORY_BANNERS_RAW = {
  clothing: {
    title: 'CLOTHING & ACCESSORIES',
    category: 'STREET WEAR',
    description: 'Box logos, rare graphic tees, hoodies, fitted caps, and designer outerwear sourced directly on request.',
    imageUrl: '/sneaker_images/square/Sheet2_Air_Jordan_6_Retro_Travis_Scott_British_Khaki_DH0690_200.jpg',
    alt: 'Streetwear archive display'
  },
  randomShit: {
    title: 'RANDOM SHIT',
    category: 'OTHER GOODS',
    description: 'Art collectibles, rare editions, accessories, and vault grails.',
    imageUrl: '/sneaker_images/square/Sheet2_Jordan_14_Low_CLOT_Terra_Blush_DC9857_200.jpg',
    alt: 'Vault rare collectibles display'
  }
};

export const BRAND_STATS = [
  {
    "index": "01",
    "brand": "ADIDAS",
    "count": "36 PAIRS IN VAULT"
  },
  {
    "index": "02",
    "brand": "JORDAN",
    "count": "38 PAIRS IN VAULT"
  },
  {
    "index": "03",
    "brand": "NIKE",
    "count": "14 PAIRS IN VAULT"
  },
  {
    "index": "04",
    "brand": "NEW BALANCE",
    "count": "1 PAIRS IN VAULT"
  },
  {
    "index": "05",
    "brand": "VAULT TOTAL",
    "count": "89 TOTAL SNEAKERS"
  },
  {
    "index": "06",
    "brand": "INSPECTION",
    "count": "100% IN HAND PASS"
  }
];

export const VAULT_PHONE = '+1 (212) 804-8842';
export const VAULT_SMS_NUM = '+12128048842';

// Image paths above are authored root-relative; resolve them against the deploy base.
export const HERO_ITEM = resolveAssetPaths(HERO_ITEM_RAW);
export const TRAVIS_SCOTT_ITEM = resolveAssetPaths(TRAVIS_SCOTT_ITEM_RAW);
export const VAULT_ITEMS = resolveAssetPaths(VAULT_ITEMS_RAW);
export const CATEGORY_BANNERS = resolveAssetPaths(CATEGORY_BANNERS_RAW);
