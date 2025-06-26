import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { FcLike, FcComments } from "react-icons/fc";
import { IoMdDownload } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function ImageItems(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewsCount, setViewsCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setViewsCount(props.views);
    setLikesCount(props.likes);
    setCommentsCount(props.comments);
  }, [props.views, props.likes, props.comments]);

  useEffect(() => {
    if (isHovered) {
      animateCount(props.views, setViewsCount);
      animateCount(props.likes, setLikesCount);
      animateCount(props.comments, setCommentsCount);
    }
  }, [isHovered]);

  const animateCount = (target, setCount) => {
    let count = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setCount(count);
    }, 20);
  };

  const handleDownload = async (e) => {
    e.stopPropagation();
    const response = await fetch(props.webformatURL);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `image_${props.id}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(props.pageURL);
      alert('Image link copied to clipboard!');
    } catch (error) {
      console.error('Clipboard error:', error);
    }
  };

  const handleViewImage = () => {
    window.open(props.webformatURL, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        className="w-full max-w-sm rounded-2xl shadow-xl overflow-hidden relative group cursor-pointer"
        style={{
          aspectRatio: '4/3',
          backgroundImage: `url(${props.webformatURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'filter 0.3s',
          filter: isHovered ? 'brightness(0.5)' : 'brightness(1)'
        }}
        onClick={handleViewImage}
      >
        {/* Overlay with details */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10"
            style={{ background: 'rgba(0,0,0,0.35)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Stats */}
            <div className="flex justify-between text-sm mb-2">
              <div className="flex items-center gap-1">
                <FaEye className="text-blue-300" />
                <span>{viewsCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <FcLike />
                <span>{likesCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <FcComments />
                <span>{commentsCount.toLocaleString()}</span>
              </div>
            </div>
            {/* Bottom details */}
            <div className="flex justify-between items-center text-xs">
              <span>Size: {props.imageWidth}x{props.imageHeight}</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={handleDownload}>
                  <IoMdDownload className="text-white" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleShare}>
                  <RiShareForwardLine className="text-white" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
