const imageToIdLink = {
  '1': 'https://i.pinimg.com/originals/f0/be/01/f0be01db22cdbcc42b7a9774078ee73c.jpg',
  '2': 'https://i.pinimg.com/originals/03/9a/68/039a685c96013f06984175f109db5290.jpg',
  '3': 'https://i.pinimg.com/originals/01/0b/ea/010bea143ec7fd49f8d2a1170f008d3e.jpg',
  '4': 'https://i.pinimg.com/originals/22/2f/e7/222fe7ea231f4a6f8e3f54c68a5608df.jpg',
  '5': 'https://i.pinimg.com/originals/f6/93/1f/f6931f075c39a7aefcef8da536223837.jpg',
  '6': 'https://go.zvuk.com/imgs/2023/04/17/08/5875303/89eebd61da6ba9adff572f39785be78b6c044751.jpg',
  '7': 'https://i.pinimg.com/736x/24/9e/6f/249e6f3d30c501d5595a3fa7c26f3838.jpg',
  '8': 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67aee50d0adcec18c21fd424_67aee6b2a6dcaa501c5ba3d9/scale_1200',
};

export const getImageLink = (imageId: number) => {
  return imageToIdLink[String(imageId)];
};
