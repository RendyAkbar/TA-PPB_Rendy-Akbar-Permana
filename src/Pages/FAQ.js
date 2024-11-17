import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const allFaqs = [
    {
      id: 1,
      question: 'Apa itu sistem rating lokasi?',
      answer: 'Situs web tentang lokasi adalah platform yang menyediakan informasi terkait titik koordinat, zona waktu dan populasi.',
    },
    {
      id: 2,
      question: 'Apa yang mempengaruhi rating suatu lokasi?',
      answer: 'Rating suatu lokasi dipengaruhi oleh berbagai faktor, termasuk kualitas pelayanan, fasilitas yang disediakan, kebersihan, keamanan, dan umpan balik dari pengunjung sebelumnya. Semua kontribusi ini bersama-sama membentuk rating keseluruhan suatu lokasi.',
    },
    {
      id: 3,
      question: ' Apakah rating lokasi dapat diandalkan?',
      answer: 'Rating lokasi dapat diandalkan sebagai panduan umum, terutama jika berdasarkan pengalaman banyak pengguna. Namun, penting untuk diingat bahwa preferensi individu dapat bervariasi, jadi sangat dianjurkan untuk membaca ulasan dan mengevaluasi apakah lokasi tersebut sesuai dengan kebutuhan dan preferensi pribadi Anda.',
    },
    {
      id: 4,
      question: 'Apakah lokasi dapat dipercaya?',
      answer: 'Ya, lokasi yang telah dibuat dalam web ini telah terpercaya sesuai dengan lokasi di tempat.',
    },
  ];

  const [faqs, setFaqs] = useState(allFaqs);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredFaqs = allFaqs.filter((faq) => faq.question.toLowerCase().includes(term));
    setFaqs(filteredFaqs);
    setSearchTerm(term);
  };

  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <input
        type="text"
        placeholder="Cari pertanyaan..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {faqs.map((faq) => (
        <div className="faq-question" key={faq.id}>
          <div className="faq-question-header" onClick={() => toggleAnswer(faq.id)}>
            <h2>{faq.question}</h2>
            {openId === faq.id ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {openId === faq.id && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
