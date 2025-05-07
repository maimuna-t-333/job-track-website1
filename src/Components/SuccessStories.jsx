import React from 'react';

const SuccessStories = () => {
    const stories = [
        {
          id: '1',
          name: 'Aisha Khan',
          role: 'Product Designer at Designify',
          testimonial:
            'I found my dream job within a week! The entire process, from browsing listings to landing interviews, was incredibly smooth. The personalized job recommendations were spot on, and I appreciated how easy it was to connect with hiring managers.',
          photo: 'image/profilelogo.jpg',
          companyLogo: 'image/logo-2.jpg',
        },
        {
          id: 's2',
          name: 'Rahul Ahmed',
          role: 'Backend Developer at TechNova',
          testimonial:
            'The job matching algorithm was incredibly precise — I was matched with roles that suited both my technical skills and career aspirations. Within days, I was interviewing with top-tier companies.',
          photo: 'image/profilelogo.jpg',
          companyLogo: 'image/logo-5.jpg',
        },
        {
          id: 's3',
          name: 'Sana Roy',
          role: 'Marketing Strategist',
          testimonial:
            'From creating my profile to finally accepting an offer, the platform supported me at every step. The application process was seamless. I’m now working at a company that truly values my contribution.',
            photo: 'image/profilelogo.jpg',
            companyLogo: 'image/logo-11.jpg'  
        },
      ];
    return (
        <div>
             <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-base-300 rounded-lg p-6 shadow hover:shadow-xl transition">
              {story.photo && (
                <img src={story.photo} alt='' className="w-16 h-16 rounded-full mb-4 mx-auto" />
              )}
              <p className="text-gray-700 mb-4 text-center">“{story.testimonial}”</p>
              <div className="text-center">
                <h4 className="font-bold">{story.name}</h4>
                <p className="text-sm text-gray-500">{story.role}</p>
                {story.companyLogo && (
                  <img
                    src={story.companyLogo}
                    alt=""
                    className="h-6 mx-auto mt-2"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default SuccessStories;