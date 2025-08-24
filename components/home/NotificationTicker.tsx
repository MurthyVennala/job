
import React, { useEffect, useRef } from 'react';
import { Notification } from '../../types';

interface NotificationTickerProps {
  title: string;
  items: Notification[];
}

export default function NotificationTicker({ title, items }: NotificationTickerProps): React.ReactNode {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const duplicateContent = () => {
      el.innerHTML += el.innerHTML;
    };
    
    duplicateContent();

    let anim: number;
    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 0.5;
      }
      anim = requestAnimationFrame(scroll);
    };
    anim = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(anim);
  }, [items]);

  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100/70 dark:border-gray-800 flex items-center overflow-hidden">
      <div className="flex-shrink-0 bg-red-500 text-white text-sm font-semibold px-4 py-3">
        {title}
      </div>
      <div className="flex-grow overflow-hidden">
        <div ref={contentRef} className="flex gap-8 whitespace-nowrap p-3">
          {items.map(n => (
            <a key={n.id} href={n.url} className="text-sm hover:underline text-gray-700 dark:text-gray-300">
              <span className="text-red-500 font-bold mr-2 animate-pulse">New</span>{n.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
