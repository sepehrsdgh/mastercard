"use client"
import React, { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  FacebookMessengerIcon,
} from "react-share";


// Array of share buttons with corresponding icons
const shareButtons = [
  { ShareButton: FacebookShareButton, Icon: FacebookIcon, name: "Facebook" },
  { ShareButton: TwitterShareButton, Icon: TwitterIcon, name: "Twitter" },
  { ShareButton: LinkedinShareButton, Icon: LinkedinIcon, name: "LinkedIn" },
  { ShareButton: RedditShareButton, Icon: RedditIcon, name: "Reddit" },
  { ShareButton: TelegramShareButton, Icon: TelegramIcon, name: "Telegram" },
  { ShareButton: WhatsappShareButton, Icon: WhatsappIcon, name: "WhatsApp" },
  { ShareButton: EmailShareButton, Icon: EmailIcon, name: "Email" },
  { ShareButton: FacebookMessengerShareButton, Icon: FacebookMessengerIcon, name: "Messenger" },
];

const ShareButtons = ({ shareUrl, setOpenShare }) => {
  const shareButtonsRef = useRef(null);  // Reference to the ShareButtons component

  // Function to handle clicks outside the ShareButtons component
  const handleClickOutside = (event) => {
    if (shareButtonsRef.current && !shareButtonsRef.current.contains(event.target)) {
      setOpenShare(false);  // Hide the component when clicked outside
    }
  };

  // Add event listener for clicks outside when component is mounted
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);  // Cleanup event listener when component unmounts
    };
  }, []);

  return (
    <div ref={shareButtonsRef} className="absolute text-black border-[1px] border-[#d8d5f1] top-0 left-0 right-0 rounded-md bg-white shadow-sm p-5">
      <button onClick={()=>setOpenShare(false)} className='text-right'><IoClose size={24}/></button>
     <h6 className='mb-6 text-base font-semibold text-center'>Select platform</h6>
      <div className='flex gap-3 pb-3 justify-between items-center overflow-scroll'>
      {shareButtons.map(({ ShareButton, Icon, name }, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <ShareButton url={shareUrl}>
            <Icon size={32} round={true} />
          </ShareButton>
          <p>{name}</p>
        </div>
      ))}
          </div>
    </div>
  );
};

export default ShareButtons;
