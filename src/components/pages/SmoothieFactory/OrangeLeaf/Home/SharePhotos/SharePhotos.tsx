'use client';

import {
  Barrier,
  Item,
  Lane,
  Logo,
  Photo,
  PhotoDescription,
  PhotoTitle,
  Slider,
  Subtitle,
  SocialLinks,
  SocialLink,
  TextContainer,
  Title,
  FollowUs,
  SocialLinksInnerWrapper,
} from './SharePhotos.styles';

import type { FC } from 'react';
import Image from 'next/image';

const photos = [
  {
    src: '/images/ig_image_1.png',
    text: 'Let’s talk about those layers. 🤌😍 #HowDoYouOrangeLeaf',
  },
  {
    src: '/images/ig_image_2.png',
    text: 'Build. Your. Own. 🥤',
  },
  {
    src: '/images/ig_image_3.png',
    text: 'The frozen yogurt’s lookin’ pretty FLY this month. 🦋😉',
  },
  {
    src: '/images/ig_image_4.png',
    text: 'We all have that one friend that’s obsessed with everything gummy.',
  },
  {
    src: '/images/ig_image_5.png',
    text: 'Raise your hand if you’re a boba fan: 🙋‍♀️🙋‍♂️',
  },
  {
    src: '/images/ig_image_1.png',
    text: 'Let’s talk about those layers. 🤌😍 #HowDoYouOrangeLeaf',
  },
  {
    src: '/images/ig_image_2.png',
    text: 'Build. Your. Own. 🥤',
  },
  {
    src: '/images/ig_image_3.png',
    text: 'The frozen yogurt’s lookin’ pretty FLY this month. 🦋😉',
  },
  {
    src: '/images/ig_image_4.png',
    text: 'We all have that one friend that’s obsessed with everything gummy.',
  },
  {
    src: '/images/ig_image_5.png',
    text: 'Raise your hand if you’re a boba fan: 🙋‍♀️🙋‍♂️',
  },
  {
    src: '/images/ig_image_1.png',
    text: 'Let’s talk about those layers. 🤌😍 #HowDoYouOrangeLeaf',
  },
  {
    src: '/images/ig_image_2.png',
    text: 'Build. Your. Own. 🥤',
  },
  {
    src: '/images/ig_image_3.png',
    text: 'The frozen yogurt’s lookin’ pretty FLY this month. 🦋😉',
  },
  {
    src: '/images/ig_image_4.png',
    text: 'We all have that one friend that’s obsessed with everything gummy.',
  },
  {
    src: '/images/ig_image_5.png',
    text: 'Raise your hand if you’re a boba fan: 🙋‍♀️🙋‍♂️',
  },
];

const SharePhotos: FC = () => (
  <>
    <TextContainer>
      <div>
        <Title>Share your experience with us!</Title>
        <Subtitle>Use #Frozenyogurt and/or #Brainfreeze...</Subtitle>
      </div>
    </TextContainer>
    <Slider>
      <Barrier>
        <Lane>
          {photos.map((photo, index) => (
            <Item key={index}>
              <Photo>
                <Image alt="ig" src={photo.src} style={{ objectFit: 'cover' }} fill />

                <Logo>
                  <svg fill="none" height="55" viewBox="0 0 53 55" width="53" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M53 26.9434L52.9367 0L25.7207 0.064458L25.6891 0.0966878C19.1699 0.290062 12.6824 2.93283 7.7139 8.02501C-2.60285 18.5961 -2.5712 35.6775 7.80884 46.1841C18.1889 56.6907 34.9615 56.6585 45.2783 46.0874C50.405 40.8341 53 33.9693 53 27.0723V27.0401V26.9434ZM43.063 33.3892C42.2086 36.322 40.7528 38.7714 38.6642 40.7052C38.0629 41.2531 37.3983 41.7687 36.7021 42.2522C32.5564 45.0883 28.0309 46.0229 23.1257 45.0561C21.4168 44.7338 19.8345 44.1859 18.3471 43.4446C18.1256 43.3157 17.9041 43.1868 17.6825 43.0901C16.7964 42.6067 15.9736 42.0588 15.2141 41.382C13.8533 40.254 12.6191 38.8681 11.5748 37.2567C8.78988 33.0347 7.87213 28.4259 8.82153 23.4627C9.77092 18.4672 12.3343 14.5353 16.4483 11.6991C19.4231 9.63646 22.5877 8.60513 25.9423 8.50844C29.3601 8.5729 32.2716 9.41086 34.6451 11.0223C35.183 11.4735 35.6261 11.8603 35.9109 12.247C36.1957 12.6015 36.4805 13.085 36.7021 13.6651C36.9236 14.2774 36.8919 14.8253 36.6388 15.341C36.5438 15.5021 36.4489 15.631 36.354 15.76C35.8476 16.3401 34.1703 16.5012 31.3222 16.2112C29.6133 16.05 28.5373 16.0178 28.0309 16.05C26.6385 16.1789 25.5625 16.4045 24.7081 16.6946C21.7016 17.7582 19.4547 19.7241 17.999 22.5603C17.6825 23.2693 17.4294 24.0428 17.2711 24.913C16.7648 27.5558 17.2711 29.9729 18.7269 32.229C20.2143 34.4528 22.2396 35.8386 24.8346 36.322C25.6891 36.4832 26.4803 36.5476 27.3031 36.5154C28.9487 36.4187 30.531 35.8708 32.0184 34.8395C33.4741 33.8404 34.5818 32.5835 35.278 31.0365C35.4046 30.7786 35.5312 30.4886 35.6261 30.1985C35.7843 29.7796 35.9109 29.3606 36.0375 28.9738C36.1641 28.5549 36.2907 27.9103 36.4489 27.0401C36.6071 26.1699 36.7021 25.3964 36.8287 24.7196C36.9236 24.0428 36.9869 23.6883 36.9869 23.6238C36.9869 23.5271 37.1451 22.657 37.4299 21.0133C37.5249 20.3365 37.6515 19.7886 37.7464 19.3051C38.1895 17.597 38.7591 16.4045 39.5186 15.6633C39.5502 15.631 39.5819 15.5988 39.6135 15.5666C40.0249 15.2121 40.4047 15.1798 40.6895 15.4699C40.8161 15.5988 40.911 15.8244 40.9743 16.0822C41.0376 16.3723 41.1326 16.7913 41.3225 17.3714C41.4807 17.9515 41.7022 18.6606 41.9554 19.563L42.525 21.4645C42.62 21.9157 42.7465 22.3347 42.8731 22.7536C42.9997 23.1726 43.1263 23.6883 43.2845 24.3651C43.3478 24.7196 43.4428 25.2353 43.5377 25.9443C43.8542 28.8127 43.6959 31.2621 43.063 33.3892Z"
                      fill="#FF9828"
                    />
                  </svg>
                </Logo>
              </Photo>

              <PhotoTitle>orangeleaf</PhotoTitle>
              <PhotoDescription>{photo.text}</PhotoDescription>
            </Item>
          ))}
        </Lane>
      </Barrier>
    </Slider>
    <SocialLinks>
      <FollowUs>... follow us on:</FollowUs>
      <SocialLinksInnerWrapper>
        <SocialLink href="https://twitter.com/orangeleaf" target="_blank">
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" fill="#8BA726" r="20" />
            <path
              d="M26.3438 16.75c.625-.4688 1.1874-1.0312 1.625-1.6875-.5626.25-1.2188.4375-1.875.5.6874-.4063 1.1874-1.0313 1.4374-1.8125-.625.375-1.3437.6562-2.0624.8125-.625-.6563-1.4688-1.0313-2.4063-1.0313-1.8125 0-3.2813 1.4688-3.2813 3.2813 0 .25.0313.5.0938.75-2.7188-.1563-5.1562-1.4687-6.7812-3.4375-.2813.4688-.4376 1.0312-.4376 1.6562 0 1.125.5626 2.125 1.4688 2.7188-.5312-.0312-1.0625-.1562-1.5-.4062v.0312c0 1.5938 1.125 2.9062 2.625 3.2188-.25.0624-.5625.125-.8438.125-.2187 0-.4062-.0313-.625-.0626.4063 1.3126 1.625 2.25 3.0626 2.2813-1.125.875-2.5313 1.4063-4.0626 1.4063-.2812 0-.5312-.0313-.7812-.0626 1.4375.9376 3.1562 1.4688 5.0312 1.4688 6.0313 0 9.3126-4.9688 9.3126-9.3125V16.75Z"
              fill="#fff"
            />
          </svg>
        </SocialLink>
        <SocialLink href="https://www.facebook.com/orangeleaf" target="_blank">
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" fill="#FF6034" r="20" />
            <path
              d="m23.7188 21 .4374-2.875H21.375V16.25c0-.8125.375-1.5625 1.625-1.5625h1.2812v-2.4687S23.125 12 22.0312 12C19.75 12 18.25 13.4062 18.25 15.9062v2.2188h-2.5625V21H18.25v7h3.125v-7h2.3438Z"
              fill="#fff"
            />
          </svg>
        </SocialLink>
        <SocialLink href="https://www.tiktok.com/@orangeleaf.mc" target="_blank">
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" fill="#FF9828" r="20" />
            <path
              d="M27 18.5625v-2.7187h-.0312c-.75 0-1.4688-.2188-2.0626-.625-.875-.5626-1.5-1.4688-1.6874-2.5-.0626-.2188-.0626-.4376-.0626-.6563V12h-2.75v10.9375c0 1.2813-1.0624 2.3437-2.3437 2.3437s-2.3437-1.0624-2.3437-2.3437 1.0624-2.3437 2.3437-2.3437c.25 0 .4687.0312.7187.125v-2.8126c-.25-.0312-.4687-.0624-.7187-.0624C15.25 17.8438 13 20.125 13 22.9375S15.25 28 18.0625 28s5.0937-2.25 5.0937-5.0625v-5.5937c1.0626.7812 2.375 1.2187 3.8126 1.2187H27Z"
              fill="#fff"
            />
          </svg>
        </SocialLink>
        <SocialLink href="https://www.instagram.com/orangeleaf/" target="_blank">
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" fill="#FFDB31" r="20" />
            <path
              d="M20 16.4062c-2 0-3.5938 1.625-3.5938 3.5938 0 2 1.5938 3.5938 3.5938 3.5938 1.9688 0 3.5938-1.5938 3.5938-3.5938 0-1.9688-1.625-3.5938-3.5938-3.5938Zm0 5.9376c-1.2812 0-2.3438-1.0313-2.3438-2.3438 0-1.2812 1.0313-2.3125 2.3438-2.3125 1.2812 0 2.3125 1.0313 2.3125 2.3125 0 1.3125-1.0313 2.3438-2.3125 2.3438Zm4.5625-6.0626c0-.4687-.375-.8437-.8437-.8437-.4688 0-.8438.375-.8438.8437 0 .4688.375.8438.8438.8438.4687 0 .8437-.375.8437-.8438Zm2.375.8438C26.875 16 26.625 15 25.8125 14.1875S24 13.125 22.875 13.0625c-1.1562-.0625-4.625-.0625-5.7812 0-1.125.0625-2.0938.3125-2.9376 1.125C13.3438 15 13.0938 16 13.0312 17.125c-.0624 1.1562-.0624 4.625 0 5.7812.0626 1.125.3126 2.0938 1.125 2.9376.8438.8124 1.8126 1.0624 2.9376 1.125 1.1562.0624 4.625.0624 5.7812 0 1.125-.0626 2.125-.3126 2.9375-1.125.8125-.8438 1.0625-1.8126 1.125-2.9376.0625-1.1562.0625-4.625 0-5.7812Zm-1.5 7c-.2187.625-.7187 1.0938-1.3125 1.3438-.9375.375-3.125.2812-4.125.2812-1.0312 0-3.2188.0938-4.125-.2812-.625-.25-1.0938-.7188-1.3438-1.3438-.375-.9062-.2812-3.0938-.2812-4.125 0-1-.0938-3.1875.2812-4.125.25-.5938.7188-1.0625 1.3438-1.3125.9062-.375 3.0938-.2813 4.125-.2813 1 0 3.1875-.0937 4.125.2813.5938.2187 1.0625.7187 1.3125 1.3125.375.9375.2813 3.125.2813 4.125 0 1.0312.0937 3.2188-.2813 4.125Z"
              fill="#fff"
            />
          </svg>
        </SocialLink>
      </SocialLinksInnerWrapper>
    </SocialLinks>
  </>
);

export default SharePhotos;
