"use client";

import React, { useState } from 'react';
import { Search, Brain, Loader2, Sparkles, BookOpen, Layers, X, ZoomIn } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<any>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        setLoading(true);
        setReport(null);
        setSelectedImage(null);

        try {
            const res = await fetch('/api/research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            });
            const data = await res.json();
            setReport(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900">
            <div className="max-w-4xl mx-auto p-6 md:p-12">

                {/* HEADER (Minimalist) */}
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                        <Sparkles className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">CogniFlow Consensus v2.2</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 tracking-tight leading-tight">
                        Research & Synthesis Engine
                    </h1>
                </header>

                {/* SEARCH (Clean & Modern) */}
                <form onSubmit={handleSearch} className="mb-16 relative max-w-2xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <input
                            type="text"
                            suppressHydrationWarning
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter a research topic..."
                            className="relative w-full py-5 pl-6 pr-32 rounded-xl bg-white border border-slate-200 outline-none text-lg font-medium text-slate-800 placeholder:text-slate-400 shadow-sm focus:ring-2 focus:ring-slate-200 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-lg font-medium transition-all disabled:opacity-70 flex items-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Search className="w-4 h-4" />}
                        </button>
                    </div>
                </form>

                {/* LOADING STATE */}
                <AnimatePresence>
                    {loading && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="text-center py-12"
                        >
                            <Loader2 className="w-8 h-8 text-slate-300 animate-spin mx-auto mb-4" />
                            <p className="text-slate-400 text-sm tracking-wide">Synthesizing multi-model perspectives...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* REPORT VIEW (Card-Based, Neutral) */}
                {report && report.research && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                        className="space-y-8"
                    >
                        {/* MAIN ANSWER CARD */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">

                            {/* META HEADER */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-slate-100">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{report.research.title || "Research Report"}</h2>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <Layers className="w-4 h-4" />
                                        <span>Sources: {(report.research.sources || []).join(", ") || "General Knowledge"}</span>
                                    </div>
                                </div>

                                {/* CONFIDENCE NOTE (Professional, Neutral) */}
                                <div className="bg-slate-50 px-4 py-3 rounded-lg border border-slate-100 text-right">
                                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Confidence Note</span>
                                    <span className="block text-sm font-medium text-slate-700">{report.research.confidence}</span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="prose prose-slate prose-lg max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {report.research.answer || report.research.sections?.[0]?.content}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* IMAGES (Interactive Grid) */}
                        {report.images && report.images.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {report.images.map((img: any, i: number) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="group relative aspect-video rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm cursor-zoom-in"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img.url} alt={img.title} className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                                            <div className="flex items-center gap-2 text-white mb-1">
                                                <ZoomIn className="w-4 h-4" />
                                                <span className="text-xs font-bold">Zoom View</span>
                                            </div>
                                            <p className="text-white text-xs truncate w-full opacity-90">{img.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* LIGHTBOX MODAL */}
                        <AnimatePresence>
                            {selectedImage && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 md:p-8"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <motion.div
                                        initial={{ scale: 0.9, y: 20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        exit={{ scale: 0.9, y: 20 }}
                                        className="relative max-w-5xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setSelectedImage(null)}
                                            className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        {/* Main Image */}
                                        <div className="w-full h-full flex items-center justify-center bg-black/50">
                                            <img
                                                src={selectedImage.url}
                                                alt={selectedImage.title}
                                                className="max-w-full max-h-[85vh] object-contain"
                                            />
                                        </div>

                                        {/* Caption Bar */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                                            <h3 className="text-white font-bold text-lg mb-1">{selectedImage.title}</h3>
                                            <p className="text-white/60 text-sm">Source: Visual Reference via CogniFlow</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* FOOTER */}
                        <div className="text-center pt-8 text-slate-300 text-xs uppercase tracking-widest">
                            CogniFlow Research Engine • {new Date().getFullYear()}
                        </div>

                    </motion.div>
                )}
            </div>
        </main>
    );
}
