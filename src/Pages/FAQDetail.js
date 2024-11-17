// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './FAQDetail.css';

// const faqs = [
//   { id: 1, question: 'Pertanyaan 1', answer: 'Jawaban 1' },
//   { id: 2, question: 'Pertanyaan 2', answer: 'Jawaban 2' },
//   // Tambahkan FAQ lainnya
// ];

// const FAQDetail = ({faqs}) => {
//   const { id } = useParams();
//   const selectedFaq = faqs.find((faq) => faq.id.toString() === parseInt(id).toString());

//   if (!selectedFaq) {
//     return <p>FAQ not found</p>;
//   }

//   return (
//     <div className="faq-detail">
//       <h2>{selectedFaq.question}</h2>
//       <p>{selectedFaq.answer}</p>
//     </div>
//   );
// };

// export default FAQDetail;
