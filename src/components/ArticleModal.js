// src/components/ArticleModal.js
import React from 'react';
export default function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white max-w-lg w-full p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <div className="prose max-h-[70vh] overflow-y-auto mb-4">
          {/* If your content is markdown, you’d normally use a renderer; for now: */}
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
        <button onClick={onClose} className="mt-2 px-4 py-2 bg-gray-200 rounded">Close</button>
      </div>
    </div>
  );
}
