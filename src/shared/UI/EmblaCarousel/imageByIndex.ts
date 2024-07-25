import image1 from '@assets/img/image_1.webp';
import image2 from '@assets/img/imge_2.jpeg';
import image3 from '@assets/img/img_3.jpeg';

export const images: string[] = [image1, image2, image3];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
