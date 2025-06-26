import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/Components/ui/button";
import { FaEye } from "react-icons/fa";
import { FcLike, FcComments } from "react-icons/fc";
import { IoMdDownload } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function ImageItems(props) {
  const {
    webformatURL,
    pageURL,
    views,
    likes,
    comments,
    imageWidth,
    imageHeight,
    tags,
    id
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [viewsCount, setViewsCount] = useState(views);
  const [likesCount, setLikesCount] = useState(likes);
  const [commentsCount, setCommentsCount] = useState(comments);

  const handleViewImage = useCallback(() => {
    window.open(webformatURL, '_blank');
  }, [webformatURL]);

  const animateCount = useCallback((target, setCount) => {
    let count = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(count);
      }
    }, 16); // ~60fps
  }, []);

  useEffect(() => {
    if (isHovered) {
      animateCount(views, setViewsCount);
      animateCount(likes, setLikesCount);
      animateCount(comments, setCommentsCount);
    }
  }, [isHovered, animateCount, views, likes, comments]);

  const handleDownload = useCallback(async (e) => {
    e.stopPropagation();
    const response = await fetch(webformatURL);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `image_${id}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }, [webformatURL, id]);

  const handleShare = useCallback(async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(pageURL);
      alert('Image link copied to clipboard!');
    } catch (error) {
      console.error('Clipboard error:', error);
    }
  }, [pageURL]);

  const imageAlt = useMemo(() => tags || 'Photo gallery image', [tags]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        className="w-full max-w-sm rounded-2xl shadow-xl overflow-hidden relative group cursor-pointer"
        onClick={handleViewImage}
        style={{ aspectRatio: '4/3' }}
      >
        {/* Image element with alt & lazy loading */}
        <img
          src={webformatURL}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-filter duration-300"
          style={{ filter: isHovered ? 'brightness(0.5)' : 'brightness(1)' }}
        />

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10"
            style={{ background: 'rgba(0,0,0,0.35)' }}
          >
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
            <div className="flex justify-between items-center text-xs">
              <span>Size: {imageWidth}x{imageHeight}</span>
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
