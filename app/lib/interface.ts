export interface itemCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  timestamp: string;
  content: {
    _type: string;
    children: {
      _type: string;
      marks: string[];
      text: string;
    }[];
  };
  itemImage: {
    _type: any;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
