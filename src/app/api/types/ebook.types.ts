export interface IebookRoot {
  data: Iebook[];
  meta: Meta;
  links: Links;
  extra_data: ExtraData;
}

export interface IebookRootDeatilsRoot {
  data: Iebook;
  extra_data: ExtraData;
}

export interface Iebook {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  name: string;
  description: any;
  available_on: string;
  slug: string;
  meta_description: any;
  meta_keywords: any;
  updated_at: string;
  sku: string;
  public_metadata: PublicMetadata;
  purchasable: boolean;
  in_stock: boolean;
  backorderable: boolean;
  available: boolean;
  currency: string;
  price: number;
  display_price: string;
  compare_at_price: number;
  display_compare_at_price: string;
  product_type: string;
  avg_review: number;
  num_of_reviews: number;
  book: Book;
  is_available_to_purchase: boolean;
  is_purchased_by_current_user: boolean;
  is_added_to_cart_by_current_user: boolean;
}

export interface PublicMetadata {}

export interface Book {
  type: string;
  id: number;
  title: string;
  description: string;
  image_url: string;
  num_of_pages: number;
  num_of_chapters: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  url: string;
  book_outlines: any[];
}

export interface Relationships {
  variants: Variants;
  option_types: OptionTypes;
  product_properties: ProductProperties;
  taxons: Taxons;
  images: Images;
  default_variant: DefaultVariant;
  primary_variant: PrimaryVariant;
}

export interface Variants {
  data: any[];
}

export interface OptionTypes {
  data: any[];
}

export interface ProductProperties {
  data: any[];
}

export interface Taxons {
  data: any[];
}

export interface Images {
  data: any[];
}

export interface DefaultVariant {
  data: Data;
}

export interface Data {
  id: string;
  type: string;
}

export interface PrimaryVariant {
  data: Data2;
}

export interface Data2 {
  id: string;
  type: string;
}

export interface Meta {
  count: number;
  total_count: number;
  total_pages: number;
  filters: Filters;
}

export interface Filters {
  option_types: any[];
  product_properties: any[];
}

export interface Links {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
}

export interface ExtraData {}
