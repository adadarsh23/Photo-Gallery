import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { FcLike, FcComments } from "react-icons/fc";
import { IoMdDownload } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri"; // Share icon

export default function ImageItems(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewsCount, setViewsCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Animation function to increment values
  const incrementCount = (target, setCount) => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.ceil(target / 50); // Increment gradually
      if (count >= target) {
        clearInterval(interval);
        count = target; // Ensure it ends exactly at the target
      }
      setCount(count);
    }, 30); // Adjust speed (ms) of increment
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Trigger the increment animation on hover
  useEffect(() => {
    setViewsCount(props.views);
    setLikesCount(props.likes);
    setCommentsCount(props.comments);
  }, [props.views, props.likes, props.comments]);
  
  useEffect(() => {
    if (isHovered) {
      incrementCount(props.views, setViewsCount);
      incrementCount(props.likes, setLikesCount);
      incrementCount(props.comments, setCommentsCount);
    }
  }, [isHovered]);
  const handleDownload = async () => {
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

  const handleViewImage = () => {
    window.open(props.webformatURL, '_blank');
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(props.pageURL);
      alert('Image link copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      <Card
        className={`group w-full max-w-sm rounded-2xl shadow-lg overflow-hidden py-0 gap-0 transform transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onMouseEnter={() => setIsHovered(true)} // Set hover to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hover to false on mouse leave
      >
        <div className="overflow-hidden">
          <img
            src={props.webformatURL}
            alt={props.tags}
            onClick={handleViewImage}
            className="w-full h-60 object-cover rounded-t-2xl transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4 bg-gray-50 dark:bg-gray-800 transition-all duration-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaEye className="w-4 h-4 text-blue-500" />
              <span>{viewsCount}K</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FcLike className="w-4 h-4" />
              <span>{likesCount}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FcComments className="w-4 h-4" />
              <span>{commentsCount}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              Size: {props.imageWidth}x{props.imageHeight}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-500 hover:text-gray-700 transition-all duration-300"
                onClick={handleDownload}
              >
                <IoMdDownload className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-500 hover:text-gray-700 transition-all duration-300"
                onClick={handleShare}
              >
                <RiShareForwardLine className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
