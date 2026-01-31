const reviews = [
  {
    name: "Priya M.",
    time: "2 weeks ago",
    text: "I had laser hair removal done by Dr. Suryawanshi and the results are amazing! Professional staff, clean clinic, and painless procedure. Highly recommend!",
  },
  {
    name: "Anita K.",
    time: "1 month ago",
    text: "Best hydrafacial experience! My skin is glowing and the fine lines have reduced significantly. Dr. Suryawanshi explained everything clearly.",
  },
  {
    name: "Rohini D.",
    time: "3 weeks ago",
    text: "Struggled with PCOS for years. Dr. Suryawanshi's holistic treatment approach has been life-changing. Very caring and knowledgeable doctor.",
  },
  {
    name: "Megha P.",
    time: "1 week ago",
    text: "Got Botox for my forehead lines. Results are natural and subtle, exactly what I wanted. The clinic is very professional and hygienic.",
  },
];

export function Reviews() {
  return (
    <section className="mt-16 bg-[#F9F9F9] py-16">
      <div className="container-xl">
        <h2 className="font-heading text-3xl font-bold text-center text-charcoal">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-center text-sm text-gray-600">Real stories from real people.</p>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="min-w-[260px] max-w-sm flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-md"
            >
              <div className="text-lg text-gold">★★★★★</div>
              <p className="mt-3 text-sm italic text-gray-700">&quot;{review.text}&quot;</p>
              <div className="mt-4 text-sm font-semibold text-charcoal">{review.name}</div>
              <div className="text-xs text-gray-500">{review.time} · Verified Google Review</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

